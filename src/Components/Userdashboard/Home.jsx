import { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import "../../Css/Userdasboard/home.css";

function Home() {
 
  const userId = sessionStorage.getItem("userid");
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;

  const [userDetails, setUserDetails] = useState(null);
  const [bankDetails, setBankDetails] = useState(null);
  const [payoutDetails, setPayoutDetails] = useState(null);
  const [copied , setCopiedright] = useState(false);
  // const [loading, setLoading] = useState(true);

  const fetchUserDetails = async () => {
    try {
     
     const response = await axios.post(`${ROOT_URL}/api/users/getuserdetails`, { userId });
     
           // extract courses from user object
            setUserDetails(response.data);  // store the whole user object
             console.log(response.data);
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  const fetchBankDetails = async () => {
    try {
      const res = await axios.get(`${ROOT_URL}/api/bankdetails/${userId}`);
      if (res.data.success){
        console.log("Bank Details:", res.data.data);
        setBankDetails(res.data.data);
      } 
    } catch (error) {
      console.error("Error fetching bank details:", error);
    }
  };

  const fetchPayoutDetails = async () => {
    try {
      const res = await axios.get(`${ROOT_URL}/api/referral/realtime/${userId}`);
      if (res.data){
        console.log("Payout Details:", res.data);
        setPayoutDetails(res.data);
      } 
    } catch (error) {
      console.error("Error fetching payout details:", error);
    }
  };

  const fetchDashboardData = async () => {
    // setLoading(true);
    await fetchUserDetails();
    await fetchBankDetails();
    await fetchPayoutDetails();
    // setLoading(false);
  };

  useEffect(() => {
    const userId = sessionStorage.getItem("userid");
    if (userId) {
      fetchDashboardData();
    } else {
      swal("Error", " Please login again.", "error");
      // navigate("/login");
    }
  }, [userId]);

  // Extract data safely
  const userStatus = userDetails?.status || "N/A";
  const kycStatus = bankDetails?.status || "N/A";
  const activeCourse = userDetails?.packageName || 0;
  const expiredDate = userDetails?.validityEnd
  ? new Date(userDetails.validityEnd).toLocaleDateString("en-GB") // DD/MM/YYYY
  : "N/A";

  const directTeam = userDetails?.referredIds?.length || 0;

  const payout = payoutDetails?.totalPoints || 0;
  const selfPoints = payoutDetails?.selfPoints || 0;
  const referredPoints = payoutDetails?.referredPoints || 0;
  const referralLink = userDetails?.referralLink || "N/A";

   const handleCopyLink = () => {
    if (referralLink) {
      navigator.clipboard
        .writeText(referralLink)
        .then(() => {
          setCopiedright(true); // Set copied to true
          setTimeout(() => setCopiedright(false), 4000);
          // alert('Referral link and code copied to clipboard!');
        })
        .catch((error) => {
          console.error("Error copying referral link and code:", error);
        });
    } else {
      console.error("No referral link to copy");
    }
  };
  // if (loading) return <p className="text-center mt-5">Loading dashboard...</p>;

  return (
    <>
      <div className="row">
        <div className="col-lg-3">
          <div className="card h-100 cardstyle">
            <div className="text-center mt-4"></div>
            <div className="card-body">
              <h5 className="card-title text-center">{userStatus}</h5>
              <h5 className="card-text text-center">User Status</h5>
            </div>
          </div>
        </div>

        <div className="col-lg-3">
          <div className="card h-100 cardstyle">
            <div className="text-center mt-4">
              <div className="card-body">
                <h5 className="card-title text-center">{activeCourse}</h5>
                <h5 className="card-text text-center">Package name</h5>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-3">
          <div className="card h-100 cardstyle">
            <div className="text-center mt-4">
              <div className="card-body">
                <h5 className="card-title text-center">{kycStatus}</h5>
                <h5 className="card-text text-center">KYC Status</h5>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-3">
          <div className="card h-100 cardstyle">
            <div className="text-center mt-4">
              <div className="card-body">
                <h5 className="card-title text-center">{expiredDate}</h5>
                <h5 className="card-text text-center">Course Expired Date</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-lg-3">
          <div className="card h-100 cardstyle">
            <div className="text-center mt-4">
              <div className="card-body">
                <h5 className="card-title text-center">{directTeam}</h5>
                <h5 className="card-text text-center">Direct Team</h5>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-3">
          <div className="card h-100 cardstyle">
            <div className="text-center mt-4">
              <div className="card-body">
                <h5 className="card-title text-center">{payout}</h5>
                <h5 className="card-text text-center">Payout</h5>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-3">
          <div className="card h-100 cardstyle">
            <div className="text-center mt-4">
              <div className="card-body">
                <h5 className="card-title text-center">{selfPoints}</h5>
                <h5 className="card-text text-center">Self Points</h5>
              </div>
            </div>
          </div>
        </div>
         <div className="col-lg-3">
          <div className="card h-100 cardstyle">
            <div className="text-center mt-4">
              <div className="card-body">
                <h5 className="card-title text-center">{referredPoints}</h5>
                <h5 className="card-text text-center">Referred Points</h5>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <div className="d-flex justify-content-center flex-column align-items-center">
        <h4 className="mt-5 fw-bold">Your Referral Link </h4>
        <div className="d-flex">
           <div className="mt-2 ms-2 h5 referral">{referralLink}</div>
            {
                  copied ? <span className="ms-2 text-success mt-4">Copied! </span> : <i className="fa fa-copy ms-2 mt-4" style={{fontSize:"19px"}} onClick={handleCopyLink}></i>
                }
          {/* <div className="mt-4 ms-3"> <i className="fa fa-copy" style={{fontSize:"19px"}}></i></div> */}
        </div>
      </div>
    </>
  );
}

export default Home;

import { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";
import "../../Css/Userdasboard/home.css";

function Home() {
  const userId = sessionStorage.getItem("userid");
  const name = sessionStorage.getItem("username");
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;

  const [userDetails, setUserDetails] = useState(null);
  const [bankDetails, setBankDetails] = useState(null);
  const [courseDetails, setCourseDetails] = useState(null);
  const [payoutusers, setpayout] = useState([]);
   const [payoutDetails, setPayoutDetails] = useState(null);
    const [pointdetails , setPointDetails] = useState(null);
  const [copied, setCopied] = useState(false);

  const fetchFullDetails = async () => {
    try {
      const res = await axios.post(`${ROOT_URL}/api/users/full-details`, { userId });
      if (res.data.success) {
        console.log("Full details:", res.data.data);
        setUserDetails(res.data.data.user);
        setBankDetails(res.data.data.bankDetails);
        setCourseDetails(res.data.data.courseDetails);
        setpayout(res.data.data.payout);
      } else {
        swal("Error", res.data.message || "Failed to fetch user data", "error");
      }
    } catch (error) {
      console.error("Error fetching full details:", error);
      swal("Error", "Something went wrong while fetching details.", "error");
    }
  };
  const fetchPayoutDetails = async () => {
      console.log("Fetching payout details for userId:", userId);
      try {
        const res = await axios.post(`${ROOT_URL}/api/referral/realtime`,{userId,name});
        if (res.data){
          console.log("Payout Details:", res.data);
          setPayoutDetails(res.data.data);
        } 
      } catch (error) {
        console.error("Error fetching payout details:", error);
      }
    };
    const fetchPointsDetails = async () => {
    try {
      const res = await axios.get(`${ROOT_URL}/api/users/referred-selfpoints/${userId}`);
      if (res.data){
        console.log("Points Details:", res.data);
        setPointDetails(res.data);
      } 
    } catch (error) {
      console.error("Error fetching payout details:", error);
    }
  };

  useEffect(() => {
    if (userId){
      fetchFullDetails();
      fetchPayoutDetails();
      fetchPointsDetails();
    } 
    else swal("Error", "Please login again.", "error");
  }, [userId]);

  // 🧠 Safely extract values
  const userStatus = userDetails?.status || "N/A";
  const kycStatus = bankDetails?.status || "N/A";
  const activeCourse = courseDetails?.packageName || "N/A";
  const expiredDate = courseDetails?.validityEnd
    ? new Date(courseDetails.validityEnd).toLocaleDateString("en-GB")
    : "N/A";
  const directTeam = userDetails?.referredIds?.length || 0;
  const referralLink = userDetails?.referralLink || "N/A";
const payout = payoutDetails?.referredPoints || 0;
  const selfPoints = userDetails?.totalSelfPoints || 0;
  // const referredPoints = payoutDetails?.referredPoints || 0;
  const totalteampoint = payoutDetails?.referralPoint || 0;
  console.log("Total Team Points:", totalteampoint);
  const directreferralpoints = payoutDetails?.directReferredPoints || 0;
  const handleCopyLink = () => {
    if (referralLink) {
      navigator.clipboard.writeText(referralLink).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
      });
    }
  };

  return (
    <>
      <div className="row g-3">
        {/* User Status */}
        <div className="col-lg-3">
          <div className="card h-100 cardstyle">
            <div className="card-body text-center">
              <i className="fa fa-user" style={{ color: "white", fontSize: "30px" }}></i>
              <h5 className="card-title mt-2">{userStatus}</h5>
              <h5 className="card-text">User Status</h5>
            </div>
          </div>
        </div>

        {/* Package Name */}
        <div className="col-lg-3">
          <div className="card h-100 cardstyle">
            <div className="card-body text-center">
              <i className="fa fa-book" style={{ color: "white", fontSize: "30px" }}></i>
              <h5 className="card-title mt-2">{activeCourse}</h5>
              <h5 className="card-text">Package Name</h5>
            </div>
          </div>
        </div>

        {/* KYC Status */}
        <div className="col-lg-3">
          <div className="card h-100 cardstyle">
            <div className="card-body text-center">
              <i className="fa fa-id-card" style={{ fontSize: "30px" }}></i>
              <h5 className="card-title mt-2">{kycStatus}</h5>
              <h5 className="card-text">KYC Status</h5>
            </div>
          </div>
        </div>

        {/* Course Expiry */}
        <div className="col-lg-3">
          <div className="card h-100 cardstyle">
            <div className="card-body text-center">
              <i className="fa fa-calendar" style={{ fontSize: "30px" }}></i>
              <h5 className="card-title mt-2">{expiredDate}</h5>
              <h5 className="card-text">Course Expiry Date</h5>
            </div>
          </div>
        </div>
      </div>

      {/* Team & Achievements */}
      <div className="row mt-1 g-3">
        <div className="col-lg-3">
          <div className="card h-100 cardstyle text-center">
            <div className="card-body">
              <i className="fa fa-handshake" style={{ fontSize: "30px" }}></i>
              <h5 className="card-title mt-2">{directTeam}</h5>
              <h5 className="card-text">Direct Team</h5>
            </div>
          </div>
        </div>
       <div className="col-lg-3">
          <div className="card h-100 cardstyle text-center">
            <div className="text-center"></div>
              <div className="card-body">
                <div><i className="fa fa-money" style={{fontSize:"30px"}}></i></div>
                <h5 className="card-title text-center mt-2">Rs: {payout}/-</h5>
                <h5 className="card-text text-center">Current Payout</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
          <div className="card h-100 cardstyle text-center">
            <div className="text-center"></div>
              <div className="card-body">
                 <div><i className="fa fa-bullseye" style={{fontSize:"30px"}}></i></div>
                <h5 className="card-title text-center mt-2">{selfPoints}</h5>
                <h5 className="card-text text-center">Self Points</h5>
              </div>
            
          </div>
          </div>
           <div className="col-lg-3">
          <div className="card h-100 cardstyle text-center">
            <div className="text-center"></div>
              <div className="card-body">
               <div><i className="fa fa-star" style={{fontSize:"30px"}}></i></div>
                <h5 className="card-title text-center mt-2">{totalteampoint}</h5>
                <h5 className="card-text text-center">Current Referred Points</h5>
              </div>
            </div>
          
        </div>
        </div>
        <div className="row mt-2 g-3">
        <div className="col-lg-3">
          <div className="card h-100 cardstyle text-center">
            <div className="card-body">
              <i className="fa fa-users" style={{ fontSize: "30px" }}></i>
              <h5 className="card-title mt-2">₹{directreferralpoints}</h5>
              <h5 className="card-text">Direct Referred Bonus</h5>
            </div>
          </div>
        </div>
         <div className="col-lg-3">
          <div className="card h-100 cardstyle text-center">
            <div className="card-body">
              <i className="fa fa-users" style={{ fontSize: "30px" }}></i>
              <h5 className="card-title mt-2">₹{payoutDetails?.referredPoints - directreferralpoints}</h5>
              <h5 className="card-text">Level Bonus</h5>
            </div>
          </div>
        </div>
         <div className="col-lg-3">
          <div className="card h-100 cardstyle text-center">
            <div className="card-body">
              <i className="fa fa-coins" style={{ fontSize: "30px" }}></i>
              <h5 className="card-title mt-2">₹{payoutusers?.totalPoints ||0}</h5>
              <h5 className="card-text">Accumulated Bonus</h5>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="card h-100 cardstyle text-center">
            <div className="card-body">
              <i className="fa fa-medal" style={{ fontSize: "30px" }}></i>
              <h5 className="card-title mt-2">Not Achieved</h5>
              <h5 className="card-text">Current Rank</h5>
            </div>
          </div>
        </div>
        
      </div>

      {/* Referral Link Section */}
      <div className="d-flex justify-content-center flex-column align-items-center mt-3 ">
        <h4 className="fw-bold">Your Referral Link</h4>
         <div className="d-flex flex-column flex-sm-row align-items-center mt-3">
    <div className="h5 referral text-break">{referralLink}</div>
          {copied ? (
            <span className="ms-2 text-success mt-4">Copied!</span>
          ) : (
            <i
              className="fa fa-copy ms-2 mt-4"
              style={{ fontSize: "19px", cursor: "pointer" }}
              onClick={handleCopyLink}
            ></i>
          )}
        </div>
      </div>
    </>
  );
}

export default Home;

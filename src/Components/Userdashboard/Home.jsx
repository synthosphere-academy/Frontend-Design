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
    const [teampoints , setteampoints] = useState(null);
  const [copied, setCopied] = useState(false);
  const [userrank_user,setUserrank]= useState("No Rank");

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
   const fetchTeamDetails = async () => {
    try {
      const res = await axios.post(`${ROOT_URL}/api/referral/teamsummary`, { userId });
      if (res) {
        console.log("Fullteam details:", res.data);
        setteampoints(res.data);
       
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
const tableData = [
  { no: 1, name: "Class 1", minTeam: 0, minDirect: 3, minPoint: 1, maxPoint: 5000 },
  { no: 2, name: "Class 2", minTeam: 50, minDirect: 10, minPoint: 5001, maxPoint: 15000 },
  { no: 3, name: "Class 3", minTeam: 100, minDirect: 20, minPoint: 15001, maxPoint: 50000 },
  { no: 4, name: "Class 4", minTeam: 200, minDirect: 30, minPoint: 50001, maxPoint: 100000 },
  { no: 5, name: "Class 5", minTeam: 500, minDirect: 40, minPoint: 100001, maxPoint: 300000 },
  { no: 6, name: "Class 6", minTeam: 1000, minDirect: 50, minPoint: 300001, maxPoint: 600000 },
  { no: 7, name: "Class 7", minTeam: 2000, minDirect: 60, minPoint: 600001, maxPoint: 1200000 },
  { no: 8, name: "Class 8", minTeam: 5000, minDirect: 70, minPoint: 1200001, maxPoint: 2500000 },
  { no: 9, name: "Class 9", minTeam: 10000, minDirect: 100, minPoint: 2500001, maxPoint: 5000000 },
  { no: 10, name: "Class 10", minTeam: 20000, minDirect: 150, minPoint: 5000001, maxPoint: 10000000 },
  { no: 11, name: "H.S.", minTeam: 40000, minDirect: 200, minPoint: 10000001, maxPoint: 25000000 },
  { no: 12, name: "Graduate", minTeam: 80000, minDirect: 250, minPoint: 25000001, maxPoint: 50000000 },
  { no: 13, name: "Post Graduate", minTeam: 100000, minDirect: 300, minPoint: 50000001, maxPoint: 100000000 },
  { no: 14, name: "PhD", minTeam: 150000, minDirect: 500, minPoint: 100000001, maxPoint: 250000000 },
];

const getUserRank = (totalTeam, directTeam, points) => {
  let achievedRank = "No Rank";

  for (let i = 0; i < tableData.length; i++) {
    const rank = tableData[i];

    // Check if user has enough points for this rank
    if (points >= rank.minPoint) {
      // Check if they meet all the conditions for this rank
      if (totalTeam >= rank.minTeam && directTeam >= rank.minDirect) {
        achievedRank = rank.name; // they qualify for this rank
      } else {
        // stop checking further — they haven't met the next rank requirements
        break;
      }
    } else {
      // points not enough for this rank
      break;
    }
  }

  return achievedRank;
};


// ✅ Examples:
console.log(getUserRank(0, 3, 4500));      // → "Class 1"
console.log(getUserRank(60, 12, 8000));    // → "Class 2"
console.log(getUserRank(200, 25, 40000));  // → "Class 3"
console.log(getUserRank(100, 5, 40000));   // → "Not Achieved" (direct too low)
console.log(getUserRank(500, 40, 150000)); // → "Class 5"


  useEffect(() => {
    if (userId){
      fetchFullDetails();
      fetchPayoutDetails();
      fetchPointsDetails();
      fetchTeamDetails();
     
    } 

    else swal("Error", "Please login again.", "error");
  }, [userId]);

useEffect(() => {
  if (teampoints && userDetails) {
    const totalTeam = teampoints?.totalDownlineCount || 0;
    const totalpoints = teampoints?.totalPoints || 0;
    const directTeam = userDetails?.referredIds?.length || 0;

    console.log("Total Team:", totalTeam);
    console.log("Direct Team:", directTeam);
    console.log("Points:", totalpoints);

    const userrank = getUserRank(totalTeam, directTeam, totalpoints);
    console.log("Matched Rank:", userrank);
    setUserrank(userrank);
  }
}, [teampoints, userDetails]);

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
//  const totalTeam = teampoints?.totalDownlineCount ||0
// const totalpoints = teampoints?.totalPoints ||0
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
              <h5 className="card-title mt-2">{userrank_user}</h5>
              <h5 className="card-text">Current Rank</h5>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="card h-100 cardstyle text-center">
            <div className="card-body">
              <i className="fa fa-coins" style={{ fontSize: "30px" }}></i>
              <h5 className="card-title mt-2">{teampoints?.totalPoints ||0}</h5>
              <h5 className="card-text">Accumulated Referred Point</h5>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="card h-100 cardstyle text-center">
            <div className="card-body">
              <i className="fa fa-handshake" style={{ fontSize: "30px" }}></i>
              <h5 className="card-title mt-2">{teampoints?.totalDownlineCount ||0}</h5>
              <h5 className="card-text">Total Team</h5>
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

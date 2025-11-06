import React from "react";
import "../Css/affiliatecourse.css";
import { useNavigate } from "react-router-dom";
  import axios from "axios";
import swal from "sweetalert";
const Affiliatecourses = () => {
  const navigate = useNavigate();
const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
  // const handle_enroll = (course) => {
  //   const userStatus = sessionStorage.getItem("userstatus");

  //   if (!userStatus) {
  //     swal("Not Logged In", "Please login to enroll in the course.", "warning");
  //     navigate("/login");
  //     return;
  //   }

  //   if (userStatus === "pending") {
  //     swal(
  //       "Account Not Verified",
  //       "Your account is under review. Please login again.",
  //       "error"
  //     );
  //   } else if (userStatus === "active") {
  //     // ✅ Pass course name & price to checkout
  //     navigate("/checkout", { state: { courseName: course.name, coursePrice: course.price } });
  //   } else {
  //     swal("Error", "Invalid account status. Please contact support.", "error");
  //   }
  // };


const handle_enroll = async (course) => {
 

  try {
    // Get userId from sessionStorage (assuming you stored it during login)
    const userId = sessionStorage.getItem("userid");
    console.log(userId)
    if (!userId) {
      swal("Not Logged In", "Please login to enroll in the course.", "warning");
      // navigate("/login");
      return;
    }

    // 🔹 Fetch user details from API
    const response = await axios.post(`${ROOT_URL}/api/users/getuserdetails`, { userId });
      console.log(response.data.user.status)
    // Extract user status from API response
    const userStatus = response.data?.user?.status;

    if (!userStatus) {
      swal("Error", "Unable to fetch account status. Please try again later.", "error");
      return;
    }

    // 🔹 Handle based on user status
    if (userStatus === "pending") {
      swal(
        "Account Not Verified",
        "Your account is under review. Please login again after verification.",
        "error"
      );
    } else if (userStatus === "active") {
      // ✅ Navigate to checkout with course info
      navigate("/checkout", { state: { courseName: course.name, coursePrice: course.price } });
    } else {
      swal("Error", "Invalid account status. Please contact support.", "error");
    }

  } catch (error) {
    console.error("Error fetching user status:", error);
    swal("Error", "Something went wrong. Please try again later.", "error");
  }
};


  const courses = [
    {
      name: "Learner Course",
      price: " 1770",
      points: "1500",
      features: [
        "Basic Crypto Knowledge",
"Basic Buy/Sell On Centralised Exchange",
"Crypto Sip Guide",
"Portfolio Management Guide",
"Monthly Spot Call",
"Basic Fundamental Analysis, Technical Analysis"
      ],
    },
    {
      name: "Master Course",
      price: " 3540",
        points: "3000",
      features: [
        
       "Advance Crypto Trading Knowledge",
"Spot, Future, Margin Trading",
"Regular Future Trading Call",
"Risk Management Strategy",
"Regular PNL Strategy",
"Liquidation Strategy",
"Portfolio Management (Advance)",
"Advance Fundamental Analysis, Technical Analysis"
      ],
    },
    {
      name: "Pro Master Course",
      price: " 7080",
        points: "6000",
      features: [
        "Crypto Education A To Z",
"Premium Future Trading Strategy",
"Gem Coin Finding Strategy",
"Regular Premium Call",
"Premium Portfolio Management",
"Five Long-Term Holding Coin Name Suggestion",
"Fund Management Strategy",
"A To Z Fundamental Analysis, Technical Analysis"
      ],
    },
    {
      name: "Teacher Course",
      price: " 11800 ",
        points: "10000",
      features: [
       "Whales Wallet Tracking",
"Crypto Taxation",
"Crypto Rules And Knowledge",
"Fundamental Analysis and Technical Analysis (Complete)",
"DEX And CEX Arbitrage Model"
      ],
    },
    {
      name: "Pro Teacher Course",
      price: " 59000",
        points: "25000",
      features: [
        "Whale Wallet Tracking",
"Crypto Taxation",
"Crypto Rules And Knowledge",
"Fundamental Analysis and Technical Analysis (Complete)",
"DEX And CEX Arbitrage Model"
      ],
    },
    {
      name: "Monthly Subscription",
      price: " 944",
        points: "800",
      gold: true,
      features: ["Monthly Trading Guidance",
"Monthly Special Classes",
"Expert Advice",
"Two Coin Suggestion",
"One Special Call"],
    },
  ];

  return (
    <div className="container ">
      <div className="row justify-content-start">
        {courses.map((course, index) => (
          <div key={index} className="col-md-3 my-1">
            <div className="card p-3 mt-3 w-100 h-100 rounded-3 cardpackage">
              <div className="card-body d-flex flex-column">
                <div className="text-center">
                  <h3
                    className="fw-bold"
                    style={{ color: course.gold ? "gold" : "inherit" }}
                  >
                    {course.name}
                  </h3>
                  <div className="fw-bold h5 mt-2">RS.{course.price}/- (Incl. GST)</div>
                  <div className="fw-bold h5 mt-2" style={{color:"gold"}}>🌟{course.points} Points</div>
                </div>

                <div className="flex-grow-1 mt-3">
                  {course.features.map((f, i) => (
                    <div key={i} className="d-flex mt-2">
                      <div>🌟</div>
                      <div className="ms-2">{f}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="d-flex justify-content-center">
                {/* ✅ Send course info when clicked */}
                <button
                  onClick={() => handle_enroll(course)}
                  className="btn btn-primary w-75 mb-3 rounded-3"
                >
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Affiliatecourses;

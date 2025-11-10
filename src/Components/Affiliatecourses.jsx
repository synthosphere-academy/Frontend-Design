import React from "react";
import "../Css/affiliatecourse.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
const Affiliatecourses = () => {
  const navigate = useNavigate();
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
 
  const handle_enroll = async (course) => {
    try {
      // Get userId from sessionStorage (assuming you stored it during login)
      const userId = sessionStorage.getItem("userid");
      console.log(userId);
      if (!userId) {
        swal(
          "Not Logged In",
          "Please login to enroll in the course.",
          "warning"
        );
        // navigate("/login");
        return;
      }

      // 🔹 Fetch user details from API
      const response = await axios.post(
        `${ROOT_URL}/api/users/getuserdetails`,
        { userId }
      );
      console.log(response.data.user.status);
      // Extract user status from API response
      const userStatus = response.data?.user?.status;

      if (!userStatus) {
        swal(
          "Error",
          "Unable to fetch account status. Please try again later.",
          "error"
        );
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
        swal(
          "Error",
          "Invalid account status. Please contact support.",
          "error"
        );
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
      subcription: "One Month",
      paymentUrl: "https://rzp.io/rzp/snXe9FQ",
      points: "1500",
      features: [
        "Basic Crypto Knowledge",
        "Basic Buy/Sell On Centralised Exchange",
        "Crypto Sip Guide",
        "Portfolio Management Guide",
        "One Month Spot Call",
        "Basic Fundamental Analysis, Technical Analysis",
        "Online 17 Education Videos",
      ],
    },
    {
      name: "Master Course",
      price: " 3540",
      subcription: "Three Months",
      paymentUrl: "https://rzp.io/rzp/5mLcADG",
      points: "3000",
      features: [
        "Advance Crypto Knowledge",
        "Pro Buy/Sell On Centralized Exchange",
        "Advance Crypto SIP Guide",
        "Advance Portfolio Management",
        "Spot & Future Trading Call (2 Months)",
        "Advance Fundamental Analysis, Technical Analysis",
        "Online 22 Videos",
        "Regular PNL Strategy",
        "Basic Liquidation Strategy",
      ],
    },
    {
      name: "Pro Master Course",
      price: " 7080",
      subcription: "Six Months",
      paymentUrl: "https://rzp.io/rzp/Evi8l73",
      points: "6000",
      features: [
        "A To Z Advance Crypto Knowledge",

        "Pro Buy/Sell On Centralized Exchange",

        "Advance Crypto SIP Guide",

        "Advance Portfolio Management",

        "Spot & Future Trading Call (4 Months)",

        "Advance Fundamental Analysis, Technical Analysis",

        "Online 25 Videos",

        "Risk Management Strategy",
        "Regular PNL Strategy",

        "Basic Liquidation Strategy",

        // "Gem Coin Finding Technique",

        // "Premium Future Trading Strategy",

        // "Premium Portfolio Management Strategy",

        // "Five Long-Term Holding Coins Name",

        // "Trading Fund Management Strategy",

        // "A To Z Advance Fundamental Analysis, Technical Analysis",
      ],
    },
    {
      name: "Teacher Course",
      price: " 11800 ",
      points: "10000",
      paymentUrl: "https://rzp.io/rzp/0tfCXyMC",
      features: [
        "A To Z Advance Crypto Knowledge",

        "Pro Buy/Sell On Centralized Exchange",

        "Advance Crypto SIP Guide",

        "Advance Portfolio Management",

        "Spot & Future Trading Call (6 Months)",

        "Advance Fundamental Analysis, Technical Analysis",

        "Online 27 Videos",

        "Risk Management Strategy",

        // "Regular PNL Strategy",

        // "Basic Liquidation Strategy",
        // "Gem Coin Finding Strategy",
        // "Premium Future Trading Strategy",

        // "Premium Portfolio Management Strategy",

        // "Five Long-Term Holding Coins Name",

        // "Trading Fund Management Strategy",

        // "A To Z Advance Fundamental Analysis, Technical Analysis",

        // "Whales Wallet Tracking",

        // "Crypto Taxation",

        // "Crypto Rules & Knowledge",

        // "DEX & CEX Arbitrage Model",
      ],
    },
    {
      name: "Pro Teacher Course",
      price: " 59000",
      points: "25000",
      paymentUrl: "https://rzp.io/rzp/l0v8sIii",
      features: [
        "Advance Crypto SIP Guide",
"Advance Portfolio Management",
"Spot & Future Trading Call (12 Months)",
"Advance Fundamental Analysis, Technical Analysis",
"Online 30 Videos",
"Risk Management Strategy",
"Regular PNL Strategy",
"Basic Liquidation Strategy",
// "Gem Coin Finding Strategy",
// "Premium Future Trading Strategy",
// "Premium Portfolio Management Strategy",
// "Five Long-Term Holding Coins Name",
// "Trading Fund Management Strategy",
// "A To Z Advance Fundamental Analysis, Technical Analysis",
// "Whales Wallet Tracking",
// "Crypto Taxation",
// "Crypto Rules & Knowledge",
// "Dex & Cex Arbitrage Model",
// "Monthly 2% Scholarship"
      ],
    },
    {
      name: "Monthly Subscription",
      price: " 944",
      points: "800",
      paymentUrl: "https://rzp.io/rzp/yx0C4LX",
      gold: true,
      features: [
        "Monthly Trading Guidance",
        "Monthly Special Classes",
        "Expert Advice",
        "Two Coin Suggestion",
        "One Special Call",
        "Trade Call Signals(1 Month)"
      ],
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
                  <div className="fw-bold h5 mt-2">
                    RS.{course.price}/- (Incl. GST)
                  </div>
                  <div className="fw-bold h5 mt-2" style={{ color: "gold" }}>
                    🌟{course.points} Points
                  </div>
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

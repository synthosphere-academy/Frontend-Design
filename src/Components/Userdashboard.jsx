import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Css/Userdasboard/userdashboard.css";

import Home from "./Userdashboard/Home";
import Myprofile from "./Userdashboard/Myprofile";
import Entrolled from "./Userdashboard/Entrolled";
import Orderhistory from "./Userdashboard/Orderhistory";
import Directteam from "./Userdashboard/Directteam";
import Payout from "./Userdashboard/Payout";
import Affiliatecourses from "./Affiliatecourses";
import Genealogytree from "./Userdashboard/Genealogytree";
import Welcome from "./Userdashboard/Welcome";
import Registrationanyuser from "./Userdashboard/Registrationanyuser";
import Rank from "./Userdashboard/Rank";
import Courseview from "./Courseview";
import KYC from "./Userdashboard/KYC";

export default function UserDashboard() {
  const [active, setActive] = useState("Dashboard");
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  /* 🔹 detect mobile */
  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth <= 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  /* 🔹 collapse sidebar by default on mobile */
  useEffect(() => {
    if (isMobile) setIsCollapsed(true);
  }, [isMobile]);

  /* 🔹 external menu change (Buy Package button) */
  useEffect(() => {
    const handleMenuChange = (e) => {
      setActive(e.detail);
      if (isMobile) setIsCollapsed(true);
    };
    window.addEventListener("changeMenu", handleMenuChange);
    return () => window.removeEventListener("changeMenu", handleMenuChange);
  }, [isMobile]);

  const menuItems = [
    { name: "Dashboard", icon: "fa fa-home" },
    { name: "Welcome", icon: "fa fa-envelope-o" },
    { name: "Registration", icon: "fa fa-user-plus" },
    { name: "My Profile", icon: "fa fa-user" },
    { name: "KYC Form", icon: "fa fa-id-card" },
    { name: "Our Packages", icon: "fa fa-graduation-cap" },
    { name: "Enrolled Courses", icon: "fa fa-book" },
    { name: "Order History", icon: "fa fa-history" },
    { name: "Videos", icon: "fa fa-video" },
    { name: "Genealogy Tree", icon: "fa fa-tree" },
    { name: "Direct Team", icon: "fa fa-group" },
    { name: "Payout", icon: "fa fa-money" },
    { name: "Rank", icon: "fa fa-trophy" },
  ];

  const username = sessionStorage.getItem("username") || "User Name";
  const userid = sessionStorage.getItem("userid") || "UserID";

  const renderContent = () => {
    switch (active) {
      case "Dashboard": return <Home />;
      case "Welcome": return <Welcome />;
      case "Registration": return <Registrationanyuser />;
      case "My Profile": return <Myprofile />;
      case "KYC Form": return <KYC />;
      case "Our Packages": return <Affiliatecourses />;
      case "Enrolled Courses": return <Entrolled />;
      case "Videos": return <Courseview />;
      case "Order History": return <Orderhistory />;
      case "Direct Team": return <Directteam />;
      case "Genealogy Tree": return <Genealogytree />;
      case "Payout": return <Payout />;
      case "Rank": return <Rank />;
      default: return <Home />;
    }
  };

  return (
    <div className="d-flex vh-100 bg-light">

      {/* 🔹 SIDEBAR */}
      <div
        className={`sidebar d-flex flex-column bg-white border-end
          ${isMobile && isCollapsed ? "mobile-hidden" : ""}
        `}
      >
        {/* Header (desktop only) */}
        {!isMobile && (
          <div className="sidebar-header d-flex align-items-center p-3 border-bottom">
            <h5 className="fw-bold">{username}</h5>
          </div>
        )}

        <div className="flex-grow-1">
         <div className="d-md-none text-end px-3 pt-2">
    <button
      className="btn btn-sm btn-outline-secondary mb-3"
      onClick={() => setIsCollapsed(true)}
    >
      <i className="fa fa-times"></i>
    </button>
  </div>
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => {
                setActive(item.name);
                if (isMobile) setIsCollapsed(true);
              }}
              className={`d-flex align-items-center w-100 border-0 text-start px-3 sidebar-item ${
                active === item.name ? "active" : ""
              }`}
            >
              <i className={`${item.icon} me-2`} />
              <span>{item.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 🔹 MAIN CONTENT */}
      <div className="flex-grow-1 p-4 overflow-auto">

        {/* 🔹 TOP BAR */}
        <div className="row align-items-center mb-3">
          <div className="col-6 d-flex align-items-center">
            {isMobile && (
              <button
                className="btn btn-outline-secondary me-4"
                onClick={() => setIsCollapsed(false)}
              >
                <i className="fa fa-bars" />
              </button>
            )}
            <h4 className="fw-bold text-dark mb-0 activename">{active}</h4>
          </div>

          <div className="col-6 text-end">
  <span className="user-id-badge">
    <span className="label">User ID:</span>
    <span className="value ms-2">{userid}</span>
  </span>
</div>

        </div>

        <div>{renderContent()}</div>
      </div>
    </div>
  );
}

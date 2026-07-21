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
import Idcard from "./Userdashboard/Idcard";
// import Depositform from "./Userdashboard/P2P/Depositform";
// import Sellordercreate from "./Userdashboard/P2P/Sellordercreate";
// import Buyusdt from "./Userdashboard/P2P/Buyusdt";
// import Mybuyorder from "./Userdashboard/P2P/Mybuyorder";
// import Buyhistory from "./Userdashboard/P2P/Buyhistory";
// import Sellhistory from "./Userdashboard/P2P/Sellhistory";
// import P2pdashboard from "./Userdashboard/P2P/P2pdashboard";
import Classschedule from "./Userdashboard/Classschedule";
export default function UserDashboard() {
  const [active, setActive] = useState("Dashboard");
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [openP2P, setOpenP2P] = useState(false);
  const [selectedSellOrder , setselectedSellOrder] = useState(null);

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
  // useEffect(() => {
  //   const handleMenuChange = (e) => {
  //     setActive(e.detail);
  //     if (isMobile) setIsCollapsed(true);
  //   };
  //   window.addEventListener("changeMenu", handleMenuChange);
  //   return () => window.removeEventListener("changeMenu", handleMenuChange);
  // }, [isMobile]);
  useEffect(() => {
  const handleMenuChange = (e) => {

    if (typeof e.detail === "string") {

      setActive(e.detail);
      setselectedSellOrder(null);

    } else {

      setActive(e.detail.menu);
      setselectedSellOrder(e.detail.sellOrder || null);

    }

    if (isMobile) {
      setIsCollapsed(true);
    }
  };

  window.addEventListener("changeMenu", handleMenuChange);

  return () => {
    window.removeEventListener("changeMenu", handleMenuChange);
  };
}, [isMobile]);

  const menuItems = [
    { name: "Dashboard", icon: "fa fa-home" },
    { name: "Welcome", icon: "fa fa-envelope-o" },
    { name: "Class Schedule", icon: "fa fa-calendar" },
    { name: "ID Card", icon: "fa fa-id-card-o" },
    { name: "Registration", icon: "fa fa-user-plus" },
    { name: "My Profile", icon: "fa fa-user" },
    { name: "Bank Details", icon: "fa fa-bank" },
    { name: "Our Packages", icon: "fa fa-graduation-cap" },
    { name: "Enrolled Courses", icon: "fa fa-book" },
    { name: "Order History", icon: "fa fa-history" },
    { name: "Courseview", icon: "fa fa-video" },
    { name: "Genealogy Tree", icon: "fa fa-tree" },
    { name: "Direct Team", icon: "fa fa-group" },
    { name: "Payout", icon: "fa fa-money" },
    { name: "Rank", icon: "fa fa-trophy" },
    // { name: "Deposit", icon: "fa fa-money" },
    // { name: "Create Sell Order", icon: "fa fa-shopping-cart" },
    // { name: "Create Buy Order", icon: "fa fa-shopping-cart" },
    // { name: "My Buy Orders", icon: "fa fa-shopping-cart" },
    // { name: "Buy order History", icon: "fa fa-history" },
    // { name: "Sell order History", icon: "fa fa-history" },
  ];

  const username = sessionStorage.getItem("username") || "User Name";
  const userid = sessionStorage.getItem("userid") || "UserID";

  const renderContent = () => {
    switch (active) {
      case "Dashboard":
        return <Home />;
      case "Welcome":
        return <Welcome />;
      case "Class Schedule":
        return <Classschedule />;
      case "ID Card":
        return <Idcard />;
      case "Registration":
        return <Registrationanyuser />;
      case "My Profile":
        return <Myprofile />;
      case "Bank Details":
        return <KYC />;
      case "Our Packages":
        return <Affiliatecourses />;
      case "Enrolled Courses":
        return <Entrolled />;
      case "Courseview":
        return <Courseview />;
      case "Order History":
        return <Orderhistory />;
      case "Direct Team":
        return <Directteam />;
      case "Genealogy Tree":
        return <Genealogytree />;
      case "Payout":
        return <Payout />;
      case "Rank":
        return <Rank />;
      // case "Deposit":
      //   return <Depositform />;
      // case "Create Sell Order":
      //   return <Sellordercreate />;
      // case "Create Buy Order":
      //   return <Buyusdt />;
  //     case "Create Buy Order":
  // return (
  //   <Buyusdt
  //     sellOrder={selectedSellOrder}
  //   />
  // );
  //     case "My Buy Orders":
  //       return <Mybuyorder />;
  //     case "Buy order History":
  //       return <Buyhistory />;
  //     case "Sell order History":
  //       return <Sellhistory />;
  //     case "P2P Dashboard":
  //       return <P2pdashboard />;
      default:
        return <Home />;
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

        <div className="flex-grow-1 sidebar-menu">
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
          {/* P2P Parent */}
          {/* <button
            onClick={() => setOpenP2P(!openP2P)}
            className="d-flex align-items-center justify-content-between w-100 border-0 text-start px-3 sidebar-item"
          >
            <span>
              <i className="fa fa-exchange me-2"></i>
              P2P
            </span>

            <i
              className={`fa ${openP2P ? "fa-chevron-up" : "fa-chevron-down"}`}
            ></i>
          </button> */}
          {/* {openP2P && (
  <div className="ps-4">
    <button
      onClick={() => setActive("P2P Dashboard")}
      className={`sidebar-item w-100 border-0 text-start ${
        active === "P2P Dashboard" ? "active" : ""
      }`}
    >
     <i className="fa fa-money me-2"></i>
      P2P Dashboard
    </button>

    <button
      onClick={() => setActive("Deposit")}
      className={`sidebar-item w-100 border-0 text-start ${
        active === "Deposit" ? "active" : ""
      }`}
    >
     <i className="fa fa-money me-2"></i>
      Deposit
    </button>

    <button
      onClick={() => setActive("Create Sell Order")}
      className={`sidebar-item w-100 border-0 text-start ${
        active === "Create Sell Order" ? "active" : ""
      }`}
    >
    <i className="fa fa-money me-2"></i>
      Create Sell Order
    </button>

    <button
      onClick={() => setActive("Create Buy Order")}
      className={`sidebar-item w-100 border-0 text-start ${
        active === "Create Buy Order" ? "active" : ""
      }`}
    >
    <i className="fa fa-money me-2"></i>
      Create Buy Order
    </button>

    <button
      onClick={() => setActive("My Buy Orders")}
      className={`sidebar-item w-100 border-0 text-start ${
        active === "My Buy Orders" ? "active" : ""
      }`}
    >
    <i className="fa fa-money me-2"></i>
      My Buy Orders
    </button>

    <button
      onClick={() => setActive("Buy order History")}
      className={`sidebar-item w-100 border-0 text-start ${
        active === "Buy order History" ? "active" : ""
      }`}
    >
    <i className="fa fa-money me-2"></i>
      Buy Order History
    </button>

    <button
      onClick={() => setActive("Sell order History")}
      className={`sidebar-item w-100 border-0 text-start ${
        active === "Sell order History" ? "active" : ""
      }`}
    >
    <i className="fa fa-money me-2"></i>
      Sell Order History
    </button>

  </div>
)} */}
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
            <h4
              className="fw-bold text-dark mb-0 
            "
            >
              {active}
            </h4>
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

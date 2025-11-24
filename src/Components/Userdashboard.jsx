import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css";
// import "./UserDashboard.css"; // custom styles (below)
 import "../Css/Userdasboard/userdashboard.css"
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

  const menuItems = [
    { name: "Dashboard", icon: "fa fa-home" },
    {name: "Welcome" , icon:"fa fa-envelope-o"},
      { name: "Registration", icon: "fa fa-user-plus" },
    { name: "My Profile", icon: "fa fa-user" },
     {name: "KYC Form", icon: "fa fa-id-card"},
     { name: "Our Packages", icon: "fa fa-graduation-cap" },
    { name: "Enrolled Courses", icon: "fa fa-book" },
    { name: "Order History", icon: "fa fa-history" },
      // { name:"Videos" , icon:"fa fa-video"},
    { name: "Genealogy Tree", icon: "fa fa-tree" },
    { name: "Direct Team", icon: "fa fa-group" },
  
    { name: "Payout", icon: "fa fa-money" },
    { name: "Rank", icon: "fa fa-trophy" },
  ];

  const username = sessionStorage.getItem("username")|| "User Name";
  const userid = sessionStorage.getItem("userid")|| "UserID";
  const renderContent = () => {
    switch (active) {
      case "Dashboard":
        return <Home />;
      case "Welcome":
        return <Welcome />;  
      case "Registration":
        return <Registrationanyuser />;
      case "My Profile":
        return <Myprofile />;
         case "KYC Form":
        return <KYC />; 
      case "Our Packages":
        return <Affiliatecourses />;
      case "Enrolled Courses":
        return <Entrolled />;
        //  case "Videos":
        // return <Courseview />;  
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
      default:
        return <DashboardHome />;
    }
  };
 

  return (
    <div className="d-flex vh-100 bg-light">
      {/* Sidebar */}
      <div
        className={`sidebar d-flex flex-column bg-white border-end ${
          isCollapsed ? "collapsed" : ""
        }`}
      >
        <div className="sidebar-header d-flex align-items-center justify-content-between p-3 border-bottom">
          {!isCollapsed && <h5 className="ms-1 m-0 p-2 fw-bold">{username}</h5>}
          <button
            className="btn btn-sm btn-outline-secondary"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            <i class="fa fa-bars"></i>
          </button>
        </div>

        <div className="flex-grow-1">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => setActive(item.name)}
              className={`d-flex align-items-center w-100 border-0 text-start px-3   sidebar-item ${
                active === item.name ? "active" : ""
              }`} style={{ paddingBottom:"5%"}}
            >
              <i className={`bi ${item.icon} me-2`}></i>
              {!isCollapsed && <span>{item.name}</span>}
            </button>
          ))}
        </div>

        {/* <div className="p-3 border-top">
          <button
            onClick={handleLogout}
            className="btn buttonstyle w-75 d-flex align-items-center justify-content-center text-white"
          >
            <i className="bi bi-box-arrow-right me-2"></i>
            {!isCollapsed && "Logout"}
          </button>
        </div> */}
      </div>

      {/* Main content */}
      <div className="flex-grow-1 p-4 overflow-auto">
      <div className="row">
        <div className="col-md-2">
            <h4 className="fw-bold text-dark">{active}</h4>
        </div>
        <div className="col-md-10 text-end">
        <div className="d-flex flex-row justify-content-end align-items-center">
           <h4 className="fw-bold text-dark">My User ID:</h4>
           <h4 className="ms-2 fw-bold text-dark">{userid}</h4>
        </div>
       
        </div>
      </div>
    
     
        
        <div className="mt-4">{renderContent()}</div>
      </div>
    </div>
  );
}

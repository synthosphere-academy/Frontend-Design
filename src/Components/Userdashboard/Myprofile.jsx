import { useEffect } from "react";
import user from "../../Images/userphoto.png";
import "../../Css/myprofile.css";
function Myprofile() {
  const userId = sessionStorage.getItem("userid");
  const username = sessionStorage.getItem("username");
  const useremail = sessionStorage.getItem("useremail");
  const userphone = sessionStorage.getItem("userphone");
  const userstatus = sessionStorage.getItem("userstatus");

  return (
    <div className="container py-4">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-8">
          <div className="card profile-card shadow border-0">
            <div className="card-body p-4 p-md-5">
              {/* Header */}
              <div className="text-center mb-4">
                <div className="profile-avatar mb-3">
                <img src={user} width="70px"/>
                </div>
                <h4 className="fw-bold mb-1">{username || "User Name"}</h4>
                <div className="text-center">
                
                </div>
              </div>

              <hr />

              {/* Profile Info */}
              <div className="profile-info">
                <ProfileRow label="User ID" value={userId} />
                <ProfileRow label="Full Name" value={username} />
                <ProfileRow label="Phone Number" value={userphone} />
                <ProfileRow label="Email Address" value={useremail} />
                <ProfileRow label="Account Status" value={userstatus}  />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Reusable Row Component */
const ProfileRow = ({ label, value }) => (
  <div className="row align-items-center py-2">
    <div className="col-5 col-md-4 fw-semibold text-muted">
      {label}
    </div>
    <div className="col-7 col-md-8">
      {value || "None"}
    </div>
  </div>
);

export default Myprofile;

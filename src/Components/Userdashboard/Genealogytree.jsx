import React, { useEffect, useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import "../../Css/genealogytree.css";
import user from "../../Images/userphoto.png";
const Genealogytree = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
   const [rootUserId, setRootUserId] = useState(null);
  const fetchUserTree = async (userId) => {
    if (!userId) return;

    try {
      setLoading(true);
      const response = await axios.get(`${ROOT_URL}/api/referral/${userId}`);
      console.log(response.data.data);
      setData(response.data.data); // API returns { mainUser, referredUsers }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching referral data:", error);
      swal("Oops!", "Failed to load genealogy data", "error");
      setLoading(false);
    }
  };

  // Initial Load
  useEffect(() => {
     const userId = sessionStorage.getItem("userid"); 
     setRootUserId(userId);
    fetchUserTree(userId);
  }, []);
    const handleGoToTop = () => {
    if (rootUserId) {
      fetchUserTree(rootUserId);
    } else {
      swal("Error", "Root user not found.", "error");
    }
  };

  if (loading) return <div className="text-center mt-5">Loading genealogy...</div>;
  if (!data) return <div className="text-center mt-5">No data found.</div>;

  // Determine parent background color
  const parentBgColor =  data?.mainUser?.totalSelfPoints === 0 ? "#d82a2a" : "#3fc83f";;

  return (
    <div className="genealogy-container">
    <button className="btn mt-1 mb-4 w-25 text-white" style={{backgroundColor:"#9a357f"}}  onClick={handleGoToTop} >
            Extreme top
          </button>
      
      {/* Parent Node */}
      <div className="parent-node">
        <div
           className="d-flex flex-column align-items-center "
        
        >
        <img src={user} width="70px" style={{borderRadius:"35px" ,backgroundColor: parentBgColor, color: "#fff" }}/>
          <h5 className="fw-bold">{data.mainUser.name}</h5>
          <p>{data.mainUser.userId}</p>
          {/* <p>Status: {data.mainUser.status}</p> */}
        </div>
      </div>

      {/* Connection Line */}
      <div className="connector-line"></div>

      {/* Child Nodes */}
      <div className="child-nodes">
        {data.referredUsers && data.referredUsers.length > 0 ? (
          data.referredUsers.map((ref, index) => {
            const bgColor = ref?.totalSelfPoints === 0 ? "#d82a2a" :"#3fc83f" ;

            return (
              <div
                key={index}
                  className="d-flex flex-column align-items-center "
                onClick={() => fetchUserTree(ref.userId)}
              >
             <img src={user} width="70px" style={{borderRadius:"35px" ,backgroundColor: bgColor, color: "#fff" }}/>
                <h5 className="fw-bold mt-1">{ref.name}</h5>
                <p>{ref.userId}</p>
              </div>
            );
          })
        ) : (
          <p className="no-referrals">No referrals found</p>
        )}
      </div>
    </div>
  );
};

export default Genealogytree;

import React, { useEffect, useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import "../../Css/genealogytree.css";

const Genealogytree = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;

  const fetchUserTree = async (userId) => {
    if (!userId) return;

    try {
      setLoading(true);
      const response = await axios.get(`${ROOT_URL}/api/referral/${userId}`);
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
    const userId = "SA14316";
    fetchUserTree(userId);
  }, []);

  if (loading) return <div className="text-center mt-5">Loading genealogy...</div>;
  if (!data) return <div className="text-center mt-5">No data found.</div>;

  // Determine parent background color
  const parentBgColor = data.mainUser.status === "active" ? "#3fc83f" : "#d82a2a";

  return (
    <div className="genealogy-container">
      {/* Parent Node */}
      <div className="parent-node">
        <div
          className="user-card"
          style={{ backgroundColor: parentBgColor, color: "#fff" }}
        >
          <h4>{data.mainUser.name}</h4>
          <p style={{color:"#fff"}}>{data.mainUser.userId}</p>
          {/* <p>Status: {data.mainUser.status}</p> */}
        </div>
      </div>

      {/* Connection Line */}
      <div className="connector-line"></div>

      {/* Child Nodes */}
      <div className="child-nodes">
        {data.referredUsers && data.referredUsers.length > 0 ? (
          data.referredUsers.map((ref, index) => {
            const bgColor = ref.status === "active" ? "#3fc83f" : "#d82a2a";

            return (
              <div
                key={index}
                className="user-card child"
                onClick={() => fetchUserTree(ref.userId)}
                style={{ cursor: "pointer", backgroundColor: bgColor, color: "#fff" }}
              >
                <h5>{ref.name}</h5>
                <p style={{color:"#fff"}}>{ref.userId}</p>
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


import React, { useEffect, useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import "../../Css/genealogytree.css";
import user from "../../Images/userphoto.png";

const Genealogytree = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);
  const [rootUserId, setRootUserId] = useState(null);

  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;

  // Rank calculation based on Direct Team
  const getRank = (totalUsers = 0) => {
    if (totalUsers >= 60) {
      return { level: "Blue Diamond", color: "#4169E1" };
    } else if (totalUsers >= 50) {
      return { level: "Diamond", color: "#964bbf" };
    } else if (totalUsers >= 40) {
      return { level: "Platinum", color: "#6d94c7" };
    } else if (totalUsers >= 30) {
      return { level: "Gold", color: "#FFD700" };
    } else if (totalUsers >= 20) {
      return { level: "Silver", color: "#C0C0C0" };
    } else if (totalUsers >= 10) {
      return { level: "Bronze", color: "#CD7F32" };
    }

    return { level: "Normal", color: "#3fc83f" };
  };

  // Color based on totalSelfPoints and rank
  const getUserColor = (totalSelfPoints, totalUsers) => {
    if (totalSelfPoints === 0) {
      return "#d82a2a"; // Red
    }

    if (totalUsers >= 10) {
      return getRank(totalUsers).color;
    }

    return "#3fc83f"; // Green
  };

  const fetchUserTree = async (userId, isBack = false) => {
    if (!userId) return;

    try {
      setLoading(true);

      if (!isBack && data?.mainUser) {
        setHistory((prev) => [...prev, data.mainUser]);
      }

      const response = await axios.get(
        `${ROOT_URL}/api/referral/${userId}`
      );

      setData(response.data.data);
    } catch (error) {
      console.error("Error fetching referral data:", error);
      swal("Oops!", "Failed to load genealogy data", "error");
    } finally {
      setLoading(false);
    }
  };

  // Initial Load
  useEffect(() => {
    const userId = sessionStorage.getItem("userid");

    setRootUserId(userId);
    fetchUserTree(userId);
  }, []);

  // Go to root user
  const handleGoToTop = () => {
    if (rootUserId) {
      setHistory([]);
      fetchUserTree(rootUserId);
    } else {
      swal("Error", "Root user not found.", "error");
    }
  };

  // Go Back
  const handleGoBack = () => {
    if (history.length === 0) return;

    const lastUser = history[history.length - 1];

    setHistory((prev) => prev.slice(0, -1));
    fetchUserTree(lastUser.userId, true);
  };

  if (loading) {
    return (
      <div className="text-center mt-5">
        Loading genealogy...
      </div>
    );
  }

  if (!data) {
    return (
      <div className="text-center mt-5">
        No data found.
      </div>
    );
  }

  const parentTotalUsers = data.mainUser.totalReferralId || 0;

  const parentRank = getRank(parentTotalUsers);

  const parentBgColor = getUserColor(
    data.mainUser.totalSelfPoints,
    parentTotalUsers
  );

  return (
    <div className="genealogy-container">

      {/* Buttons */}
      <div className="d-flex gap-2">
        <button
          className="btn mt-1 mb-4 w-lg-25 w-sm-100 text-white"
          style={{ backgroundColor: "#9a357f" }}
          onClick={handleGoBack}
          disabled={history.length === 0}
        >
          ⬅ Back
        </button>

        <button
          className="btn mt-1 mb-4 w-lg-25 w-sm-100 text-white"
          style={{ backgroundColor: "#9a357f" }}
          onClick={handleGoToTop}
        >
          Extreme top
        </button>
      </div>

      {/* Parent Node */}
      <div className="parent-node">
        <div className="d-flex flex-column align-items-center">

          <img
            src={user}
            width="70px"
            style={{
              borderRadius: "35px",
              backgroundColor: parentBgColor,
              color: "#fff",
            }}
          />

          <h5 className="fw-bold">
            {data.mainUser.name}
          </h5>

          {/* {parentTotalUsers >= 10 && (
            <span
              style={{
                color: parentRank.color,
                fontWeight: "bold",
              }}
            >
              {parentRank.level}
            </span>
          )} */}

          {/* <p>
            Direct Team: {parentTotalUsers}
          </p> */}

          <p>{data.mainUser.userId}</p>
        </div>
      </div>

      {/* Connection Line */}
      <div className="connector-line"></div>

      {/* Child Nodes */}
      <div className="child-nodes">

        {data.referredUsers &&
        data.referredUsers.length > 0 ? (
          data.referredUsers.map((ref) => {
            const totalUsers = ref.totalReferralId || 0;

            const rank = getRank(totalUsers);

            const bgColor = getUserColor(
              ref.totalSelfPoints,
              totalUsers
            );

            return (
              <div
                key={ref.userId}
                className="d-flex flex-column align-items-center"
                onClick={() => fetchUserTree(ref.userId)}
                style={{ cursor: "pointer" }}
              >

                <img
                  src={user}
                  width="70px"
                  style={{
                    borderRadius: "35px",
                    backgroundColor: bgColor,
                    color: "#fff",
                  }}
                />

                <h5 className="fw-bold mt-1">
                  {ref.name}
                </h5>

                {/* {totalUsers >= 10 && (
                  <span
                    style={{
                      color: rank.color,
                      fontWeight: "bold",
                      fontSize: "14px",
                    }}
                  >
                    {rank.level}
                  </span>
                )} */}

                {/* Course Status */}
                {ref.courseStatus === "active" && (
                  <span style={{ fontSize: "15px" }}>
                    ⭐
                  </span>
                )}

                {ref.courseStatus === "expired" && (
                  <i
                    className="fa-regular fa-star-half"
                    style={{ color: "#e0bc38" }}
                  ></i>
                )}

                {/* <p>
                  Direct Team: {totalUsers}
                </p> */}

                <p>{ref.userId}</p>
              </div>
            );
          })
        ) : (
          <p className="no-referrals">
            No referrals found
          </p>
        )}

      </div>

      {/* Rank Color Legend */}
      <div className="rank-legend">
        {/* <h5 className="fw-bold mb-3">
          Color Legend
        </h5> */}

        {[
          { name: "Active", color: "#3fc83f" },
          { name: "Bronze", color: "#CD7F32" },
          { name: "Silver", color: "#C0C0C0" },
          { name: "Gold", color: "#FFD700" },
          { name: "Platinum", color: "#6d94c7" },
          { name: "Diamond", color: "#964bbf" },
          { name: "Blue Diamond", color: "#4169E1" },
          { name: "Inactive", color: "#d82a2a" },
        ].map((rank) => (
          <div
            className="rank-legend-item"
            key={rank.name}
          >
            <span
              className="rank-color-box"
              style={{
                backgroundColor: rank.color,
              }}
            ></span>

            <span>{rank.name}</span>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Genealogytree;

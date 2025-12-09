import React, { useState, useEffect } from "react";
import "../../Css/rankachive.css";
import axios from "axios";

const Rank = () => {
  const [achievedRankIndex, setAchievedRankIndex] = useState(-1);
  const [userSummary, setUserSummary] = useState(null);

  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
  const userId = sessionStorage.getItem("userid");

  const tableData = [
    { no: 1, name: "Class 1", team: "3 Direct", point: "1-5,000", reward: "Customized back cover" },
    { no: 2, name: "Class 2", team: "50 team + 10 Direct", point: "5,001-15,000", reward: "Dinner set" },
    { no: 3, name: "Class 3", team: "100 team + 20 Direct", point: "15,000-50,000", reward: "Smart watch" },
    { no: 4, name: "Class 4", team: "200 team + 30 Direct", point: "50,001-1,00,000", reward: "Titan fastrack watch" },
    { no: 5, name: "Class 5", team: "500 team + 40 Direct", point: "1,00,001-3,00,000", reward: "Tab" },
    { no: 6, name: "Class 6", team: "1,000 team + 50 Direct", point: "3,00,001-6,00,000", reward: "Premium android" },
    { no: 7, name: "Class 7", team: "2,000 team + 60 Direct", point: "6,00,001-12,00,000", reward: "iPad" },
    { no: 8, name: "Class 8", team: "5,000 team + 70 Direct", point: "12,00,001-25,00,000", reward: "iPhone" },
    { no: 9, name: "Class 9", team: "10,000 team + 100 Direct", point: "25,00,001-50,00,000", reward: "Royal Enfield" },
    { no: 10, name: "Class 10", team: "20,000 team + 150 Direct", point: "50,00,001-1,00,00,000", reward: "5 seater car" },
    { no: 11, name: "H.S.", team: "40,000 team + 200 Direct", point: "1,00,00,001-2,50,00,000", reward: "7 seater car" },
    { no: 12, name: "Graduate", team: "80,000 team + 250 Direct", point: "2,50,00,001-5,00,00,000", reward: "Audi" },
    { no: 13, name: "Post Graduate", team: "1,00,000 team + 300 Direct", point: "5,00,00,001-10,00,00,000", reward: "Mercedes" },
    { no: 14, name: "PhD", team: "1,50,000 team + 500 Direct", point: "10,00,00,001-25,00,00,000", reward: "Range Rover" },
  ];

  const tableData_rank = [
    { no: 1, minTeam: 3, minDirect: 3, minPoint: 1 },
    { no: 2, minTeam: 50, minDirect: 10, minPoint: 5001 },
    { no: 3, minTeam: 100, minDirect: 20, minPoint: 15000 },
    { no: 4, minTeam: 200, minDirect: 30, minPoint: 50001 },
    { no: 5, minTeam: 500, minDirect: 40, minPoint: 100001 },
    { no: 6, minTeam: 1000, minDirect: 50, minPoint: 300001 },
    { no: 7, minTeam: 2000, minDirect: 60, minPoint: 600001 },
    { no: 8, minTeam: 5000, minDirect: 70, minPoint: 1200001 },
    { no: 9, minTeam: 10000, minDirect: 100, minPoint: 2500001 },
    { no: 10, minTeam: 20000, minDirect: 150, minPoint: 5000001 },
    { no: 11, minTeam: 40000, minDirect: 200, minPoint: 10000001 },
    { no: 12, minTeam: 80000, minDirect: 250, minPoint: 25000001 },
    { no: 13, minTeam: 100000, minDirect: 300, minPoint: 50000001 },
    { no: 14, minTeam: 150000, minDirect: 500, minPoint: 100000001 },
  ];

  // ---------- FIND RANK ----------
  const getUserRank = (totalTeam, directTeam, points) => {
    let highestIndex = -1;

    tableData_rank.forEach((rank, index) => {
      if (
        totalTeam >= rank.minTeam &&
        directTeam >= rank.minDirect &&
        points >= rank.minPoint
      ) {
        highestIndex = index;
      }
    });

    return highestIndex;
  };

  // ---------- FETCH USER SUMMARY ----------
  const fetchUserRank = async () => {
    try {
      const res = await axios.post(`${ROOT_URL}/api/referral/teamsummary`, {
        userId,
      });

      if (res.data.success) {
        const data = res.data;
        setUserSummary(data);

        const totalTeam = data.totalDownlineCount;
        const directTeam = data.directReferrals;
        const totalPoints = data.totalPoints;

        const index = getUserRank(totalTeam, directTeam, totalPoints);
        setAchievedRankIndex(index);
      }
    } catch (error) {
      console.error("Error fetching user rank:", error);
    }
  };

  useEffect(() => {
    if (userId) fetchUserRank();
  }, [userId]);

  return (
    <div className="table-container table-responsive">
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Rank Name</th>
            <th>Team</th>
            <th>Point</th>
            <th>Reward</th>
            <th>Achievement</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {tableData.map((item, index) => {
            const isAchieved = achievedRankIndex >= index;

            return (
              <tr key={item.no}>
                <td>{item.no}</td>
                <td>{item.name}</td>
                <td>{item.team}</td>
                <td>{item.point}</td>
                <td>{item.reward}</td>

                {/* Achievement */}
                <td
                  style={{
                    color: isAchieved ? "green" : "red",
                    fontWeight: "bold",
                  }}
                >
                  {isAchieved ? "Achieved" : "Not Achieved"}
                </td>

                {/* Status */}
                <td>
                  Not paid yet
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Rank;

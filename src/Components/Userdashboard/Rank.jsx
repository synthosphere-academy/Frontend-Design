
import React, { useState, useEffect } from "react";
// import "./Css/rankachive.css";
import "../../Css/rankachive.css";
import axios from "axios";


  const Rank = () => {
    const [achievedRank, setAchievedRank] = useState("");
    const [isClaimed, setIsClaimed] = useState(false); // Single claimed state for achieved rank
    // const sponsorId = sessionStorage.getItem("mySponsorId");
    // const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
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


//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // Fetch Achieved Rank
//         const rankResponse = await axios.post(`${ROOT_URL}/api/user/getDashboardData`, { sponsorId });
//         const rankFromAPI = rankResponse.data.rank?.replace(/[^\w\s]/g, "").trim();
//         setAchievedRank(rankFromAPI);

//         // Fetch Claimed Status
//         const statusResponse = await axios.get(`${ROOT_URL}/api/payouts/getUserRankStatus/${sponsorId}`);
//         if (statusResponse.data.success) {
//           setIsClaimed(statusResponse.data.user.isclaimed);
//         }
//       } catch (err) {
//         console.error("Error fetching data:", err);
//       }
//     };

//     fetchData();
//   }, [sponsorId]);

//   // Determine the highest achieved rank index
//   const getAchievedRankIndex = () => {
//     if (!achievedRank) return -1;
//     return tableData.findIndex((item) => item.rankName.toLowerCase() === achievedRank.toLowerCase());
//   };

//   // Function to check if a rank is achieved
//   const isAchieved = (rankName) => {
//     const achievedIndex = getAchievedRankIndex();
//     const currentIndex = tableData.findIndex((item) => item.rankName.toLowerCase() === rankName.toLowerCase());
//     return currentIndex <= achievedIndex;
//   };

//   const handleClaim = async (rankName) => {
//     try {
//       const response = await axios.put(`${ROOT_URL}/api/claim-rank`, {
//         sponsorId,
//         rankName,
//       });

//       if (response.data.success) {
//         setIsClaimed(true);
//       }
//     } catch (error) {
//       console.error("Error claiming reward:", error);
//     }
//   };

  return (
    <div className="table-container table-responsive">
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Rank Name</th>
            <th>Team</th>
            <th>point</th>
            <th>Reward</th>
            <th>Achievement</th>
         
          </tr>
        </thead>
        <tbody>
          {tableData.map((item) => (
            <tr key={item.no}>
              <td>{item.no}</td>
              <td>{item.name}</td>
              <td>{item.team}</td>
              <td>{item.point}</td>
              <td>{item.reward}</td>
              <td>
               None
              </td>
              {/* <td>
                {isAchieved(item.rankName) && isClaimed ? (
                  <button className="btn btn-success">Claimed</button>
                ) : (
                  <button
                    className="btn btn-warning"
                    disabled={!isAchieved(item.rankName) || isClaimed}
                    onClick={() => handleClaim(item.rankName)}
                  >
                    Unclaimed
                  </button>
                )}
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Rank;

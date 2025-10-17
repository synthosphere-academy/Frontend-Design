import React, { useEffect, useState } from "react";
import axios from "axios";

const Directteam = () => {
  const [data, setData] = useState(null);
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;

  useEffect(() => {
    const fetchData = async () => {
      const userId =  sessionStorage.getItem("userid")
      if (!userId) return;

      try {
        const response = await axios.get(`${ROOT_URL}/api/referral/${userId}`);
        setData(response.data.data); // updated for new API structure
        console.log("Referral data:", response.data.data);
      } catch (error) {
        console.error("Error fetching referral data:", error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return <div className="text-center mt-5">Loading...</div>;
  }

  return (
    <div className="d-flex justify-content-center mt-4">
      <table
        className="table table-responsive table-striped w-75 shadow-sm"
        style={{ borderRadius: "15px", overflow: "hidden" }}
      >
        <thead>
          <tr>
            <th className="text-center">User ID</th>
            <th className="text-center">Username</th>
            {/* <th className="text-center">Status</th> */}
          </tr>
        </thead>
        <tbody>
          {data.referredUsers && data.referredUsers.length > 0 ? (
            data.referredUsers.map((user, index) => (
              <tr key={index}>
                <td className="text-center">{user.userId}</td>
                <td className="text-center">{user.name}</td>
                {/* <td className="text-center">{user.status}</td> */}
              </tr>
            ))
          ) : (
            <tr>
              <td className="text-center" colSpan="3">
                No referred users found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Directteam;

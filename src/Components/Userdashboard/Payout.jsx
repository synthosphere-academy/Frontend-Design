import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function Payout() {
  const [payouts, setPayouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;

  useEffect(() => {
    const userId = sessionStorage.getItem("userid");

    const fetchPayouts = async () => {
      try {
        const response = await axios.get(`${ROOT_URL}/api/payout/${userId}`);
        const result = response.data;

        if (result.success && result.data.length > 0) {
          // ✅ Access payouts array inside data[0]
          setPayouts(result.data[0].payouts);
        } else {
          setPayouts([]);
        }
      } catch (error) {
        console.error("Error fetching payout data:", error);
        setPayouts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPayouts();
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center mt-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-2">
      

      <div className="table-responsive shadow rounded">
        <table className="table   align-middle text-center">
          <thead className="table-primary">
            <tr>
              <th>#</th>
              <th>Amount (₹)</th>
             
              <th>Date</th>
               <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {payouts.length > 0 ? (
              payouts.map((payout, index) => (
                <tr key={payout._id}>
                  <td>{index + 1}</td>
                  <td className="fw-semibold">₹{payout.amount}</td>
                  <td>{new Date(payout.date).toLocaleDateString()}</td>
                  <td>
                    <span
                      
                    >
                      {payout.status}
                    </span>
                  </td>
                  
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-muted">
                  No payouts found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Payout;

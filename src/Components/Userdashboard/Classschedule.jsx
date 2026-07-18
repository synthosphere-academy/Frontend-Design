import React, { useState, useEffect } from "react";
import axios from "axios";
const classData = [
  {
    classNo: 1,
    topic: "Introduction to Crypto",
    date: "20th July 2026",
    time: "7:00 PM",
    zoom: "https://zoom.us/j/1234567890",
  },
  {
    classNo: 2,
    topic: "Blockchain Basics",
    date: "22th July 2026",
    time: "7:00 PM",
    zoom: "https://zoom.us/j/1234567891",
  },
  {
    classNo: 3,
    topic: "Wallet Setup",
    date: "27th July 2026",
    time: "7:00 PM",
    zoom: "https://zoom.us/j/1234567892",
  },
  {
    classNo: 4,
    topic: "Spot Trading",
    date: "29th July 2026",
    time: "7:00 PM",
    zoom: "https://zoom.us/j/1234567893",
  },
  {
    classNo: 5,
    topic: "Futures Trading",
    date: "3rd August 2026",
    time: "7:00 PM",
    zoom: "https://zoom.us/j/1234567894",
  },
  {
    classNo: 6,
    topic: "Risk Management",
    date: "5th August 2026",
    time: "7:00 PM",
    zoom: "https://zoom.us/j/1234567895",
  },
  {
    classNo: 7,
    topic: "Technical Analysis",
    date: "10th August 2026",
    time: "7:00 PM",
    zoom: "https://zoom.us/j/1234567896",
  },
  {
    classNo: 8,
    topic: "Indicators",
    date: "12th August 2026",
    time: "7:00 PM",
    zoom: "https://zoom.us/j/1234567897",
  },
  {
    classNo: 9,
    topic: "Live Trading",
    date: "17th August 2026",
    time: "7:00 PM",
    zoom: "https://zoom.us/j/1234567898",
  },
  {
    classNo: 10,
    topic: "Portfolio Management",
    date: "19th August 2026",
    time: "7:00 PM",
    zoom: "https://zoom.us/j/1234567899",
  },
  {
    classNo: 11,
    topic: "Advanced Strategies",
    date: "24th August 2026",
    time: "7:00 PM",
    zoom: "https://zoom.us/j/1234567800",
  },
  {
    classNo: 12,
    topic: "Final Q&A",
    date: "26th August 2026",
    time: "7:00 PM",
    zoom: "https://zoom.us/j/1234567801",
  },
];

const Classschedule = () => {
  const [orderdata, setorderdata] = useState([]);
  const [showBatch, setShowBatch] = useState(false);
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
   const userId = sessionStorage.getItem("userid");
  const batch = "Batch 10";
  useEffect(() => {
    const fetchOrders = async () => {
     
      if (!userId) return;

      try {
        const response = await axios.post(
          `${ROOT_URL}/api/users/getorderdetailsbyuser`,
          { userId },
        );

        setorderdata(response.data);

        // শুধুমাত্র paid order
        const paidOrders = response.data.filter(
          (order) => order.paymentStatus === "paid",
        );

        // Batch 10 Date Range
        const startDate = new Date("2026-07-01T00:00:00");
        const endDate = new Date("2026-07-15T23:59:59");

        const hasBatch10 = paidOrders.some((order) => {
          const orderDate = new Date(order.createdAt);
          return orderDate >= startDate && orderDate <= endDate;
        });

        setShowBatch(hasBatch10);
      } catch (err) {
        console.error("Error fetching orders:", err);
      }
    };

    fetchOrders();
  }, [userId]);
if (!showBatch) {
  return (
    <div className="container py-5">
      <div
        className="alert alert-info text-center shadow-sm"
        style={{ borderRadius: "15px" }}
      >
        <h5 className="fw-bold mb-2">📅 Class Schedule</h5>
        <p className="mb-0">
          Class schedule will be available from <strong>Batch 10</strong>.
        </p>
      </div>
    </div>
  );
}
  return (
    <div className="container py-4">
      {/* Header Card */}
      <div
        className="card border-0 shadow-sm mb-4"
        style={{ borderRadius: "15px" }}
      >
        <div className="card-body text-center py-4">
          <h2 className="fw-bold text-primary mb-2">🎓 You are in {batch}</h2>

          {/* <p className="text-muted mb-0">
            Click on the class date to join the Zoom meeting.
          </p> */}
        </div>
      </div>

      {/* Schedule Table */}
      <div className="card border-0 shadow-sm" style={{ borderRadius: "15px" }}>
        <div
          className="card-header text-white"
          style={{
            borderTopLeftRadius: "15px",
            borderTopRightRadius: "15px",
            backgroundColor: "#B342BD",
          }}
        >
          <h5 className="mb-0">📅 Class Schedule</h5>
        </div>

        <div className="table-responsive">
          <table className="table table-hover align-middle mb-0">
            <thead className="table-light">
              <tr className="text-center">
                <th>Class</th>
                {/* <th>Topic</th>
                <th>Time</th> */}
                <th className="text-center">Date</th>
              </tr>
            </thead>

            <tbody>
              {classData.map((item) => (
                <tr key={item.classNo} className="text-center">
                  <td>
                    <span className="badge bg-primary px-5 py-3">
                      Class {item.classNo}
                    </span>
                  </td>

                  {/* <td>{item.topic}</td>

                  <td>{item.time}</td> */}
                    
                   <td className="text-center"> 📅 {item.date}
                   </td>
                  {/* <td className="text-center">
                    <a
                      href={item.zoom}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-primary btn-sm fw-semibold"
                      style={{
                        borderRadius: "20px",
                        minWidth: "120px",
                      }}
                    >
                      📅 {item.date}
                    </a>
                    <span className="ms-3">
                      <i className="fa fa-hand-o-left me-2"></i>Click Here{" "}
                    </span>
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Classschedule;

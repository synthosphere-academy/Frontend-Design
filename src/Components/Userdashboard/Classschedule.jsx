import React, { useState, useEffect } from "react";
import axios from "axios";
const batchConfig = [
  {
    batch: "Batch 17",
    startDate: "2026-10-16T00:00:00",
    endDate: "2026-10-31T23:59:59",
  },
  {
    batch: "Batch 18",
    startDate: "2026-11-01T00:00:00",
    endDate: "2026-11-15T23:59:59",
  },
   {
    batch: "Batch 19",
    startDate: "2026-11-16T00:00:00",
    endDate: "2026-11-30T23:59:59",
  },
  {
    batch: "Batch 20",
    startDate: "2026-12-01T00:00:00",
    endDate: "2026-12-15T23:59:59",
  },
  {
    batch: "Batch 21",
    startDate: "2026-12-16T00:00:00",
    endDate: "2026-12-31T23:59:59",
  }
];
const commonClassData = [
  {
    classNo: 1,
    topic: [
      "Introduction to Synthosphere Academy",
      "Introduction to Cryptocurrency",
      "Basic knowledge of Blockchain technology",
      
    ],
  },
  {
    classNo: 2,
    topic: [
      "About bitcoin and alt coins",
      "Mining mechanism (POW, POS)",
      "BTC halving and bull run",
     
    ],
  },
   {
    classNo: 3,
    topic: [
       "About Exchanges, CEX, DEX and wallets",
      "KYC and crypto tax in India",
      "Deposit withdrawal transfer",
      "Portfolio management, power of SIP",
     
    ],
  },
   {
    classNo: 4,
    topic: [
      "Fundamental analysis",
     "About coinmarketcap",
     "About dexscanner",
     "All type of trading (spot, future, margin, arbitrage)",
     
    ],
  },
   {
    classNo: 5,
    topic: [
       "Trading strategies",
       "Chart trading",
       "Candle stick",
      "Support and resistance",
      "Time frame and indicators",
    ],
  },
   {
    classNo: 6,
    topic: [
      "Use of coin glass", 
      
    ],
  },
   {
    classNo: 7,
    topic: [
       "Live trading interface",
      "Live spot trading",
      "Future trading",
   
    ],
  },
  {
    classNo: 8,
    topic: [
       " Risk management and trading psychology : Stoploss , Target price , Trelling stop loss , Fomo, fud, fear index"
      
    ],
  },
  {
    classNo: 9,
    topic: [
      "Dex and perp. Dex full tutorial"
    ],
  },
   {
    classNo: 10,
    topic: [
      "Live trading by applying all tools step by step.",
    ],
  },
   {
    classNo: 11,
    topic: [
      "Revision of all classes",
      "Practical trading",
      "Live profit making"
    ],
  },
  {
    classNo: 12,
    topic: [
      "Opportunities in Synthosphere Academy to grow yourself as a synthospherian",
      "Opportunities to meet with CEO and Founder of Synthosphere Academy",
    ],
  },
];
const Classschedule = () => {
  const [orderdata, setorderdata] = useState([]);
  const [showBatch, setShowBatch] = useState(false);
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
  const [batchName, setBatchName] = useState("");
const [schedule, setSchedule] = useState([]);
   const userId = sessionStorage.getItem("userid");
  // const batch = "Batch 10";
  useEffect(() => {
    const fetchOrders = async () => {
     
      if (!userId) return;

      try {
        const response = await axios.post(
          `${ROOT_URL}/api/users/full-details`,
          { userId },
        );
console.log("Order Data of a user:", response.data.data); // Debugging line
setorderdata(response.data.data);

const eligiblePackages = [
  "Learner Course",
  "Master Course",
  "Pro Master Course",
  "Teacher Course",
];

// DD/MM/YYYY format parse করার function
const parsePurchaseDate = (dateStr) => {
  const [datePart, timePart] = dateStr.split(", ");
  const [day, month, year] = datePart.split("/").map(Number);

  let [time, modifier] = timePart.split(" ");
  let [hours, minutes, seconds] = time.split(":").map(Number);

  if (modifier.toLowerCase() === "pm" && hours !== 12) hours += 12;
  if (modifier.toLowerCase() === "am" && hours === 12) hours = 0;

  return new Date(year, month - 1, day, hours, minutes, seconds);
};

// শুধু eligible course purchase নাও
const coursePurchases = (response.data.data.courseDetails.purchaseHistory || []).filter(
  (purchase) =>
    purchase.status === "completed" &&
    eligiblePackages.includes(purchase.packageName)
);

if (coursePurchases.length === 0) {
  setShowBatch(false);
  setBatchName("");
  setSchedule([]);
  return;
}

// latest eligible course purchase
const latestCoursePurchase = coursePurchases.sort(
  (a, b) => parsePurchaseDate(b.date) - parsePurchaseDate(a.date)
)[0];

const purchaseDate = parsePurchaseDate(latestCoursePurchase.date);

// purchase date অনুযায়ী batch select
const matchedBatch = batchConfig.find(
  (batch) =>
    purchaseDate >= new Date(batch.startDate) &&
    purchaseDate <= new Date(batch.endDate)
);

// if (matchedBatch) {
//   setShowBatch(true);
//   setBatchName(matchedBatch.batch);
//   setSchedule(matchedBatch.classData);
// } else {
//   setShowBatch(false);
//   setBatchName("");
//   setSchedule([]);
// }
if (matchedBatch) {
  setShowBatch(true);
  setBatchName(matchedBatch.batch);
  setSchedule(commonClassData);
} else {
  setShowBatch(false);
  setBatchName("");
  setSchedule([]);
}
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
        className="alert text-center shadow-sm"
        style={{
          borderRadius: "15px",
          backgroundColor: "#f3e8ff",
          border: "1px solid #d8b4fe",
        }}
      >
        <h5 className="fw-bold mb-3">
          📅 Your Batch Class Has Been Completed
        </h5>

      <p className="mb-3">
  Your batch classes have been completed.
  <br />
  You can now join the ongoing classes of <strong>any of our batches</strong> as per their scheduled timings.
</p>

        <a
          href="https://us06web.zoom.us/j/84936152756?pwd=WSO7dSppgmamC8XSYaqLWYfHcbGos0.1"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary px-4 py-2 fw-semibold"
          style={{
            borderRadius: "25px",
          }}
        >
           Click Here to Join Class
        </a>

        <p className="mt-4 mb-0">
          📞 <strong>For any details:</strong>{" "}
          <a
            href="tel:6291583772"
            className="fw-semibold text-decoration-none"
          >
            +91 6291583772
          </a>
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
          <h2 className="fw-bold text-primary mb-2">🎓 You are in {batchName}</h2>

          <p className="text-muted mb-0">
            Click on the class date to join the Zoom meeting.
          </p>
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
                <th>Topic</th>
                {/* <th>Time</th> */}
                <th className="text-center">Link to Join the Class</th>
              </tr>
            </thead>

            <tbody>
             {schedule.map((item) => (
                <tr key={item.classNo} className="text-center">
                  <td>
                    <span className="badge bg-primary px-5 py-3">
                      Class {item.classNo}
                    </span>
                  </td>
                  <td className="text-center">
  {Array.isArray(item.topic) ? (
    <ul className="mb-0 ps-3 text-center">
      {item.topic.map((point, index) => (
        <li key={index}>{point}</li>
      ))}
    </ul>
  ) : (
    item.topic
  )}
</td>
 {/* <td>{item.topic}</td> */}
<td><a
        href="https://us06web.zoom.us/j/84936152756?pwd=WSO7dSppgmamC8XSYaqLWYfHcbGos0.1"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-outline-primary btn-sm fw-semibold"
        style={{
          borderRadius: "20px",
          minWidth: "120px",
        }}
      >
        Click Here to Join Class
      </a></td>               
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

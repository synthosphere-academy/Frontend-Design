import React, { useState, useEffect } from "react";
import axios from "axios";
const batchConfig = [
  {
    batch: "Batch 9",
    startDate: "2026-06-17T00:00:00",
    endDate: "2026-06-29T23:59:59",
    classData: [
      {
        classNo: 5,
        topic: "Blockchain Basics",
        date: "1st August 2026",
        time: "7:00 PM",
      },
      {
        classNo: 8,
        topic: "Introduction to Crypto",
        date: "23rd July 2026",
        time: "7:00 PM",
      },
      {
        classNo: 9,
        topic: "Blockchain Basics",
        date: "25th July 2026",
        time: "7:00 PM",
      },
      {
        classNo: 10,
        topic: "Blockchain Basics",
        date: "28th July 2026",
        time: "7:00 PM",
      },
      {
        classNo: 11,
        topic: "Blockchain Basics",
        date: "30th July 2026",
        time: "7:00 PM",
      },
      {
        classNo: 12,
        topic: "Blockchain Basics",
        date: "4th August 2026",
        time: "7:00 PM",
      },
      
      // ...
    ],
  },

  {
    batch: "Batch 10",
    startDate: "2026-07-01T00:00:00",
    endDate: "2026-07-15T23:59:59",
    classData: [
      
        {
    classNo: 1,
    topic: "Introduction to Crypto",
    date: "20th July 2026",
    time: "7:00 PM",
   
  },
    
      {
    classNo: 2,
    topic: "Blockchain Basics",
    date: "22th July 2026",
    time: "7:00 PM",
   
  },
  {
    classNo: 3,
    topic: "Wallet Setup",
    date: "27th July 2026",
    time: "7:00 PM",
    
  },
  {
    classNo: 4,
    topic: "Spot Trading",
    date: "29th July 2026",
    time: "7:00 PM",
   
  },
  {
    classNo: 5,
    topic: "Futures Trading",
    date: "3rd August 2026",
    time: "7:00 PM",
    
  },
  {
    classNo: 6,
    topic: "Risk Management",
    date: "5th August 2026",
    time: "7:00 PM",
   
  },
  {
    classNo: 7,
    topic: "Technical Analysis",
    date: "10th August 2026",
    time: "7:00 PM",
   
  },
  {
    classNo: 8,
    topic: "Indicators",
    date: "12th August 2026",
    time: "7:00 PM",
   
  },
  {
    classNo: 9,
    topic: "Live Trading",
    date: "17th August 2026",
    time: "7:00 PM",
   
  },
  {
    classNo: 10,
    topic: "Portfolio Management",
    date: "19th August 2026",
    time: "7:00 PM",  
  },
  {
    classNo: 11,
    topic: "Advanced Strategies",
    date: "24th August 2026",
    time: "7:00 PM",
  },
  {
    classNo: 12,
    topic: "Final Q&A",
    date: "26th August 2026",
    time: "7:00 PM",
  },
    ],
  },

  {
    batch: "Batch 11",
    startDate: "2026-07-16T00:00:00",
    endDate: "2026-07-31T23:59:59",
    classData: [
      {
        classNo: 1,
        topic: "Introduction to Crypto",
        date: "3rd August 2026",
        time: "7:00 PM",
      },
      {
        classNo: 2,
        date: "5th August 2026",
        time: "7:00 PM",
      },
      {
        classNo: 3,
        topic: "Introduction to Crypto",
        date: "6th August 2026",
        time: "7:00 PM",
      },
      {
        classNo: 4,
        topic: "Introduction to Crypto",
        date: "7th August 2026",
        time: "7:00 PM",
      },
      {
        classNo: 5,
        topic: "Introduction to Crypto",
        date: "8th August 2026",
        time: "7:00 PM",
      },
      {
        classNo: 6,
        topic: "Introduction to Crypto",
        date: "10th August 2026",
        time: "7:00 PM",
      },
      {
        classNo: 7,
        topic: "Introduction to Crypto",
        date: "11th August 2026",
        time: "7:00 PM",
      },
       {
        classNo: 8,
        topic: "Introduction to Crypto",
        date: "12th August 2026",
        time: "7:00 PM",
      },
        {
        classNo: 9,
        topic: "Introduction to Crypto",
        date: "13th August 2026",
        time: "7:00 PM",
      },
        {
        classNo: 10,
        topic: "Introduction to Crypto",
        date: "14th August 2026",
        time: "7:00 PM",
      },
      {
        classNo: 11,
        topic: "Introduction to Crypto",
        date: "15th August 2026",
        time: "7:00 PM",
      },
      {
        classNo: 12,
        topic: "Introduction to Crypto",
        date: "17th August 2026",
        time: "7:00 PM",
      },
    
    ],
  },
];
// const classData = [
//   {
//     classNo: 1,
//     topic: "Introduction to Crypto",
//     date: "20th July 2026",
//     time: "7:00 PM",
   
//   },
//   {
//     classNo: 2,
//     topic: "Blockchain Basics",
//     date: "22th July 2026",
//     time: "7:00 PM",
   
//   },
//   {
//     classNo: 3,
//     topic: "Wallet Setup",
//     date: "27th July 2026",
//     time: "7:00 PM",
    
//   },
//   {
//     classNo: 4,
//     topic: "Spot Trading",
//     date: "29th July 2026",
//     time: "7:00 PM",
   
//   },
//   {
//     classNo: 5,
//     topic: "Futures Trading",
//     date: "3rd August 2026",
//     time: "7:00 PM",
    
//   },
//   {
//     classNo: 6,
//     topic: "Risk Management",
//     date: "5th August 2026",
//     time: "7:00 PM",
   
//   },
//   {
//     classNo: 7,
//     topic: "Technical Analysis",
//     date: "10th August 2026",
//     time: "7:00 PM",
   
//   },
//   {
//     classNo: 8,
//     topic: "Indicators",
//     date: "12th August 2026",
//     time: "7:00 PM",
   
//   },
//   {
//     classNo: 9,
//     topic: "Live Trading",
//     date: "17th August 2026",
//     time: "7:00 PM",
   
//   },
//   {
//     classNo: 10,
//     topic: "Portfolio Management",
//     date: "19th August 2026",
//     time: "7:00 PM",  
//   },
//   {
//     classNo: 11,
//     topic: "Advanced Strategies",
//     date: "24th August 2026",
//     time: "7:00 PM",
//   },
//   {
//     classNo: 12,
//     topic: "Final Q&A",
//     date: "26th August 2026",
//     time: "7:00 PM",
//   },
// ];

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
          `${ROOT_URL}/api/users/getorderdetailsbyuser`,
          { userId },
        );

//         setorderdata(response.data);
//           const eligiblePackages = [
//   "Learner Course",
//   "Master Course",
//   "Pro Master Course",
//   "Teacher Course",

// ];

//         const paidOrders = response.data.filter(
//   (order) =>
//     order.paymentStatus === "paid" &&
//     eligiblePackages.includes(order.packageName)
// );


//         // শুধুমাত্র paid order
//         // const paidOrders = response.data.filter(
//         //   (order) => order.paymentStatus === "paid",
//         // );

//         // Batch 10 Date Range
//         // const startDate = new Date("2026-07-01T00:00:00");
//         // const endDate = new Date("2026-07-15T23:59:59");

//         // const hasBatch10 = paidOrders.some((order) => {
//         //   const orderDate = new Date(order.createdAt);
//         //   return orderDate >= startDate && orderDate <= endDate;
//         // });

//         // setShowBatch(hasBatch10);
//         const matchedBatch = batchConfig.find((batch) =>
//   paidOrders.some((order) => {
//     const orderDate = new Date(order.createdAt);

//     return (
//       orderDate >= new Date(batch.startDate) &&
//       orderDate <= new Date(batch.endDate)
//     );
//   })
// );

// if (matchedBatch) {
//   setShowBatch(true);
//   setBatchName(matchedBatch.batch);
//   setSchedule(matchedBatch.classData);
// } else {
//   setShowBatch(false);
//   setBatchName("");
//   setSchedule([]);
// }
console.log("Order Data:", response.data); // Debugging line
setorderdata(response.data);

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
const coursePurchases = (response.data.purchaseHistory || []).filter(
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

if (matchedBatch) {
  setShowBatch(true);
  setBatchName(matchedBatch.batch);
  setSchedule(matchedBatch.classData);
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
        className="alert alert-info text-center shadow-sm"
        style={{ borderRadius: "15px" }}
      >
        <h5 className="fw-bold mb-2">📅 Class Schedule</h5>
        <p className="mb-0">
          Class schedule will be available from <strong>Batch 8
          </strong>.
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
                {/* <th>Topic</th>
                <th>Time</th> */}
                <th className="text-center">Date</th>
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

                  {/* <td>{item.topic}</td>

                  <td>{item.time}</td> */}
                    
                   {/* <td className="text-center"> 📅 {item.date}
                   </td> */}
                  <td className="text-center">
                    <a
                      href="https://us06web.zoom.us/j/81195469231?pwd=V4qbcBkBRS2wa1BjOuobmIuiS48AvO.1"
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
                  </td>
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

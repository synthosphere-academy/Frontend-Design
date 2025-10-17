import { useState, useEffect } from 'react';
import axios from "axios";
import "../../Css/Userdasboard/orderhistory.css";

const Orderhistory = () => {
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
  const [orderdata, setorderdata] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const userId = sessionStorage.getItem('userid');
      console.log("UserID:", userId);

      if (!userId) return;

      try {
        const response = await axios.post(`${ROOT_URL}/api/users/getorderdetailsbyuser`, { userId });
        setorderdata(response.data);
        console.log("Fetched Orders:", response.data);
      } catch (err) {
        console.error("Error fetching orders:", err);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="container py-3">
      
      {orderdata.length > 0 ? (
        <div className='table-responsive'>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Order NO</th>
                <th>Order Date</th>
                <th>Course Name</th>
                <th>Package Name</th>
                <th>Amount</th>
                <th>Payment ID</th>
              </tr>
            </thead>
            <tbody>
              {orderdata.map((order,index) => (
                <tr key={order._id}>
                  <td>{index+1}</td>
                  <td>{new Date(order.createdAt).toLocaleDateString()}</td>
                  <td>{order.coursename || "N/A"}</td>
                  <td>{order.packagename || "N/A"}</td>
                  <td>{order.amount || "N/A"}</td>
                  <td>{order.razorpay_payment_id || "N/A"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center">No orders available.</p>
      )}
    </div>
  );
};

export default Orderhistory;

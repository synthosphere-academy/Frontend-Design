
import { useState , useEffect} from 'react';
import axios from "axios";
import "../../Css/Userdasboard/orderhistory.css";

const Orderhistory= () => {
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
    const [orderdata, setorderdata] = useState([]);
    useEffect(() => {
        const userId = sessionStorage.getItem('userid');
        console.log(userId);
           axios
          .get(ROOT_URL + `/api/auth/orderdetails/${userId}`)
          .then((orderdetail) => {
            setorderdata(orderdetail.data);
            console.log(orderdata);
          })
          .catch((err) => console.log(err));
      }, []);
    
    
  return (
    <>
    <div>
    <h4 className='fw-bold'>Order History</h4>
    <div className=' table-responsive py-2'>
    <table className="table table-striped">
    <thead>
      <tr>
        <th>Order_id </th>
        <th>Course_name</th>
        <th>Course_amount</th>
        <th className='text-center'>Payment_id</th>
        <th>View invoice</th>
      </tr>
    </thead>
    <tbody>
    {orderdata ? (
      orderdata.map((order) => (
      <tr>
        <td>{order.razorpay_order_id}</td>
        <td>{order.courses}</td>
        <td>{order.amount}</td>
        <td>{order.razorpay_payment_id}</td>
        <td><a href={`/invoice/${order._id}`}><i className="fa fa-eye editicon ms-4"></i></a>
</td>
      </tr>
      ))
      ) : (<>No Orders Available</>)
    }
      </tbody>
    </table>
    
    {/* {orderdata ? (
        orderdata.map((order) => (
          
          <div key={order.id} className="row align-items-center orderdesign">
          <div className="row mt-4">
        <div className="col-lg-3">
          <span>Order id </span>
        </div>
        <div className="col-lg-9 fw-bold">
          <span>{order.razorpay_order_id}</span>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-lg-3">
          <span> </span>
        </div>
        <div className="col-lg-9 fw-bold">
          <span>{order.courses}</span>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-lg-3">
          <span>Course Amount</span>
        </div>
        <div className="col-lg-9 fw-bold">
          <span> {order.amount}</span>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-lg-3">
          <span>Payment id</span>
        </div>
        <div className="col-lg-9 fw-bold">
          <span>{order.razorpay_payment_id}</span>
        </div>
      </div>
            <div className="col-2 text-center ">
              <span>{order.razorpay_order_id}</span>
            </div>
            <div className="col-5 text-center">
              <span>{order.courses}</span>
            </div>
            <div className="col-2 text-center">
              {order.amount}
            </div>
            <div className="col-3 text-center">{order.razorpay_payment_id}</div>
          </div>
        
        ))
      ) : (<div> No orders available.</div>)} */}
      </div>
      </div>
    
    </>
  )
}

export default Orderhistory

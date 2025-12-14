import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import pic1 from "../Images/icon1.png";
import "../Css/checkout.css";

const Checkout = () => {
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
  const navigate = useNavigate();
  const location = useLocation();

  // values passed from previous page
  const { courseName, coursePrice } = location.state || {};

  // form states
  // const [fullname, setName] = useState("");
  // const [phoneno, setPhoneno] = useState("");
  // const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [emailerror, setEmailerror] = useState(false);
  const [mobilenoerror, setMobileerror] = useState(false);

  const userId = sessionStorage.getItem("userid");
   const fullname = sessionStorage.getItem("username");
   const phoneno = sessionStorage.getItem("userphone");
   const email = sessionStorage.getItem("useremail");
  const Course_name = "Crypto Trading Course";
  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }
  const emailHandler = (e) => {
    let item = e.target.value;
    setEmailerror(!isValidEmail(item));
  };
  const mobileHandler = (e) => {
    let item = e.target.value;
    setMobileerror(item.length !== 10);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if ( !address) {
      swal("Oops!", "Please fill out all required fields!", "error");
      return;
    }
    

    try {
      // 1️⃣ Create order on backend
      const { data } = await axios.post(`${ROOT_URL}/api/users/checkout`, {
        amount: Number(coursePrice), // amount in paise
      });

      const { order } = data;

      // 2️⃣ Configure Razorpay
      const options = {
        key: "rzp_live_RSwodshzvv3moq", // replace with your live/test key
        // key: "rzp_test_fljf9prKP3Ri1D",
        amount: order.amount,
        currency: "INR",
        name: "Synthosphere Academy",
        description: courseName,
        image: pic1,
        order_id: order.id,
        handler: async function (response) {
          try {
            await axios.post(`${ROOT_URL}/api/users/paymentverification_students`, {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              fullname,
              phoneno,
              email,
              address,
              userId,
              packagename: courseName,
              coursename: Course_name,
              
              amount: coursePrice,
            });

            swal(
              "Thank you for your purchase!",
              "You've successfully enrolled in the course.",
              "success"
            );
            navigate("/paymentSucess");
          } catch (err) {
            console.error(err);
            swal("Payment verification failed!", "Please contact support.", "error");
          }
        },
        prefill: {
          name: fullname,
          email: email,
          contact: phoneno,
        },
        theme: {
          color: "#3399cc",
        },
        modal: {
          ondismiss: function () {
            swal("Payment window closed", "You can try again.", "info");
          },
        },
      };

      // 3️⃣ Open Razorpay popup
      const razor = new window.Razorpay(options);
      razor.open();
    } catch (error) {
      console.error(error);
      swal("Oops!", "Please reload the page and try again", "error");
    }
  };

  return (
    <div className="container">
      <div className="py-2 text-center">
        <h1>Checkout Form</h1>
      </div>

      <div className="container checkoutform mb-3">
        <form onSubmit={handleSubmit}>
          <div className="row align-items-center">
            <div className="col-6">
              <p className="h4 mt-1 p-3">
                <strong>Course:</strong> {courseName}
              </p>
            </div>
            <div className="col-3 text-center">
              <span className="totalamount">
                Price: ₹{coursePrice} (Incl. GST)
              </span>
            </div>
          </div>

          <hr className="mb-3" />

          <h4 className="mb-3">Billing Address</h4>

          <div className="row">
            <div className="col mb-4">
              <label>Full Name</label>
              <input
                type="text"
                className="form-control"
               
                value={fullname}
              />
            </div>
            <div className="col mb-4">
              <label>Phone No</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter phone number"
                value={phoneno}
                
              />
            
            </div>
          </div>

          <div className="row">
            <div className="col mb-4">
              <label>Address</label>
              <input
                type="text"
                className="form-control"
                placeholder="Address"
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="col mb-4">
              <label>Email</label>
              <input
                type="text"
                className="form-control"
                placeholder="you@example.com"
                value={email}
              />
              {emailerror && (
                <span className="text-danger">Invalid email address</span>
              )}
            </div>
          </div>

          <div className="text-center">
            <button className="checkoutbutton mb-3" type="submit">
              Checkout
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;

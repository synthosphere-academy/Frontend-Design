import React, { useEffect, useState, useRef } from "react";
import pic2 from "../../Images/academy.png";
import jsPDF from "jspdf";
import axios from "axios";
import swal from "sweetalert";
import html2canvas from "html2canvas";

import "../../Css/Userdasboard/welcome.css";
const Welcome = () => {
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
    const name = sessionStorage.getItem("username") || "User Name";
    const useremail = sessionStorage.getItem("useremail")||"useremail"
    const userId = sessionStorage.getItem("userid") || "UserID";
    const invoiceRef = useRef();
     const [userDetails, setUserDetails] = useState(null);
     const fetchFullDetails = async () => {
    try {
      const res = await axios.post(`${ROOT_URL}/api/users/full-details`, { userId });
      if (res.data.success) {
        console.log("Full details:", res.data.data);
        setUserDetails(res.data.data.courseDetails);
       
      } else {
        swal("Error", res.data.message || "Failed to fetch user data", "error");
      }
    } catch (error) {
      console.error("Error fetching full details:", error);
      swal("Error", "Something went wrong while fetching details.", "error");
    }
  };
   useEffect(() => {
    if (userId){
      fetchFullDetails();
    
    } 
    else swal("Error", "Please login again.", "error");
  }, [userId]);

  const downloadPDF = () => {
    const input = invoiceRef.current;

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("invoice.pdf"); // You can customize the name of the file
    });
  };
   const data = {
    company: "SYNTHOSPHERE TECHNOLOGIES PRIVATE LIMITED"
   } 

  return (
    <>
       <div className="invoice mt-5">
        <div className="d-flex justify-content-end">
          <button className="signupbutton m-3">
            <i
              className="fa fa-download"
              style={{ fontSize: "20px", color: "white" }}
              onClick={downloadPDF}
            ></i>{" "}
            Download
          </button>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div ref={invoiceRef} className="invoice-desktop">

                <div className="card">
                  <div className="card-body">
                    <div className="double-border">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="container mt-4">
                          <div className="row">
                          <div className="col-lg-12 text-center">
                          <img
                                  src={pic2}
                                  width={130}
                                  style={{ marginTop: "-20px" }}
                                  alt="Synthosphere Logo"
                                />

                          </div>

                          </div>
                            <div className="row">
                              {/* <div className="col-lg-6 col-sm-12 name">
                                <p>Hello {name}</p>
                              </div> */}
                              <div className="col-lg-6 col-sm-12 udbhablogo">
                                
                              </div>
                            </div>
                            <p style={{textAlign:"justify", lineHeight:"1.5"}}>

                            A Warm Welcome and Congratulations on Joining Synthosphere Academy!<br/><br/>
Dear, Sir/Madam <br/>
On behalf of the entire team, we would like to extend a heartfelt welcome to Synthosphere Academy! We are absolutely thrilled to have you join our community of aspiring and experienced crypto enthusiasts.
More importantly, we want to offer our sincere congratulations on taking this powerful step forward by investing in your knowledge and future. By Enrollment the Synthosphere Academy {userDetails?.packageName || "course" }, you have committed to mastering the complexities of the cryptocurrency world, and we are here to support you every step of the way.
If you have any questions during your onboarding process, please do not hesitate to reach out to our support team.
Let's build a brighter financial future together!

                       
                            </p>
                           
                            <p style={{lineHeight:"1.5"}}>
                              Best regards,<br/>
The Synthosphere Academy Team<br/>
Website - synthosphereacademy.com
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                 {orderdata.filter((order) => order.paymentStatus === "paid")
                .map((order, index) => (
                      <>
                        <div className="h4 fw-bold text-center mt-5">Invoice</div>
                        <div className="container mt-3 mb-3">
                          <div className="p-4 bg-white shadow rounded">
                            {/* Header */}
                            <div className="d-flex flex-column flex-md-row justify-content-between align-items-start">
                              <div>
                                <h5 className="mt-2 fw-bold">{order.company}</h5>
                              </div>
                              <div className="text-end">
                                <img
                                  src="https://upload.wikimedia.org/wikipedia/commons/8/89/Razorpay_logo.svg"
                                  alt="Razorpay"
                                  width={120}
                                />
                                <p className="small text-secondary mb-0">
                                  Invoicing and payments powered by Razorpay
                                </p>
                              </div>
                            </div>
                            <hr />
                             {orderdata.filter((order) => order.paymentStatus === "paid")
                .map((order, index) => (
                           
                              <div key={index}>
                                <h5 className="fw-bold">
                                  Payment Receipt{" "}
                                  <span className="fw-normal">
                                    Transaction Reference:{" "}
                                    {order.razorpay_payment_id}
                                  </span>
                                </h5>
                                <p>
                                  This is a payment receipt for your transaction
                                  on {order.coursename}
                                </p>

                                <div className="row mt-4">
                                  <div className="col-md-4">
                                    <p className="text-secondary mb-1">
                                      AMOUNT PAID (INCLUDING GST)
                                    </p>
                                    <h4>₹ {order.amount.toFixed(2)}</h4>
                                  </div>
                                  <div className="col-md-4">
                                    <p className="text-secondary mb-1">
                                      ISSUED TO
                                    </p>
                                    <p>
                                      {name}
                                      <br />
                                      {useremail}
                                    </p>
                                  </div>
                                  <div className="col-md-4">
                                    <p className="text-secondary mb-1">
                                      PAID ON
                                    </p>
                                    <p>
                                      {new Date(order.createdAt).toLocaleDateString()}
                                    </p>
                                  </div>
                                </div>
                                 <div className='table-responsive'>
                                <table className="table mt-3 border">
                                  <thead className="table-light">
                                    <tr>
                                      <th>DESCRIPTION</th>
                                      <th className="text-end">UNIT PRICE</th>
                                      <th className="text-center">QTY</th>
                                      <th className="text-end">AMOUNT</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>{order.packagename}</td>
                                      <td className="text-end">
                                        ₹ {order.amount.toFixed(2)}
                                      </td>
                                      <td className="text-center">1</td>
                                      <td className="text-end">
                                        ₹ {order.amount.toFixed(2)}
                                      </td>
                                    </tr>
                                  </tbody>
                                  <tfoot>
                                    <tr>
                                      <th colSpan={3} className="text-end">
                                        Total
                                      </th>
                                      <th className="text-end">
                                        ₹ {order.amount.toFixed(2)}
                                      </th>
                                    </tr>
                                  </tfoot>
                                </table>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </>
                   ) )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Welcome
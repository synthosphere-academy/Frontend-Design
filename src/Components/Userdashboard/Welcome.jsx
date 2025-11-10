import React, { useEffect, useState, useRef } from "react";
import pic2 from "../../Images/academy.png";
import jsPDF from "jspdf";
import axios from "axios";
import swal from "sweetalert";
import html2canvas from "html2canvas";
const Welcome = () => {
    const name = sessionStorage.getItem("username") || "User Name";
    const userId = sessionStorage.getItem("userid") || "UserID";
    const invoiceRef = useRef();
   const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
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
              <div ref={invoiceRef}>
                <div className="card">
                  <div className="card-body">
                    <div className="double-border">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="container mt-4">
                          <div className="row">
                          <div className="col-lg-12 text-end">
                          <img
                                  src={pic2}
                                  width={130}
                                  style={{ marginTop: "-20px" }}
                                  alt="Synthosphere Logo"
                                />

                          </div>

                          </div>
                            <div className="row">
                              <div className="col-lg-6 col-sm-12 name">
                                <p>Hello {name}</p>
                              </div>
                              <div className="col-lg-6 col-sm-12 udbhablogo">
                                
                              </div>
                            </div>
                            <p style={{textAlign:"justify", lineHeight:"1.5"}}>

                            A Warm Welcome and Congratulations on Joining Synthosphere Academy!<br/>
Dear, Sir/Madam <br/>
On behalf of the entire team, we would like to extend a heartfelt welcome to Synthosphere Academy! We are absolutely thrilled to have you join our community of aspiring and experienced crypto enthusiasts.
More importantly, we want to offer our sincere congratulations on taking this powerful step forward by investing in your knowledge and future. By Enrollment the Synthosphere Academy {userDetails?.packageName }, you have committed to mastering the complexities of the cryptocurrency world, and we are here to support you every step of the way.
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
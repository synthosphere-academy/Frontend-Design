import React from "react";

import nailphoto from "../../Images/shilpi_nail.jpg";
 import "../../Css/Mostpopularcourse.css";
 import music4 from "../../Images/Tanu_eye.jpg";
  import makeup from "../../Images/makeupcourse.jpg"; 
  import mehendi from "../../Images/mehendi.jpg";
   import tarot from "../../Images/tarot.jpg";
 import vocal from "../../Images/vocalmusic.jpg";
  import advancemakeup from "../../Images/advancemakeup.jpg";
  import makeup1 from "../../Images/Promakeup.jpg";


function Physicalcourse() {
  return (
    <>
      <div className="mostpopular">
        <div className="container py-5">
          <div className="text-center display-5 fw-bold mt-4">
            All Physical Courses
          </div>

          <div className="container py-5 cardcontainer">
            <div className="row  g-4">
              {/* 1st card */}
              <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center">
                <div className="card-container">
                  <div className="card-flip">
                    {/* Front */}
                    <div className="card-front">
                      <img
                        className="card-img-top"
                        style={{ borderRadius: "10px" }}
                        src={nailphoto}
                        alt="Course"
                      />
                      <div className="card-body">
                        <h4 className="fw-bold mt-4">
                          The Nail Extension Course
                        </h4>
                        <div className="d-flex justify-content-between">
                          <span
                            className="starreview ms-2"
                            style={{ color: "gold" }}
                          >
                            <span className="text-dark">5</span>★★★★★
                          </span>

                         <div><h5 className="mt-1 text-end">
                            7000/-
                          </h5>(With product)</div> 
                        </div>
                      </div>
                    </div>

                    {/* Back */}
                    <div className="card-back">
                      <div
                        className="card-body"
                        style={{ textAlign: "justify" }}
                      >
                        <div className="d-flex flex-column fw-bold">
                          <div className="title">✓ Next Batch: July</div>
                          <div className="title">✓ Duration: 10 days + 1 exam</div>
                          <div className="title">✓ Time: 12pm - 3pm</div>
                          <div className="title">✓ Seat Booking: 1000/-</div>
                          <div className="title">✓ ISO certification</div>
                        </div>

                        <div className="d-flex justify-content-center mt-4">
                         <button type="button" className="coming w-75" onClick={() => window.location.href = '/naildetails'}>
                            See details
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2nd card */}
              <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center">
                <div className="card-container">
                  <div className="card-flip">
                    {/* Front */}
                    <div className="card-front">
                      <img
                        className="card-img-top"
                        style={{ borderRadius: "10px" }}
                        src={music4}
                        alt="Course"
                      />
                      <div className="card-body">
                        <h4 className="fw-bold mt-4">
                        The Eyelash Extension Course
                        </h4>
                        <div className="d-flex justify-content-between">
                          <span
                            className="starreview ms-2"
                            style={{ color: "gold" }}
                          >
                            <span className="text-dark">5</span>★★★★★
                          </span>

                          <div><h5 className="mt-1 text-end">
                            4000/-
                          </h5>(Without product)</div>
                        </div>
                      </div>
                    </div>

                    {/* Back */}
                    <div className="card-back">
                      <div
                        className="card-body"
                        style={{ textAlign: "justify" }}
                      >
                        <div className="d-flex flex-column fw-bold">
                          <div className="title">✓ Next Batch: September</div>
                          <div className="title">
                            ✓ Duration: 5 days + 1 exam
                          </div>
                          <div className="title">✓ Time: 12pm - 3pm</div>
                          <div className="title">
                            ✓ Seat Booking: 500/- (Due on 1st & 3rd day)
                          </div>
                          <div className="title">✓ ISO certification</div>
                        </div>

                        <div className="d-flex justify-content-center mt-4">
                          <button type="button" className="coming w-75" onClick={() => window.location.href = '/eyelashdetails'}>
                            See details
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End 2nd card */}
              {/* 3rd */}
              <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center">
                <div className="card-container">
                  <div className="card-flip">
                    {/* Front */}
                    <div className="card-front">
                      <img
                        className="card-img-top"
                        style={{ borderRadius: "10px" }}
                        src={crypto}
                        alt="Course"
                      />
                      <div className="card-body">
                        <h4 className="fw-bold mt-4">
                          The Crypto Trading Course
                        </h4>
                        <div className="d-flex justify-content-between">
                          <span
                            className="starreview ms-2"
                            style={{ color: "gold" }}
                          >
                            <span className="text-dark">5</span>★★★★★
                          </span>
                           <div><h5 className="mt-1 text-end">
                          11500/-
                          </h5></div>  
                        </div>
                      </div>
                    </div>

                    {/* Back */}
                    <div className="card-back">
                      <div
                        className="card-body"
                        style={{ textAlign: "justify" }}
                      >
                        <div className="d-flex flex-column fw-bold">
                          <div className="title">✓ Next Batch: October</div>
                         
                          <div className="title">✓ Duration: 8-10 Classes</div>
                          {/* <div className="title">
                            ✓ Seat Booking: ₹2,000/-
                          </div> */}
                          <div className="title">✓ ISO certification</div>
                        </div>

                        <div className="d-flex mt-4 justify-content-center">
                          <button type="button" className="coming w-75" onClick={() => window.location.href = '/cryptodetails'}>
                            See details
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* 4th */}
              <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center">
                <div className="card-container">
                  <div className="card-flip">
                    {/* Front */}
                    <div className="card-front">
                      <img
                        className="card-img-top"
                        style={{ borderRadius: "10px" }}
                        src={makeup}
                        alt="Course"
                      />
                      <div className="card-body">
                        <h4 className="fw-bold mt-4">
                          The Makeup Master Course
                        </h4>
                        <div className="d-flex justify-content-between">
                          <span
                            className="starreview ms-2"
                            style={{ color: "gold" }}
                          >
                            <span className="text-dark">5</span>★★★★★
                          </span>
                           <div><h5 className="mt-1 text-end">
                          8000/-
                          </h5></div>  
                        </div>
                      </div>
                    </div>

                    {/* Back */}
                    <div className="card-back">
                      <div
                        className="card-body"
                        style={{ textAlign: "justify" }}
                      >
                        <div className="d-flex flex-column fw-bold">
                          <div className="title">✓ Next Batch: September</div>
                         
                          <div className="title">✓ Time: 12pm - 3pm</div>
                          <div className="title">
                            ✓ Seat Booking: ₹2,000/-
                          </div>
                          <div className="title">✓ ISO certification</div>
                        </div>

                        <div className="d-flex mt-4 justify-content-center">
                          <button type="button" className="coming w-75" onClick={() => window.location.href = '/makeupmasterdetails'}>
                            See details
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* 4th */}
              <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center">
                <div className="card-container">
                  <div className="card-flip">
                    {/* Front */}
                    <div className="card-front">
                      <img
                        className="card-img-top"
                        style={{ borderRadius: "10px" }}
                        src={mehendi}
                        alt="Course"
                      />
                      <div className="card-body">
                        <h4 className="fw-bold mt-4">
                          Basic To Advance Bridal 
                           </h4>
                        <h4 className=" fw-bold text-center">Mehendi Course</h4>
                        <div className="d-flex justify-content-between">
                          <span
                            className="starreview ms-2"
                            style={{ color: "gold" }}
                          >
                            <span className="text-dark">5</span>★★★★★
                          </span>
                           <div><h5 className="mt-1 text-end">
                          6000/-
                          </h5></div>  
                        </div>
                      </div>
                    </div>

                    {/* Back */}
                    <div className="card-back">
                      <div
                        className="card-body"
                        style={{ textAlign: "justify" }}
                      >
                        <div className="d-flex flex-column fw-bold">
                          <div className="title">✓ Next Batch: September</div>
                         
                          <div className="title">✓ Duration: 12 days (3 days/week)</div>
                          <div className="title">
                            ✓  Timings: Flexible, as per your choice
                          </div>
                          <div className="title"> ✓ Seat Booking: ₹1,000/-
                          </div>
                          <div className="title">✓ ISO certification</div>
                        </div>

                        <div className="d-flex mt-4 justify-content-center">
                          <button type="button" className="coming w-75" onClick={() => window.location.href = '/mehendidetails'}>
                            See details
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* 5th */}
              <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center">
                <div className="card-container">
                  <div className="card-flip">
                    {/* Front */}
                    <div className="card-front">
                      <img
                        className="card-img-top"
                        style={{ borderRadius: "10px" }}
                        src={tarot}
                        alt="Course"
                      />
                      <div className="card-body">
                        <h4 className="fw-bold mt-4">
                         Tarot Card Reading Course
                        </h4>
                        <div className="d-flex justify-content-between">
                          <span
                            className="starreview ms-2"
                            style={{ color: "gold" }}
                          >
                            <span className="text-dark">5</span>★★★★★
                          </span>
                           <div><h5 className="mt-1 text-end">
                          4500/-
                          </h5></div>  
                        </div>
                      </div>
                    </div>

                    {/* Back */}
                    <div className="card-back">
                      <div
                        className="card-body"
                        style={{ textAlign: "justify" }}
                      >
                        <div className="d-flex flex-column fw-bold">
                          <div className="title">✓ Next Batch: September</div>
                         
                          <div className="title">✓ Duration: 3 months course (Weekly 1 class)</div>
                          <div className="title">✓ ISO certification</div>
                        </div>

                        <div className="d-flex mt-4 justify-content-center">
                          <button type="button" className="coming w-75" onClick={() => window.location.href = '/tarotdetails'}>
                            See details
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* 6th */}
              <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-end">
                <div className="card-container">
                  <div className="card-flip">
                    {/* Front */}
                    <div className="card-front">
                      <img
                        className="card-img-top"
                        style={{ borderRadius: "10px" }}
                        src={advancemakeup}
                        alt="Course"
                      />
                      <div className="card-body">
                        <h4 className="fw-bold mt-4">
                          The Advance Makeup Course
                        </h4>
                        <div className="d-flex justify-content-between">
                          <span
                            className="starreview ms-2"
                            style={{ color: "gold" }}
                          >
                            <span className="text-dark">5</span>★★★★★
                          </span>
                           <div><h5 className="mt-1 text-end">
                          9000/-
                          </h5></div>  
                        </div>
                      </div>
                    </div>

                    {/* Back */}
                    <div className="card-back">
                      <div
                        className="card-body"
                        style={{ textAlign: "justify" }}
                      >
                        <div className="d-flex flex-column fw-bold">
                          <div className="title">✓ Next Batch: September</div>
                         
                          <div className="title">✓ Duration: 16 Days (2days in a week)</div>
                          <div className="title">✓ Time: 11a.m - 3p.m </div>
                          <div className="title">
                            ✓ 2,000/- pay for seat booking
                          </div>
                          <div className="title">✓ ISO certification</div>
                        </div>

                        <div className="d-flex mt-4 justify-content-center">
                          <button type="button" className="coming w-75" onClick={() => window.location.href = '/advancemakeup'}>
                            See details
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*  7th */}
              <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-end">
                <div className="card-container">
                  <div className="card-flip">
                    {/* Front */}
                    <div className="card-front">
                      <img
                        className="card-img-top"
                        style={{ borderRadius: "10px" }}
                        src={makeup1}
                        alt="Course"
                      />
                      <div className="card-body">
                        <h4 className="fw-bold mt-4">
                          The Pro Makeup Course
                        </h4>
                        <div className="d-flex justify-content-between">
                          <span
                            className="starreview ms-2"
                            style={{ color: "gold" }}
                          >
                            <span className="text-dark">5</span>★★★★★
                          </span>
                           <div><h5 className="mt-1 text-end">
                          10000/-
                          </h5></div>  
                        </div>
                      </div>
                    </div>

                    {/* Back */}
                    <div className="card-back">
                      <div
                        className="card-body"
                        style={{ textAlign: "justify" }}
                      >
                        <div className="d-flex flex-column fw-bold">
                          <div className="title">✓ Next Batch: September</div>
                         
                          <div className="title">✓ Time: 12pm - 3pm</div>
                          <div className="title">
                            ✓ Seat Booking: ₹2,500/-
                          </div>
                          <div className="title">✓ ISO certification</div>
                        </div>

                         <div className="d-flex justify-content-center mt-4">
                         <button type="button" className="coming w-75" onClick={() => window.location.href = '/promakeupdetails'}>
                            See details
                          </button>
                        </div>
                      
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* 8th */}
               <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-end">
                <div className="card-container">
                  <div className="card-flip">
                    {/* Front */}
                    <div className="card-front">
                      <img
                        className="card-img-top"
                        style={{ borderRadius: "10px" }}
                        src={vocal}
                        alt="Course"
                      />
                      <div className="card-body">
                        <h4 className="fw-bold mt-4">
                        Basic To Advance Vocal 
                        </h4>
                        <h4 className="fw-bold text-center">Course</h4>
                        <div className="d-flex justify-content-between">
                          <span
                            className="starreview ms-2"
                            style={{ color: "gold" }}
                          >
                            <span className="text-dark">5</span>★★★★★
                          </span>
                           <div><h5 className="mt-1 text-end">
                          10000/-
                          </h5></div>  
                        </div>
                      </div>
                    </div>

                    {/* Back */}
                    <div className="card-back">
                      <div
                        className="card-body"
                        style={{ textAlign: "justify" }}
                      >
                        <div className="d-flex flex-column fw-bold">
                          <div className="title">✓ Next Batch: September</div>
                         
                          <div className="title">✓ Time: 12pm - 3pm</div>
                          <div className="title">
                            ✓ Seat Booking: ₹2,000/-
                          </div>
                          <div className="title">✓ ISO certification</div>
                        </div>
                        <div className="d-flex mt-4 justify-content-center">
                          <button type="button" className="coming w-75" onClick={() => window.location.href = '/vocaldetails'}>
                            See details
                          </button>
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
  );
}

export default Physicalcourse;

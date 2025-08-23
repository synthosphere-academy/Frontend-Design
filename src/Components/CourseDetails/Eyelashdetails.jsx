import React from 'react'
import makeup1 from "../../Images/makeup1.jpg";
import makeup2 from "../../Images/makeup2.jpg";
import makeup3 from "../../Images/makeup3.jpg";
import makeupposter from "../../Images/Promakeup.jpg";
import teacherpic from "../../Images/academy.png";
 import eyelash from "../../Images/Tanu_eye.jpg";
import "./coursedetails.css";
const Eyelashdetails = () => {
  return (
   <>
     <div className="container my-5">
                    <div className="row">
                      <div className="col-12">
                        <div className="courseview">
                          <div className="row justify-content-center">
                            {/* Left Section */}
                            <div className="col-lg-8 col-12 col-sm-8">
                              <div className="card shadow">
                                {/* Slider */}
                                {/* <div
                                  id="nailCourseCarousel"
                                  className="carousel slide"
                                  data-bs-ride="carousel"
                                  data-bs-interval="3000"
                                >
                                  <div className="carousel-inner" style={{borderRadius: "20px"}}>
                                    <div className="carousel-item active">
                                      <img
                                        src={makeup1}
                                        className="d-block w-100"
                                        alt="Slide 1"
                                      />
                                    </div>
                                    <div className="carousel-item">
                                      <img
                                        src={makeup2}
                                        className="d-block w-100"
                                        alt="Slide 2"
                                      />
                                    </div>
                                    <div className="carousel-item">
                                      <img
                                        src={makeup3}
                                        className="d-block w-100"
                                        alt="Slide 3"
                                      />
                                    </div>
                                  </div>
            
                                
                                  <button
                                    className="carousel-control-prev"
                                    type="button"
                                    data-bs-target="#nailCourseCarousel"
                                    data-bs-slide="prev"
                                  >
                                    <span
                                      className="carousel-control-prev-icon"
                                      aria-hidden="true"
                                    ></span>
                                    <span className="visually-hidden">Previous</span>
                                  </button>
                                  <button
                                    className="carousel-control-next"
                                    type="button"
                                    data-bs-target="#nailCourseCarousel"
                                    data-bs-slide="next"
                                  >
                                    <span
                                      className="carousel-control-next-icon"
                                      aria-hidden="true"
                                    ></span>
                                    <span className="visually-hidden">Next</span>
                                  </button>
                                </div> */}
            
                                {/* Course Name */}
                                <div className="card-body text-start mt-3">
                                  <div className="d-flex justify-content-between ">
                                    <h3 className="fw-bold"> The Eyelash Extension Course</h3>
                                    <h4 className="fw-bold">4000/-(Without product)</h4>
                                  </div>
                                  <div className="fw-bold h5">
                                    <i
                                      className="fa fa-location-arrow me-2"
                                      style={{ color: "goldenrod" }}
                                    ></i>
                                    Location : 7 no. Road, Jagatmata apartment ground floor,
                                    HB Town, Sodepur, Kolkata
                                  </div>
                                  <div className="fw-bold h5 ms-1">
                                    <i className="fa fa-phone me-2"></i>Contact No:
                                   9073582559
                                  </div>
                                  <div className=" h4 fw-bold mb-3 mt-4">
                                      Other Details:
                                    </div>
                                  <div className="d-flex flex-column fw-bold">
                                      <div className="title">✓ Next Batch: September</div>
                                     
                                      <div className="title">✓  Duration: 5 days & 1 day for exam</div>
                                      <div className="title">✓ Time: 12pm - 3pm</div>
                                      <div className="title">
                                      ✓   500/- pay for seat booking ,Then due fees pay on 1st day & 3rd day
                                      </div>
                                      <div className="title">✓ ISO certification</div>
                                    </div>
                                  <div className="mt-4">
                                    <div className=" h4 fw-bold mb-3">
                                      This Course Includes:
                                    </div>
                                   
                                    <div className="course-list">
                                      <div className="course-item ">
                                        <span className="fw-bold">
                                           Product knowledge
                                        </span>
                                      </div>
                                      <div className="course-item ">
                                        <span className="fw-bold">
                                        natural looking extension
                                        </span>
                                      </div>
                                      <div className="course-item">
                                        <span className="fw-bold">
                                          Lash extension kit 
                                        </span>
                                      </div>
                                      <div className="course-item">
                                        <span className="fw-bold">Lash combination process</span>
                                      </div>
                                    
                                    
                                      <div className="course-item ">
                                        <span className="fw-bold"> Safety & Prevention</span>
                                      </div>
                                      <div className="course-item ">
                                        <span className="fw-bold">Application Removal</span>
                                      </div>
                                      <div className="course-item">
                                        <span className="fw-bold">Lash Refilling Process </span>
                                      </div>
                                      </div>
                                    </div>
                                </div>
                              </div>
                            </div>
                            {/* Right Section */}
                            <div className="col-lg-4 col-12 col-sm-4">
                              <div className="card">
                                <img src={eyelash} style={{borderRadius:"20px"}} />
                                <div className="row mt-4">
                                  <div className="col-2 mt-2 text-end">
                                    <img
                                      className="rounded-circle"
                                      width={40}
                                      height={40}
                                      src={teacherpic}
                                    />
                                  </div>
                                  <div className="col-10 mt-2">
                                    <span>Tanusree Das</span>
                                    <br />
                                    <span className="text-muted ms-0">Eyelash artist</span>
                                  </div>
                                </div>
                                <div className="d-flex mt-4 justify-content-center mb-3">
                                <a href="https://rzp.io/rzp/nUDOa2l" target="_blank">
                                  <button type="button" className="coming w-100">
                                    Register Now
                                  </button>
                                  </a>
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

export default Eyelashdetails
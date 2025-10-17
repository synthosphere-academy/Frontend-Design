import React from 'react'
import makeup1 from "../../Images/1.jpg";
import makeup2 from "../../Images/2.jpg";
import makeup3 from "../../Images/3.jpg";
import makeup4 from "../../Images/4.jpg";
import teacherpic from "../../Images/academy.png";
 import crypto from '../../Images/crypto.jpg';
const Cryptodetails = () => {
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
                                    <div
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
                                        <div className="carousel-item">
                                          <img
                                            src={makeup4}
                                            className="d-block w-100"
                                            alt="Slide 4"
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
                                    </div> 
                
                                    {/* Course Name */}
                                    <div className="card-body text-start mt-3">
                                      <div className="d-flex justify-content-between ">
                                        <h3 className="fw-bold"> The Crypto Trading Course</h3>
                                        <h4 className="fw-bold">11500/-</h4>
                                      </div>
                                      <div className="fw-bold h5">
                                        <i
                                          className="fa fa-location-arrow me-2"
                                          style={{ color: "goldenrod" }}
                                        ></i>
                                        Location : Sakshi Apartment, 6 no Road, H B Town, Sodepur, Kolkata, West Bengal 700110, India
                                      </div>
                                      <div className="fw-bold h5 ms-1">
                                        <i className="fa fa-phone me-2"></i>Contact No:
                                        +91 7980964516
                                      </div>
                                      <div className=" h4 fw-bold mb-3 mt-4">
                                          Other Details:
                                        </div>
                                      <div className="d-flex flex-column fw-bold">
                                          <div className="title">✓ Next Batch: October</div>
                                         
                                          <div className="title">✓  Duration: 8-10 Classes</div>
                                          {/* <div className="title">✓ Time: 12pm - 3pm</div> */}
                                          {/* <div className="title">
                                          ✓   500/- pay for seat booking ,Then due fees pay on 1st day & 3rd day
                                          </div> */}
                                          <div className="title">✓ ISO certification</div>
                                        </div>
                                      <div className="mt-4">
                                        <div className=" h4 fw-bold mb-3">
                                          This Course Includes:
                                        </div>
                                       
                                        <div className="course-list">
                                          <div className="course-item ">
                                            <span className="fw-bold">
                                               Fundamental Analysis
                                            </span>
                                          </div>
                                          <div className="course-item ">
                                            <span className="fw-bold">
                                            Trading fund management strategy
                                            </span>
                                          </div>
                                          <div className="course-item">
                                            <span className="fw-bold">
                                              Mining skill
                                            </span>
                                          </div>
                                          <div className="course-item">
                                            <span className="fw-bold">Portfolio management</span>
                                          </div>
                                        
                                        
                                          <div className="course-item ">
                                            <span className="fw-bold">Meme coin check list</span>
                                          </div>
                                          <div className="course-item ">
                                            <span className="fw-bold">Techniques of finding Gem Coins</span>
                                          </div>
                                          <div className="course-item">
                                            <span className="fw-bold">Liquidation strategy</span>
                                          </div>
                                          <div className="course-item">
                                            <span className="fw-bold">Spot Trading , Future Trading , Scalping Trading, Inter day Trading</span>
                                          </div>
                                          <div className="course-item">
                                            <span className="fw-bold">Technical Analysis</span>
                                          </div>
                                          </div>
                                        </div>
                                    </div>
                                  </div>
                                </div>
                                {/* Right Section */}
                                <div className="col-lg-4 col-12 col-sm-4">
                                  <div className="card">
                                    <img src={crypto} style={{borderRadius:"20px"}} />
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
                                        <span>Dipan Das</span>
                                        <br />
                                        <span className="text-muted ms-0">Crypto Trading Trainer</span>
                                      </div>
                                    </div>
                                    <div className="d-flex mt-4 justify-content-center mb-3">
                                    <a href="https://rzp.io/rzp/tUfu0Wl" target="_blank">
                                      <button type="button" className="coming w-100">
                                        Register Now
                                      </button>
                                      </a>
                                    </div>
                                  </div>
                                  <div className="mt-5">
                        <div className="card p-2" style={{ borderRadius: "20px" }}>
                          <h5 className="fw-bold mb-2 text-center">Find Us Here</h5>
                         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.898520622346!2d88.39163437476068!3d22.694821328480746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x65cb2733ae66dbb9%3A0x2fce9f618eb489f9!2sSynthosphere%20Technologies!5e0!3m2!1sen!2sin!4v1760011278110!5m2!1sen!2sin"
                          width="100%"
                            height="200"
                            style={{ border: 0, borderRadius: "15px" }} loading="lazy" referrerpolicy="no-referrer-when-downgrade">
    
                        </iframe>
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

export default Cryptodetails
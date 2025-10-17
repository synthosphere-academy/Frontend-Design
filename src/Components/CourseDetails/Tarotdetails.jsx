import React from "react";
import makeup1 from "../../Images/makeup1.jpg";
import makeup2 from "../../Images/makeup2.jpg";
import makeup3 from "../../Images/makeup3.jpg";
import makeupposter from "../../Images/mehendi.jpg";
import teacherpic from "../../Images/academy.png";
import tarot from "../../Images/tarot.jpg";
import "./coursedetails.css";
const Tarotdetails = () => {
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
                        <h3 className="fw-bold">Tarot Card Reading Course</h3>
                        <h4 className="fw-bold">4500/-</h4>
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
                        9330507516
                      </div>
                      <div className=" h4 fw-bold mb-3 mt-4">
                        Other Details:
                      </div>
                      <div className="d-flex flex-column fw-bold">
                        <div className="title">✓ Next Batch: September</div>
                        <div className="title">
                          ✓ Duration: 3 months course (Weekly 1 class)
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
                              History of tarot cards
                            </span>
                          </div>
                          <div className="course-item ">
                            <span className="fw-bold">
                              Major arcana in details
                            </span>
                          </div>
                          <div className="course-item">
                            <span className="fw-bold">
                              Minor arcana in details
                            </span>
                          </div>
                          <div className="course-item">
                            <span className="fw-bold">
                              Preparation needed to become a tarot reader
                            </span>
                          </div>
                          <div className="course-item">
                            <span className="fw-bold">
                              Pros and cons of tarot reading
                            </span>
                          </div>
                          <div className="course-item">
                            <span className="fw-bold">
                              How to handle clients & Alter setting
                            </span>
                          </div>
                          <div className="course-item">
                            <span className="fw-bold">
                              Spreads of tarot card
                            </span>
                          </div>
                          <div className="course-item">
                            <span className="fw-bold">
                              Bonus - Numerology, crystal healing and Astro
                              Tarot
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Right Section */}
                <div className="col-lg-4 col-12 col-sm-4">
                  <div className="card">
                    <img src={tarot} style={{ borderRadius: "20px" }} />
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
                        <span>Priyadarshini Kanjilal</span>
                        <br />
                        <span className="text-muted ms-0">
                          {" "}
                          Tarot card reader
                        </span>
                      </div>
                    </div>
                    <div className="d-flex mt-4 justify-content-center mb-3">
                      <a href="https://rzp.io/rzp/L60jsj9o" target="_blank">
                        <button type="button" className="coming w-100">
                          Register Now
                        </button>
                      </a>
                    </div>
                  </div>
                  {/* Map Box */}
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
  );
};

export default Tarotdetails;

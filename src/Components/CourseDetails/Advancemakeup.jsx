import React from "react";
import makeup1 from "../../Images/makeup1.jpg";
import makeup2 from "../../Images/makeup2.jpg";
import makeup3 from "../../Images/makeup3.jpg";
import makeupposter from "../../Images/mehendi.jpg";
import teacherpic from "../../Images/academy.png";
import advancemakeup from "../../Images/advancemakeup.jpg";
import "./coursedetails.css";
const Advancemakeup = () => {
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
                      <div
                        className="carousel-inner"
                        style={{ borderRadius: "20px" }}
                      >
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

                      {/* Controls */}
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
                        <h3 className="fw-bold">The Advance Makeup Course</h3>
                        <h4 className="fw-bold">9000/-</h4>
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
                        8910664335
                      </div>
                      <div className=" h4 fw-bold mb-3 mt-4">
                        Other Details:
                      </div>
                      <div className="d-flex flex-column fw-bold">
                        <div className="title">✓ Next Batch: September</div>
                        <div className="title">
                          ✓ Duration: 16 Days (2days in a week)
                        </div>

                        <div className="title">✓ Time: 11a.m - 3p.m</div>
                        <div className="title">
                          ✓ 2,000/- pay for seat booking
                        </div>
                        <div className="title">✓ ISO certification</div>
                      </div>
                      <div className="mt-4">
                        <div className="h4 fw-bold mb-3">
                            Demostration
                        </div>
                      </div>
                      <div className="d-flex">
                        <div className="course-list w-50">
                          <div className="course-item ">
                            <span className="fw-bold">
                              Bengali Bridal makeup
                            </span>
                          </div>
                          <div className="course-item ">
                            <span className="fw-bold">
                             Reception makeup
                            </span>
                          </div>
                          <div className="course-item">
                            <span className="fw-bold">
                             Haldi makeup
                            </span>
                          </div>
                          <div className="course-item">
                            <span className="fw-bold">
                              Fashion Makeup
                            </span>
                          </div>
                          <div className="course-item">
                            <span className="fw-bold">
                              Utra HD Glass finish Makeup
                            </span>
                          </div>
                        </div>
                        <div className="course-list ms-3 w-50">
                          <div className="course-item ">
                            <span className="fw-bold">
                              HD Makeup
                            </span>
                          </div>
                          <div className="course-item ">
                            <span className="fw-bold">
                             Nude Makeup
                            </span>
                          </div>
                          <div className="course-item">
                            <span className="fw-bold">
                             Self Makeup
                            </span>
                          </div>
                          <div className="course-item">
                            <span className="fw-bold">
                              Waterproof Makeup
                            </span>
                          </div>
                          <div className="course-item">
                            <span className="fw-bold">
                              Muslim bridal look
                            </span>
                          </div>
                            <div className="course-item">
                                <span className="fw-bold">
                                Non Bengali bridal look
                                </span></div>
                        </div>
                        </div>
                      <div className="mt-4">
                        <div className=" h4 fw-bold mb-3">
                          This Course Includes:
                        </div>

                        <div className="course-list ">
                          <div className="course-item ">
                            <span className="fw-bold">
                            Different types of eye makeup
                            </span>
                          </div>
                          <div className="course-item ">
                            <span className="fw-bold">
                              How to choose and apply moisturiser, primer,
                              foundation
                            </span>
                          </div>
                          <div className="course-item">
                            <span className="fw-bold">
                             How to correct and conceal
                            </span>
                          </div>
                          <div className="course-item">
                            <span className="fw-bold">
                              Handling different types of makeup brushes
                            </span>
                          </div>
                           <div className="course-item">
                            <span className="fw-bold">
                            Different type of hair styling
                            </span>
                          </div>
                           <div className="course-item">
                            <span className="fw-bold">
                             Different type of saree draping
                            </span>
                          </div>
                           <div className="course-item">
                            <span className="fw-bold">
                           Practice class
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
                    <img src={advancemakeup} style={{ borderRadius: "20px" }} />
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
                        <span>Reeya Saha</span>
                        <br />
                        <span className="text-muted ms-0">Makeup artist</span>
                      </div>
                    </div>
                    <div className="d-flex mt-4 justify-content-center mb-3">
                      <a href="https://rzp.io/rzp/sstamkh" target="_blank">
                        <button type="button" className="coming w-100">
                          Register Now
                        </button>
                      </a>
                    </div>
                  </div>
                  <div className="mt-5">
                    <div className="card p-2" style={{ borderRadius: "20px" }}>
                      <h5 className="fw-bold mb-2 text-center">Find Us Here</h5>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1068.0641966523451!2d88.39421028525857!3d22.694961104933775!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89d1c30bef1af%3A0x1df41c4892785b87!2sUDBHAB%20MARKETING%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sus!4v1756028505028!5m2!1sen!2sus" 
                     allowfullscreen=""
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

export default Advancemakeup;

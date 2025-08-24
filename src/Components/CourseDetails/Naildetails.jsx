import React from "react";
import makeup1 from "../../Images/makeup1.jpg";
import makeup2 from "../../Images/makeup2.jpg";
import makeup3 from "../../Images/makeup3.jpg";
import nailartposter from "../../Images/shilpi_nail.jpg";
import teacherpic from "../../Images/academy.png";
import "./coursedetails.css";
const Naildetails = () => {
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
                        <h3 className="fw-bold"> The Nail Extension Course</h3>
                        <h4 className="fw-bold">7000/-</h4>
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
                        8697177611
                      </div>
                      <div className=" h4 fw-bold mb-3 mt-4">
                        Other Details:
                      </div>
                      <div className="d-flex flex-column fw-bold">
                        <div className="title">✓ Next Batch: September</div>

                        <div className="title">✓ Time - 12pm - 3pm</div>
                        <div className="title">
                          ✓ Duration: 10 days & 1 day for exam
                        </div>
                        <div className="title">✓ Seat Booking: ₹1,000/-</div>
                        <div className="title">✓ ISO certification</div>
                      </div>
                      <div className="mt-4">
                        <div className=" h4 fw-bold mb-3">
                          This Course Includes:
                        </div>
                        <div className="h5 ms-2 fw-bold">Basic:</div>
                        <div className="d-flex flex-wrap flex-column flex-md-row gap-1">
                          <div className="course-list w-25">
                            <div className="course-item ">
                              <span className="fw-bold">
                                Glitter application
                              </span>
                            </div>
                            <div className="course-item ">
                              <span className="fw-bold">Stone application</span>
                            </div>
                            <div className="course-item">
                              <span className="fw-bold">chrome variety</span>
                            </div>
                            <div className="course-item">
                              <span className="fw-bold">Marble art </span>
                            </div>
                          </div>
                          <div className="course-list w-25">
                            <div className="course-item ">
                              <span className="fw-bold">Dry flowers art</span>
                            </div>
                            <div className="course-item ">
                              <span className="fw-bold">Brush art</span>
                            </div>
                            <div className="course-item">
                              <span className="fw-bold">Blooming rose art</span>
                            </div>
                            <div className="course-item">
                              <span className="fw-bold">French art</span>
                            </div>
                          </div>
                          <div className="course-list w-25">
                            <div className="course-item ">
                              <span className="fw-bold">Water decal</span>
                            </div>
                            <div className="course-item ">
                              <span className="fw-bold">Thread art</span>
                            </div>
                            <div className="course-item">
                              <span className="fw-bold">
                                Variety of ombre art
                              </span>
                            </div>
                            <div className="course-item">
                              <span className="fw-bold">Foil art</span>
                            </div>
                          </div>
                          <div className="course-list w-25">
                            <div className="course-item ">
                              <span className="fw-bold">Myler application</span>
                            </div>
                            <div className="course-item ">
                              <span className="fw-bold">Cat eye art</span>
                            </div>
                            <div className="course-item">
                              <span className="fw-bold">
                                Varitey of smoke art
                              </span>
                            </div>
                            <div className="course-item">
                              <span className="fw-bold">
                                Stickers application & transfer foil
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="h5 ms-2 fw-bold mt-3">Advance :</div>
                        <div className="course-list">
                          <div className="course-item ">
                            <span className="fw-bold">
                              Airbrush Nail (Variety){" "}
                            </span>
                          </div>
                          <div className="course-item ">
                            <span className="fw-bold">
                              Variety of marble art with acralirc
                            </span>
                          </div>
                          <div className="course-item">
                            <span className="fw-bold">Advance french</span>
                          </div>
                          <div className="course-item">
                            <span className="fw-bold">
                              3D flower(variety of flowers)
                            </span>
                          </div>
                          <div className="course-item">
                            <span className="fw-bold">
                              5d flower & Aqua ink art (variety)
                            </span>
                          </div>
                        </div>
                        <div className="h5 ms-2 fw-bold my-4">
                          Type of Nail Extension:
                        </div>
                        <div className="course-list">
                          <div className="course-item ">
                            <span className="fw-bold"> Gel extension </span>
                          </div>
                          <div className="course-item ">
                            <span className="fw-bold"> Acrylic extension</span>
                          </div>
                          <div className="course-item ">
                            <span className="fw-bold"> Poly gel</span>
                          </div>
                          <div className="course-item ">
                            <span className="fw-bold">Soft gel</span>
                          </div>
                          <div className="course-item ">
                            <span className="fw-bold">Foam extension</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Right Section */}
                <div className="col-lg-4 col-12 col-sm-4">
                  <div className="card">
                    <img src={nailartposter} style={{ borderRadius: "20px" }} />
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
                        <span>Shilpi Saha</span>
                        <br />
                        <span className="text-muted ms-0">Nail artist</span>
                      </div>
                    </div>
                    <div className="d-flex mt-4 justify-content-center mb-3">
                      <a
                        href="https://pages.razorpay.com/pl_OVKZy7xwBG65vY/view"
                        target="_blank"
                      >
                        <button
                          type="button"
                          className="coming w-100 text-center"
                        >
                          Payment link
                        </button>
                      </a>
                    </div>
                  </div>
                  {/* Map Box */}
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

export default Naildetails;

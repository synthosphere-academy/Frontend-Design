import pic from "../Images/courseimage.png";
import "../Css/Course.css";
import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import icon from "../Images/Search.svg";
import lessonicon from "../Images/lesson.svg";
import teacherpic from "../Images/academy.png";

import music from "../Images/music.jpg";
import music2 from "../Images/music_banner.jpg";
import nailphoto from "../Images/shilpi_nail.jpg";
import music3 from "../Images/guitar.jpg";
 import music5 from "../Images/vocal.jpg";
import crypto from "../Images/crypto.jpg";
import "../Css/Mostpopularcourse.css";
// import music5 from "../Images/Tanu_eye.jpg";

import mehendi from "../Images/mehendi.jpg";
import vocal from "../Images/vocalmusic.jpg";
import advancemakeup from "../Images/advancemakeup.jpg";
import nailphoto1 from "../Images/shilpi_nail.jpg";
 import "../Css/Mostpopularcourse.css";
 import music4 from "../Images/Tanu_eye.jpg";
  import makeup from "../Images/makeupcourse.jpg"; 
   import tarot from "../Images/tarot.jpg";
//  import vocal from "../Images/vocalmusic.jpg";

  import makeup1 from "../Images/Promakeup.jpg";

function Courses() {

  const handleInputfieldChange = (e) => {
    setQuery(e.target.value);
  };
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;

 

  const redercoursecard = (coursedata) => {
    return (
      <div className="col" key={coursedata._id}>
        <div className="card h-100 d-flex flex-column">
          <img
            className="card-img-top cardimage "
            src={coursedata.image}
            alt="Sample photo"
          />
          <div className="card-body flex-grow-1">
            <div className="row">
              <div className="col-6">
                <img src={lessonicon} width={20} height={20} />
                <span className="ms-2">{coursedata.total_video} videos</span>
              </div>

              <div className="col-6 text-end d-flex flex-column">
                <span className=" h5 fw-bold">₹{coursedata.course_price}</span>
                <span className="text-muted" style={{ marginTop: "-10px" }}>
                  (Including tax)
                </span>
              </div>
            </div>
            <h5 className="mt-3">{coursedata.course_name}</h5>
            <span className="fw-bold">{coursedata.averageRating}</span>
            <span className="starreview ms-2">
              {renderStars(coursedata.averageRating)}
            </span>
            <hr />
            <div className="row">
              <div className="col-2">
                <img
                  className="rounded-circle"
                  width={40}
                  height={40}
                  src={teacherpic}
                />
              </div>
              <div className="col-10 mt-2">
                <span>{coursedata.teacher_name}</span>
                <br />
                <span className="text-muted">{coursedata.teacher_dept}</span>
              </div>
            </div>
          </div>
          <div className=" card-footer row mt-3">
            <div className="col-12 text-center">
              <a
                className="buttonlearnmore"
                href={`/coursedetails/${coursedata._id}`}
              >
                <button className="learnmore w-75 ">Buy Now</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div>
        <div className="container mt-5 " id="containerbox">
          <div className="row">
            <div className="col-lg-6">
              <div className="ms-4">
                <div className="mt-5 ">
                  <h4 className="display-4 text fw-bold">
                    Many Useful Courses For you
                  </h4>
                  <br />
                  <span className="para ">
                    Explore a myriad of courses designed to enhance your
                    understanding of synthesis. From foundational principles to
                    advanced techniques, our offerings cater to diverse skill
                    levels, ensuring a comprehensive learning experience in the
                    dynamic realm of sound design and electronic music
                    production.
                  </span>
                  <br />
                  <br />
                </div>
              
              </div>
            </div>
            <div className="col-lg-6">
              <img className="img-fluid" src={pic} alt="noimage" />
            </div>
          </div>
        </div>
      </div>

      <div className="text-center display-4 fw-bold mt-5">All Courses</div>

      <div className="container py-5 cardcontainer">
      <div className="h2 fw-bold mb-3">Physical Courses:</div>
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
                                <button type="button" className="coming w-75">
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
                                <button type="button" className="coming w-75">
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
                                <button type="button" className="coming w-75">
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
                                <button type="button" className="coming w-75">
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
                              Basic To Advance Vocal Course
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
                                  ✓ Seat Booking: ₹2,000/-
                                </div>
                                <div className="title">✓ ISO certification</div>
                              </div>
                              <div className="d-flex mt-4 justify-content-center">
                                <button type="button" className="coming w-75">
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
      <div className="container py-5 cardcontainer ">
        <h4 className="fw-bold h2">Online courses:</h4>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          <div>
            <div className="card h-100 d-flex flex-column comingcard">
              <img
                className="card-img-top cardimage "
                src={music}
                alt="Sample photo"
              />
              <div className="card-body flex-grow-1">
                <h3 className="mt-1">Music production course</h3>
                <hr />
                <div className="row">
                  <div className="col-2">
                    <img
                      className="rounded-circle"
                      width={40}
                      height={40}
                      src={teacherpic}
                    />
                  </div>
                  <div className="col-10 mt-2">
                    <span>Kushal Saha</span>
                    <br />
                    <span className="text-muted">Audio engineer</span>
                  </div>
                </div>
              </div>
              <div className="card-footer row">
                <div className="col-12 text-center blink">
                  <a>
                    <button type="button" className="coming w-75">
                      Coming soon
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="card h-100 d-flex flex-column comingcard">
              <img
                className="card-img-top cardimage "
                src={music2}
                alt="Sample photo"
              />
              <div className="card-body flex-grow-1">
                <h3 className="mt-1">The music course</h3>
                <hr />
                <div className="row">
                  <div className="col-2">
                    <img
                      className="rounded-circle"
                      width={40}
                      height={40}
                      src={teacherpic}
                    />
                  </div>
                  <div className="col-10 mt-2">
                    <span>Sayamdeep Chakraborty</span>
                    <br />
                    <span className="text-muted">Violin teacher</span>
                  </div>
                </div>
              </div>
              <div className="card-footer row">
                <div className="col-12 text-center blink">
                  <a>
                    <button type="button" className="coming w-75">
                      Coming soon
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="card h-100 d-flex flex-column comingcard">
              <img
                className="card-img-top cardimage "
                src={nailphoto1}
                alt="Sample photo"
              />
              <div className="card-body flex-grow-1">
                <h3 className="mt-1">The complete nail art course</h3>
                <hr />
                <div className="row">
                  <div className="col-2">
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
                    <span className="text-muted">Nail technician</span>
                  </div>
                </div>
              </div>
              <div className="card-footer row">
                <div className="col-12 text-center blink">
                  <a>
                    <button type="button" className="coming w-75">
                      Coming soon
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="card h-100 d-flex flex-column comingcard">
              <img
                className="card-img-top cardimage "
                src={music3}
                alt="Sample photo"
              />
              <div className="card-body flex-grow-1">
                <h3 className="mt-1">Guitar beginner course</h3>
                <hr />
                <div className="row">
                  <div className="col-2">
                    <img
                      className="rounded-circle"
                      width={40}
                      height={40}
                      src={teacherpic}
                    />
                  </div>
                  <div className="col-10 mt-2">
                    <span>Madurjoo Mukherjee</span>
                    <br />
                    <span className="text-muted">Guitar teacher</span>
                  </div>
                </div>
              </div>
              <div className="card-footer row">
                <div className="col-12 text-center blink">
                  <a>
                    <button type="button" className="coming w-75">
                      Coming soon
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="card h-100 d-flex flex-column comingcard">
              <img
                className="card-img-top cardimage "
                src={music5}
                alt="Sample photo"
              />
              <div className="card-body flex-grow-1">
                <h3 className="mt-1">The vocal training course</h3>
                <hr />
                <div className="row">
                  <div className="col-2">
                    <img
                      className="rounded-circle"
                      width={40}
                      height={40}
                      src={teacherpic}
                    />
                  </div>
                  <div className="col-10 mt-2">
                    <span>Biplab Chakraborty</span>
                    <br />
                    <span className="text-muted">Vocal trainer</span>
                  </div>
                </div>
              </div>
              <div className="card-footer row">
                <div className="col-12 text-center blink">
                  <a>
                    <button type="button" className="coming w-75">
                      Coming soon
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Courses;

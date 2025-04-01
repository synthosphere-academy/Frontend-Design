import pic from "../Images/courseimage.png";
import "../Css/Course.css";
import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import icon from "../Images/Search.svg";
import lessonicon from "../Images/lesson.svg";
import teacherpic from "../Images/academy.png";

import music from "../Images/music.jpg";
import music2 from "../Images/music_banner.jpg";
import nailphoto from "../Images/nailart.jpg";
import music3 from "../Images/guitar.jpg";
import music4 from "../Images/vocal.jpg";
import nailphoto2 from "../Images/shilpi_nail.jpg";
import "../Css/Mostpopularcourse.css";
import music5 from "../Images/Tanu_eye.jpg";
import makeup from "../Images/makeup.jpg";
import mehendi from "../Images/mehendi.jpg";
import tarot from "../Images/tarot.jpg";
import vocal from "../Images/vocalmusic.jpg";
function Courses() {
  const [query, setQuery] = useState("");
  const [courses, setCourses] = useState([]);
  const handleInputfieldChange = (e) => {
    setQuery(e.target.value);
  };
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;

  const [coursedata, setcoursedata] = useState([]);

  //for search input
  useEffect(() => {
    const fetchCourses = async () => {
      if (query.length > 0) {
        document.getElementById("searchresult").style.display = "block";
        axios
          .get(ROOT_URL + `/api/v1/searchcourse?q=${query}`)
          .then((response) => {
            if (response.data.length === 0) {
              setCourses(["No_course_found"]);
            } else {
              setCourses(response.data);
              console.log(response.data);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        document.getElementById("searchresult").style.display = "none";
        setCourses([]);
      }
    };
    const debounceFetch = setTimeout(fetchCourses, 300);
    return () => clearTimeout(debounceFetch);
  }, [query]);
  //star review
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} style={{ color: i < rating ? "gold" : "lightgray" }}>
          {i < rating ? "★" : "☆"}
        </span>
      );
    }
    return stars;
  };
  //end search input
  useEffect(() => {
    if (!coursedata.length) {
      axios
        .get(ROOT_URL + "/api/v1/get_course")
        .then((coursedata) => setcoursedata(coursedata.data.data))
        .catch((err) => console.log(err));
    }
  }, [coursedata]);
  const memoizedCourseData = useMemo(() => coursedata, [coursedata]);

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
                <div className="search">
                  <img className="searchicon" src={icon} width={20} />
                  {/* <i className="fa fa-search mt-1 ms-3"></i> */}
                  <input
                    type="text"
                    className="form-control  searchcourseinput"
                    placeholder="Find a course?"
                    value={query}
                    onChange={handleInputfieldChange}
                  />

                  <button className=" searchbutton">Search course</button>
                  <ul className="inputresult list-unstyled" id="searchresult">
                    {courses.map((course) => (
                      <a href={`/coursedetails/${course._id}`}>
                        <li className="p-2" key={course._id}>
                          {course === "No_course_found"
                            ? "No course found"
                            : course.course_name}
                        </li>
                      </a>
                    ))}
                  </ul>
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
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 g-4 ">
          <div>
            {/* 1st */}
            <div className="card h-100 d-flex flex-column comingcard">
              <img
                className="card-img-top cardimage "
                src={nailphoto2}
                alt="Sample photo"
              />
              <div className="card-body flex-grow-1">
                <h3 className="mt-1 fw-bold">Nail extension Course</h3>
                <div className="d-flex justify-content-between">
                  <span className="starreview ms-2" style={{ color: "gold" }}>
                    <span className="text-dark">5</span>★★★★★
                  </span>

                  <h5 className="mt-1 text-end">7000/-(With product)</h5>
                </div>
                <hr />
                <div style={{ textAlign: "justify" }}>
                  ⭐⭐ 24th Batch will start from : April
                  <br />
                  <b>
                    📍Location : 7 no. Road, Jagatmata apartment, HB Town,
                    Sodepur, Kolkata
                  </b>
                  <br />
                  <b>
                    ⭐1000 pay for seat booking , Then due fees pay on 1st day
                    Duration 10 days & 1 day for exam
                  </b>
                  <br />
                  ISO certification Classes - (as per student choice) Time -
                  (12pm - 3pm)
                  <br />
                  💅COURSE DETAILS 💅 ✅ Theory ✅Type of extension 🌹)Gel
                  extension 🌹) Acrylic extension 🌹) Poly gel extension 🌹)
                  Soft Gel extension 🌹) Foam extension ✅Gel overlay ✅ Remover
                  ✅Nails Refilling
                  <br />
                  Basic: <br />
                  ⭐Glitter application ⭐stone application ⭐chrome variety
                  <br />
                  ⭐Marble art ⭐Dry flowers art ⭐brush art <br />
                  ⭐Blooming rose art ⭐French art ⭐Water decal <br />
                  ⭐Thread art⭐Variety of ombre art ⭐Foil art <br />
                  ⭐Myler application ⭐Cat eye art ⭐Varitey of smoke art{" "}
                  <br />
                  ⭐Stickers application ⭐transfer foil
                  <br />
                  Advance:
                  <br /> ⭐️ AIRBRUSH NAIL (Variety) ⭐ Variety of marble art
                  with acralirc
                  <br /> ⭐ Advance french ⭐3D flower(variety of flowers)
                  <br /> ⭐5d flower ⭐Aqua ink art (variety) etc.
                </div>
                <div className="row">
                  <div className="col-lg-5">
                    <div className="row">
                      <div className="col-2 mt-2">
                        <img
                          className="rounded-circle"
                          width={40}
                          height={40}
                          src={teacherpic}
                        />
                      </div>
                      <div className="col-10 mt-2">
                        <span className="ms-2">Shilpi Saha</span>
                        <br />
                        <span className="text-muted ms-2">Nail artist</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7 fw-bold mt-3">
                    {" "}
                    💅For admission call/wts 8697177611
                  </div>
                </div>
              </div>
              <div className="card-footer row">
                <div className="text-dark text-center fw-bold ">
                  Payment link:
                </div>
                <div className="col-12 text-center ">
                  <a
                    href="https://pages.razorpay.com/pl_OVKZy7xwBG65vY/view"
                    target="_blank"
                  >
                    <button type="button" className="coming">
                      https://pages.razorpay.com/pl_OVKZy7xwBG65vY/view
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* 2nd */}
          <div>
            <div className="card h-100 d-flex flex-column comingcard">
              <img
                className="card-img-top cardimage "
                src={music5}
                alt="Sample photo"
              />
              <div className="card-body flex-grow-1">
                <h3 className="mt-1 fw-bold">Eyelash extension Course</h3>
                <div className="d-flex justify-content-between">
                  <span className="starreview ms-2" style={{ color: "gold" }}>
                    <span className="text-dark">5</span>★★★★★
                  </span>

                  <h5 className="mt-1 text-end">3000/-(Without product)</h5>
                </div>
                <hr />
                <div>
                  ⭐⭐1st Batch will start from : 2nd December <br />
                  <b>
                    📍Location : 7 no. Road,Jagatmata apartment ground floor, HB
                    Town, Sodepur, Kolkata
                  </b>
                  <br />
                  <b>
                    ⭐500 pay for seat booking ,Then due fees pay on 1st day &
                    3rd day of class
                  </b>{" "}
                  <br /> Duration 5days & 1 day for exam, ISO certification
                  Classes - (as per student choice) Time - (12pm - 3pm)
                  <br />
                  <br />
                  COURSE DETAILS BASIC TO ADVANCE ( TOPIC ) <br /> ⭐ Product
                  knowledge natural looking extension <br />
                  ⭐Lash extension kit <br />⭐ Lash combination process
                  <br /> ⭐ Safety & Prevention
                  <br />⭐ Application Removal
                  <br /> ⭐ Lash Refilling Process <br />⭐ ISO Certificate will
                  be provided
                </div>
                <div className="row">
                  <div className="col-lg-5">
                    <div className="row">
                      <div className="col-2 mt-2">
                        <img
                          className="rounded-circle"
                          width={40}
                          height={40}
                          src={teacherpic}
                        />
                      </div>
                      <div className="col-10 mt-2">
                        <span className="ms-2">Tanusree Das</span>
                        <br />
                        <span className="text-muted ms-2">Eyelash artist</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7 fw-bold mt-3">
                    ⭐ For admission call/wts 9073582559
                  </div>
                </div>
              </div>
              <div className="card-footer row">
                <div className="text-dark text-center fw-bold ">
                  Payment link:
                </div>
                <div className="col-12 text-center">
                  <a href="https://rzp.io/rzp/nUDOa2l" target="_blank">
                    <button type="button" className="coming w-75">
                      https://rzp.io/rzp/nUDOa2l
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* 3rd */}
          <div>
            <div className="card h-100 d-flex flex-column comingcard">
              <img
                className="card-img-top cardimage "
                src={makeup}
                alt="Sample photo"
              />
              <div className="card-body flex-grow-1">
                <h3 className="mt-1 fw-bold">Makeup master Course</h3>
                <div className="d-flex justify-content-between">
                  <span className="starreview ms-2" style={{ color: "gold" }}>
                    <span className="text-dark">5</span>★★★★★
                  </span>

                  <h5 className="mt-1 text-end">8000/-</h5>
                </div>
                <hr />
                <div>
                  ⭐ ⭐ Batch Starts: 16th April 2025
                  <br />
                  ⭐Seat Booking: ₹2,000/-
                  <br />
                  <b>
                    📍Location : 7 no. Road, Jagatmata apartment ground floor,
                    HB Town, Sodepur, Kolkata
                  </b>
                  <br />
                  ⭐Learn Makeup Theory & Face Structure
                  <br />⭐ Master Skin Tones & the Color Wheel <br />⭐
                  Essential Makeup Tools & Techniques
                  <br /> ⭐ Perfect Blending & Dabbing Methods <br />⭐ HD &
                  Non-HD Makeup Procedures <br />⭐ Different Types of Makeovers
                  & Solutions
                </div>
                <div className="row">
                  <div className="col-lg-5">
                    <div className="row">
                      <div className="col-2 mt-2">
                        <img
                          className="rounded-circle"
                          width={40}
                          height={40}
                          src={teacherpic}
                        />
                      </div>
                      <div className="col-10 mt-2">
                        <span className="ms-2">Monalisa Roy</span>
                        <br />
                        <span className="text-muted ms-2">Makeup artist</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7 fw-bold mt-3">
                    ⭐ For admission call/wts 91236 70080
                  </div>
                </div>
              </div>
              <div className="card-footer row">
                <div className="text-dark text-center fw-bold ">
                  Payment link:
                </div>
                <div className="col-12 text-center">
                  <a href="https://rzp.io/rzp/dSAeWRO" target="_blank">
                    <button type="button" className="coming w-75">
                      https://rzp.io/rzp/dSAeWRO
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* 4th */}

          <div>
            <div className="card h-100 d-flex flex-column comingcard">
              <img
                className="card-img-top cardimage "
                src={mehendi}
                alt="Sample photo"
              />
              <div className="card-body flex-grow-1">
                <h3 className="mt-1 fw-bold">
                  Basic To Advance Bridal Mehendi Course
                </h3>
                <div className="d-flex justify-content-between">
                  <span className="starreview ms-2" style={{ color: "gold" }}>
                    <span className="text-dark">5</span>★★★★★
                  </span>

                  <h5 className="mt-1 text-end">6000/-</h5>
                </div>
                <hr />
                <div>
                  {/* ⭐ ⭐ Batch Starts: 16th April 2025<br/> */}
                  ⭐Seat Booking: ₹1,000/-
                  <br />
                  <b>
                    📍Location : 7 no. Road, Jagatmata apartment ground floor,
                    HB Town, Sodepur, Kolkata
                  </b>
                  <br />
                  ⭐ Fees: Pay on the 1st & 3rd classes!
                  <br />
                  ⭐ ISO-Certified Course
                  <br />
                  ⭐Certificate provided To All Student!
                  <br />
                  ⭐ Duration: 12 days (3 days/week)
                  <br />
                  ⭐ Timings: Flexible, as per your choice
                  <br />
                  SPECIAL NOTE <br />
                  ⭐Products provided during the class
                  <br />
                  ⭐Certification upon successful completion
                  <br />
                  ⭐Perfect for beginners & aspiring mehendi artists
                </div>
                <div className="row">
                  <div className="col-lg-5">
                    <div className="row">
                      <div className="col-2 mt-2">
                        <img
                          className="rounded-circle"
                          width={40}
                          height={40}
                          src={teacherpic}
                        />
                      </div>
                      <div className="col-10 mt-2">
                        <span className="ms-2">Paramita Garani</span>
                        <br />
                        <span className="text-muted ms-2">Mehendi artist</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7 fw-bold mt-3 text-end">
                    <div>⭐For admission call: 8777042928</div>
                    <div>⭐Whatsapp: 86971 77611</div>
                  </div>
                </div>
              </div>
              <div className="card-footer row">
                <div className="text-dark text-center fw-bold ">
                  Payment link:
                </div>
                <div className="col-12 text-center">
                  <a href="https://rzp.io/rzp/18GiHBBV" target="_blank">
                    <button type="button" className="coming w-75">
                      https://rzp.io/rzp/18GiHBBV
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* 5th */}
          <div>
            <div className="card h-100 d-flex flex-column comingcard">
              <img
                className="card-img-top cardimage "
                src={tarot}
                alt="Sample photo"
              />
              <div className="card-body flex-grow-1">
                <h3 className="mt-1 fw-bold">Tarot card reading course</h3>
                <div className="d-flex justify-content-between">
                  <span className="starreview ms-2" style={{ color: "gold" }}>
                    {/* <span className="text-dark">5</span>★★★★★ */}
                  </span>

                  {/* <h5 className="mt-1 text-end">6000/-</h5> */}
                </div>
                <hr />
                <div></div>
                <div className="row">
                  <div className="col-lg-5">
                    <div className="row">
                      <div className="col-2 mt-2">
                        <img
                          className="rounded-circle"
                          width={40}
                          height={40}
                          src={teacherpic}
                        />
                      </div>
                      <div className="col-10 mt-2">
                        <span className="ms-2">Priadarshini Kanjilal</span>
                        <br />
                        <span className="text-muted ms-2">
                          Tarot card reader
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7 fw-bold mt-3 text-end">
                    <div>⭐For admission call: 9330507516</div>
                  </div>
                </div>
              </div>
              <div className="card-footer row">
                <div className="text-dark text-center fw-bold "></div>
                <div className="col-12 text-center blink">
                  <a target="_blank">
                    <button type="button" className="coming w-75">
                      Coming soon
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* 6th */}
          <div>
            <div className="card h-100 d-flex flex-column comingcard">
              <img
                className="card-img-top cardimage "
                src={vocal}
                alt="Sample photo"
              />
              <div className="card-body flex-grow-1">
                <h3 className="mt-1 fw-bold">Basic to advance vocal course</h3>
                <div className="d-flex justify-content-between">
                  <span className="starreview ms-2" style={{ color: "gold" }}>
                    {/* <span className="text-dark">5</span>★★★★★ */}
                  </span>

                  {/* <h5 className="mt-1 text-end">6000/-</h5> */}
                </div>
                <hr />
                <div></div>
                <div className="row">
                  <div className="col-lg-5">
                    <div className="row">
                      <div className="col-2 mt-2">
                        <img
                          className="rounded-circle"
                          width={40}
                          height={40}
                          src={teacherpic}
                        />
                      </div>
                      <div className="col-10 mt-2">
                        <span className="ms-2">Susmita Das</span>
                        <br />
                        <span className="text-muted ms-2">Singer</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7 fw-bold mt-3 text-end">
                    <div>⭐For admission call: 9051911544</div>
                  </div>
                </div>
              </div>
              <div className="card-footer row">
                <div className="text-dark text-center fw-bold "></div>
                <div className="col-12 text-center blink">
                  <a target="_blank">
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
                src={nailphoto}
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
                src={music4}
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

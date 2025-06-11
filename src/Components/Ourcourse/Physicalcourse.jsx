import React, { useState } from "react";

import teacherpic from "../../Images/academy.png";

import nailphoto from "../../Images/shilpi_nail.jpg";
import "../../Css/Mostpopularcourse.css";
import music4 from "../../Images/Tanu_eye.jpg";
import makeup from "../../Images/makeup.jpg";
import mehendi from "../../Images/mehendi.jpg";
import tarot from "../../Images/tarot.jpg";
import vocal from "../../Images/vocalmusic.jpg";
import advancemakeup from "../../Images/advancemakeup.jpg";

function Physicalcourse() {
  return (
    <>
      <div className="mostpopular">
        <div className="container py-5">
          <div className="text-center display-5 fw-bold mt-4">
            All Physical Courses
          </div>

          <div className="container py-5 cardcontainer">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 g-4 ">
              <div>
                {/* 1st */}
                <div className="card h-100 d-flex flex-column comingcard">
                  <img
                    className="card-img-top cardimage "
                    src={nailphoto}
                    alt="Sample photo"
                  />
                  <div className="card-body flex-grow-1">
                    <h3 className="mt-1 fw-bold">The Nail Extension Course</h3>
                    <div className="d-flex justify-content-between">
                      <span
                        className="starreview ms-2"
                        style={{ color: "gold" }}
                      >
                        <span className="text-dark">5</span>★★★★★
                      </span>

                      <h5 className="mt-1 text-end">7000/-(With product)</h5>
                    </div>
                    <hr />
                    <div style={{ textAlign: "justify" }}>
                      <b>⭐⭐ Next Batch will start from : July</b>
                      <br />
                       <b>
                        ⭐ Duration: 10 days & 1 day for exam
                      </b><br/>
                      <b>⭐ Time - 12pm - 3pm</b><br/>
                      <b>
                        ⭐ 1000/- pay for seat booking , Then due fees pay on 1st
                        day
                      </b>
                      <br />
                      <b> ⭐ ISO certification </b> <br/>
                      
                      <br />
                      <div className="row ">
                        <div className="col-lg-6">
                          <h5 className="fw-bold mt-3">🌟 Course Details</h5>
                          <ul className="list-unstyled ps-3">
                            <li>⭐ Theory</li>
                            <li>⭐ Gel overlay</li>
                            <li>⭐ Remover</li>
                            <li>⭐ Refilling</li>
                          </ul>
                        </div>
                        <div className=" col-lg-6">
                          <h5 className="fw-bold mt-3">
                            🌟 Types of Extensions
                          </h5>
                          <ul className="list-unstyled ps-3">
                            <li>⭐ Gel extension</li>
                            <li>⭐ Acrylic extension</li>
                            <li>⭐ Poly gel</li>
                            <li>⭐ Soft gel</li>
                            <li>⭐ Foam extension</li>
                          </ul>
                        </div>
                      </div>
                      <h5 className="fw-bold">Basic: </h5>
                      ⭐Glitter application ⭐stone application ⭐chrome variety
                      <br />
                      ⭐Marble art ⭐Dry flowers art ⭐brush art <br />
                      ⭐Blooming rose art ⭐French art ⭐Water decal <br />
                      ⭐Thread art⭐Variety of ombre art ⭐Foil art <br />
                      ⭐Myler application ⭐Cat eye art ⭐Varitey of smoke art{" "}
                      <br />
                      ⭐Stickers application ⭐transfer foil
                      <br />
                      <h5 className="fw-bold">Advance:</h5>
                      ⭐️ AIRBRUSH NAIL (Variety) ⭐ Variety of marble art with
                      acralirc
                      <br /> ⭐ Advance french ⭐3D flower(variety of flowers)
                      <br /> ⭐5d flower ⭐Aqua ink art (variety) etc.
                      <br />
                      <b>
                        📍Location : 7 no. Road, Jagatmata apartment, HB Town,
                        Sodepur, Kolkata
                      </b>
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
                    {/* <div className="text-dark text-center fw-bold ">
                      Payment link:
                    </div> */}
                    <div className="col-12 text-center ">
                      <a
                        href="https://pages.razorpay.com/pl_OVKZy7xwBG65vY/view"
                        target="_blank"
                      >
                        <button
                          type="button"
                          className="coming w-75 text-center"
                        >
                          Payment link
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
                    src={music4}
                    alt="Sample photo"
                  />
                  <div className="card-body flex-grow-1">
                    <h3 className="mt-1 fw-bold">The Eyelash Extension Course</h3>
                    <div className="d-flex justify-content-between">
                      <span
                        className="starreview ms-2"
                        style={{ color: "gold" }}
                      >
                        <span className="text-dark">5</span>★★★★★
                      </span>

                      <h5 className="mt-1 text-end">4000/-(Without product)</h5>
                    </div>
                    <hr />
                    <div>
                      <b>⭐⭐1st Batch will start from : 2nd December</b> <br />
                      <b>⭐ Duration: 5 days & 1 day for exam</b><br/>
                      <b>⭐ Time: 12pm - 3pm</b><br/>
                      <b>
                        ⭐500/- pay for seat booking ,Then due fees pay on 1st day
                        & 3rd day
                      </b>{" "}
                      <br /> 
                      <b>⭐ ISO certification </b>
                      <br />
                      <br />
                      <h5 className="fw-bold mt-3"> 🌟 Course Details</h5> ⭐
                      Product knowledge natural looking extension <br />
                      ⭐Lash extension kit <br />⭐ Lash combination process
                      <br /> ⭐ Safety & Prevention
                      <br />⭐ Application Removal
                      <br /> ⭐ Lash Refilling Process <br />
                      <br/>
                      <b>
                        📍Location : 7 no. Road, Jagatmata apartment, HB Town,
                        Sodepur, Kolkata
                      </b>
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
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
                            <span className="text-muted ms-2">
                              Eyelash artist
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-7 fw-bold mt-3">
                        ⭐ For admission call/wts 9073582559
                      </div>
                    </div>
                  </div>
                  <div className="card-footer row">
                    <div className="col-12 text-center">
                      <a href="https://rzp.io/rzp/nUDOa2l" target="_blank">
                        <button type="button" className="coming w-75">
                          Payment link
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
                    <h3 className="mt-1 fw-bold">The Makeup Master Course</h3>
                    <div className="d-flex justify-content-between">
                      <span
                        className="starreview ms-2"
                        style={{ color: "gold" }}
                      >
                        <span className="text-dark">5</span>★★★★★
                      </span>

                      <h5 className="mt-1 text-end">8000/-</h5>
                    </div>
                    <hr />
                    <div>
                      <b>⭐⭐ Batch Starts: 16th April 2025</b>
                      <br />
                      <b>⭐Seat Booking: ₹2,000/-</b>
                      <br />
                       <b>⭐ ISO certification </b>
                      <br />
                      <h5 className="fw-bold mt-3"> 🌟 Course Details</h5> 
                      ⭐Learn Makeup Theory & Face Structure
                      <br />⭐ Master Skin Tones & the Color Wheel <br />⭐
                      Essential Makeup Tools & Techniques
                      <br /> ⭐ Perfect Blending & Dabbing Methods <br />⭐ HD &
                      Non-HD Makeup Procedures <br />⭐ Different Types of
                      Makeovers & Solutions
                    </div><br/>
                    <b>
                      📍Location : 7 no. Road, Jagatmata apartment ground floor,
                      HB Town, Sodepur, Kolkata
                    </b>
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
                            <span className="text-muted ms-2">
                              Makeup artist
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-7 fw-bold mt-3">
                        ⭐ For admission call/wts 91236 70080
                      </div>
                    </div>
                  </div>
                  <div className="card-footer row">
                    <div className="col-12 text-center">
                      <a href="https://rzp.io/rzp/dSAeWRO" target="_blank">
                        <button type="button" className="coming w-75">
                          Payment link
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
                      <span
                        className="starreview ms-2"
                        style={{ color: "gold" }}
                      >
                        <span className="text-dark">5</span>★★★★★
                      </span>

                      <h5 className="mt-1 text-end">6000/-</h5>
                    </div>
                    <hr />
                    <div>
                    <b>⭐ Duration: 12 days (3 days/week)</b>

                      {/* ⭐ ⭐ Batch Starts: 16th April 2025<br/> */}
                      
                      <br />
                      <b>⭐ Timings: Flexible, as per your choice
                      </b><br/>
                      <b>⭐Seat Booking: ₹1,000/-</b><br/>
                     <b> ⭐ Fees Pay on the 1st & 3rd classes</b>
                      <br />
                      <b> ⭐ ISO certification </b>
                      <br />
                      
                      <br />
                      <h5 className="fw-bold mt-3">🌟 Course Details</h5>
                      ⭐ How to make henna paste and cones
                      
                      <br />
                      ⭐ Types of detailed mehendi as in mandala. Floral pattern
                      <br />
                      ⭐ How to make small details of Arabic mehendi 
                      <br />
                      ⭐Bride Groom with proportions demonstration on hands<br/>                    
                      
                    </div><br/>
                    <b>
                      📍Location : 7 no. Road, Jagatmata apartment ground floor,
                      HB Town, Sodepur, Kolkata
                    </b>
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
                            <span className="text-muted ms-2">
                              Mehendi artist
                            </span>
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
                    <div className="col-12 text-center">
                      <a href="https://rzp.io/rzp/18GiHBBV" target="_blank">
                        <button type="button" className="coming w-75">
                          Payment link
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
                    <h3 className="mt-1 fw-bold">Tarot Card Reading Course</h3>
                    <div className="d-flex justify-content-between">
                      <span
                        className="starreview ms-2"
                        style={{ color: "gold" }}
                      >
                        <span className="text-dark">5</span>★★★★★
                      </span>

                      <h5 className="mt-1 text-end">4500/-</h5>
                    </div>
                    <hr />
                    <div>
                    <b>
                        ⭐ Duration: 3 months course (Weekly 1 class) 
                      </b>
                      <br/>
                      <h5 className="fw-bold mt-3">🌟Course details</h5>
                      <div className="d-flex">
                      <div><ul className="list-unstyled ps-3">
                        <li>⭐History of tarot cards</li>
                        <li>⭐ Major arcana in details</li>
                        <li>⭐ Minor arcana in details</li>
                        <li>⭐How to charge, cleanse and store tarot cards</li>
                        <li>⭐Preparation needed to become a tarot reader</li>
                        <li>⭐Pros and cons of tarot reading</li>
                        <li>⭐How to handle clients</li>
                        <li>⭐Alter setting</li>
                        <li>⭐spreads of tarot card</li>
                        <li>⭐bonus - Numerology, crystal healing and Astro Tarot</li>
                      </ul></div>
                      </div>
                      <b>
                      📍Location : 7 no. Road, Jagatmata apartment ground floor,
                      HB Town, Sodepur, Kolkata
                    </b>
                    <br/><br/><br/><br/><br/><br/><br/>

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
                            <span className="ms-2">Priyadarshini Kanjilal</span>
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
                    <div className="col-12 text-center">
                      <a href="https://rzp.io/rzp/L60jsj9o" target="_blank">
                        <button type="button" className="coming w-75">
                          Payment link
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
                    src={advancemakeup}
                    alt="Sample photo"
                  />
                  <div className="card-body flex-grow-1">
                    <h3 className="mt-1 fw-bold">
                      The Advance Makeup Course
                    </h3>
                    <div className="d-flex justify-content-between">
                      <span
                        className="starreview ms-2"
                        style={{ color: "gold" }}
                      >
                        <span className="text-dark">5</span>★★★★★
                      </span>

                      <h5 className="mt-1 text-end">9000/-</h5>
                    </div>
                    <hr />
                    <div>
                      <b>
                        ⭐ Duration: 16 Days (2days in a week), 
                      </b>
                      <br />
                      <b>⭐Time: 11a.m - 3p.m{" "}</b><br/>
                      <b>⭐2,000/- pay for seat booking</b>
                      <br />
                      <h5 className="fw-bold mt-3">💄Demostration</h5>
                      <div className="d-flex">
                      <div><ul className="list-unstyled ps-3">
                        <li>⭐Bengali Bridal makeup</li>
                        <li>⭐Reception makeup</li>
                        <li>⭐Haldi  makeup</li>
                        <li>⭐Fashion Makeup</li>
                        <li>⭐Utra HD Glass finish Makeup</li>
                      </ul></div>
                      <div>
                      <ul className="list-unstyled ps-3">
                        <li>⭐HD Makeup </li>
                        <li>⭐Nude Makeup</li>
                        <li>⭐Self makeup</li>
                        <li>⭐Waterproof makeup</li>
                        <li>⭐Muslim bridal look</li>
                        <li>⭐Non Bengali bridal look</li>
                      </ul>
                      </div>
                      </div>
                      <h5 className="fw-bold mt-3">🌟Course details</h5>
                      <div className="d-flex">
                      <div><ul className="list-unstyled ps-3">
                        <li>⭐Different types of eye makeup</li>
                        <li>⭐how to choose and apply moisturiser, primer, foundation</li>
                        <li>⭐how to correct and conceal</li>
                        <li>⭐Handling different types of makeup brushes</li>
                        <li>⭐Different type of hair styling</li>
                        <li>⭐Different type of saree draping</li>
                        <li>⭐Practice class</li>
                      </ul></div>
                      </div>
                       <b>
                        📍Location : 7 no. Road, Jagatmata apartment, HB Town,
                        Sodepur, Kolkata
                      </b>
                      <br />
                     
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
                            <span className="ms-2">Reeya Saha</span>
                            <br />
                            <span className="text-muted ms-2">
                              Makeup artist
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-7 fw-bold mt-3 text-end">
                        <div>⭐For admission call:  8910664335</div>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer row">
                    <div className="text-dark text-center fw-bold "></div>
                    <div className="col-12 text-center">
                      <a href="https://rzp.io/rzp/sstamkh" target="_blank">
                        <button type="button" className="coming w-75">
                          Payment link
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* 7th */}
              <div>
                <div className="card h-100 d-flex flex-column comingcard">
                  <img
                    className="card-img-top cardimage "
                    src={vocal}
                    alt="Sample photo"
                  />
                  <div className="card-body flex-grow-1">
                    <h3 className="mt-1 fw-bold">
                      Basic To Advance Vocal Course
                    </h3>
                    <div className="d-flex justify-content-between">
                      <span
                        className="starreview ms-2"
                        style={{ color: "gold" }}
                      >
                        <span className="text-dark">5</span>★★★★★
                      </span>

                      <h5 className="mt-1 text-end">10000/-</h5>
                    </div>
                    <hr />
                    <div>
                    <b>
                        ⭐ Duration: 6 months
                      </b>
                      <br />
                      <b>
                        ⭐ Age: 15 yrs to above
                      </b>
                      <br />
                       <b>⭐ ISO certification </b>
                     
                      <div className="d-flex justify-content-between">
                      <div>
                      <h5 className="fw-bold mt-3">🌟Class Details</h5>
                      <ul className="list-unstyled ps-3">
                        <li>⭐Voice Grooming</li>
                        <li>⭐Rabindra Sangeet</li>
                        <li>⭐Folk Song</li>
                        <li>⭐Bengali & Hindi Song</li>
                        <li>⭐Track Music</li>
                        
                      </ul></div>
                      <div>
                      <h5 className="fw-bold mt-3">🎵Special Classes</h5>
                      <ul className="list-unstyled ps-3">
                        <li>⭐Microphone Management</li>
                        <li>⭐Stage Management & Performance</li>
                        <li>⭐Basic Make up & Dressing Sence</li>
                       
                        
                      </ul></div>
                      </div>
                      <b>
                        📍Location : 7 no. Road, Jagatmata apartment, HB Town,
                        Sodepur, Kolkata
                      </b>
                    
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
                    <div className="col-12 text-center">
                      <a href="https://rzp.io/rzp/8TsPFjdS" target="_blank">
                        <button type="button" className="coming w-75">
                          Payment link
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
  );
}

export default Physicalcourse;

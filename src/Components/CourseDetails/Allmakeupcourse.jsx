import React from 'react'
 import "../../Css/Mostpopularcourse.css";
  import makeup from "../../Images/makeupcourse.jpg"; 
  import advancemakeup from "../../Images/advancemakeup.jpg";
  import makeup1 from "../../Images/Promakeup.jpg";

const Allmakeupcourse = () => {
  return (
   <>
 <div className="container py-5 cardcontainer">
            <div className="row  g-4">
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
                              {/* ------------- */}
                              <div className="col-lg-4 col-md-6 col-sm-12 d-flex">
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
                                                                     
                                                                      <div className="title">✓ Duration: 16 Days (2 days in a week)</div>
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
            </div>
            </div>
   </>
  )
}

export default Allmakeupcourse
import React from 'react'

import teacherpic from "../../Images/academy.png";

import music from "../../Images/music.jpg";
import music2 from "../../Images/music_banner.jpg";
import nailphoto from "../../Images/nailart.jpg";
import music3 from "../../Images/guitar.jpg";
import music4 from "../../Images/vocal.jpg";
const Onlinecourse = () => {
  return (
    <>
     <div className="text-center display-5 fw-bold mt-5">All Online Courses</div>
         <div className="container py-5 cardcontainer ">
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
  )
}

export default Onlinecourse
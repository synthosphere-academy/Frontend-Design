import { useState, useEffect } from "react";
import axios from "axios";
import ReactPlayer from "react-player";
import { ROOT_URL } from "../Components/Localhost";
import "../Css/courseview.css";
const Courseview = () => {
  const [data, setData] = useState(null);
  const [coursedata, setcoursedata] = useState([]);
   const [videoSource, setVideoSource] = useState('https://player.vimeo.com/video/944794803?h=2e98c42f1c');

  const handleChapterClick = (event, newVideoSource) => {
    console.log(newVideoSource);
    setVideoSource(newVideoSource);
  };
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(ROOT_URL + "/get_course");
        setcoursedata(response.data.data);
        console.log(response.data.data);
      } catch (err) {
        setError(err);
      }
    };

    fetchCourses();
  }, []);
  // useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const response = await axios.get('https://v1.nocodeapi.com/souravbasak/vimeo/FMGQOaXQnIdOqCgf/videoInfo?video_id=944794803');
  //         const datalink = response.data.link;
  //         console.log(datalink)
  //         setData(datalink);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };

  //     fetchData();
  //   }, []);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="courseview">
              <div className="row justify-content-center">
                <div className="col-lg-8 col-12">
                  <div>
                    <div className="video-part">
                      {Array.isArray(coursedata) && coursedata.length > 0 ? (
                        coursedata.map((course) => (
                          <div key={course._id}>
                            <h3 className="mt-3">{course.course_name}</h3>
                            {course.sections.map((section, sectionIndex) => (
                              <div key={sectionIndex}>
                                {section.chapters.map(
                                  (chapter, chapterIndex) => (
                                    <div key={chapterIndex}>
                                      <div
                                        className="vp-video mb-4"
                                        key={chapter.chapter_id}
                                      >
                                        <ReactPlayer
                                          controls
                                          width="100%"
                                          height="450px"
                                          url={videoSource}
                                        />
                                      </div>
                                    </div>
                                  )
                                )}
                              </div>
                            ))}
                          </div>
                        ))
                      ) : (
                        <div>No courses available.</div>
                      )}
                    </div>
                    <div className="content-wrapper">
                      <div className="about_course">
                        <h3 className="fw-bold">About Course</h3>
                        {coursedata.map((course) => (
                          <div
                            dangerouslySetInnerHTML={{
                              __html: course.course_description,
                            }}
                          ></div>
                        ))}
                        {/* <p>
                          <span className="fw-bold">About the Course:</span>
                          This course is about blockchain technology and cryptocurrency.
                          It will teach you how to understand blockchain, cryptocurrency,
                          and how to become a crypto trader. You will learn about
                          the basic concepts, like what is blockchain? How it works?
                          What is cryptocurrency? What is NFT? What is a
                          blockchain wallet? How to open a wallet? How to trade?
                          How to make money? You will also learn about exchanges,
                          trading, and how to make profit.
                        </p> */}
                      </div>
                      <div className="course_imp">
                        <h5 className="fw-bold">What will you learn?</h5>
                        {coursedata.map((course) => (
                          <div
                            dangerouslySetInnerHTML={{
                              __html: course.wewilllearn,
                            }}
                          ></div>
                        ))}

                        {/* <div className="row">
                          <div className="col-6">
                            <ul>
                              <li>Basic cryptocurrency knowledge</li>
                              <li>Basic blockchain knowledge</li>
                              <li>Cryptocurrency trading strategy</li>
                            </ul>
                          </div>
                          <div className="col-6">
                            <ul>
                              <li>Fundamental analysis of cryptocurrency</li>
                              <li>Technical analysis of cryptocurrency</li>
                              <li>Deep blockchain knowledge</li>
                            </ul>
                          </div>
                        </div> */}
                      </div>
                      {/* <div>
                        <h5 className="fw-bold">Who this course is for:</h5>
                        <ul>
                          <li>
                            Any students in college who want to start a career
                            in Blockchain & Cryptos
                          </li>
                          <li>Any Blockchain, Bitcoin & Cryptos enthusiast</li>
                          <li>
                            Anyone interested in building their own Blockchain
                          </li>
                          <li>
                            Anyone interested in Blockchain and its applications
                          </li>
                        </ul>
                      </div> */}
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-8 col-12">
                  <div className="videolist-area ms-2 mb-3">
                    <div className="course-select-area border-radius-12">
                      <div className="course-title mb-4 mt-5 ">
                        <h5 className="fw-bold">Course Requirement</h5>
                      </div>

                      <div className="course-body">
                        
                          
                            {coursedata.map((course) => (
                              <div key={course._id}>
                                {course.sections.map((section) => (
                                     <div className="accordion" id="accordionExample" key={section.section_id}>
                                     <div className="accordion-item accordionitem">
                                      <h2 className="accordion-header"></h2>
                                      <button
                                        className="accordion-button collapsed accordionitem fw-bold"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne"
                                        aria-expanded="true"
                                        aria-controls="collapseOne">{section.section_name}
                                        
                                      </button>

                                      <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample" >

                                      {section.chapters.map(
                                  (chapter) => (  
                                     <div>
                                     <div className="accordion-body">
                                <div className="chapter" key={chapter.chapter_id}>
                                <div onClick={(event) =>
                                      handleChapterClick(
                                        event,[chapter.Video_link]
                                      )} > {chapter.chapter_name}</div>
                                </div>
                                </div>
                                     </div>
                                     
                                  )
                                )}
                                </div>
                                </div>
                                    </div>
                                ))}  
                              </div>
                                ))}
                        </div>       

                            {/* <button
                                className="accordion-button collapsed accordionitem fw-bold"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                              >
                                Section-1: Introduction
                              </button> */}

                            
                          
                          {/* <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button
                                className="accordion-button collapsed accordionitem fw-bold"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo"
                                aria-expanded="false"
                                aria-controls="collapseTwo"
                              >
                                Section-2: How to Start
                              </button>
                            </h2>
                            <div
                              id="collapseTwo"
                              className="accordion-collapse collapse"
                              data-bs-parent="#accordionExample" >
                              <div className="accordion-body">
                                <div className="chapter">
                                  <div
                                    className="row"
                                    onClick={(e) =>
                                      handleChapterClick(
                                        e,
                                        "https://youtu.be/ny7ZWVt3ymo?si=6onEl2HZhn59CN2o"
                                      )
                                    }
                                  >
                                    <div className="col">
                                      <i className="fa fa-play-circle iconplay"></i>
                                      <span className="ms-3">Introduction</span>
                                    </div>
                                    <div className="col text-end">10:05</div>
                                  </div>
                                </div>
                                <div className="chapter">
                                  <div
                                    className="row mt"
                                    onClick={(e) =>
                                      handleChapterClick(
                                        e,
                                        "https://youtu.be/0awA5Uw6SJE?si=rLQPbwbM5L0cnnUA"
                                      )
                                    }
                                  >
                                    <div className="col">
                                      <i className="fa fa-play-circle iconplay"></i>
                                      <span className="ms-3">Introduction</span>
                                    </div>
                                    <div className="col text-end">15:05</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div> */}
                          {/* <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button
                                className="accordion-button collapsed accordionitem fw-bold"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseThree"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                              >
                                Section-3: Discuss
                              </button>
                            </h2>
                            <div
                              id="collapseThree"
                              className="accordion-collapse collapse"
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body">
                                <div className="chapter">
                                  <div
                                    className="row"
                                    onClick={(e) =>
                                      handleChapterClick(
                                        e,
                                        "https://youtu.be/0awA5Uw6SJE?si=rLQPbwbM5L0cnnUA"
                                      )
                                    }
                                  >
                                    <div className="col">
                                      <i className="fa fa-play-circle iconplay"></i>
                                      <span className="ms-3">Introduction</span>
                                    </div>
                                    <div className="col text-end">10:05</div>
                                  </div>
                                </div>
                                <div className="chapter">
                                  <div
                                    className="row mt"
                                    onClick={(e) =>
                                      handleChapterClick(
                                        e,
                                        "https://www.youtube.com/live/4diUcRCwbt8?si=FaC31waKtZN2bzYN"
                                      )
                                    }
                                  >
                                    <div className="col">
                                      <i className="fa fa-play-circle iconplay"></i>
                                      <span className="ms-3">Introduction</span>
                                    </div>
                                    <div className="col text-end">15:05</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div> */}
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

export default Courseview;

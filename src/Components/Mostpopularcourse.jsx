import "../Css/Mostpopularcourse.css";
import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import lessonicon from "../Images/lesson.svg";

import teacherpic from "../Images/academy.png";
// import music from "../Images/music.jpg";
// import music2 from "../Images/music_banner.jpg";
import nailphoto from "../Images/shilpi_nail.jpg";
// import music3 from "../Images/guitar.jpg";
import music4 from "../Images/Tanu_eye.jpg";

function Mostpopularcourse() {
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;

  const [productdata, setproduct] = useState([]);
  useEffect(() => {
    if (!productdata.length) {
      axios
        .get(ROOT_URL + "/api/v1/get_course")
        .then((productdata) => setproduct(productdata.data.data))
        .catch((err) => console.log(err));
    }
  }, [productdata]);

  const memoizedProductData = useMemo(() => productdata, [productdata]);
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
  const redercoursecard = (productdata) => {
    return (
      <div className="col" key={productdata._id}>
        <div className="card h-100 d-flex flex-column">
          <img
            className="card-img-top cardimage "
            src={productdata.image}
            alt="Sample photo"
          />
          <div className="card-body flex-grow-1">
            <div className="row">
              <div className="col-6">
                <img src={lessonicon} width={20} height={20} />
                <span className="ms-2">{productdata.total_video} videos</span>
              </div>
              <div className="col-6 text-end d-flex flex-column">
                <span className=" h5 fw-bold">₹{productdata.course_price}</span>
                <span className="text-muted" style={{ marginTop: "-10px" }}>
                  (Including tax)
                </span>
              </div>
            </div>
            <h5 className="mt-3">{productdata.course_name}</h5>
            <span className="fw-bold">{productdata.averageRating}</span>
            <span className="starreview ms-2">
              {renderStars(productdata.averageRating)}
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
                <span>{productdata.teacher_name}</span>
                <br />
                <span className="text-muted">{productdata.teacher_dept}</span>
              </div>
            </div>
          </div>
          <div className=" card-footer row mt-3">
            <div className="col-12 text-center">
              <a
                className="buttonlearnmore"
                href={`/coursedetails/${productdata._id}`}
              >
                <button className=" learnmore w-75 ">Buy Now</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="mostpopular">
        <div className="container py-5">
          <h1 className="display-4 text-center fw-bold heading" id="mostcourse">
            Most Popular Courses
          </h1>

          <div className="container py-5 cardcontainer">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 g-4 ">
              {memoizedProductData.map(redercoursecard)}
              <div>
                <div className="card h-100 d-flex flex-column comingcard">
                  <img
                    className="card-img-top cardimage "
                    src={nailphoto}
                    alt="Sample photo"
                  />
                  <div className="card-body flex-grow-1">
                    <h3 className="mt-1 fw-bold">The nailart course</h3>
                    <div className="d-flex justify-content-between">
                      <span
                        className="starreview ms-2"
                        style={{ color: "gold" }}
                      >
                        <span className="text-dark">5</span>★★★★★
                      </span>

                      <h5 className="mt-1 text-end">6000/- only</h5>
                    </div>
                    <hr />
                    <div>
                      hhghghgghghghhghghghghghhjhuhuhuhugiugyugjghjghjghjghjghjghjg
                    </div>
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
                        <span>Shilpi Saha</span>
                        <br />
                        <span className="text-muted">Nail artist</span>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer row">
                    <div className="text-dark text-center ">Payment link:</div>
                    <div className="col-12 text-center blink">
                      <a>
                        <button type="button" className="coming w-75"></button>
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
                    <h3 className="mt-1 fw-bold">The eyelash course</h3>
                    <div className="d-flex justify-content-between">
                      <span
                        className="starreview ms-2"
                        style={{ color: "gold" }}
                      >
                        <span className="text-dark">5</span>★★★★★
                      </span>

                      <h5 className="mt-1 text-end">6000/- only</h5>
                    </div>
                    <hr />
                    <div>
                      hhghghgghghghhghghghghghhjhuhuhuhugiugyugjghjghjghjghjghjghjg
                    </div>
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
                        <span>Shilpi Saha</span>
                        <br />
                        <span className="text-muted">Nail artist</span>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer row">
                    <div className="text-dark text-center ">Payment link:</div>
                    <div className="col-12 text-center blink">
                      <a>
                        <button type="button" className="coming w-75"></button>
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
export default Mostpopularcourse;

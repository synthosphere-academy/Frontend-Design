import "../Css/Mostpopularcourse.css";
import { useState, useEffect,useMemo } from "react";
import axios from "axios";
import lessonicon from "../Images/lesson.svg";
import karate from "../Images/karate.jpg";
import teacherpic from "../Images/academy.png";
import music from "../Images/music.jpg";
import music2 from "../Images/music_banner.jpg";
import nailphoto from "../Images/nailart.jpg"
import music3 from "../Images/guitar.jpg";
import music4 from "../Images/vocal.jpg";

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
          <span key={i}  style={{ color: i < rating ? 'gold' : 'lightgray' }}>
              {i < rating ? '★' : '☆'}
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
                <span className="text-muted"style={{marginTop:"-10px"}}>(Including tax)</span>
              </div>
            </div>
            <h5 className="mt-3">{productdata.course_name}</h5>
           <span className="fw-bold">{productdata.averageRating}</span><span className="starreview ms-2" >{renderStars(productdata.averageRating)}</span>
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
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 ">
              {memoizedProductData.map(redercoursecard)}
              <div>
                <div className="card h-100 d-flex flex-column comingcard">
                  <img
                    className="card-img-top cardimage "
                    src={karate}
                    alt="Sample photo"
                  />
                  <div className="card-body flex-grow-1">
                    
                    <h3 className="mt-1">Bruce Lee's street survival tactics part-1</h3>
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
                        <span>Agnideb Sen</span>
                        <br />
                        <span className="text-muted">Martial coach</span>
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
                        <span>Suvro Jyoti Biswas</span>
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
        </div>
      </div>
    </>
  );
}
export default Mostpopularcourse;

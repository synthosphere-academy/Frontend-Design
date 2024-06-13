import '../Css/Coursedetails.css'
import pic from '../Images/Classroom.png'
import { useNavigate } from 'react-router-dom';
// import { useState, useEffect } from 'react';
import teacherpic from '../Images/teacherpic.jpg'
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addItem } from './redux/slices/cartSlice';


function Coursedetails() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  // const { course_id } = useParams();
  // const [coursedetails, setcoursedetails] = useState([])
  // useEffect(() => {
  //   const fetchCourse = async () => {
  //     try {
  //       const response = await axios.get(`http://localhost:8081/api/v1/product/`);
  //       setcoursedetails(response.data);
  //       console.log(course_id)
  //     } catch (error) {
  //       console.error('Error fetching course details:', error);
  //     }
  //   };
  //   fetchCourse();
  // }, [course_id]);
  


  const entroll_handler = () => {
    navigate('/courseview');
  }
  // const handleclicked = () => {
  //   alert("clicked");
  // }
  const courseInfo = [
    {
      image: ["https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F26d8c986-c9fd-468b-b4be-660691f4aa48.jpg?source=next-article&fit=scale-down&quality=highest&width=700&dpr=1"],
      coursename: "The Cryptocurrency Investment Course",
      // coursedetails:"Learn  about Cryptocurrency: From the Blockchain and Bitcoin to Cryptocurrency investing techniques!",
      coursereview: "4.5",
      course_currentprice: "₹899",
      course_price: "₹1899",
      teacher_image: [teacherpic],
      teachername: "David Noman",
      teacherdept: "Teacher"

    },
    {
      image: ["https://cdn.elearningindustry.com/wp-content/uploads/2020/08/how-online-course-are-changing-music-education.jpg"],
      coursename: "Music Course",
      // coursedetails:"Expand your music composition skills through learning universal music theory principles, mindset, and ear training.You will learn  basic essential techniques that will allow you to play any song in any style!",
      coursereview: "4",
      course_currentprice: "₹799",
      course_price: "₹999",
      teacher_image: [teacherpic],
      teachername: "Kesto Das",
      teacherdept: "Teacher"
    },
    {
      image: ["https://cdn.eduonix.com/assets/images/header_img/2020091906114212289.jpg"],
      coursename: "The Complete Stock market course",
      // coursedetails:"Master Stock Market Investing & Trading in the Stock Market.Apply best practices and techniques to make better stock choices.Invest & Trade!",
      coursereview: "4",
      course_currentprice: "₹799",
      course_price: "₹999",
      teacher_image: [teacherpic],
      teachername: "Dipan Das",
      teacherdept: "Teacher"
    }
  ]
  const redercoursecard = (card, index) => {
    return (
      <div className='col-lg-4' key={index}>
        <div className="card" >
          <img className="card-img-top" src={card.image} alt="Sample photo" />
          <div className="card-body">
            <div className='row'>
              <div className='col-6'>
                <i className='fa fa-graduation-cap'></i>
                <span className='ms-2'>26 lessons</span>
              </div>
              <div className='col-6 text-end'>
                <span className='fw-bold'>{card.coursereview}</span>

                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
              </div>
            </div>
            <h5 className='mt-3'>{card.coursename}</h5>
            {/* <p>{card.coursedetails}</p> */}

            {/* <span className='fw-bold'>{card.course_currentprice}</span>
        <label className='text-decoration-line-through'>{card.course_price}</label> */}
            <hr />
            <div className="row">
              <div className='col-2'><img className='rounded-circle' width={40} height={40} src={card.teacher_image} />
              </div>
              <div className='col-4'><span>{card.teachername}</span>
                <br /><span>{card.teacherdept}</span></div>
              <div className='col-6 text-end'><a href='/coursedetails'><button className="btn btn-primary btn-sm learnmore" type='button'>Learn More</button></a></div>


            </div>

          </div>
        </div>
      </div>
    )
  }
  return (
    <>
      <div className="container mb-5">
        <div className="row">
          {/* {coursedetails ? (
            <> */}
          <div className="col-lg-7  mt-5">
            <img src={pic} width="95%" />
            {/* <div className='w-75' >
              <img src={pic}/>
            </div> */}
            <div><h4 className='fw-bold'>Course Description</h4></div>
            <hr className="w-100" />
            <div>
              <h5>How this course look like together? We have module 1 and
                module 2.</h5>
            </div>
            <div>
              {/* <p>{coursedetails.course_description}</p>
              <h2>{coursedetails.teacher_name}</h2> */}
              {/* <p className='paratext text-start'>
                <span className='fw-bold'>Module 1: </span>
                So we have 1st module , where you will learn how blockchain
                run in realtime world. What is cryptocurrency? How to be a
                crypto trader? You will learn the basic things about blockchain
                and crypto world, like what is NFT? What are the rules for
                became a crypto trader. Learn various type of time frame in
                trading.Step by step you will know about exchanges, how to open
                your 1st trading account in there. Indian government rules for
                cryptocurrency, and what is trading? How to make profit?
                Not only practicals, we will discuss about deep blockchain
                knowledge, like what is mining? How it works? What is the
                consensus protocols? How crypto is born and listed in any
                exchanges? After that we will cover smart contracts to
                decentralised wallets. Also we are covering a small part of
                technical analysis, indicators, candles.</p> */}
            </div>
            <div>
              <p className='paratext'><span className='fw-bold'>Module 2: </span>
                In the next module. we will go deep into the blockchain and
                crypto knowledge.
                Here we know about some protocols, security of holding
                wallets, secrets of technicals and fundamental analysis, not
                only in basic level, we will go through advance level. Not just
                blockchain knowledge, in this module 2, you will know about
                many types of trading, including future trade, no loss strategy,
                and also some crypto history, case studies. Case study in
                various type of cryptocurrency in different fields. And at last
                we have some gem coin suggestions for upto 50x profit in long
                term.
                So, are you ready to unlock the potential of blockchain and
                cryptocurrency? Join us on this exciting journey as we explore
                the possibilities, challenge the status quo, and embrace the
                future of decentralized technology as well as be a master
                trader with no loss strategy. </p>

            </div>
            <div>
              <h5 className='fw-bold'>What will you learn?</h5>
              <div className="row">
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
              </div>

            </div>
            <div>
              <h4 className='fw-bold'>Course Content</h4>
              <div className="accordion" id="accordionExample">
                
                <div className="accordion-item accordionitem">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed accordionitem fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">

                      <div>Content 1</div>


                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse " data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <div className='row'>
                        <div className='col mt-2'>
                          <i className="fa fa-play-circle iconplay ms-2"></i>
                          <span className='ms-3'><a href='https://youtu.be/G1nWnu89d7M?si=vzZKGCvNYU7uuu4t'>Introduction</a></span>
                        </div>
                        <div className='col text-end mt-2 me-2'>10:05</div>
                      </div>
                      <div className='row mt'>
                        <div className='col'>
                          <i className="fa fa-play-circle iconplay ms-2"></i>
                          <span className='ms-3'><a href='https://youtu.be/G1nWnu89d7M?si=vzZKGCvNYU7uuu4t'>Introduction</a></span>
                        </div>
                        <div className='col text-end mt-2 me-2'>15:05</div>
                      </div>


                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed accordionitem fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Content 2
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <div className='row'>
                        <div className='col mt-2'>
                          <i className="fa fa-play-circle iconplay ms-2"></i>
                          <span className='ms-3'><a href='https://youtu.be/G1nWnu89d7M?si=vzZKGCvNYU7uuu4t'>Introduction</a></span>
                        </div>
                        <div className='col text-end  mt-2 me-2'>10:05</div>
                      </div>
                      <div className='row mt'>
                        <div className='col'>
                          <i className="fa fa-play-circle iconplay ms-2"></i>
                          <span className='ms-3'><a href='https://youtu.be/G1nWnu89d7M?si=vzZKGCvNYU7uuu4t'>Introduction</a></span>
                        </div>
                        <div className='col text-end me-2 '>15:05</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed accordionitem fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      Content 3
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <div className='row'>
                        <div className='col mt-2'>
                          <i className="fa fa-play-circle iconplay ms-2"></i>
                          <span className='ms-3'><a href='https://youtu.be/G1nWnu89d7M?si=vzZKGCvNYU7uuu4t'>Introduction</a></span>
                        </div>
                        <div className='col text-end mt-2 me-2'>10:05</div>
                      </div>
                      <div className='row mt'>
                        <div className='col'>
                          <i className="fa fa-play-circle iconplay ms-2"></i>
                          <span className='ms-3'><a href='https://youtu.be/G1nWnu89d7M?si=vzZKGCvNYU7uuu4t'>Introduction</a></span>
                        </div>
                        <div className='col text-end me-2'>15:05</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className='mt-4'>
            <h4 className='fw-bold'>Teacher Description </h4>
            <hr className="w-100" />
            <div>
            <p className='paratext'>Dipan Das, a crypto teacher at an academy, possesses a strong educational background in finance, economics, computer science, or related fields, 
            often complemented by certifications in blockchain technology and cryptocurrency. He has extensive industry knowledge, encompassing blockchain technology, various cryptocurrencies, 
            trading, investing strategies, and relevant regulatory and legal aspects. His teaching experience includes simplifying complex concepts for diverse student
             groups and proficiency in both in-person and online instructional methods. Technically adept, he uses digital tools for teaching and demonstrates the use of crypto wallets, exchanges, and other blockchain technologies. Passionate about cryptocurrencies, Dipan Das possesses excellent communication skills and remains analytical and detail-oriented. His role involves developing and delivering comprehensive curricula, conducting lectures and workshops, providing practical training, and continuously updating his knowledge to keep the curriculum relevant. 
            These attributes ensure that he can effectively educate and inspire students in the dynamic world of cryptocurrencies</p>
            </div>

            </div>
          </div>
          {/* </>
          ): (
            <div>othig</div>
              )} */}
          <div className="col-lg-4  mt-5">
            <div className="border" id='cartpart'>
              <div className="ms-4 mt-4">
                <span className="fw-bold h2 ">₹899</span><span className="text-decoration-line-through ms-2">₹999</span>
              </div>
              <div className=" text-center mt-4"><button className="  w-75" id='cartbutton' onClick={()=> dispatch(addItem({price:"200"}))} >Add to cart</button></div>
              <div className=" text-center mt-4"><button className="btn w-75" id="buybutton" onClick={entroll_handler}>Enroll Now</button></div>
              <div className="ms-4 text-center mt-4 mb-4">30-Day Money-Back Guarantee</div>
            </div>
            <div className=' border rounded'>
              <div className='ms-4 mt-2 mb-4'>
                <div><i className="fa fa-book" ></i><span className='fw-bold ms-2 paratext'>Beginner Level</span></div>
                <div className='mt-2'><i className="fa fa-book" ></i><span className='fw-bold ms-2 paratext '>90 students enrolled</span></div>
                <div className='mt-2'><i className='fa fa-clock-o'></i><span className='fw-bold ms-2 paratext'>6 hour 34 min duration</span></div>
                <div className='mt-2'><i className='fa fa-clock-o'></i><span className='fw-bold ms-2'>10 nov,2023 last updated </span></div>
                <div className='mt-2'><i className='fa fa-certificate'></i><span className='fw-bold ms-2 paratext'>Certificate of completion </span></div>
              </div>
            </div>
            <div className='border rounded mt-4'>
              <div className='ms-4 mt-2 mb-2'>
                <h6 className='fw-bold'>A course by</h6>
                <div className="row">
                  <div className='col-3'><img className='rounded-circle' width={40} height={40} src={teacherpic} />
                  </div>
                  <div className='col-6'><span>Dipan Das</span>
                    <br /><span>Teacher</span></div>

                </div>
                <div className="row mt-2">
                  <div className='col-3'><img className="rounded-circle" width={40} height={40} src={teacherpic} />
                  </div>
                  <div className='col-6'><span>Dipan Das</span>
                    <br /><span>Teacher</span></div>

                </div>

              </div>
            </div>
            <div className='border rounded mt-4'>
              <div className='ms-4 mt-2 mb-4'>
                <h6 className='fw-bold mt-4'>Apply Coupon</h6>
                <div className="search couponbutton mt-4  ">
                  <input type="text" className="form-control couponinput " placeholder="Enter coupon" />
                  <button className="btn">Apply</button>
                </div>
              </div>


            </div>
          </div>
        </div>
       
        
        <hr />
        <div>
          <h4 className="fw-bold mb-4">Related Courses</h4>
          <div className="row g-4">
            {courseInfo.map(redercoursecard)}
          </div>
        </div>
      </div>
    </>
  )
}

export default Coursedetails
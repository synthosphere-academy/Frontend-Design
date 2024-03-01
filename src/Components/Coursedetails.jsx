import '../Css/Coursedetails.css'
import  pic from '../Images/music.jpg';
function Coursedetails() {
  const courseInfo = [
    {
      image: ["https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F26d8c986-c9fd-468b-b4be-660691f4aa48.jpg?source=next-article&fit=scale-down&quality=highest&width=700&dpr=1"],
      coursename: "The Cryptocurrency Investment Course",
      // coursedetails:"Learn  about Cryptocurrency: From the Blockchain and Bitcoin to Cryptocurrency investing techniques!",
      coursereview: "4.5",
      course_currentprice: "₹899",
      course_price: "₹1899",
      teacher_image: ["https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"],
      teachername: "David Noman",
      teacherdept: "teacher"

    },
    {
      image: ["https://cdn.elearningindustry.com/wp-content/uploads/2020/08/how-online-course-are-changing-music-education.jpg"],
      coursename: "Music Course",
      // coursedetails:"Expand your music composition skills through learning universal music theory principles, mindset, and ear training.You will learn  basic essential techniques that will allow you to play any song in any style!",
      coursereview: "4",
      course_currentprice: "₹799",
      course_price: "₹999",
      teacher_image: ["https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"],
      teachername: "Kesto Das",
      teacherdept: "teacher"
    },
    {
      image: ["https://cdn.eduonix.com/assets/images/header_img/2020091906114212289.jpg"],
      coursename: "The Complete Stock market course",
      // coursedetails:"Master Stock Market Investing & Trading in the Stock Market.Apply best practices and techniques to make better stock choices.Invest & Trade!",
      coursereview: "4",
      course_currentprice: "₹799",
      course_price: "₹999",
      teacher_image: ["https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"],
      teachername: "Dipan Das",
      teacherdept: "teacher"
    }
  ]
  const redercoursecard = (card, index) => {
    return (
      <div className='col-lg-4'>
        <div className="card" key={index}>
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
              <div className='col-2'><img className='rounded-circle w-75' src={card.teacher_image} />
              </div>
              <div className='col-4'><span>{card.teachername}</span>
                <br /><span>{card.teacherdept}</span></div>
              <div className='col-6'><a href='/coursedetails'><button className="btn btn-primary btn-sm learnmore" type='button'>Learn More</button></a></div>


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
          <div className="col-lg-7 mt-5">
            <div className='w-75' >
              <img src={pic}/>
            </div>
            <div><span>Course information</span></div>
            <hr className="w-100" />
            <div>
              <h5>Beginners Landing Page Course</h5>
            </div>
            <div>
              <p>Digital marketing course encompasses the tools and technologies required to help a business grow itself with the help of digital marketing. The purpose of digital marketing is to build a digital campaign to promote a business on the internet and social media platforms. Digital marketing is, alternatively, also known as Internet marketing.
                As the industry transitions from conventional business techniques to new digital versions, digital marketing enters the equation to play a significant role. A short while ago, businesses mainly relied on conventional marketing techniques to promote their brands. As the global application of the world wide web increased, traditional marketing began to display its shortcomings. The industry transcended national boundaries and went global. Since digital marketing has evolved into a simple approach to entering the worldwide market, the demand for digital marketing experts has been rising.
              </p>
            </div>
            <div>
              <p>Digital marketing course encompasses the tools and technologies required to help a business grow itself with the help of digital marketing. The purpose of digital marketing is to build a digital campaign to promote a business on the internet and social media platforms. Digital marketing is, alternatively, also known as Internet marketing.
                As the industry transitions from conventional business techniques to new digital versions, digital marketing enters the equation to play a significant role. A short while ago, businesses mainly relied on conventional marketing techniques to promote their brands. As the global application of the world wide web increased, traditional marketing began to display its shortcomings. The industry transcended national boundaries and went global. Since digital marketing has evolved into a simple approach to entering the worldwide market, the demand for digital marketing experts has been rising.
              </p>

            </div>
            <div>
              <h5>What will you learn?</h5>
              <div className="row">
                <div className="col-6">
                  <ul>
                    <li>Understand the core concepts</li>
                    <li>Understand the core concepts</li>
                    <li>Understand the core concepts</li>
                  </ul>
                </div>
                <div className="col-6">
                  <ul>
                    <li>Understand the core concepts</li>
                    <li>Understand the core concepts</li>
                    <li>Understand the core concepts</li>
                  </ul>
                </div>

              </div>

            </div>
          </div>
          <div className="col-lg-4 mt-5">
            <div className="border" id='cartpart'>
              <div className="ms-4 mt-4">
                <span className="fw-bold h2 ">₹899</span><span className="text-decoration-line-through ms-2">₹999</span>
              </div>
              <div className=" text-center mt-4"><button className="btn btn-success  w-75">Add to cart</button></div>
              <div className=" text-center mt-4"><button className="btn w-75" id="buybutton">Buy now</button></div>
              <div className="ms-4 text-center mt-4 mb-4">30-Day Money-Back Guarantee</div>
            </div>
            <div className=' border rounded'>
              <div className='ms-4 mt-2 mb-4'>
                <div><i className="fa fa-book" ></i><span className='fw-bold ms-2'>Beginner Level</span></div>
                <div className='mt-2'><i className="fa fa-book" ></i><span className='fw-bold ms-2 '>90 students enrolled</span></div>
                <div className='mt-2'><i className='fa fa-clock-o'></i><span className='fw-bold ms-2'>6 hour 34 min duration</span></div>
                <div className='mt-2'><i className='fa fa-clock-o'></i><span className='fw-bold ms-2'>10 nov,2023 last updated </span></div>
                <div className='mt-2'><i className='fa fa-certificate'></i><span className='fw-bold ms-2'>Certificate of completion </span></div>
              </div>
            </div>
            <div className='border rounded mt-4'>
              <div className='ms-4 mt-2 mb-2'>
                <h6 className='fw-bold'>A course by</h6>
                <div className="row">
                  <div className='col-3'><img className='rounded-circle w-75' src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp" />
                  </div>
                  <div className='col-6'><span>Dipan Das</span>
                    <br /><span>Teacher</span></div>

                </div>
                <div className="row mt-2">
                  <div className='col-3'><img className='rounded-circle w-75' src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp" />
                  </div>
                  <div className='col-6'><span>Dipan Das</span>
                    <br /><span>Teacher</span></div>

                </div>

              </div>
            </div>
            <div className='border rounded mt-4'>
              <div className='ms-4 mt-2 mb-4'>
                <h6 className='fw-bold mt-4'>Apply Coupon</h6>
                <div className="search couponbutton mt-4 me-4 ">
                               
                                <input type="text" className="form-control " placeholder="Enter coupon" />
                                <button className="btn btn-success">Apply</button>
                            </div>
              </div>


            </div>
          </div>
        </div>
        <hr />
        <div>
          <h4 className="fw-bold mb-4">Related Courses</h4>
          <div className="row">

            {courseInfo.map(redercoursecard)}
          </div>
        </div>
      </div>
    </>
  )
}

export default Coursedetails
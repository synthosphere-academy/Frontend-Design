import pic from '../Images/courseimage.png'
import '../Css/Course.css'

function Courses() {
    const courseInfo = [
        {
            image: ["https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F26d8c986-c9fd-468b-b4be-660691f4aa48.jpg?source=next-article&fit=scale-down&quality=highest&width=700&dpr=1"],
            coursename: "The Full Cryptocurrency Investment Course",
            // coursedetails: "Learn  about Cryptocurrency: From the Blockchain and Bitcoin to Cryptocurrency investing techniques!",
            coursereview: "4.5",
            course_currentprice: "₹899",
            course_price: "₹1899"
        },
        {
            image: ["https://cdn.elearningindustry.com/wp-content/uploads/2020/08/how-online-course-are-changing-music-education.jpg"],
            coursename: "Music Course",
            // coursedetails: "Expand your music composition skills through learning universal music theory principles, mindset, and ear training.You will learn  basic essential techniques that will allow you to play any song in any style!",
            coursereview: "4",
            course_currentprice: "₹799",
            course_price: "₹999"
        },
        {
            image: ["https://cdn.eduonix.com/assets/images/header_img/2020091906114212289.jpg"],
            coursename: "The Complete Stock market course",
            // coursedetails: "Master Stock Market Investing & Trading in the Stock Market.Apply best practices and techniques to make better stock choices.Invest & Trade!",
            coursereview: "4",
            course_currentprice: "₹799",
            course_price: "₹999"
        },
        {
            image: ["https://cdn.elearningindustry.com/wp-content/uploads/2020/08/how-online-course-are-changing-music-education.jpg"],
            coursename: "Music Course",
            // coursedetails: "Expand your music composition skills through learning universal music theory principles, mindset, and ear training.You will learn  basic essential techniques that will allow you to play any song in any style!",
            coursereview: "4",
            course_currentprice: "₹799",
            course_price: "₹999"
        },
        {
            image: ["https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F26d8c986-c9fd-468b-b4be-660691f4aa48.jpg?source=next-article&fit=scale-down&quality=highest&width=700&dpr=1"],
            coursename: "The Full Cryptocurrency Investment Course",
            // coursedetails: "Learn  about Cryptocurrency: From the Blockchain and Bitcoin to Cryptocurrency investing techniques!",
            coursereview: "4.5",
            course_currentprice: "₹899",
            course_price: "₹1899"
        },
        {
            image: ["https://cdn.elearningindustry.com/wp-content/uploads/2020/08/how-online-course-are-changing-music-education.jpg"],
            coursename: "Music Course",
            // coursedetails: "Expand your music composition skills through learning universal music theory principles, mindset, and ear training.You will learn  basic essential techniques that will allow you to play any song in any style!",
            coursereview: "4",
            course_currentprice: "₹799",
            course_price: "₹999"
        },
        {
            image: ["https://cdn.eduonix.com/assets/images/header_img/2020091906114212289.jpg"],
            coursename: "The Complete Stock market course",
            // coursedetails: "Master Stock Market Investing & Trading in the Stock Market.Apply best practices and techniques to make better stock choices.Invest & Trade!",
            coursereview: "4",
            course_currentprice: "₹799",
            course_price: "₹999"
        },
        {
            image: ["https://cdn.elearningindustry.com/wp-content/uploads/2020/08/how-online-course-are-changing-music-education.jpg"],
            coursename: "Music Course",
            // coursedetails: "Expand your music composition skills through learning universal music theory principles, mindset, and ear training.You will learn  basic essential techniques that will allow you to play any song in any style!",
            coursereview: "4",
            course_currentprice: "₹799",
            course_price: "₹999"
        }


    ];
    const redercoursecard = (card, index) => {
        return (
            <div className='col-4'>
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
        <hr/>
        <div className="row">
          <div className='col-2'><img className='rounded-circle w-75' src='https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp' />
            </div>
          <div className='col-4'><span>David Noman</span>
          <br/><span>Teacher</span></div>
          <div className='col-6'><button className="btn btn-primary btn-sm" type='button'>Learn More</button></div>
          

        </div>
        {/* <div><a href="#" className="btn btn-primary btn-block">buy now</a></div> */}
        </div>
      </div>
      </div>
        )
    }
    return (
        <>

            <div>
                <div className="container mt-5 " id='containerbox'>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className='ms-4'>
                                <div className='mt-5 '>
                                    <h4 className='display-4 text fw-bold'>Many Useful Courses For you</h4><br />
                                    <span className='para '>An academy is a fancy school, often one devoted to one subject or discipline, such as music or science. You can also use academy to describe the world of higher learning.The online classes were very helpful to all students, teachers, and institutions. They are also beneficial to students who wish to pursue long-distance courses.</span><br /><br />

                                </div>
                                <div className="search">
                                    <i className="fa fa-search mt-1"></i>
                                    <input type="text" className="form-control" placeholder="Search For a course" />
                                    <button className="btn btn-success">Search</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <img className="img-fluid" src={pic} alt='noimage' />

                        </div>
                    </div>

                </div>
            </div>
            <div className='text-center display-4 fw-bold mt-5'>
                Courses</div>


            <div className="container mt-5 mb-5">
            <div className="row">
              
              {courseInfo.map(redercoursecard)}
              </div>
            </div>



        </>

    )
}

export default Courses
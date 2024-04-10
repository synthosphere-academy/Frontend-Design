import pic from '../Images/courseimage.png'
import '../Css/Course.css'
import icon from '../Images/Search.svg';

function Courses() {
    const courseInfo = [
        {
            image: ["https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F26d8c986-c9fd-468b-b4be-660691f4aa48.jpg?source=next-article&fit=scale-down&quality=highest&width=700&dpr=1"],
            coursename: "The Cryptocurrency Investment Course",
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
            <div className='col-lg-4' key={index}>
      <div className="card h-100" key={index}>
        <img className="card-img-top cardimage" src={card.image} alt="Sample photo" />
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
          <div className='col-2'><img className='rounded-circle' width={40} height={40} src='https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp' />
            </div>
          <div className='col-4'><span>David Noman</span>
          <br/><span>Teacher</span></div>
          <div className='col-6'><a href='/coursedetails'><button className="btn btn-primary btn-sm learnmore" type='button'>Learn More</button></a></div>
          

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
                                    <span className='para '>
Explore a myriad of courses designed to enhance your understanding of synthesis. From foundational principles to advanced techniques, our offerings cater to diverse skill levels, ensuring a comprehensive learning experience in the dynamic realm of sound design and electronic music production.</span><br /><br />

                                </div>
                                <div className="search">
                            <img className='searchicon' src={icon} width={20}/>
                                {/* <i className="fa fa-search mt-1 ms-3"></i> */}
                                <input type="text" className="form-control  searchinput" placeholder="Search for a course ?" />
                               
                                <button className="btn searchbutton">Search Course</button>
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
               All Courses</div>


            <div className="container mt-5 mb-5 coursecontainer">
            <div className="row g-3">
              
              {courseInfo.map(redercoursecard)}
              </div>
            </div>



        </>

    )
}

export default Courses
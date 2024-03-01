import '../Css/Mostpopularcourse.css'
function Mostpopularcourse() {
  const courseInfo =[
    {
      image:["https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F26d8c986-c9fd-468b-b4be-660691f4aa48.jpg?source=next-article&fit=scale-down&quality=highest&width=700&dpr=1"],
      coursename:"The Cryptocurrency Investment Course",
      // coursedetails:"Learn  about Cryptocurrency: From the Blockchain and Bitcoin to Cryptocurrency investing techniques!",
      coursereview:"4.5",
      course_currentprice:"₹899",
      course_price:"₹1899",
      teacher_image:["https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"],
      teachername:"David Noman",
      teacherdept:"teacher"
      
    },
    {
      image:["https://cdn.elearningindustry.com/wp-content/uploads/2020/08/how-online-course-are-changing-music-education.jpg"],
      coursename:"Music Course",
      // coursedetails:"Expand your music composition skills through learning universal music theory principles, mindset, and ear training.You will learn  basic essential techniques that will allow you to play any song in any style!",
      coursereview:"4",
      course_currentprice:"₹799",
      course_price:"₹999",
      teacher_image:["https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"],
      teachername:"Kesto Das",
      teacherdept:"teacher"
    },
    {
    image:["https://cdn.eduonix.com/assets/images/header_img/2020091906114212289.jpg"],
      coursename:"The Complete Stock market course",
      // coursedetails:"Master Stock Market Investing & Trading in the Stock Market.Apply best practices and techniques to make better stock choices.Invest & Trade!",
       coursereview:"4",
      course_currentprice:"₹799",
      course_price:"₹999",
      teacher_image:["https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"],
      teachername:"Dipan Das",
      teacherdept:"teacher"
    },
    {
      image:["https://cdn.elearningindustry.com/wp-content/uploads/2020/08/how-online-course-are-changing-music-education.jpg"],
      coursename:"Music Course",
      // coursedetails:"Expand your music composition skills through learning universal music theory principles, mindset, and ear training.You will learn  basic essential techniques that will allow you to play any song in any style!",
      coursereview:"4",
      course_currentprice:"₹799",
      course_price:"₹999",
      teacher_image:["https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"],
      teachername:"Dipan Das",
      teacherdept:"teacher"
    },
    {
      image:["https://cdn.elearningindustry.com/wp-content/uploads/2020/08/how-online-course-are-changing-music-education.jpg"],
      coursename:"Music Course",
      // coursedetails:"Expand your music composition skills through learning universal music theory principles, mindset, and ear training.You will learn  basic essential techniques that will allow you to play any song in any style!",
      coursereview:"4",
      course_currentprice:"₹799",
      course_price:"₹999",
      teacher_image:["https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"],
      teachername:"Dipan Das",
      teacherdept:"teacher"
    },
    {
      image:["https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F26d8c986-c9fd-468b-b4be-660691f4aa48.jpg?source=next-article&fit=scale-down&quality=highest&width=700&dpr=1"],
      coursename:"The  Cryptocurrency Investment Course",
      coursereview:"4.5",
      course_currentprice:"₹899",
      course_price:"₹1899",
      teacher_image:["https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"],
      teachername:"Dipan Das",
      teacherdept:"teacher"
    }

  ];
  const redercoursecard = (card,index)=>{
    return(
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
        <hr/>
        <div className="row">
          <div className='col-2'><img className='rounded-circle w-75' src={card.teacher_image} />
            </div>
          <div className='col-4'><span>{card.teachername}</span>
          <br/><span>{card.teacherdept}</span></div>
          <div className='col-6'><a className='buttonlearnmore' href='/coursedetails'><button className="btn btn-primary btn-sm ">Learn More</button></a></div>
          

        </div>
       
        </div>
      </div>
      </div>
    )
  }
  return (
    <>
      <div >
        <div className="container">
          <h2 className='display-4 text-center fw-bold '>Most Popular Courses</h2>
          <div className="container mt-5 mb-5">
            <div className="row">
              
              {courseInfo.map(redercoursecard)}
              </div>
           </div>
           </div>
           </div>
            
             
    </>
  )
}

export default Mostpopularcourse

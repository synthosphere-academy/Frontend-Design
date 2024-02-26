import '../Css/Mostpopularcourse.css'
function Mostpopularcourse() {
  const courseInfo =[
    {
      image:["https://www.shutterstock.com/image-photo/golden-coins-bitcoin-logo-rise-600nw-2052110753.jpg"],
      coursename:"The Full Cryptocurrency Investment Course",
      coursedetails:"Learn  about Cryptocurrency: From the Blockchain and Bitcoin to Cryptocurrency investing techniques!",
      coursereview:"4.5",
      course_currentprice:"₹899",
      course_price:"₹1899"
    },
    {
      image:["https://cdn.elearningindustry.com/wp-content/uploads/2020/08/how-online-course-are-changing-music-education.jpg"],
      coursename:"Music Course",
      coursedetails:"Expand your music composition skills through learning universal music theory principles, mindset, and ear training.",
      coursereview:"4",
      course_currentprice:"₹799",
      course_price:"₹999"
    },
    {
    image:["https://cdn.eduonix.com/assets/images/header_img/2020091906114212289.jpg"],
      coursename:"The Complete Stock market course",
      coursedetails:"Master Stock Market Investing & Trading in the Stock Market.Apply best practices and techniques to make better stock choices.Invest & Trade!",
      coursereview:"4",
      course_currentprice:"₹799",
      course_price:"₹999"
    }

  ];
  const redercoursecard = (card,index)=>{
    return(
      <div className="card" key={index}>
        <img className="card-img-top" src={card.image} alt="Sample photo" />
        <div className="card-body">
        <h5>{card.coursename}</h5>
        <p>{card.coursedetails}</p>
        <div>
                      <span className='fw-bold'>{card.coursereview}</span>
                      
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star"></span>
        </div>
        <span className='fw-bold'>{card.course_currentprice}</span>
        <label className='text-decoration-line-through'>{card.course_price}</label>
        <div><a href="#" className="btn btn-primary btn-block">buy now</a></div>
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
            <div className="grid ">
              
              {courseInfo.map(redercoursecard)}
              </div>
           </div>
           </div>
           </div>
            
             
    </>
  )
}

export default Mostpopularcourse

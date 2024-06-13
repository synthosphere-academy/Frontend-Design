import '../Css/Mostpopularcourse.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import lessonicon from '../Images/lesson.svg'
import teacherpic from '../Images/teacherpic.jpg'
import { ROOT_URL } from '../Components/Localhost'


//  import pic1 from '../Images/course1.jpg'

function Mostpopularcourse() {


  const [productdata, setproduct] = useState([])
 

  useEffect(() => {
    
    axios.get(ROOT_URL+'/product')
      .then(productdata => setproduct(productdata.data.data))
      .catch(err => console.log(err))

  }, []);

  const redercoursecard = (productdata) => {
    return (
      <div className='col' key={productdata.course_id} >
        <div className="card h-100">
          <img className="card-img-top cardimage " src={productdata.image} alt="Sample photo" />
          <div className="card-body">
            <div className='row'>
              <div className='col-6'>
                <img src={lessonicon} width={20} height={20} />
                <span className='ms-2'>{productdata.total_video} videos</span>
              </div>
              <div className='col-6 text-end'>
                <span className='fw-bold'>{productdata.course_review}</span>

                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star notchecked"></span>
              </div>
            </div>
            <h5 className='mt-3'>{productdata.course_name}</h5>
            {/* <p>{card.coursedetails}</p> */}

            {/* <span className='fw-bold'>{card.course_currentprice}</span>
        <label className='text-decoration-line-through'>{card.course_price}</label> */}
            <hr />
            <div className="row">
              {/* <div className='col-lg-6 col-sm-6  d-flex'><img className='rounded-circle ' width={40} height={40} src={teacherpic} />
                <span className='teachername ms-1 mt-2'>{productdata.teacher_name}</span>
              </div> */}
              <div className='col-2'><img className='rounded-circle' width={40} height={40} src={teacherpic} />
              </div>
              <div className='col-4 mt-2'><span>{productdata.teacher_name}</span>
              </div>

              {/* <br/><span>{productdata.teacher_dept}</span></div> */}
              <div className='col-6 text-end'><a className='buttonlearnmore' href="/coursedetails"><button className=" btn-sm learnmore ">Learn More</button></a></div>
            </div>

          </div>
        </div>
      </div>
    )
  }
  return (
    <>
      <div className='mostpopular' >
        <div className="container py-5">
          <h1 className="display-4 text-center fw-bold heading" id='mostcourse'>
            Most Popular Courses
          </h1>

          <div className="container py-5 cardcontainer">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 ">

              {productdata.map(redercoursecard)}

            </div>
          </div>
        </div>
      </div>


    </>
  )
}
export default Mostpopularcourse


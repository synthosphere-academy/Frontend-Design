import "../../Css/Entrolled.css"
import { useState , useEffect} from 'react';
import axios from "axios";

import lessonicon from "../../Images/lesson.svg"

const Entrolled =() => {
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
    const [enrollcourse, setenrollcourse] = useState([]);
    useEffect(() => {
        const userId = sessionStorage.getItem('userid');
        // console.log(userId);
           axios
          .get(ROOT_URL + `/api/v1/getenrolledcourse/${userId}`)
          .then((enrollcoursedetail) => {
            setenrollcourse(enrollcoursedetail.data);
            console.log(enrollcoursedetail.data);
          })
          .catch((err) => console.log(err));
      }, []);

    
  
  return (
   <>
    
    <div className="container" >
    <h3 className="fw-bold">Enrolled Courses</h3>
    <div className="container">
    <div className="row row-cols-lg-2">
    {enrollcourse ? (
      enrollcourse.map((course) => (
       
    <div className='col'key={course._id} >
        <div className="card">
          <img className="card-img-top cardimage " src={course.image} alt="Sample photo" />
          <div className="card-body">
            <div className='row'>
              <div className='col-6'>
                <img src={lessonicon} width={20} height={20} />
                <span className='ms-2'>{course.total_video} videos</span>
              </div>
              <div className='col-6 text-end'>
                <span className=' h5'>{course.course_price}/-</span> 
              </div>
             
              
            </div>
            <h5 className='mt-3'>{course.course_name}</h5>
            <hr />
            <div className="row">
              
              {/* <div className='col-2'><img className='rounded-circle' width={40} height={40} src={teacherpic} />
              </div> */}
              <div className='col-6 mt-2'><span>{course.teacher_name}</span>
              </div>
              <div className='col-6 text-end'><a className='buttonlearnmore' href={`/courseview/${course._id}`}><button className="btn-lg learnmore viewcourse">View Course</button></a></div>
            </div>

          </div>
        </div>
      </div>
      
      ))
      ) :(<div></div>)}
      </div>
      </div>
      </div>
    
    </>
  )
}

export default Entrolled
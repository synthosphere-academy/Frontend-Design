import pic from '../Images/courseimage.png'
import '../Css/Course.css'
import { useState, useEffect } from 'react';
 import axios from 'axios';
import icon from '../Images/Search.svg';
import lessonicon from '../Images/lesson.svg'
import teacherpic from '../Images/academy.png'
// import Preloader from './Preloader';
import pic1 from '../Images/Music.jpg'
import { ROOT_URL } from '../Components/Localhost'

function Courses() {
  const [query, setQuery] = useState('');
  const [courses, setCourses] = useState([]);
  const handleInputfieldChange = (e) => {
      setQuery(e.target.value);
  };
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;

  const [coursedata, setcoursedata] = useState([])

  //for search input
  useEffect(() => {
    const fetchCourses = async () => {
  
    if (query.length > 0) {
        document.getElementById('searchresult').style.display = 'block';
            axios.get( ROOT_URL+`/api/v1/searchcourse?q=${query}`)
            .then((response) => {
                if(response.data.length === 0){
                    setCourses(['No_course_found']);      
                }  else{
                setCourses(response.data);
                console.log(response.data);
                }
                
              })
              .catch((error) => {
                console.log(error);
             })
            }
            

            else {
                document.getElementById('searchresult').style.display = 'none';
                setCourses([]);
                
            }
        }
        const debounceFetch = setTimeout(fetchCourses, 300);
            return () => clearTimeout(debounceFetch);
            }, [query]);




  //end search input
  useEffect(() => {
    
    axios.get(ROOT_URL+'/api/v1/get_course')
      .then(coursedata => setcoursedata(coursedata.data.data))
      .catch(err => console.log(err))

  }, []);

  const redercoursecard = (coursedata) => {
    return (
      <div className='col' key={coursedata._id} >
        <div className="card h-100">
          <img className="card-img-top cardimage " src={coursedata.image} alt="Sample photo" />
          <div className="card-body">
            <div className='row'>
              <div className='col-6'>
                <img src={lessonicon} width={20} height={20} />
                <span className='ms-2'>{coursedata.total_video} videos</span>
              </div>
              <div className='col-6 text-end'>
                <span className=' h5'>{coursedata.course_price}/-</span> 
              </div>
            </div>
            <h5 className='mt-3'>{coursedata.course_name}</h5>
            {/* <p>{card.coursedetails}</p> */}

            {/* <span className='fw-bold'>{card.course_currentprice}</span>
        <label className='text-decoration-line-through'>{card.course_price}</label> */}
            <hr />
            <div className="row">
              
              <div className='col-2'><img className='rounded-circle' width={40} height={40} src={teacherpic} />
              </div>
              <div className='col-5 mt-2'><span>{coursedata.teacher_name}</span>
              </div>

              {/* <br/><span>{productdata.teacher_dept}</span></div> */}
              <div className='col-5 text-end'><a className='buttonlearnmore' href={`/coursedetails/${coursedata._id}`}><button className=" btn-sm learnmore ">Learn More</button></a></div>
            </div>

          </div>
        </div>
      </div>
    )}





  //static
  // const rendercourse = (card, index) => {
  //   return (
  //     <div className='col' key={index} >
  // <div className="card h-100">
  //     <img className="card-img-top cardimage " src={card.image} alt="Sample photo" />
  //      <div className="card-body">
  //       <div className='row'>
  //         <div className='col-6'>
  //            <img src={lessonicon} width={20} height={20} />
  //           <span className='ms-2'>{card.video} videos</span>
  //          </div>
  //       </div>
  //        <h5 className='mt-3'>{card.course_name}</h5>
  //       {/* <p>{card.coursedetails}</p> */}

  //       {/* <span className='fw-bold'>{card.course_currentprice}</span>
  // //   <label className='text-decoration-line-through'>{card.course_price}</label> */}
  //        <hr />
  //      <div className="row">
          
  //         {/* <div className='col-2'><img className='rounded-circle' width={40} height={40} src={teacherpic} />
  //        </div> */}
  //         <div className='col-7 mt-2'><span>{card.teacher_name}</span>
  //          </div>

  //         {/* <br/><span>{productdata.teacher_dept}</span></div> */}
  //          {/* <div className='col-5 text-end'><a className='buttonlearnmore' href="/coursedetails"><button className=" btn-sm learnmore ">Learn More</button></a></div> */}
  //       </div>

  //     </div>
  //   </div>
  // </div>

  //   )
  // }
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
                  <img className='searchicon' src={icon} width={20} />
                  {/* <i className="fa fa-search mt-1 ms-3"></i> */}
                  <input type="text" className="form-control  searchcourseinput" placeholder="Find a course?"
                  value={query}
                  onChange={handleInputfieldChange}  />

                  <button className=" searchbutton">Search course</button>
                  <ul className="inputresult list-unstyled" id='searchresult'>
                {courses.map(course => ( 
                    <a href={`/coursedetails/${course._id}`}><li  className="p-2" key={course._id}>{course === "No_course_found" ? 'No course found': course.course_name}</li></a>
                ))
               
                }
            </ul>
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
        All Courses
      </div>

      {/* <div className=' filtercontainer d-flex justify-content-end container mt-3'>
        <div className='row'>
          <div className='col '><a className='filter'>Music</a></div>
          <div className='col'><a className='filter'>Karate</a></div>
          <div className='col'> <a className='filter'>blockchain</a></div>
          <div className='col'> <a className='filter'>Cooking</a></div>
          <div className='col'> <a className='filter'>Music</a></div>
        </div>
      </div> */}

      <div className="container py-5 cardcontainer ">
      {/* {loading && <Preloader />}
      {!loading && ( */}
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        
            {coursedata.map(redercoursecard)} 
            {/* {CourseInfo.map(rendercourse)} */}
            </div>
           {/* )} */}
      {/* {coursedata ?
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 ">
            {coursedata.map(redercoursecard)}   </div> : <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span></div>
          
          }  */}
      </div>
    </>

  )
}
export default Courses
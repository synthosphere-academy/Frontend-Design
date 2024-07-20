import '../Css/blog.css';
import img1 from '../Images/Image.png';
import Slider from "react-slick";
 import 'slick-carousel/slick/slick.css';
 import 'slick-carousel/slick/slick-theme.css';
 import { useEffect, useState } from 'react';
import axios from 'axios';

const Ourblog = () => {
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
  // console.log(ROOT_URL);
  const [blogdata, setblogdata] = useState([])
  useEffect(() => {
    // const apiUrl = process.env.REACT_APP_API_URL;
    axios.get(ROOT_URL+'/api/v1/get_blog')
      .then(blogdata => setblogdata(blogdata.data.data))
      
      .catch(err => console.log(err))
      // console.log(blogdata)
  }, []);

  // const renderblog = (blogdata) => {
  //   return (
  //     <div  className="row" key={blogdata._id}>
  //     <a className = "blogcontent" href='/blog'>
  //     <div className="card" style={{padding:"0 10px "}}>
  //       <div className='container mt-3'>
  //         <img src={blogdata.image} className="card-img-top d-block" alt="noimage" />
  //         <div className="card-body">
  //           <h5 className="card-title">{blogdata.blogtitle}</h5>
  //           <p className="card-text">{blogdata.shortdescription}</p>
  //         </div>
  //       </div>
  //     </div>
  //     </a>
  //     </div>
      
  //   )
  // }

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Adjust settings for screen widths less than 1024px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600, // Adjust settings for screen widths less than 600px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div style={{ backgroundColor: "rgba(14, 18, 85, 1)" }} className='blogsection' id='articlesection'>
      <h4 className='display-4 text-center pt-5 blogheading'>Resources & Insight</h4>
      <h5 className='text-white text-center blogpara'>Engage with a rich array of thought leadership, expert insights, and emerging trends through our diverse</h5>
      <h6 className='text-white text-center blogpara'>and dynamic blog platform inspiring continuous learning and innovation</h6>
      <div className="container py-5 w-75 ">
     
      <Slider {...settings}>
     
      {blogdata.map((blog) =>(
        <div key={blog._id}  style={{padding: "0 6px"}}>
        <a className='blogcontent ' href={`/blog/${blog._id}`}>
      <div className="card h-100"   >
        <div className='container mt-3 h-100'>
          <img src={blog.image} className="card-img-top d-block" alt="noimage" />
          <div className="card-body h-100">
            <h5 className="card-title">{blog.blogtitle}</h5>
            <p className="card-text" dangerouslySetInnerHTML={{
                    __html: blog.shortdescription}}></p>
          </div>
        </div>
      </div>
      </a>
      </div>
      
      
      ))
      }
      </Slider>
      
      </div>
    </div>

  )
}

export default Ourblog;

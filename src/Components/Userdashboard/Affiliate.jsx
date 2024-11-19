import React from 'react'
import { useState , useEffect} from 'react';
import axios from "axios";
import lessonicon from "../../Images/lesson.svg";
import teacherpic from "../../Images/academy.png";


      
function Affiliate() {
    const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
const [orderdata, setorderdata] = useState([]);
const [productdata, setproduct] = useState([]);
const [affiliateLinks, setAffiliateLinks] = useState({});
const [copied, setCopied] = useState(false);
    const order = () => {
        const userId = sessionStorage.getItem('userid');
        axios.get(ROOT_URL + `/api/auth/orderdetails/${userId}`)
        .then((orderdetail) => {
            setorderdata(orderdetail.data);
           // Log the actual data coming from the server
        })
        .catch((err) => console.log(err));
    };
    
    useEffect(() => {
        order();
    }, []); // This useEffect runs only once, on mount, to fetch order data
    
    useEffect(() => {
        if (orderdata.length > 0) { // This useEffect will run when orderdata changes
            axios.get(ROOT_URL + `/api/v1/get_course`)
            .then((productdata) => setproduct(productdata.data.data))
            .catch((err) => console.log(err));
        }
    }, [orderdata]);
    const handleCopyLink = (id) => {
      if (affiliateLinks && affiliateLinks[id]) {
        navigator.clipboard
          .writeText(affiliateLinks[id])
          .then(() => {
            setCopied(true); // Set copied to true
          setTimeout(() => setCopied(false), 4000);
          })
          .catch((error) => {
            console.error("Error copying referral link:", error);
          });
      } else {
        console.error("No referral link to copy for id:", id);
      }
    };
    
    const redercoursecard = (productdata) => {
        return (
          <div className="col" key={productdata._id}>
            <div className="card h-100 d-flex flex-column">
              <img
                className="card-img-top cardimage "
                src={productdata.image}
                alt="Sample photo"
              />
              <div className="card-body flex-grow-1">
                <div className="row">
                  <div className="col-6">
                    <img src={lessonicon} width={20} height={20} />
                    <span className="ms-2">{productdata.total_video} videos</span>
                  </div>
                  <div className="col-6 text-end d-flex flex-column">
                    <span className=" h5 fw-bold">₹{productdata.course_price}</span>
                    <span className="text-muted"style={{marginTop:"-10px"}}>(Including GST)</span>
                  </div>
                </div>
                <h5 className="mt-3">{productdata.course_name}</h5>
                 <hr />
                
                <div className="row">
                  <div className="col-2">
                    <img
                      className="rounded-circle"
                      width={40}
                      height={40}
                      src={teacherpic}
                    />
                  </div>
                  <div className="col-10 mt-2">
                    <span>{productdata.teacher_name}</span>
                    <br />
                    <span className="text-muted">{productdata.teacher_dept}</span>
                  </div>
                </div>
              </div>
              <div className=" card-footer row mt-2">
                <div className="col-12 text-center">
                  <a
                    className="buttonlearnmore"
                  >
                    <button className=" learnmore w-75" onClick={() => getAffiliate(productdata._id)}>Get Affiliate Link</button>
                  </a>
                  {
                    affiliateLinks[productdata._id] && (
                      <>
                      <input type="text" className='w-75' value={affiliateLinks[productdata._id]} readOnly
                   />
                    {
                    copied ? <span className="ms-2 text-success">Copied!</span> : <i className="fa fa-copy ms-2" onClick={() => handleCopyLink(productdata._id)}></i>
                  }
                     
                      </>
                    )
                  }
                  
                </div>
              </div>
            </div>
          </div>
        );
      };

      const getAffiliate = (courseId) => {
        const userId = sessionStorage.getItem("userid");
        axios
        .post(`https://academy-backend-api.onrender.com/api/affiliate/generate/courselink`, { userId, courseId })
        .then((response) => {
          const { courseLink } = response.data;
          setAffiliateLinks((prev) => ({ ...prev, [courseId]: courseLink })); // Store the link in state
        })
        .catch((err) => console.log(err));
    };
        
      
    
  return (
    
    <>
   
    {
        productdata.length> 0 ? <>
        <div className="container py-2 cardcontainer">
            <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2 g-4 ">
        {productdata.map(redercoursecard)}
        </div>
        </div>
        </>
        : <div>
        <h3 className='text-center'>Purchase any course to become an affiliate</h3>
        </div>
    }
       
    </>
  )
}

export default Affiliate
import { useState , useEffect} from 'react';
import axios from "axios";
function Myprofile() {
  // const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
   const userId = sessionStorage.getItem('userid');
   const username = sessionStorage.getItem('username');
   const useremail = sessionStorage.getItem('useremail');
   const userphone = sessionStorage.getItem('userphone');
   const userstatus = sessionStorage.getItem('userstatus');
  // const [userdata, setuserdata] = useState([]);
  // useEffect(() => {
  //   const userId = sessionStorage.getItem('userid');
  //   console.log(userId);
  //      axios
  //     .get(ROOT_URL + `/api/auth/getuser/${userId}`)
  //     .then((userdetail) => {
  //       setuserdata(userdetail.data);
  //       console.log(userdata);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);
    // const formattedregistrationDate = new Date(userdata.createdAt).toLocaleDateString();
    // const formattedbirthDate = new Date(userdata.date).toLocaleDateString();
  return (
    <div>
     
      <div className='card w-75 p-5 shadow-lg border-0'>
      
      <div className="row">
        {/* <div className="col-lg-2 fw-bold">
          <span style={{fontSize:"18px"}}>Joining Date:</span>
        </div> */}
        {/* <div className="col-lg-10 ">
          <span style={{fontSize:"18px"}}>{formattedregistrationDate}</span>
        </div> */}
      </div>
      <div className="row ">
        <div className="col-lg-2 fw-bold" >
          <span style={{fontSize:"18px"}}>User ID:</span>
        </div>
        <div className="col-lg-10 ">
          <span style={{fontSize:"18px"}}>{userId || "None" }</span>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-lg-2 fw-bold" >
          <span style={{fontSize:"18px"}}>Full Name:</span>
        </div>
        <div className="col-lg-10 ">
          <span style={{fontSize:"18px"}}>{username || "None"}</span>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-lg-2 fw-bold">
          <span style={{fontSize:"18px"}}>Phone No:</span>
        </div>
        <div className="col-lg-10 ">
          <span style={{fontSize:"18px"}}>{userphone || "None"}</span>
        </div>
      </div>
     
      <div className="row mt-4">
        <div className="col-lg-2 fw-bold">
          <span style={{fontSize:"18px"}}>Email:</span>
        </div>
        <div className="col-lg-10 ">
          <span>{useremail || "None"}</span>
        </div>
      </div>
        <div className="row mt-4">
        <div className="col-lg-2 fw-bold">
          <span style={{fontSize:"18px"}}>Status:</span>
        </div>
        <div className="col-lg-10 ">
          <span style={{fontSize:"18px"}}>{userstatus || "None"}</span>
        </div>
      </div>
      </div>
  
     

    </div>
  )
}

export default Myprofile

import "../../Css/Entrolled.css";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import swal from 'sweetalert';

const Entrolled = () => {
  const navigate = useNavigate();
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
  const [userData, setUserData] = useState(null);

 useEffect(() => {
  const fetchUserDetails = async () => {
    const userId= sessionStorage.getItem('userid');
    console.log("Fetched UserID:", userId);
    if (!userId) {
      swal("Oops!", "User not logged in!", "warning");
      // navigate('/login');
      return;
    }

    try {
      const response = await axios.post(`${ROOT_URL}/api/users/full-details`, { userId });

      // extract courses from user object
       setUserData(response.data.data.courseDetails);  // store the whole user object
        console.log(response.data);
      // const coursesArray = Object.values(coursesData); // convert object to array

      // setenrollcourse(coursesArray);
      // console.log(coursesArray);
    } catch (err) {
      console.error(err);
      swal("Oops!", "Please login again!", "warning");
     
    }
  };

  fetchUserDetails();
}, []);



  return (
    <>
       <div className="container">
      {userData ? (
        <div className='table-responsive'>
          <table className="table table-striped">
            <thead className="table-primary">
              <tr>
               
                <th>Course Name</th>
                <th>Package Name</th>
                  <th>Date</th>
                
              </tr>
            </thead>
              <tbody>
                
                  <tr key={userData._id}>
                  
                  <td>{userData.courseName || "N/A"}</td>
                  <td>{userData.packageName || "N/A"}</td>
                  <td>{new Date(userData.createdAt).toLocaleDateString()}</td>
                
                </tr>
           
            </tbody>
            </table>
            </div>
      
      ) : (
        <p className="text-center">Loading user data...</p>
      )}
    </div>
    </>
  );
};

  {/* <div className="card-container">
          <div className="card p-4">
            <h5 className="course-package">Course Name: {userData.courseName || "No Package"}</h5>
            <h5 className="course-name">Package Name: {userData.packageName || "No Course Enrolled"}</h5>
          </div>
        </div> */}
export default Entrolled;

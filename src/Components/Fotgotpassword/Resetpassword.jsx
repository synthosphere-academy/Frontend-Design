import React , { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom';
import Updatepassword from './Updatepassword';
import axios from 'axios';
import swal from 'sweetalert';
import Nav from "../Nav"
import Footer from "../Footer"

const Resetpassword = () => {
    const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
    const [searchParams] = useSearchParams();
  const token = searchParams.get('token'); 
  console.log(token);
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    useEffect(() => {
        // Verify the token when the component mounts
        const verifyToken = async () => {
          try {
            const response = await axios.get(ROOT_URL+`/api/auth/verifysentemail?token=${token}`);
            setEmail(response.data.user.email);
            setMessage('Token verified successfully');
          } catch (error) {
            swal("Error!", error.message || 'Error', "error");
            setMessage(error.message)
          }
        };
        
        verifyToken();
      }, [token]);
  return (
    <div>
    <Nav />
    <h2 className='text-center mt-5'>Reset Password</h2>
    {/* {message && <p>{message}</p>} */}
    {email && (
      <Updatepassword email={email} token={token} />
    )}
    <Footer />
  </div>
  )
}

export default Resetpassword
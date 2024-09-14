import React , { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom';
import Updatepassword from './Updatepassword';
import axios from 'axios';

const Resetpassword = () => {
    const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
    const [searchParams] = useSearchParams();
  const token = searchParams.get('token'); 
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    useEffect(() => {
        // Verify the token when the component mounts
        const verifyToken = async () => {
          try {
            const response = await axios.get(ROOT_URL+`/api/auth/verifysentemail?${token}`);
            setEmail(response.data.user.email);
            setMessage('Token verified successfully');
          } catch (error) {
            setMessage('Invalid or expired token');
          }
        };
        
        verifyToken();
      }, [token]);
  return (
    <div>
    <h2>Reset Password</h2>
    {message && <p>{message}</p>}
    {email && (
      <Updatepassword email={email} token={token} />
    )}
  </div>
  )
}

export default Resetpassword
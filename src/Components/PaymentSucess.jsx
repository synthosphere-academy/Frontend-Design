import React from 'react'
import LottieAnimation from './Lottieanimation'
import '../Css/paymentsuccess.css'
import { Link } from 'react-router-dom';

function PaymentSucess() {
  const handleSocialClick = (platform, url) => {
  window.open(url, "_blank", "noopener,noreferrer");
};
  return (
    <>
        <div className='text-center'>
        {/* <div className='card'>
      <h1>Payment Successful!</h1>
      <p>Thank you for your purchase. Your order has been successfully processed.</p>
    </div> */}
    <div className='container  paymentcontainer my-5'>
    <div className="card successcard">
  <div className="card-body">
    <LottieAnimation speed={2}/>
    <h3 className="card-title mb-2">Payment Successful!</h3>
    <div className='card-text'>
    <div className="">Thank you for your purchase!</div>
  
    </div>
  
   
    <div className='row mt-3'>
    <div className='col-6 '><Link to="/"><button className="btn  buttonstyle  card-link text-white text-center w-75" type="submit" >Go to Home</button></Link></div>
   
    <div className='col-6  '><Link to="/userdashboard"><button className="btn  buttonstyle  card-link text-white text-center w-75" type="submit" >Go to my courses </button></Link></div>
    </div>
    <div className="mt-3 d-flex justify-content-center align-items-center gap-3 social-follow-box">

    <div
      className="social-follow-item"
      onClick={() =>
        handleSocialClick("instagram", "https://www.instagram.com/synthosphere_academy?")
      }
    >
      <i className="fab fa-instagram instagram-icon"></i>
     
    </div>

    <div
      className="social-follow-item"
      onClick={() =>
        handleSocialClick("facebook", "https://www.facebook.com/profile.php?id=61560565260565&mibextid=ZbWKwL")
      }
    >
      <i className="fab fa-facebook facebook-icon"></i>
   
    </div>

    <div
      className="social-follow-item"
      onClick={() =>
        handleSocialClick("youtube", "https://youtube.com/@synthosphereacademy_official?si=jYvA4I6J84tplNMl")
      }
    >
      <i className="fab fa-youtube youtube-icon"></i>
      
    </div>
  
    <div
      className="social-follow-item"
      onClick={() =>
        handleSocialClick("telegram", "https://t.me/+YxHXXOUVMtE4ZTQ1")
      }
    >
      <i className="fab fa-telegram telegram-icon"></i>
      
    </div>
    

  </div>
  </div>
</div>
    </div>
    </div>
    </>
    
  )
}

export default PaymentSucess

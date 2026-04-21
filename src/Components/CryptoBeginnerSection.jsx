import React from "react";
import crypto from "../Images/cryptotrade.jpg";
const CryptoBeginnerSection = () => {
  return (
    <section className="container my-5">
      <div className="row align-items-center">
        
        {/* Left Image */}
        

        {/* Right Content */}
        <div className="col-md-12 align-items-center text-center">
          <h1 className=" display-4 fw-bold mb-3 heading">
            Learn Crypto Trading For Beginners
          </h1>

          <p className="text-muted mt-4">
            Start your journey into cryptocurrency trading with our beginner-friendly course.
            Learn how to read charts, understand market trends, manage risks, and make smart trading decisions.
          </p>
            
         <ul className="mb-4 list-unstyled mt-4">
  <div className="row">
    
    <div className="col-12 col-md-6 mb-2">
      <li className="fw-bold" style={{ fontSize: "19px" }}>
        <i className="fa fa-check-square-o me-2" style={{color:"rgb(32, 142, 142)"}}></i>
        Step-by-step beginner guide
      </li>
    </div>

    <div className="col-12 col-md-6 mb-2">
      <li className="fw-bold" style={{ fontSize: "19px" }}>
        <i className="fa fa-check-square-o me-2" style={{color:"rgba(253, 184, 20, 1)"}} ></i>
        Live market examples
      </li>
    </div>

    <div className="col-12 col-md-6 mb-2">
      <li className="fw-bold" style={{ fontSize: "19px" }}>
        <i className="fa fa-check-square-o me-2" style={{color:"#f67761"}} ></i>
        Risk management strategies
      </li>
    </div>

    <div className="col-12 col-md-6 mb-2">
      <li className="fw-bold" style={{ fontSize: "19px" }}>
        <i className="fa fa-check-square-o me-2" style={{color:"green"}} ></i>
        Lifetime access & certificate
      </li>
    </div>

  </div>
</ul>
          <button className="btn-lg signupbutton px-4">
            Enroll Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default CryptoBeginnerSection;
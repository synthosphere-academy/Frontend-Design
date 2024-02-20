import Footer from "./Footer"
import pic from '../Images/Reading.png'
import '../Css/Login.css'


function Login() {
  return (
    <>
      <section >
  <div className="container py-5">
    <div className="row d-flex justify-content-center align-items-center ">
      <div className="col col-xl-10">
        <div className="card" >
          <div className="row g-0">
            <div className="col-md-6 col-lg-5 d-md-block">
              <img src={pic}
                alt="loginform" className="img-fluid"  />
            </div>
            <div className="col-md-6 col-lg-7 d-flex align-items-center" id="loginform">
              <div className="card-body p-4 p-lg-5 text-black">

                <form>

                  <div className="d-flex align-items-center mb-3 pb-1">
                    <span className="h1 fw-bold mb-0 text-white">Synthosphere Academy</span>
                  </div>

                  <h5 className="fw-normal mb-3 pb-3 text-white">Sign into your account</h5>

                  <div className="form-outline mb-4">
            <input type="email" id="forminput1" className="form-control form-control-lg text-white"
              />
            <label className="form-label text-white" htmlFor="forminput1">Email address / Username</label>
          </div>

                  <div className="form-outline mb-4">
                    <input type="password" id="forminput2" className="form-control form-control-lg text-white" />
                    <label className="form-label  text-white" htmlFor="forminput2">Password</label>
                  </div>

                  <div className="pt-1 mb-4">
                    <button className="btn btn-lg btn-success btn-block" type="button">Login</button>
                  </div>

                  <a className="small text-white" href="#!">Forgot password?</a>
                  <p className="mb-5 pb-lg-2 text-white">Do not have an account? <a href="#!"
                      >Register here</a></p>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      <Footer/>
      </>
   
  )
}

export default Login

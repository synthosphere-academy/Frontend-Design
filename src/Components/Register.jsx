
import '../Css/Register.css'

import pic from '../Images/reg.png'
function Register() {
    return (
        <>
            <section >
                <div className="container py-5">
                    <div className="row d-flex justify-content-center align-items-center ">
                        <div className="col col-xl-10">
                            <div className="card" >
                                <div className="row g-0">

                                    <div className="col-md-6 col-lg-7 d-flex align-items-center" id="loginform">
                                        <div className="card-body p-4 p-lg-5">

                                            <form>

                                                <div className="d-flex align-items-center mb-3 pb-1">
                                                    <span className="h1 fw-bold mb-0 text-white">Synthosphere Academy</span>
                                                </div>

                                                <h5 className="fw-normal mb-3 pb-3 text-white">Register Here</h5>
                                                <div className="form-group  mb-4">
                                                    <label className="text-white" htmlFor="exampleInputEmail1">Name</label>
                                                    <input type="text" className="form-control form-control-lg" id="name" name="name" placeholder="Enter Your email" />
                                                    {/* <small id="emailHelp" className="form-text text-muted text-white">We will never share your email with anyone else.</small> */}
                                                </div>
                                                <div className="form-group  mb-4">
                                                    <label className="text-white" htmlFor="exampleInputEmail1">Phone Number</label>
                                                    <input type="email" className="form-control form-control-lg" id="phono" placeholder="Enter Your email" />
                                                    {/* <small id="emailHelp" className="form-text text-muted text-white">We will never share your email with anyone else.</small> */}
                                                </div>
                                                <div className="form-group mb-4">
                                                    <label className="text-white" >Age (18+) </label>
                                                    <input className="input" type="radio" id="yes" name="fav_language" value="Yes"/>
                                                        <label className="text-white"htmlFor="html">Yes</label>
                                                        <input  className="input" type="radio" id="yes" name="fav_language" value="No"/>
                                                        <label className="text-white">No</label>
                                                        </div>

                                                        <div className="form-group  mb-4">
                                                            <label className="text-white" htmlFor="exampleInputEmail1">Email address</label>
                                                            <input type="email" className="form-control form-control-lg" id="email" name="email" placeholder="Enter Your email" />
                                                            {/* <small id="emailHelp" className="form-text text-muted text-white">We will never share your email with anyone else.</small> */}
                                                        </div>
                                                        <div className="form-group mb-4">
                                                            <label className="text-white" htmlFor="exampleInputEmail1">Password</label>
                                                            <input type="Password" className="form-control form-control-lg" id="Password" aria-describedby="emailHelp" placeholder="Enter Your Password" />
                                                        </div>
                                                        <span className="text-white"><input type="checkbox" /> I agree all statements in Terms of service</span>

                                                        <div className="pt-1 mb-4 text-center">
                                                            <button className="btn btn-lg btn-success w-50 " type="button">Sign up</button>
                                                        </div>

                                                        

                                                            <span className="mb-5 pb-lg-2 text-white register_text" >Have an account? <a className="reg" href="/login"
                                                            >Login</a></span>
                                                        
                                                    </form>

                                                </div>
                                        </div>
                                        <div className="col-md-6 col-lg-5 d-flex justify-content-center mt-5">
                                            
                                            <img src={pic}
                                                alt="loginform" className="img-fluid" width="50%" height="auto" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
           
        </>
    )
}

export default Register

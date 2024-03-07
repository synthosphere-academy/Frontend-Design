
import { useState } from 'react'
import '../Css/Register.css'
import axios from 'axios';
import swal from 'sweetalert';

import pic from '../Images/reg.png'
function Register() {
    const [fullname, setName] = useState('')
    const [phoneno, setPhoneno] = useState('')
    const [adult, setAdult] = useState('')
    const [email, setEmail] = useState('')
     const [password, setPassword] = useState('')

    const [emailerror, setemailerror] = useState(false)
    const [mobilenoerror, setmobileerror] = useState(false)
    const [passwordError , setpasserror] = useState('')
    const [confirmpasserror , setconfirmpasserror] = useState(false)

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }
    function emailHandler(e) {
        let item = e.target.value;
        if (!isValidEmail(item)) {
            setemailerror(true);
        } else {
            setemailerror(false);
        }
    }
    function mobileHandler(e){
        let item = e.target.value;
        if(item.length != 10){
            setmobileerror(true)
        }else{
            setmobileerror(false)
        }
    }
    function passwordHandler(e){
        let item = e.target.value;
        if (!/[A-Z]/.test(item)){
            setpasserror("Password must contain one uppercase letter");
        }
        else if (!/[!@#$%^&*(),.?":{}|<>]/.test(item)) {
            setpasserror("Password must contain one Special character");
          }
          else if (!/\d/.test(item)) {
            setpasserror('Password must contain at least one number');
          }
        else if (item.length < 8) {
            setpasserror('Password must be at least 8 characters long');
        }
        else{
            setpasserror("")
        }
    }
    function confirmpasswordHandler(e){
        let item= e.target.value;
        let password_value = document.getElementById('password').value;
        
        if ( password_value  !== item) {
            setconfirmpasserror(true);
        
        }else{
            setconfirmpasserror(false)
        }
    }


    const handleSubmit = (event) => {
        if (fullname === "" || phoneno === "" || adult === "" || email === "" || password === "") {
            swal("Opps!", "Please fill out all required fields!", "error");

        }
        else if (setemailerror === "true" || setmobileerror === "true" || setpasserror !== ""){
            swal("Opps!", "give valid inputs!", "error");
        }
        else {
            event.preventDefault();
            axios.post('http://localhost:8081/auth/', { fullname, phoneno, adult, email, password })
                .then(res => {
                    console.log(res);
                    swal("Thank You!", "Registration sucessfully completed!", "success");
                })
                .catch(err=>{
                    console.log(err);
                    alert("Opps!", "Not inserted !", "error");

                })
                
            }
        
    }
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
                                                    <input type="text" className="form-control form-control-lg" id="name" name="fullname" placeholder="Enter Your Name" onChange={e => setName(e.target.value)} />
                                                    {/* <small id="emailHelp" className="form-text text-muted text-white">We will never share your email with anyone else.</small> */}
                                                </div>
                                                <div className="form-group  mb-4">
                                                    <label className="text-white" htmlFor="exampleInputEmail1">Phone Number</label>
                                                    <input type="text" className="form-control form-control-lg" id="phoneno" onKeyUp={mobileHandler}
                                                    name="phoneno" placeholder="Enter Your Phone Number" onChange={e => setPhoneno(e.target.value)} />
                                                     {mobilenoerror?<span className='link-warning'>Mobile number invalid</span>:""} 
                                                    {/* <small id="emailHelp" className="form-text text-muted text-white">We will never share your email with anyone else.</small> */}
                                                </div>
                                                <div className="form-group mb-4">
                                                    <label className="text-white" >Age (18+) </label>
                                                    <input className="input" type="radio" name="adult" value="Yes" onChange={e => setAdult(e.target.value)} />
                                                    <label className="text-white" htmlFor="html">Yes</label>
                                                    <input className="input" type="radio" name="adult" value="No" onChange={e => setAdult(e.target.value)} />
                                                    <label className="text-white">No</label>
                                                </div>

                                                <div className="form-group  mb-4">
                                                    <label className="text-white" htmlFor="exampleInputEmail1">Email address</label> 
                                                    <input type="email"  className="form-control form-control-lg" id="email" name="email" 
                                                      onKeyUp={emailHandler}  placeholder="Enter Your email" onChange={e => setEmail(e.target.value)} />
                                                      {emailerror?<span className='link-warning'>Email invalid</span>:""} 
                                                    {/* <small id="emailHelp" className="form-text text-muted text-white">We will never share your email with anyone else.</small> */}
                                                </div>
                                                <div className="form-group  mb-4">
                                                    <label className="text-white" htmlFor="exampleInputEmail1">Password</label> 
                                                    <input type="text"  className="form-control form-control-lg" id="password" name="password" 
                                                      onKeyUp={passwordHandler}  placeholder="Enter Your password" onChange={e => setPassword(e.target.value)} />
                                                       {passwordError && <span className='link-warning'>{passwordError}</span>}
                                                      {/* {passerror?<span className='link-warning'>Password must me 8 character, one Uppercase, one special character</span>:""}  */}
                                                    {/* <small id="emailHelp" className="form-text text-muted text-white">We will never share your email with anyone else.</small> */}
                                                </div>
                                                <div>
                                                    <label className='text-white' htmlFor='exampleInputEmail1'>Confirm Password</label>
                                                    <input type="text"  className="form-control form-control-lg" id="confirmpassword" name="confirmpassword" 
                                                      onKeyUp={confirmpasswordHandler}  placeholder="Enter Your password" onChange={e => setPassword(e.target.value)} />
                                                      {confirmpasserror?<span className='link-warning'>Password invalid</span>:""}
                                                </div>
                                                
                                                <span className="text-white"><input type="checkbox" /> I agree all statements in Terms of service</span>

                                                <div className="pt-1 mb-4 text-center">
                                                    <button className="btn btn-lg btn-success w-50 " type="submit" onClick={handleSubmit} >Sign up</button>
                                                </div>



                                                <span className="mb-5 pb-lg-2 text-white register_text" >Have an account? <a className="reg text-success" href="/login"
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


import { useState } from 'react'
import '../Css/Register.css'
import axios from 'axios';
import swal from 'sweetalert';
import DatePicker from 'react-date-picker';

import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import '../Css/Datepicker_style.css';


// import pic from '../Images/reg.png'
// import pic from '../Images/reg_img.png'
function Register() {
    const [fullname, setName] = useState('')
    const [phoneno, setPhoneno] = useState('')
    // const [date, setDate] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [DropdownValue_state, setDropdownValue_state] = useState('')
    const [DropdownValue, setDropdownValue] = useState('')
    const [image, setImage] = useState(null)
    const [Date, setDate] = useState(null);



    const [emailerror, setemailerror] = useState(false)
    const [mobilenoerror, setmobileerror] = useState(false)
    const [passwordError, setpasserror] = useState('')
    const [confirmpasserror, setconfirmpasserror] = useState(false)
    const [imagefileerror, setimagefileerror] = useState('')



    //convert iamge to base64
    const convertToBase64 = (file) => {
        console.log(file);
        const reader = new FileReader();
        reader.readAsDataURL(file);
        const data = new Promise((resolve, reject) => {
            reader.onload = () => resolve(reader.result)
            reader.onerror = (err) => {
                reject(err)
            }
        })
        return data;
    }
    //for image handlefilechange
    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        const image = await convertToBase64(file)
        setImage(image);
        const fileName = document.getElementById("fileName").value;
        const idxDot = fileName.lastIndexOf(".") + 1;
        const extFile = fileName.substr(idxDot, fileName.length).toLowerCase();
        if (file.size >= 500000) {
            setimagefileerror("file size not more than 500kb");
        }
        else if (extFile === "jpg" || extFile === "jpeg" || extFile === "png") {
            setimagefileerror("")
        }

        else {
            setimagefileerror("file not allowed")
        }
        // console.log(image);
    };

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
    function mobileHandler(e) {
        let item = e.target.value;
        if (item.length != 10) {
            setmobileerror(true)
        } else {
            setmobileerror(false)
        }
    }
    function passwordHandler(e) {
        let item = e.target.value;
        if (!/[A-Z]/.test(item)) {
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
        else {
            setpasserror("")
        }
    }
    function confirmpasswordHandler(e) {
        let item = e.target.value;
        let password_value = document.getElementById('password').value;

        if (password_value !== item) {
            setconfirmpasserror(true);

        } else {
            setconfirmpasserror(false)
        }
    }
    const handleDropdownChange = (event) => {
        setDropdownValue(event.target.value);
    };
    const handleDropdownChange_state = (event) => {
        setDropdownValue_state(event.target.value);
    };


    //hadlesubmit
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (fullname === "" || phoneno === "" || Date === "" || DropdownValue_state === "" || DropdownValue === "" || image === "" || email === "" || password === "") {
            swal("Opps!", "Please fill out all required fields!", "error");

        }
        else if (emailerror != "" || mobilenoerror != "" || passwordError != "" || imagefileerror != "") {
            swal("Opps!", "give valid inputs!", "error");
        }
        else {

            await axios.post('http://localhost:8081/api/v1/register/new', { fullname, phoneno, Date, DropdownValue_state, DropdownValue, email, password, image })
                .then(res => {
                    console.log(res);
                    swal("Thank You!", "Registration sucessfully completed!", "success");
                })
                .catch(err => {
                    console.log(err);
                    swal("Opps!", "Not inserted !", "error");

                })

        }

    }
    return (
        <>
            <section  >
                <div className="container formcontainer  mt-5 mb-5 ">
                    <form className='row g-3 py-2'>
                        <div className="col-lg-6">
                            <label className='form-label text-white' htmlFor="name">Name </label>
                            <input type="text" className="form-control form-control-lg" id="name" name="fullname" placeholder="Enter Your Name" onChange={e => setName(e.target.value)} />

                        </div>
                        <div className="col-lg-6">
                            <label className='form-label text-white' htmlFor="exampleInputEmail1">Phone Number</label>
                            <input type="text" className="form-control form-control-lg" id="phoneno" onKeyUp={mobileHandler}
                                name="phoneno" placeholder="Enter Your Phone Number" onChange={e => setPhoneno(e.target.value)} />
                        </div>
                        <div className='col-lg-3'>
                            <label className='form-label text-white' htmlFor="exampleInputEmail1">Date of birth </label>
                            <span className='form-control h-50'><DatePicker value={Date} className="" onChange={date => setDate(date)} dateFormat="dd/MM/yyyy" /></span>

                        </div>
                        <div className='col-lg-4'>
                            <label className="form-label text-white" htmlFor="exampleInputEmail1">State</label>
                            <select className="form-select form-control-lg mb-3 h-50" aria-label=".form-select-lg example" value={DropdownValue_state} onChange={handleDropdownChange_state}>
                                <option value="Choose State" label='Enter your city'></option>
                                <option value="West bengal" label='West Bengal'></option>
                                <option value="Delhi" label='delhi'></option>
                                <option value="Mumai" label='Mumbai'></option>
                            </select>
                        </div>
                        
                        <div className='col-lg-5'>
                            <label className="form-label text-white" htmlFor="exampleInputEmail1">City</label>
                            <select className="form-select form-control-lg h-50 mb-3" aria-label=".form-select-lg example" value={DropdownValue} onChange={handleDropdownChange}>
                                <option value="Choose city" label=' Enter your city'></option>
                                <option value="Kolkata" label='Kolkata'></option>
                                <option value="Howrah" label='Howrah'></option>
                                <option value="Hoogly" label='Hoogly'></option>
                            </select>
                        </div>
                        <div className='col-lg-8'>
                            <label className="form-label text-white" htmlFor="fileName">Student Image</label>
                            <div className="input-group custom-file-button  ">
                                <label className="input-group-text " htmlFor="fileName">Browse</label>
                                <input type="file" className=" form-control form-control-lg" name='image' accept=".png, .jpg, .jpeg" id="fileName" onChange={handleFileChange} />
                            </div>
                            {imagefileerror ? <span className='link-warning'>{imagefileerror}</span> : ""}
                        </div>
                       

                        <div className='col-lg-4'> {
                            imagefileerror ? "" : <img width={100} height={100} src={image} />
                        }
                        </div>
                        <div className='col-lg-4'>
                        <label className="form-label text-white" htmlFor="exampleInputEmail1">Email address</label>
                                                    <input type="email" className="form-control form-control-lg" id="email" name="email"
                                                        onKeyUp={emailHandler} placeholder="Enter Your email" onChange={e => setEmail(e.target.value)} />
                                                    {emailerror ? <span className='link-danger'>Email invalid</span> : ""}
                                                    

                        </div>
                        <div className='col-lg-4'>
                        <label className="form-label text-white" htmlFor="exampleInputEmail1">Password</label>
                                                    <input type="text" className="form-control form-control-lg" id="password" name="password"
                                                        onKeyUp={passwordHandler} placeholder="Enter Your password" onChange={e => setPassword(e.target.value)} />
                                                    {passwordError && <span className='link-danger'>{passwordError}</span>}
                                                     {passwordError?<span className='link-danger'>Password must me 8 character, one Uppercase, one special character</span>:""}

                        </div>
                        <div className='col-lg-4'>
                        <label className='form-label text-white' htmlFor='exampleInputEmail1'>Confirm Password</label>
                                                    <input type="text" className="form-control form-control-lg" id="confirmpassword" name="confirmpassword"
                                                        onKeyUp={confirmpasswordHandler} placeholder="Enter Your password" onChange={e => setPassword(e.target.value)} />
                                                    {confirmpasserror ? <span className='link-danger'>Password invalid</span> : ""}

                        </div>
                        <span  className='text-white'><input type="checkbox" /> I agree all statements in Terms of service</span>

                                                <div className="pt-1  text-center">
                                                    <button className=" btn-lg signupbutton  w-50" type="submit" onClick={handleSubmit} >Sign up</button>
                                                </div>



                                                <span className="mb-5 pb-lg-2 text-center register_text text-white" >Have an account? <a className="reg text-success" href="/login"
                                                >Login</a></span>

                        

                    </form>


                    {/* <div className="row d-flex justify-content-center align-items-center ">
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
                                                    <label className="text-white" htmlFor="exampleInputEmail1">Name </label>
                                                    <input type="text" className="form-control form-control-lg" id="name" name="fullname" placeholder="Enter Your Name" onChange={e => setName(e.target.value)} />
                                                    {/* <small id="emailHelp" className="form-text text-muted text-white">We will never share your email with anyone else.</small> */}
                    {/* </div>
                                                <div className="form-group  mb-4">
                                                    <label className="text-white" htmlFor="exampleInputEmail1">Phone Number</label>
                                                    <input type="text" className="form-control form-control-lg" id="phoneno" onKeyUp={mobileHandler}
                                                        name="phoneno" placeholder="Enter Your Phone Number" onChange={e => setPhoneno(e.target.value)} />
                                                    {mobilenoerror ? <span className='link-warning'>Mobile number invalid</span> : ""}
                                                    {/* <small id="emailHelp" className="form-text text-muted text-white">We will never share your email with anyone else.</small> 
                                                </div> 



                                                <div className="form-group  mb-4">
                                                    <label className="text-white" htmlFor="exampleInputEmail1">Date of birth </label>
                                                    <span className='ms-3'><DatePicker value={Date} className="bg-white" onChange={date => setDate(date)} dateFormat="dd/MM/yyyy" /></span>
                                                </div>
                                                <div className="form-group  mb-4">
                                                    <label className="text-white" htmlFor="exampleInputEmail1">State</label>
                                                    <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" value={DropdownValue_state} onChange={handleDropdownChange_state}>
                                                        <option value="Choose State" label=' Enter your city'></option>
                                                        <option value="West bengal " label='West Bengal'></option>
                                                        <option value="Delhi" label='delhi'></option>
                                                        <option value="Mumai" label='Mumbai'></option>
                                                    </select>
                                                </div>
                                                <div className="form-group  mb-4">
                                                    <label className="text-white" htmlFor="exampleInputEmail1">City</label>
                                                    <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" value={DropdownValue} onChange={handleDropdownChange}>
                                                        <option value="Choose city" label=' Enter your city'></option>
                                                        <option value="Kolkata" label='Kolkata'></option>
                                                        <option value="Howrah" label='Howrah'></option>
                                                        <option value="Hoogly" label='Hoogly'></option>
                                                    </select>
                                                </div>
                                                <div className="form-group  mb-4 ">
                                                <label className="text-white" htmlFor="fileName">Student Image</label>
                                                <div className="input-group custom-file-button input-group-lg ">
                                                    <label className="input-group-text " htmlFor="fileName">Browse</label>
                                                    <input type="file" className=" form-control" name='image' accept=".png, .jpg, .jpeg" id="fileName"  onChange={handleFileChange} />
                                                </div>
                                                </div>
                                                <div>
                                                        { 
                                                                 imagefileerror ?  "" : <img width={90} height={90} src={image} />
                                                        }
                                                        
                                                       
                                                    </div>
                                                {imagefileerror ? <span className='link-warning'>{imagefileerror}</span> : ""}

                                                {/* <div className="form-group  mb-4 ">
                                                    <label className="text-white me-3" htmlFor="fileName">Student image</label>

                                                    <input type="file" name='image' accept=".png, .jpg, .jpeg" id="fileName" className=" form-control-lg text-white" onChange={handleFileChange} />

                                                    <div>
                                                        {image ? <img width={90} height={90} src={image} /> : <span className='text-white border'>no image</span>}
                                                    </div>
                                                </div> 
                                             


                                                <div className="form-group  mb-4">
                                                    <label className="text-white" htmlFor="exampleInputEmail1">Email address</label>
                                                    <input type="email" className="form-control form-control-lg" id="email" name="email"
                                                        onKeyUp={emailHandler} placeholder="Enter Your email" onChange={e => setEmail(e.target.value)} />
                                                    {emailerror ? <span className='link-warning'>Email invalid</span> : ""}
                                                    {/* <small id="emailHelp" className="form-text text-muted text-white">We will never share your email with anyone else.</small> 
                                                </div>
                                                <div className="form-group  mb-4">
                                                    <label className="text-white" htmlFor="exampleInputEmail1">Password</label>
                                                    <input type="text" className="form-control form-control-lg" id="password" name="password"
                                                        onKeyUp={passwordHandler} placeholder="Enter Your password" onChange={e => setPassword(e.target.value)} />
                                                    {passwordError && <span className='link-warning'>{passwordError}</span>}
                                                    {/* {passerror?<span className='link-warning'>Password must me 8 character, one Uppercase, one special character</span>:""}  */}
                    {/* <small id="emailHelp" className="form-text text-muted text-white">We will never share your email with anyone else.</small> */}
                    {/* </div>
                                                <div>
                                                    <label className='text-white' htmlFor='exampleInputEmail1'>Confirm Password</label>
                                                    <input type="text" className="form-control form-control-lg" id="confirmpassword" name="confirmpassword"
                                                        onKeyUp={confirmpasswordHandler} placeholder="Enter Your password" onChange={e => setPassword(e.target.value)} />
                                                    {confirmpasserror ? <span className='link-warning'>Password invalid</span> : ""}
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
                                    <div className="col-md-6 col-lg-5 d-flex justify-content-center">

                                        <img src={pic}
                                            alt="loginform" className="img-fluid" width="70%" />
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div> */}
                </div>
            </section>

        </>
    )
}

export default Register

import { useState, useEffect } from 'react'
import '../Css/Register.css'
import axios from 'axios';
import swal from 'sweetalert';
import DatePicker from 'react-date-picker';

import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import '../Css/Datepicker_style.css';
import nailart from '../Images/nailartpayment.jpg'
import guitar from '../Images/guitercourse.jpg'
import vio from '../Images/violinclasses.jpg'
import { Link } from 'react-router-dom';
const Offlineregister = () => {
    const [fullname, setName] = useState('')
    const [phoneno, setPhoneno] = useState('')
    // const [date, setDate] = useState('')
    const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')
    const [state, setDropdownValue_state] = useState([])

    const [city, setDropdownValue] = useState([])
    const [cities, setSelectedcities] = useState([])
    const [course, setcourse] = useState([])
    const [date, setDate] = useState(null);
    const [token, setToken] = useState(null);
    const [States, setSelectedState] = useState('');
    const [image, setImage] = useState(null);
    // const [error, setError] = useState(null);
    // const [selectedState, setSelectedState] = useState('');



    const [emailerror, setemailerror] = useState(false)
    const [mobilenoerror, setmobileerror] = useState(false)
    // const [passwordError, setpasserror] = useState('')
    // const [confirmpasserror, setconfirmpasserror] = useState(false)
    //for state city api token
    const API_TOKEN = 'C2dy7lLSGxWm63T6Oem2N9jeUlaE5Y9M59MInjwjc-FksoqRsWk0pa-iKk1LzSfEFy0';
    //for authentication
    // const token_auth = 'H-iBBKtdo-9gr80UCAxoWI2oljM9yIuiAfejreeosPA';
    // const config = {
    //     headers: { Authorization: `Bearer ${token_auth}` }
    // };



    const images = {
        nailart: [nailart],
        GuitarClass: [guitar],
        ViolinClass: [vio]
      };
    //image
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

    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        const image = await convertToBase64(file)
        setImage(image);
         console.log(image);
    };


    //for state dropdow
    useEffect(() => {
        const getAuthToken = async () => {
            try {
                const response = await axios.get("https://www.universal-tutorial.com/api/getaccesstoken", {
                    headers: {
                        'api-token': API_TOKEN,
                        'user-email': 'srijani.banerjee2000@gmail.com',
                    }
                });
                setToken(response.data.auth_token);
            } catch (error) {
                console.log(error);
                // setError(error);
            }
        };

        getAuthToken();
    }, []);

    useEffect(() => {
        if (token) {
            const getStates = async () => {
                try {

                    const response = await axios.get('https://www.universal-tutorial.com/api/states/India', {
                        headers: {
                            'Authorization': `Bearer ${token}`,
                            'Accept': 'application/json'
                        }
                    });
                    console.log(response.data);
                    setDropdownValue_state(response.data);

                } catch (error) {
                    // setError(error);
                    console.log(error);

                }
            };

            getStates();
        }
    }, [token]);
    //city
    useEffect(() => {
        if (States) {
            const getCities = async () => {

                try {
                    const response = await axios.get(`https://www.universal-tutorial.com/api/cities/${States}`, {
                        headers: {
                            'Authorization': `Bearer ${token}`,
                            'Accept': 'application/json'
                        }
                    });
                    console.log('Cities response:', response.data);
                    setDropdownValue(response.data);

                } catch (error) {
                    console.error('Error fetching cities:', error);


                }
            };

            getCities();
        }
    }, [States, token]);

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

    const handleDropdownChange_city = (event) => {
        setSelectedcities(event.target.value);
    };
    const handleDropdownChange_state = (event) => {

        setSelectedState(event.target.value);
    };
    const handlecoursechange = (event) => {

        setcourse(event.target.value);
    };
    //hadlesubmit
    const handleSubmit = async (event) => {
        let checkbox = document.getElementById('checkbox');
        event.preventDefault();
        if (fullname === "" || phoneno === "" || date === "" || States === "" || cities === "" || email === "" || course === "" || image === "") {
            swal("Opps!", "Please fill out all required fields!", "error");
        }
        else if (emailerror != "" || mobilenoerror != "") {
            swal("Opps!", "give valid inputs!", "error");
        }
        else if(!checkbox.checked){
            swal("Opps!","You must agree to the terms and conditions before submitting!","error");
            return false;
        }
        else {

            await axios.post('http://localhost:3000/api/auth/offlineregister', { fullname, phoneno, date, States, cities, email, course,image })
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
                    <div className='display-5 text-white text-center'> Offline Register Here!</div>
                    <form className='row g-3 py-2'>
                        <div className="col-lg-6">
                            <label className='form-label text-white' htmlFor="name">Name </label>
                            <input type="text" className="form-control form-control-lg inputform" id="name" name="fullname" placeholder="Enter Your Name" onChange={e => setName(e.target.value)} />

                        </div>
                        <div className="col-lg-6">
                            <label className='form-label text-white' htmlFor="exampleInputEmail1">Phone Number</label>
                            <input type="text" className="form-control form-control-lg inputform" id="phoneno" onKeyUp={mobileHandler}
                                name="phoneno" placeholder="Enter Your Phone Number" onChange={e => setPhoneno(e.target.value)} />
                            {mobilenoerror ? <span className='link-danger'>phone no invalid</span> : ""}
                        </div>
                        <div className='col-lg-3'>
                            <label className='form-label text-white' htmlFor="exampleInputEmail1">Date of birth </label>
                            <span className='form-control'><DatePicker value={date} className="" onChange={date => setDate(date)} dateFormat="dd/MM/yyyy" /></span>

                        </div>
                        <div className='col-lg-4'>
                            <label className="form-label text-white" htmlFor="exampleInputEmail1">State</label>
                            <select className="form-select form-control-lg mb-3 h-50 inputform" aria-label=".form-select-lg example" onChange={handleDropdownChange_state}>
                                <option value="" label='Enter your State'></option>
                                {Array.isArray(state) && state.map(state => (
                                    <option key={state.state_name} value={state.state_name}>{state.state_name}</option>
                                ))}
                            </select>
                        </div>

                        <div className='col-lg-5'>
                            <label className="form-label text-white" htmlFor="exampleInputEmail1">City</label>
                            <select className="form-select form-control-lg h-50 mb-3 inputform" aria-label=".form-select-lg example" onChange={handleDropdownChange_city}>
                                <option value="Choose city" label=' Enter your city'></option>
                                {Array.isArray(city) && city.map(city => (
                                    <option key={city.city_name} value={city.city_name}>{city.city_name}</option>
                                ))}



                            </select>
                        </div>

                        <div className='col-lg-4'>
                            <label className="form-label text-white" htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control form-control-lg inputform " id="email" name="email"
                                onKeyUp={emailHandler} placeholder="Enter Your email" onChange={e => setEmail(e.target.value)} />
                            {emailerror ? <span className='link-danger'>Email invalid</span> : ""}


                        </div>


                        <div className='col-lg-4'>
                            <label className="form-label text-white" htmlFor="exampleInputEmail1">Select any course</label>
                            <select className="form-select form-control mb-3  inputform " id='courseselect' aria-label=".form-select-lg example" onChange={handlecoursechange}>
                                <option value="" label='Enter your course'></option>
                                <option value="nailart" label='Nail Art'></option>
                                <option value="GuitarClass" label='Guitar Class'></option>
                                <option value="ViolinClass" label='Violin Class'></option>
                                {/* <option value="TablaClass" label='Tabla Class'></option> */}

                            </select>
                        </div>
                        <div className='col-lg-4'>
                            <label className="form-label text-white" >Pay from here</label>
                            <button type="button" className=" btn btn-primary  paybutton form-control" data-bs-toggle="modal" data-bs-target="#myModal">
                                Pay Now
                            </button>

                            <div className="modal" id="myModal">
                                <div className="modal-dialog modal-lg">
                                    <div className="modal-content">

                                        <div className="modal-body text-center">
                                        {course && <img src={images[course]} alt="Select any course" width="50%" height="80%" />}
                                            {/* <img src={nailart} alt='img' width="50%" height="80%" /> */}
                                        </div>

                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-success" data-bs-dismiss="modal">Done</button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className='col-lg-4'>
                            <label className="form-label text-white" htmlFor="fileName">Upload payment received screenshot</label>
                            <div className="input-group custom-file-button  ">
                                <label className="input-group-text " htmlFor="fileName">Browse</label>
                                <input type="file" className=" form-control form-control-lg" name='image' accept=".png, .jpg, .jpeg" id="fileName" onChange={handleFileChange} />
                            </div>
                            {/* {imagefileerror ? <span className='link-warning'>{imagefileerror}</span> : ""} */}
                        </div>
                        <span className='text-white'><input type="checkbox" id='checkbox'  /> I agree all statements in <Link to="/terms">Terms and conditions</Link></span>

                        <div className="pt-1  text-center">
                            <button className=" btn-lg signupbutton  w-50" type="submit" onClick={handleSubmit} >Sign up</button>
                        </div>
                    </form>


                </div>
            </section>

        </>
    )
}

export default Offlineregister

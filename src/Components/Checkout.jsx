import React,{ useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Auth_URL } from './Localhost';
import pic1 from '../Images/icon1.png';
import "../Css/checkout.css";
const Checkout = () => {
  const navigate = useNavigate();
  const [fullname, setName] = useState('')
    const [phoneno, setPhoneno] = useState('')
    const [email, setEmail] = useState('')
    const [state, setstate] = useState('')
    const [city , setcity] = useState('')

    const [emailerror, setemailerror] = useState(false);
    const [mobilenoerror, setmobileerror] = useState(false);
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
const handleSubmit = async (event) => {
  event.preventDefault();
  const amount = document.getElementById('totalamount').innerHTML;
  console.log(amount)
  const courses = document.getElementById('courses').innerHTML;
  if (fullname === "" || phoneno === "" || email === "" || state === "" || city === "" ) {
    swal("Opps!", "Please fill out all required fields!", "error");
}
else if (emailerror != "" || mobilenoerror != "") {
    swal("Opps!", "Please give valid inputs!", "error");
}
else{
  await axios.post(Auth_URL+'/checkout',{fullname,phoneno,email,state,city,amount})
                .then(res => {
                    console.log(res);
                    //console.log(res.data.order.amount);


                    const options = {
                        // key: "rzp_live_xh5zAIy7sL0nMK", // Enter the Key ID generated from the Dashboard
                        key:"rzp_test_FEdsKrhgE2fdCF",
                        amount:  res.data.order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                        currency: "INR",
                        name: "Srijani banerjee",
                        description: "Test Transaction",
                        image: pic1,
                        order_id: res.data.order.id, 
                        handler: function (response) {
                            // Call your backend to verify the payment and store data
                            axios.post(Auth_URL+'/paymentverification_students', {
                              razorpay_order_id: response.razorpay_order_id,
                              razorpay_payment_id: response.razorpay_payment_id,
                              razorpay_signature: response.razorpay_signature,
                              fullname,phoneno,email,state,city,courses,amount
                              // Pass the user ID for backend processing
                            }).then(() => {
                             console.log(response);
                             swal("Payment successful and data saved.");
                             //navigate('/paymentSuccess');
                            //  window.location.reload();
                            }).catch(() => {
                              swal('Payment verification failed.');
                            });
                          },
                        // callback_url: Auth_URL+'/paymentverification',
           
               
                        prefill: {
                            name: fullname,
                            email: email,
                            contact: phoneno
                        },
                        notes: {
                           
                            address: "Razorpay Corporate Office"
                        },
                        theme: {
                            color: "#3399cc"
                        }
                    };
                    const razor = new window.Razorpay(options);
                    razor.open();
                    
                    // swal("Thank You!", "Registration completed sucessfully!", "success");
                    //  window.location.reload();
                    
                })
                .catch(error=> {
                    console.log(error);
                    swal("Opps!",  "Please reload the page and try again","error" );
                    

                })
}
}
  return (
    <>
      <div>
        <div className="container">
          <div className="py-5 text-center">
            <h1>Checkout Form</h1>
          </div>

          <div className="container w-75 checkoutform mb-3">
            <form>
              <div className="row pt-3 pb-3">
              <div className="col">
              <h6>
              Course Name :-<span id="courses">Guitar course for beginner</span>
                 
                </h6>
              </div>
               <div className="col">
               <h6 className="text-end">
               Total Price :-<span id="totalamount">799</span>
                </h6>
               </div>
                
              </div>
              <hr className="mb-3"/>
              <div className="order-1">
                <h4 className="mb-3">Billing Address</h4>

                <div className="row">
                  <div className="col mb-4">
                    <label htmlFor="Full name"> Full Name </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Full name"
                      aria-label="Full name"
                      id="fullname"
                       name="fullname"
                       onChange={e => setName(e.target.value)}
                    />
                  </div>
                </div>

                {/* <div className="input-group col mb-4">
            <div className="input-group-text">@</div>
            <input type="text" className="form-control" placeholder="Username"/>
          </div> */}

                <div className="mb-4">
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="you@example.com"
                    aria-label="email"
                    id="email"
                    name="email"
                    onKeyUp={emailHandler}
                    onChange={e => setEmail(e.target.value)}
                  />
                    {emailerror ? <span className='link-danger'>Email invalid</span> : ""}
                </div>

                <div className="mb-4">
                  <label htmlFor="Address">Phone No</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="1234567890"
                    aria-label="Phone no"
                    id="phone"
                    name="phone"
                    onKeyUp={mobileHandler}
                    onChange={e => setPhoneno(e.target.value)}
                  />
                  {mobilenoerror ? <span className='link-danger'>phone no invalid</span> : ""}
                </div>
                <div className="row">
                  
                  <div className="col mb-4">
                    <label htmlFor="state">State</label>
                    <input
                      type="text"
                      className="form-control"
                       placeholder="West Bengal"
                      aria-label="state"
                      id="state"
                      name="state"
                      onChange={e => setstate(e.target.value)}
                    />
                  </div>
                  <div className="col mb-4">
                    <label htmlFor="city">City</label>
                    <input
                      type="text"
                      className="form-control"
                       placeholder="Kolkata"
                      aria-label="city"
                      name="city"
                      id="city"
                      onKeyUp={e => setcity(e.target.value)}
                    />
                  </div>

                  {/* <div className="form-check">
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked/>
              <label className="form-check-label" for="flexRadioDefault1">
                Credit card (Default)
              </label>
            </div> */}

                  {/* <div className="form-check">
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3"/>
              <label className="form-check-label" for="flexRadioDefault3">
                Paypal
              </label>
            </div>
             */}
                  {/* <div className="row">
              <div className="col mb-4">
                <label for="Card1">
                  Name on card
                </label>
                <input type="text" className="form-control"aria-label="card1"/>
                <small className="text-muted">
                  Full name, as displayed on the card
                </small>
              </div>
              
              <div className="col mb-4">
                <label for="Card2">
                  Credit card Nummber
                </label>
                <input type="text" className="form-control" placeholder="1234-5678-9012" aria-label="Card2"/>
              </div>
            </div> */}

                  {/* <div className="row">
              <div className="col mb-3">
                <label for="Card3">
                  Expiry Date
                </label>
                <input type="text" className="form-control"aria-label="card3"/>
              </div>
              
              <div className="col mb-3">
                <label for="Card4">
                  CVV
                </label>
                <input type="text" className="form-control"  aria-label="Card4"/>
              </div>
            </div> */}
                </div>

                <div className="d-grid gap-2">
                  <button className="btn btn-primary w-25 mb-3" type="button"  onClick={handleSubmit}>
                    Continue to Checkout
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;

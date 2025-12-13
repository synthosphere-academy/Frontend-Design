import '../Css/Footer.css'
import logo from '../Images/academy.png'

function Footer() {
    const today = new Date();
    const todayyear = today.getFullYear()
    return (
        <>
        
            <div id="footerbackground">
                <div className="container">
                    <div className="row py-4">
                        <div className="col-lg-8">
                        <h5 className="widget-title text-white footerstyle"> <img src={logo} alt='noimage' width="8%" /> Synthosphere Academy</h5>
                        <ul className='list'>
                            <a href='/'><li className='pe-4'>Home</li></a>
                           <a href='/contact'><li className='pe-4'>Contact</li></a> 
                           <a href='/course'> <li className='pe-4'>Courses</li></a>
                           <a href='/terms' target='_blank'> <li className='pe-4'>Terms & Conditions</li></a>

                           <a href='/Privatepolicy'target='_blank'> <li className='pe-4'>Private policy</li> </a> 
                           <a href='/Refundpolicy' target='_blank'> <li className='pe-4'>Refund Policy</li></a>
                        </ul>
                        
                        </div>
                        <div className="col-lg-4 me-auto text-center">
                            <div className='float-lg-end googleapp'>
                            <span className='text-white'>Coming soon</span><br/>
                            <a className=" btnfooter btn btn-google mb-3" title="Google Play">Google Play</a>
                          
                            <div>
                           {/* <a href="mailto:support@synthosphereacademy.in"><i className="fa fa-envelope text-white" style={{fontSize:"19px"}}></i></a> */}
                            {/* <a href='https://www.facebook.com/profile.php?id=61560565260565&mibextid=ZbWKwL' target='_blank'><i className="fa fa-facebook text-white ms-3 " style={{fontSize:"19px"}}></i></a>  */}
                            {/* <a href='https://www.instagram.com/synthosphere_academy?' target='_blank'><i className="fa fa-instagram ms-3 text-white"style={{fontSize:"19px"}} ></i></a> */}
                            </div>
                            </div>
                            

                            
                            {/* <div className=''>
                            <a href='https://www.facebook.com/profile.php?id=61560565260565&mibextid=ZbWKwL' target='_blank'><i className="fa fa-facebook-f facebook"></i></a> 


                            </div> */}
                        </div>

                    </div>
                    <div className='row mt-3'>
                        <div className='col-lg-12 text-center mb-3 '><span className='text-white copyright '>Copyright © Synthosphere Academy <span>{todayyear}</span>. Powered by<a className="text-white text-decoration-none" href='https://synthospheretech.com/'> Synthosphere Technologies Private Limited</a></span></div>
                    </div>
                    </div>
                </div>
                
        </>
    )
}

export default Footer
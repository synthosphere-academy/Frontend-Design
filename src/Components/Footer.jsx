import '../Css/Footer.css'
import logo from '../Images/academy.png'

function Footer() {
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
                           <a href='/terms'> <li className='pe-4'>Terms & Conditions</li></a>

                           <a href='/Privatepolicy'> <li className='pe-4'>Privacy policy</li> </a> 
                           <a href='/Refundpolicy'> <li className='pe-4'>Refund Policy</li></a>
                        </ul>
                        
                        </div>
                        <div className="col-lg-4 me-auto">
                            <div className='float-lg-end'>

                            <span className='text-white '>Get the App</span><br/>

                            <a className=" btnfooter btn btn-google" href="#" title="Google Play">Google Play</a>
                            </div>
                        </div>

                    </div>
                    <div className='row'>
                        <div className='col-lg-12 text-center'><span className='text-white copyright'>Copyright Synthosphere team © 2024. All rights reserved.</span></div>
                    </div>
                    </div>
                </div>

                
        </>
    )
}

export default Footer
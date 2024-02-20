import '../Css/Footer.css'
import logo from '../Images/academy.png'

function Footer() {
    return (
        <>
            <div style={{backgroundColor:"#5c0e47"}}>
                <div className="container">
                    <div className="row py-4">
                        <div className="col-lg-6">
                        <h5 className="widget-title text-white"> <img src={logo} alt='noimage' width="8%" /> Synthosphere Academy</h5>
                        <ul className='list'>
                            <li className='pe-4'>Home</li>
                            <li className='pe-4'>Contact</li>
                            <li className='pe-4'>Courses</li>
                            <li className='pe-4'>Privacy policy</li>
                        </ul>
                       <br/> <span className='text-white ' style={{marginLeft:"3%"}}>Copyright Synthosphere team © 2024. All rights reserved.</span>


                        </div>
                        <div className="col-lg-6 me-auto">
                            <div className='float-lg-end'>

                            <span className='text-white'>Get the App</span><br />

                            <a className="btn btn-google" href="#" title="Google Play">Google Play</a>
                            </div>
                        </div>

                    </div>
                    </div>
                </div>

           
        </>
    )
}

export default Footer
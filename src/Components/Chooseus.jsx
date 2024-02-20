import pic from '../Images/Kids.png'
import '../Css/Choose.css'

function Chooseus() {
  return (
    <>
    <div>
     <div className="container py-5"  >
                <h1 className="display-5 fw-bold ">
                   Why Students Choose Us</h1>
                   <h1 className="display-5 fw-bold ">
                  for Gain Their Knowledge</h1>
                <div className="row py-4">
                    <div className="col-lg-6">
                        <p>Synthosphere academy is an online learning platform that provides users with access to thousands of different courses. It is a great resource for those looking to expand their knowledge or learn new skills.</p>
                        <div className='row py-3'>
                            <div className='col-lg-1'>
                            <i className="fa fa-check-square-o" id='icon1'></i>
                            </div>
                            
                            <div className='col-lg-5'>
                                <span className='fw-bold'>60k People joined</span>
                               
                            </div>
                        </div>
                        <div className='row py-3'>
                            <div className='col-lg-1'>
                            <i className="fa fa-check-square-o" id='icon2'></i>
                            </div>
                            
                            <div className='col-lg-5'>
                                <span className='fw-bold'> 50+ online courses</span><br/>
                              
                            </div>
                        </div>
                        <div className='row  py-3'>
                            <div className='col-lg-1'>
                            <i className="fa fa-check-square-o" id='icon3'></i>
                            </div>
                            
                            <div className='col-lg-5'>
                                <span className='fw-bold'>10+ Brand companies</span><br/>
                               
                            </div>
                        </div>
                        <div className='row  py-3'>
                            <div className='col-lg-1'>
                            <i className="fa fa-check-square-o" id='icon4'></i>
                            </div>
                            
                            <div className='col-lg-5'>
                                <span className='fw-bold'>5+ Experienced student</span><br/>
                               
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-lg-6">
                     <img src={pic} width="80%"/>
                    </div>
                </div>
            </div>
            </div>
    </>

  )
}

export default Chooseus
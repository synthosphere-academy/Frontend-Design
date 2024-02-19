
import '../Css/Features.css'
import icon1 from '../Images/icon1.png';
function Features() {
    return (
        <>
            <div style={{ backgroundColor: "#fbf9f5" }}>
                <div className="container py-5">
                    <h1 className="display-4 text-center fw-bold">
                        Our Special Features For You
                    </h1>

                   <div className="row py-5" >

                        <div className="col-lg-3">
                            <div className="card">
                                <div className='text-center'> <img className="img " src={icon1} width="50%" alt="100%x280" /></div>

                                <div className="card-body">
                                    <h5 className="card-title text-center">Pro Programs</h5>
                                    <h6 className="card-text text-center">Learn More</h6>

                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3">
                            <div className="card">
                                <div className='text-center'> <img className="img" src={icon1} width="50%" alt="100%x280" /></div>

                                <div className="card-body">
                                    <h5 className="card-title text-center">24/7 Support</h5>
                                    <h6 className="card-text text-center">Learn More</h6>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3">
                            <div className="card">
                                <div className='text-center'> <img className="img" src={icon1} width="50%" alt="100%x280" /></div>

                                <div className="card-body">
                                    <h5 className="card-title text-center">Career Planing</h5>
                                    <h6 className="card-text text-center">Learn More</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="card">
                                <div className='text-center image'> <img className="img" src={icon1} width="50%" alt="100%x280" /></div>

                                <div className="card-body">
                                    <h5 className="card-title text-center">Professional Learning</h5>
                                    <h6 className="card-text text-center">Learn More</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default Features
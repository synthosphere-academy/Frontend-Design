import '../Css/addtocart.css'
function Addtocart() {
    return (

        <>
            <div className="d-flex ms-5 mt-4">
                <a href='/'><i className="fa fa-hand-o-left iconstyle mt-1"></i></a>
                <h5 className="heading display-6 ms-3">Shopping Cart</h5>
            </div>
            <div className="container mt-5 mb-4">
                <div className='row'>
                    <div className='col-lg-8'>

                        <div className="row">
                            <div className="row main align-items-center">
                                <div className="col-3"><img className="img-fluid" src="https://www.shutterstock.com/image-photo/golden-coins-bitcoin-logo-rise-600nw-2052110753.jpg" /></div>
                                <div className="col-3 ms-2">
                                    <div className="row ">The Full Cryptocurrency Investment Course</div>
                                    <div className="row">16 videoes</div>
                                </div>
                                <div className="col">
                                </div>

                                <div className="col">₹899</div>

                            </div>
                            <hr className='mt-4' />

                        </div>
                        <div className="row  mt-2  ">
                            <div className="row main align-items-center">
                                <div className="col-3"><img className="img-fluid" src="https://cdn.eduonix.com/assets/images/header_img/2020091906114212289.jpg" /></div>
                                <div className="col-3 ms-2">
                                    <div className="row ">The Complete Stock market course</div>
                                    <div className="row">16 videoes</div>
                                </div>
                                <div className="col">
                                </div>

                                <div className="col">₹899 </div>
                            </div>
                            <hr className='mt-4' />
                        </div>
                        <div className="row mt-2 ">
                            <div className="row main align-items-center">
                                <div className="col-3"><img className="img-fluid" src="https://cdn.elearningindustry.com/wp-content/uploads/2020/08/how-online-course-are-changing-music-education.jpg" /></div>
                                <div className="col-3 ms-2">
                                    <div className="row ">Music Course</div>
                                    <div className="row">16 videoes</div>
                                </div>
                                <div className="col">
                                </div>
                                <div className="col">₹899</div>
                            </div>
                            <hr className='mt-4' />
                        </div>
                        <div className='float-end fw-bold'>
                            total:98999
                        </div>







                    </div>
                    <div className='col-lg-4 '>
                        <p>Payment method</p>
                        <div className='container payment'>
                            <div>
                                <h5>Price: 399.0</h5>
                            </div>
                            <div className='fw-bold chooseupi ms-2'>
                               <div className='ms-4'>
                               Select a Payment Type
                               
                                <div className="form-check ">
                                
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                                        <i className="fa fa-cc-paypal" id='iconpaypal'></i>
                                        </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                                            Default checked radio
                                        </label>
                                </div>
                                </div>
                            </div>

                        </div>


                    </div>

                </div>
            </div>

        </>
    )
}

export default Addtocart

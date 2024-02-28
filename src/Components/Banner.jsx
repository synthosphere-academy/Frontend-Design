import bg from '../Images/Studying.png';
import '../Css/Banner.css'
function Banner() {
    return (
        <>
            <div style={{ backgroundColor: "#5c0e47" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mt-5">
                            <h1 className='display-2 text fw-bold'>Find Your Course</h1>
                            <h1 className='display-2 text fw-bold'>Change Your Life</h1><br />
                            <span className='para'>An academy is a fancy school, often one devoted to one subject or discipline, such as music or science. You can also use academy to describe the world of higher learning.</span><br /><br />
                            <div className="search ">
                                <i className="fa fa-search mt-1"></i>
                                <input type="text" className="form-control " placeholder="Have a question? Ask Now" />
                                <button className="btn btn-success">Search</button>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <img src={bg} width="95%" />
                        </div>

                    </div>
                </div>


            </div>
            <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
                <defs>
                    <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                </defs>
                <g className="parallax">
                    <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
                    <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />

                </g>
            </svg>
        </>
    )
}

export default Banner
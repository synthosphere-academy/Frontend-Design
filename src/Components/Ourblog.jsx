import '../Css/blog.css';
import img1 from '../Images/Image.png';

const Ourblog = () => {
  return (
    <div style={{ backgroundColor: "rgba(14, 18, 85, 1)" }} className='blogsection'>
      <h4 className='display-4 text-center pt-5 blogheading'>Resources & Insight</h4>
      <h6 className='text-white text-center blogpara'>Engage with a rich array of thought leadership, expert insights, and emerging trends through our diverse</h6>
      <h6 className='text-white text-center blogpara'>and dynamic blog platform inspiring continuous learning and innovation</h6>
      <div className="container py-5">
    
        <div id="carouselExampleIndicators" className="carousel slide ">
       
   
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row ">
                <div className='col-lg-4 '>
                  <div className="card">
                  <div className='container mt-3'>
                    <img src={img1} className="card-img-top d-block w-100" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">hiiiii</h5>
                      <p className="card-text">byee</p>
                    </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className="card">
                    <div className='container mt-3'>
                    <img src={img1} className="card-img-top " width={50} alt="noimage" />
                    <div className="card-body">
                      <h5 className="card-title">hiiiii</h5>
                      <p className="card-text">byee</p>
                    </div>
                  </div>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className="card" >
                  <div className='container mt-3'>
                    <img src={img1} className="card-img-top" alt="noimage" />
                    <div className="card-body">
                      <h5 className="card-title">hiiiii</h5>
                      <p className="card-text">byee</p>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
            <div className="row ">
                <div className='col-lg-4 '>
                  <div className="card " >
                  <div className='container mt-3'>
                    <img src={img1} className="card-img-top d-block w-100" alt="noimage" />
                    <div className="card-body">
                      <h5 className="card-title">hiiiii</h5>
                      <p className="card-text">byee</p>
                    </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className="card" >
                  <div className='container mt-3'>
                    <img src={img1} className="card-img-top" alt="noimage" />
                    <div className="card-body">
                      <h5 className="card-title">hiiiii</h5>
                      <p className="card-text">byee</p>
                    </div>
                  </div>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className="card" >
                  <div className='container mt-3'>
                    <img src={img1} className="card-img-top" alt="noimage" />
                    <div className="card-body">
                      <h5 className="card-title">hiiiii</h5>
                      <p className="card-text">byee</p>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
              
            </div>

          </div>
          
          <button className="carousel-control-prev ms-5" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          
          <button className="carousel-control-next ms-5" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        

        </div>
      </div>
    </div>

  )
}

export default Ourblog;

import '../Css/blog.css';
import img1 from '../Images/Image.png';
import Slider from "react-slick";
 import 'slick-carousel/slick/slick.css';
 import 'slick-carousel/slick/slick-theme.css';

const Ourblog = () => {
  const blogInfo = [
    {
      blog_title: "hiiii",
      blog_text: "its blog 1",
    },
    {
      blog_title: "hiiii",
      blog_text: "its blog 2",
    },
    {
      blog_title: "hiiii",
      blog_text: "its blog 3",

    },
    {

      blog_title: "hiiii",
      blog_text: "its blog 4",

    },

  ]

  const renderblog = (card, index) => {
    return (

      <a  key={index} className = "blogcontent" href='/blog'>
      <div className="card">
        <div className='container mt-3'>
          <img src={img1} className="card-img-top d-block" alt="noimage" />
          <div className="card-body">
            <h5 className="card-title">{card.blog_title}</h5>
            <p className="card-text">{card.blog_text}</p>
          </div>
        </div>
      </div>
      </a>
    )
  }

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Adjust settings for screen widths less than 1024px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600, // Adjust settings for screen widths less than 600px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div style={{ backgroundColor: "rgba(14, 18, 85, 1)" }} className='blogsection'>
      <h4 className='display-4 text-center pt-5 blogheading'>Resources & Insight</h4>
      <h6 className='text-white text-center blogpara'>Engage with a rich array of thought leadership, expert insights, and emerging trends through our diverse</h6>
      <h6 className='text-white text-center blogpara'>and dynamic blog platform inspiring continuous learning and innovation</h6>
      <div className="container py-5 w-75 ">
      <Slider {...settings}>
      {blogInfo.map(renderblog)}
      </Slider>


        {/* <div id="carouselExampleIndicators" className="carousel slide ">


          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row g-5">
                <div className='col-lg-4 '>
                  <div className="card">
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
          <span className="swiper-pagination"></span>
          <span className="swiper-button-prev"></span>
          <span className="swiper-button-next"></span>
        </div> */}

        {/* <button className="carousel-control-prev ms-5" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          
          <button className="carousel-control-next ms-5" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button> */}



      </div>
    </div>

  )
}

export default Ourblog;

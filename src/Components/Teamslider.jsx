import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const Teamslider = ({users}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Number of cards to show at once
        slidesToScroll: 2,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      };
  return (
    <Slider {...settings}>
    {users.map((user) => (
      <>
      <div className='d-flex flex-column text-center h-100'>
            <div className='d-flex justify-content-center'>
            <img className="rounded-circle shadow-1-strong mb-4"
           src={user.image}alt="avatar"
            style={{width:"130px"}} />
            </div>
           <h5 className="mb-3">{user.team_member}</h5>
           <p> {user.team_member_role}</p>
           <p className="text-muted">
           <i className="fa fa-quote-left pe-2"></i>
             {user.team_member_description}
          </p>
         </div>
          </>
    ))}
    </Slider>
  )
}

export default Teamslider
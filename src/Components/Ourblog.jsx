import "../Css/blog.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState, useMemo } from "react";
import axios from "axios";

const Ourblog = () => {
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;

  const [blogdata, setblogdata] = useState([]);
  useEffect(() => {
    if (!blogdata.length) {
      axios
        .get(ROOT_URL + "/api/v1/get_blog")
        .then((blogdata) => setblogdata(blogdata.data.data))

        .catch((err) => console.log(err));
    }
    // console.log(blogdata)
  }, []);

  const memoizedBlogData = useMemo(() => blogdata, [blogdata]);

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Adjust settings for screen widths less than 1024px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, // Adjust settings for screen widths less than 600px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      style={{ backgroundColor: "rgba(14, 18, 85, 1)" }}
      className="blogsection"
      id="articlesection"
    >
      <h4 className="display-4 text-center pt-5 blogheading">
        Resources & Insight
      </h4>
      <h5 className="text-white text-center blogpara">
        Engage with a rich array of thought leadership, expert insights, and
        emerging trends through our diverse
      </h5>
      <h6 className="text-white text-center blogpara">
        and dynamic blog platform inspiring continuous learning and innovation
      </h6>
      <div className="container py-5 w-75 ">
        <Slider {...settings}>
          {memoizedBlogData.map((blog) => (
            <div>
              <a
                className="blogcontent"
                href={`/blog/${blog.slug}`}
                key={blog._id}
              >
                <div className="card h-100 d-flex flex-column">
                  <div className="container mt-3 blog ">
                    <img
                      src={blog.image}
                      className="card-img-top d-block cardimage "
                      alt="noimage"
                    />
                    <div className="card-body d-flex flex-column flex-grow-1">
                      <h5 className="card-title">{blog.blogtitle}</h5>
                      <p
                        className="card-text"
                        dangerouslySetInnerHTML={{
                          __html: blog.shortdescription,
                        }}
                      ></p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Ourblog;

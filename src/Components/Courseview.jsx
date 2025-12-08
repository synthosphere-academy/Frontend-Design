import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Css/courseview.css";

const Courseview = () => {
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
  const [orderdata, setorderdata] = useState(null);

  const videos = [
    { id: 1, title: "Video 1 – Introduction", vimeoId: "https://player.cloudinary.com/embed/?cloud_name=dxgacly4i&public_id=Final_Vid_1_1_fznzy5&profile=cld-default" },
    { id: 2, title: "Video 2 – What is Cryptocurrency", vimeoId: "https://player.cloudinary.com/embed/?cloud_name=dxgacly4i&public_id=Final_Vid_2_hbk69a&profile=cld-default" },
    { id: 3, title: "Video 3 – What is Marketcap", vimeoId: "https://player.cloudinary.com/embed/?cloud_name=dxgacly4i&public_id=Final_Vid_3_ainru6&profile=cld-default" },
    { id: 4, title:"Video 4 – Difference Between Token & Coin", vimeoId:"https://player.cloudinary.com/embed/?cloud_name=dxgacly4i&public_id=Final_Vid_4_dvc14a&profile=cld-default"},
    { id: 5, title:"Video 5 – What is Bitcoin & Altcoin", vimeoId:"https://player.cloudinary.com/embed/?cloud_name=dxgacly4i&public_id=Final_Vid_5_p8nnt5&profile=cld-default"}
  ];

  const [currentVideo, setCurrentVideo] = useState(videos[0]);

  // Fetch Order Data
  useEffect(() => {
    const fetchOrders = async () => {
        // const userId = "SA30374"
      const userId = sessionStorage.getItem("userid");
      if (!userId) return;

      try {
        const response = await axios.post(
          `${ROOT_URL}/api/users/getorderdetailsbyuser`,
          { userId }
        );

        // If API returns error → show only first video
        if (response.data?.error) {
          setorderdata(null);
        } else {
          setorderdata(response.data);
        }
      } catch (err) {
        console.error("Error fetching orders:", err);
        setorderdata(null); // treat as no order
      }
    };

    fetchOrders();
  }, []);

  // Filter videos based on order data
  const filteredVideos = orderdata === null ? [videos[0]] : videos;

  // Update current video when orderdata changes
  useEffect(() => {
    setCurrentVideo(filteredVideos[0]);
  }, [orderdata]);

  const handleVideoClick = (video) => {
    setCurrentVideo(video);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">

        {/* Main Video Player */}
        <div className="col-lg-8 col-12">
          <h4 className="fw-bold mb-4">{currentVideo.title}</h4>

          <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
            <iframe
              src={currentVideo.vimeoId}
              width="640"
              height="360"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
              allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Video List */}
        <div className="col-lg-4 col-12">
          <div className="videolist-area ms-2 mb-3">
            <div className="course-title mb-4 mt-4">
              <h5 className="fw-bold">Course Videos</h5>
            </div>

            <div className="course-body">
              {filteredVideos.map((video) => (
                <div
                  key={video.id}
                  className="video-item p-3 mb-3 border rounded"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleVideoClick(video)}
                >
                  <span className="fw-bold">▶ {video.title}</span>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Courseview;

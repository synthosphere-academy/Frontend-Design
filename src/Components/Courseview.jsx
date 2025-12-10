import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Css/courseview.css";

const Courseview = () => {
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
  const [orderdata, setorderdata] = useState(null);

  const videos = [
    {
      id: 1,
      title: "Video 1 – Introduction",
      vimeoId:
        "1144782050",
    },
    {
      id: 2,
      title: "Video 2 – What is Cryptocurrency",
      vimeoId:
        "1144782610",
    },
    {
      id: 3,
      title: "Video 3 – What is Marketcap",
      vimeoId:
        "1144782421",
    },
    {
      id: 4,
      title: "Video 4 – Difference Between Token & Coin",
      vimeoId:
        "1144782304",
    },
    {
      id: 5,
      title: "Video 5 – What is Bitcoin & Altcoin",
      vimeoId:
        "1144782119",
    },
    {
      id: 6,
      title: "Video 6 – What is Crypto trading? Types of Crypto Trading.",
      vimeoId:
        "1144794300",
    },
    {
      id: 7,
      title: "Video 7 – How to Start Your First Trading?",
      vimeoId:
        "1144794217",
    },
    {
      id: 8,
      title: "Video 8 – Open Your Crypto Trading Account With FIU Registered Crypto Exchange, KYC Verification.",
      vimeoId:
        "1144794162",
    },
    {
      id: 9,
      title: "Video 9 – What Is CEX, DEX & Wallet?",
      vimeoId:
        "1144794085",
    }
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
              src={`https://player.vimeo.com/video/${currentVideo.vimeoId}`}
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
          {orderdata === null && (
    <div className="mt-4 p-3 border rounded text-center bg-light">
      <div className=" h5 fw-bold text-danger">
        For more videos, purchase any package
      </div>
   <button
  className="btn btn-primary mt-2"
  onClick={() => {
    const event = new CustomEvent("changeMenu", {
      detail: "Our Packages"
    });
    window.dispatchEvent(event);
  }}
>
  Buy Package
</button>


    </div>
  )}
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

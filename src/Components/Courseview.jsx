import React, { useState } from "react";
import VimeoPlayer from "./Vimeoplayer";
import "../Css/courseview.css";

const Courseview = () => {

  const videos = [
    { id: 1, title: "Video 1 – Introduction", vimeoId: "https://geo.dailymotion.com/player.html?video=k62ulUedyJ8vYlEhFao" },
    { id: 2, title: "Video 2 – What is Cryptocurrency", vimeoId: "https://geo.dailymotion.com/player.html?video=k77D3yjxoi8UiIEi9aY" },
    { id: 3, title: "Video 3 – What is Marketcap", vimeoId: "https://geo.dailymotion.com/player.html?video=k6aWpJSwHPkwxkEi9dg" },
    { id: 4, title:"Video 4 – Difference  Between Token & Coin", vimeoId:"https://geo.dailymotion.com/player.html?video=k6rxPVrOPBHSrXEi9he"},
    { id: 5, title:"Video 5– What is Bitcoin & Altcoin", vimeoId:"https://geo.dailymotion.com/player.html?video=k16M0ZRC1OjjqZEi9jG"}
  ];

  const [currentVideo, setCurrentVideo] = useState(videos[0].vimeoId);

  const handleVideoClick = (vimeoId) => {
    setCurrentVideo(vimeoId);
  };

  const handleEnd = () => {
    const currentIndex = videos.findIndex(v => v.vimeoId === currentVideo);
    if (currentIndex < videos.length - 1) {
      setCurrentVideo(videos[currentIndex + 1].vimeoId);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">

        <div className="col-lg-8 col-12">
            <div
      style={{
        padding: "56.25% 0 0 0",
        position: "relative",
      }}
    >
      {/* <iframe
        src={`https://player.vimeo.com/video/${currentVideo}?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1`}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
        // frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        title={`vimeo-${currentVideo}`}
      ></iframe> */}
      <iframe src={currentVideo} style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }} allowfullscreentitle="Dailymotion Video Player" allow="web-share"></iframe>
    </div>
    </div>

        <div className="col-lg-4 col-12">
          <div className="videolist-area ms-2 mb-3">
            <div className="course-title mb-4 mt-4">
              <h5 className="fw-bold">Course Videos</h5>
            </div>

            <div className="course-body">
              {videos.map((video) => (
                <div
                  key={video.id}
                  className="video-item p-3 mb-3 border rounded"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleVideoClick(video.vimeoId)}
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

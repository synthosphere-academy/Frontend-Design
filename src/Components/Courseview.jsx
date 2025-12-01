import React, { useState } from "react";
import VimeoPlayer from "./Vimeoplayer";
import "../Css/courseview.css";

const Courseview = () => {

  const videos = [
    { id: 1, title: "Video 1 – Introduction", vimeoId: "https://www.youtube.com/embed/w8_QO89iIFA?si=juiW-QZhbfT28sDu" },
    { id: 2, title: "Video 2 – What is Cryptocurrency", vimeoId: "https://www.youtube.com/embed/tOiaIIRkKUc?si=f1z4xLPyJbKNghx0" },
    { id: 3, title: "Video 3 – What is Marketcap", vimeoId: "https://www.youtube.com/embed/z8ZT2KRhjmM?si=mFPtmiGc7Hdib2XZ" },
    { id: 4, title:"Video 4 – Difference  Between Token & Coin", vimeoId:"https://www.youtube.com/embed/bVDlvE6ijQs?si=u7L6U0CYjQoRLuvT"},
    { id: 5, title:"Video 5– What is Bitcoin & Altcoin", vimeoId:"https://www.youtube.com/embed/9z69oKzxVng?si=cOy7n1Ks7DwcuRVh"}
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
     

      {/* <iframe src={currentVideo} style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}   allow="fullscreen; web-share"
         allowFullScreen></iframe> */}
         <iframe width="560" height="315" 
         src={currentVideo}
        //  src="https://www.youtube.com/embed/w8_QO89iIFA?si=juiW-QZhbfT28sDu"
          title="YouTube video player" frameborder="0" allow= " fullscreen, accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"
          allowFullScreen
           style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%"}} >

          </iframe>
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

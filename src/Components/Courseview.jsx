import React, { useState } from "react";
import "../Css/courseview.css";

const Courseview = () => {

  const videos = [
    { id: 1, title: "Video 1 – Introduction", vimeoId: "https://player.cloudinary.com/embed/?cloud_name=dxgacly4i&public_id=Final_Vid_1_1_fznzy5&profile=cld-default" },
    { id: 2, title: "Video 2 – What is Cryptocurrency", vimeoId: "https://player.cloudinary.com/embed/?cloud_name=dxgacly4i&public_id=Final_Vid_2_hbk69a&profile=cld-default" },
    { id: 3, title: "Video 3 – What is Marketcap", vimeoId: "https://player.cloudinary.com/embed/?cloud_name=dxgacly4i&public_id=Final_Vid_3_ainru6&profile=cld-default" },
    { id: 4, title:"Video 4 – Difference  Between Token & Coin", vimeoId:"https://player.cloudinary.com/embed/?cloud_name=dxgacly4i&public_id=Final_Vid_4_dvc14a&profile=cld-default"},
    { id: 5, title:"Video 5– What is Bitcoin & Altcoin", vimeoId:"https://player.cloudinary.com/embed/?cloud_name=dxgacly4i&public_id=Final_Vid_5_p8nnt5&profile=cld-default"}
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
      }}>
     

      {/* <iframe src={currentVideo} style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}   allow="fullscreen; web-share"
         allowFullScreen></iframe> */}
         {/* <iframe width="560"
         height="315" 
        //  src={currentVideo}
        src="https://drive.google.com/file/d/16Vocz4iaQxy4fkYI3Mw7EQDyuliCEN6s/preview"
          title="YouTube video player" frameborder="0" 
          allow= " fullscreen, accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerpolicy="strict-origin-when-cross-origin"
          allowFullScreen
          style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%"}}>
          </iframe> */}
 <iframe
  src={currentVideo}
  width="640"
  height="360" 
   style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%"}}
  allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
  allowfullscreen
  frameborder="0"
></iframe>

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

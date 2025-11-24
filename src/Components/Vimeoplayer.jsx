import React, { useEffect, useRef } from "react";

const VimeoPlayer = ({ videoId, onEnd }) => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const iframe = iframeRef.current;

    // Load Vimeo API script
    const script = document.createElement("script");
    script.src = "https://player.vimeo.com/api/player.js";

    script.onload = () => {
      const player = new window.Vimeo.Player(iframe);

      // Listen for video end event
      player.on("ended", () => {
        if (onEnd) onEnd();
      });
    };

    document.body.appendChild(script);
  }, [videoId]);

  return (
 

    <iframe
      src={`https://player.vimeo.com/video/${videoId}?badge=0&autopause=0&player_id=0&app_id=58479`}
      width="100%"
      height="500"
      frameBorder="0"
      allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  );
};




{/* <iframe src="https://player.vimeo.com/video/994712386?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="1920" height="1080" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin" title="lesson 20 hin"></iframe> */}

export default VimeoPlayer;

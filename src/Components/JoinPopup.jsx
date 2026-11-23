
import React, { useState, useEffect } from "react";
import "../Css/joinPopup.css";
import zoom from "../Images/zoom.png";

const JoinPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
     const popupClosed = sessionStorage.getItem("joinPopupClosed");

    if (!popupClosed) {
      setShowPopup(true);
    }
  }, []);

  if (!showPopup) return null;

  return (
    <div className="join-popup-overlay">
      <div className="join-popup-content">

        {/* Close Button */}
        <button
          className="join-popup-close"
          onClick={() => setShowPopup(false)}
        >
          ×
        </button>

        {/* Popup Image */}
        <img
          src={zoom}
          alt="Join Now"
          className="join-popup-image"
        />

        {/* Join Button */}
        <a
          href="https://us06web.zoom.us/j/83279608238?pwd=qk2Iis2sdWfy3W10FsugbZaWjXfXMx.1"
          className="join-popup-button text-white"
            target="_blank"
        >
          Join Now
        </a>

      </div>
    </div>
  );
};

export default JoinPopup;

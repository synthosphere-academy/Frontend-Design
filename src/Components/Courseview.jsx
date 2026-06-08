import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Css/courseview.css";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import certificate from "../Images/academy_certificate.png";
import Player from "@vimeo/player";
import { useRef } from "react";
import { number } from "prop-types";
const Courseview = () => {
  const iframeRef = useRef(null);
  const playerRef = useRef(null);
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
  const [orderdata, setorderdata] = useState(null);
  const [showquiz, setshowquiz] = useState(false);
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [showCertificate, setShowCertificate] = useState(false);
  const [watchedVideos, setWatchedVideos] = useState([]);
  const [userProgress, setUserProgress] = useState(null);

  const questions = [
    {
      question: "What is Cryptocurrency?",
      number: 1,
      options: ["Physical money","Digital currency using cryptography","Bank-issued notes"],
      answer: "Digital currency using cryptography",
    },
    {
      question: "What is Blockchain?",
      number: 2,
      options: ["A type of wallet","A decentralized ledger system", "A trading app"],
      answer: "A decentralized ledger system",
    },
    {
      question: "Which is the first cryptocurrency?",
      number: 3,
      options: ["Bitcoin", "Ethereum", "Ripple"],
      answer: "Bitcoin",
    },
    {
      question: "What is a Wallet in crypto?",
      number: 4,
      options: ["A place to store physical coins", "Software to store digital assets", "A bank account"],
      answer: "Software to store digital assets",
    },
    {
      question: "What does “Dex” mean ?",
      number: 5,
      options: ["Decentralized Exchange (Uniswap, Metamask)", "Binance, Coin DCX", "Bank account"],
      answer: "Decentralized Exchange (Uniswap, Metamask)",
    },
    {
      question: "What is Mining in Crypto?",
      number: 6,
      options: ["Buying coins", "Validating transactions and adding blocks", "Sending money"],
      answer: "Validating transactions and adding blocks",

    },
    {
      question: "What is Ethereum mainly used for?",
      number: 7,
      options: ["Only payments", "Smart contracts and dApps", "Gaming only"],
      answer: "Smart contracts and dApps",
    },
    {
      question: "What is a Private Key?",
      number: 8,
      options: ["Public password", "Secret code to access your crypto wallet", "Bank PIN"],
      answer: "Secret code to access your crypto wallet",
    },
    {
      question: "What is a halving?",
      number: 9,
      options: ["4 years circle of bitcoin mining reward", "Bullrun", "Future trading"],
      answer: "4 years circle of bitcoin mining reward",
    },
    {
      question: "What is an Exchange?",
      number: 10,
      options: ["Crypto storage device", "Platform to buy/sell crypto", "Mining machine"],
      answer: "Platform to buy/sell crypto",

    }
  ];
  const generateCertificate = () => {
    const input = document.getElementById("certificate");

    html2canvas(input, { scale: 1.2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/jpeg", 0.8);

      // 👉 Set PDF to landscape
      const pdf = new jsPDF("landscape", "px", [canvas.width, canvas.height]);

      pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);

      pdf.save("certificate.pdf");
    });
  };

  const handleAnswer = async (option) => {
  let newScore = score;

  // ✅ Calculate score manually
  if (option === questions[currentQ].answer) {
    newScore = score + 1;
    setScore(newScore);
  }

  const next = currentQ + 1;

  if (next < questions.length) {
    setCurrentQ(next);
  } else {
    setShowResult(true);

    const userId = sessionStorage.getItem("userid");

    const passed = newScore === questions.length;

    try {
      await axios.post(`${ROOT_URL}/api/users/submit-quiz`, {
        userId,
        passed,
      });

      // ✅ Auto show certificate if passed
      if (passed) {
         setShowCertificate(true);
        setshowquiz(false);
      }
    } catch (err) {
      console.error("Quiz submit error:", err);
    }
  }
};

  const videos = [
    {
      id: 1,
      title: "Video 1 – Introduction",
      vimeoId: "1144782050",
    },
    {
      id: 2,
      title: "Video 2 – What is Cryptocurrency",
      vimeoId: "1144782610",
    },
    {
      id: 3,
      title: "Video 3 – What is Marketcap",
      vimeoId: "1144782421",
    },
    {
      id: 4,
      title: "Video 4 – Difference Between Token & Coin",
      vimeoId: "1144782304",
    },
    {
      id: 5,
      title: "Video 5 – What is Bitcoin & Altcoin",
      vimeoId: "1144782119",
    },
    {
      id: 6,
      title: "Video 6 – What is Crypto trading? Types of Crypto Trading.",
      vimeoId: "1144794300",
    },
    {
      id: 7,
      title: "Video 7 – How to Start Your First Trading?",
      vimeoId: "1144794217",
    },
    {
      id: 8,
      title:
        "Video 8 – Open Your Crypto Trading Account With FIU Registered Crypto Exchange, KYC Verification.",
      vimeoId: "1144794162",
    },
    {
      id: 9,
      title: "Video 9 – What Is CEX, DEX & Wallet?",
      vimeoId: "1144794085",
    },
    {
      id: 10,
      title: " Video 10 – Deposit, Withdraw, Transfer for Cryptocurrency.",
      vimeoId: "1146159983",
    },
    {
      id: 11,
      title: " Video 11 – Practical Buy & Sell",
      vimeoId: "1146305836",
    },
    {
      id: 12,
      title: " Video 12 – Basic Fundamental Analysis.",
      vimeoId: "1146160018",
    },
    {
      id: 13,
      title: "Video 13 – Basic Technical Analysis.",
      vimeoId: "1146159841",
    },
    {
      id: 14,
      title: "Video 14 – Basic Knowledge of Trading Time Frame",
      vimeoId: "1146159928",
    },
    {
      id: 15,
      title: "Video 15 - Portfolio management",
      vimeoId: "1146305654",
    },
    {
      id: 16,
      title: "Video 16 - Power of Holding Cryptocurrency",
      vimeoId: "1146305542",
    },
    {
      id: 17,
      title: "Video 17 - Practice Makes Perfection",
      vimeoId: "1146335360",
    },
    {
      id: 18,
      title: "Video 18 - What is Google Authenticator?",
      vimeoId: "1148583052",
    },
  ];

  const [currentVideo, setCurrentVideo] = useState(videos[0]);

  useEffect(() => {
    if (!iframeRef.current) return;

    const player = new Player(iframeRef.current);
    playerRef.current = player;

    let watched = false;

    player.on("timeupdate", (data) => {
      if (data.percent >= 0.9) {
        watched = true;
      }
    });

    player.on("ended", async () => {
      if (!watched) return;

      const userId = sessionStorage.getItem("userid");

      await axios.post(`${ROOT_URL}/api/users/watch-video`, {
        userId,
        videoId: currentVideo.id,
      });

      setWatchedVideos((prev) => {
        if (!prev.includes(currentVideo.id)) {
          return [...prev, currentVideo.id];
        }
        return prev;
      });
    });

    // ✅ NO destroy here
  }, [currentVideo]);
  /////Load watched videos on page load
  useEffect(() => {
    const fetchWatched = async () => {
      const userId = sessionStorage.getItem("userid");
      if (!userId) return;

      const res = await axios.post(`${ROOT_URL}/api/users/get-watched-videos`, {
        userId,
      });

      const watchedIds = res.data.map((v) => v.videoId);
      setWatchedVideos(watchedIds);
    };

    fetchWatched();
  }, []);
///////////////get user progress (quiz passed or not)
useEffect(() => {
  const fetchProgress = async () => {
    const userId = sessionStorage.getItem("userid");
    if (!userId) return;

    try {
      const res = await axios.post(
        `${ROOT_URL}/api/users/get-progress`,
        { userId }
      );

      setUserProgress(res.data);

      // ✅ If already completed → show certificate
      if (res.data?.certificateGenerated) {
        setShowCertificate(true);
        setshowquiz(false);
      }
    } catch (err) {
      console.error(err);
    }
  };

  fetchProgress();
}, []);

  // Fetch Order Data
  useEffect(() => {
    const fetchOrders = async () => {
      // const userId = "SA30374"
      const userId = sessionStorage.getItem("userid");
      if (!userId) return;

      try {
        const response = await axios.post(
          `${ROOT_URL}/api/users/getorderdetailsbyuser`,
          { userId },
        );

        // If API returns error → show only first video
        if (response.data?.error) {
          setorderdata(null);
        } else {
          console.log("Order Data:", response.data);
          setorderdata(response.data);
        }
      } catch (err) {
        console.error("Error fetching orders:", err);
        setorderdata(null); // treat as no order
      }
    };

    fetchOrders();
  }, []);

  const hasPaidOrder =
    Array.isArray(orderdata) &&
    orderdata.some((order) => order.paymentStatus === "paid");

  const filteredVideos = hasPaidOrder ? videos : [videos[0]];

  useEffect(() => {
    setCurrentVideo(filteredVideos[0]);
  }, [hasPaidOrder]);

  const handleVideoClick = async (video) => {
    setCurrentVideo(video);
  };
  //////////unlock quiz after video 18
   const allVideowatched = watchedVideos.length === videos.length;
const date = new Date().toLocaleDateString("en-GB", {
  day: "2-digit",
  month: "numeric",
  year: "numeric",
});
  return (
    <div className="container">
      <div className="row justify-content-center">
        {/* Main Video Player */}
        <div className="col-lg-8 col-12">
          <h4 className="fw-bold mb-4 d-none d-md-block">
            {currentVideo.title}
          </h4>

          <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
            <iframe
              key={currentVideo.vimeoId}
              ref={iframeRef}
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
          <h5 className="fw-bold mt-3 d-block d-md-none video-title-mobile">
            {" "}
            {currentVideo.title}
          </h5>
          {!showquiz && (
            <div
              className="fw-bold mb-4 d-none d-md-block text-center"
              onClick={() => {
                if (allVideowatched) {
                  setshowquiz(true);
                }
              }}
              style={{
                opacity: allVideowatched ? 1 : 0.5,
              }}
            >
              <span
                className="user-id-badge mt-5"
                style={{ cursor: allVideowatched ? "pointer" : "not-allowed" }}
              >
                {allVideowatched
                  ? "Get Your Certificate"
                  : `Watch all videos to unlock your certificate (${watchedVideos.length}/${videos.length})`}
              </span>
            </div>
          )}

          {showquiz &&  !userProgress?.certificateGenerated && (
            <div className="quiz-box mt-5">
              {!showResult ? (
                <>
                  <div className="mt-4 p-3 border rounded text-center bg-light">
                    <h4>{questions[currentQ].number}. {questions[currentQ].question}</h4>

                    {questions[currentQ].options.map((opt, i) => (
                      <button
                        key={i}
                        className="btn btn-outline-primary m-2"
                        onClick={() => handleAnswer(opt)}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </>
              ) : (
                <div className="text-center mt-5">
                  <h3>
                    Your Score: {score} / {questions.length}
                  </h3>

                  {score === questions.length ? (
                    <>
                      
                    </>
                  ) : (
                    <>
                      <p className="text-danger mt-2">
                        ❌ You need all correct answers to get certificate
                      </p>

                      <button
                        className="btn  mt-2"
                        style={{ backgroundColor: "#0e1255", color: "white" }}
                        onClick={() => {
                          setCurrentQ(0);
                          setScore(0);
                          setShowResult(false);
                        }}
                      >
                        Retry Quiz
                      </button>
                    </>
                  )}
                </div>
              )}
            </div>
          )}

          {showCertificate && (
            <div>
              <div className="d-flex justify-content-end">
                <button
                  className="btn  mt-3 text-white "
                  style={{ backgroundColor: "#b43f95" }}
                  onClick={generateCertificate}
                >
                  <i className="fa fa-download"></i> Download
                </button>
              </div>
              <div
                className="mt-3"
                id="certificate"
                style={{
                  position: "relative",
                  width: "90%",
                  height: "500px",
                  backgroundImage: `url(${certificate})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  border: "1px solid #ccc",
                  borderRadius: "10px",
                }}
              >
                {/* User Name */}
                
                <div
                  style={{
                    position: "absolute",
                    top: "57%",
                    left: "11%",
                    transform: "translateY(-50%)",
                    color: "rgb(0, 0, 0)",
                    fontSize: "22px",
                    fontWeight: "bold",
                    fontFamily: "cursive",
                     whiteSpace: "nowrap", 
                  }}
                >
                  {sessionStorage.getItem("username") || "Your Name"}
                </div>
                 <div
                  style={{
                    position: "absolute",
                    top: "84%",
                    left: "22%",
                    transform: "translate(-50%, -50%)",

                    color: "rgb(0, 0, 0)",

                    fontSize: "14px",
                    fontWeight: 300,
                    fontFamily: "cursive",
                  }}
                >
                  {
                    date
                  }
                </div>
              </div>
            </div>
          )}
          {(!orderdata || orderdata[0]?.paymentStatus !== "paid") && (
            <div className="mt-4 p-3 border rounded text-center bg-light">
              <div className=" h5 fw-bold text-danger">
                For more videos, purchase any package
              </div>
              <button
                className="btn btn-primary mt-2"
                onClick={() => {
                  const event = new CustomEvent("changeMenu", {
                    detail: "Our Packages",
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
        <div className="col-lg-4 col-12  video-list-wrapper">
          <div className="videolist-area ms-2 mb-3">
            <div className="course-title mb-4 mt-4">
              <h5 className="fw-bold">Course Videos</h5>
            </div>

            <div className="course-body">
              {filteredVideos.map((video) => (
                <div
                  key={video.id}
                  className="d-flex flex-row align-items-center video-item p-3 mb-3 border rounded"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleVideoClick(video)}
                >
                  <div>
                    {watchedVideos.includes(video.id) && (
                      <span
                        className="me-3 p-1 border rounded"
                        style={{
                          color: "#8b32bf",
                          fontWeight: "900",
                          borderColor: "#8b32bf",
                        }}
                      >
                        ✔
                      </span>
                    )}
                  </div>
                  <div>
                    {" "}
                    <span className="fw-bold">▶ {video.title}</span>
                  </div>
               
                </div>
              ))}
            </div>
          </div>
        </div>

        {!showquiz && (
          <div
            className="fw-bold mb-4 d-block d-md-none video-title-mobile"
            onClick={() => {
              if (allVideowatched) {
                setshowquiz(true);
              }
            }}
            style={{
              opacity: allVideowatched ? 1 : 0.5,
            }}
          >
            <span
              className="user-id-badge mt-5"
              style={{ cursor: allVideowatched ? "pointer" : "not-allowed" }}
            >
              {allVideowatched
                ? "Get Your Certificate"
                : `Complete all videos to unlock your certificate (${watchedVideos.length}/${videos.length})`}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Courseview;

import React, { useState, useRef } from "react";
import html2canvas from "html2canvas";
import user from "../../Images/user.png";
import logo from "../../Images/academy.png";
import sign from "../../Images/dipansign.png";

const Idcard = () => {
  const [userPhoto, setUserPhoto] = useState(null);

  const name = sessionStorage.getItem("username") || "User Name";
  const useremail = sessionStorage.getItem("useremail") || "useremail";
  const userId = sessionStorage.getItem("userid") || "UserID";
  const userphone = sessionStorage.getItem("userphone") || "9999999999";

  // ✅ IMPORTANT: set null
  const cardRef = useRef(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setUserPhoto(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const student = {
    school: "SYNTHOSPHERE ACADEMY",
    branch: "A UNIT OF SYNTHOSPHERE TECHNOLOGIES PVT. LTD.",
    name: name, 
    std: userId,
    email: useremail,
    mobile: userphone,
    address:
      " 6 no. Road, Synthosphere Technologies Private Limited , Sakshi Apartment, H . B Town, Sodepur, Kolkata, West Bengal 700110",
  };

  // ✅ Download ID Card
  const downloadCard = async () => {
    const element = cardRef.current;

    if (!element) {
      alert("ID Card not ready yet!");
      return;
    }

    try {
      const canvas = await html2canvas(element, {
        scale: 3,
        useCORS: true,
        backgroundColor: "#f4f6fb",
      });

      const link = document.createElement("a");
      link.download = `${name}_IDCard.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    } catch (error) {
      console.log("Download Error:", error);
      alert("Something went wrong while downloading!");
    }
  };

  return (
    <>
      {/* Upload */}
     <div className="d-flex flex-column flex-md-row justify-content-center align-items-center mt-5 gap-2 px-3">
  <div className="fw-bold text-center" style={{ fontSize: "18px" }}>
    Please upload your photo here:
  </div>

  <div>
    <input
      type="file"
      className="form-control"
      accept=".png, .jpg, .jpeg"
      onChange={handleImageChange}
      style={{ maxWidth: "260px" }}
    />
  </div>
</div>


      {/* Page */}
      <div style={styles.page}>
        {/* ID Card Wrapper (THIS is what gets downloaded) */}
        <div ref={cardRef} style={styles.wrapper}>
          {/* Card 1 */}
          <div style={styles.card}>
          
            <div style={styles.header}>
            <div style={styles.logoWrap}>
    <img src={logo} alt="academy-logo" style={styles.logoImg} />
  </div>
              <h2 style={styles.schoolTitle}>
                {student.school}
                <br />
                <span style={styles.branchText}>({student.branch})</span>
              </h2>

              <div style={styles.photoWrap}>
                <div style={styles.photoCircle}>
                  <img
                    src={userPhoto ? userPhoto : user}
                    alt="User"
                    style={styles.photo}
                  />
                </div>
              </div>
            </div>

            <div style={styles.body}>
             <h1 style={styles.name}>{student.name}</h1>
               <div style={styles.stdBadge}>USER-ID : {student.std}</div>
              <div style={styles.details}>
                {/* <div style={styles.row}>
                  <span style={styles.label}>Email</span>
                  <span style={styles.colon}>-</span>
                  <span style={styles.value}>{student.email}</span>
                </div> */}

                <div style={styles.row}>
                  <span style={styles.label}>Mobile No.</span>
                  <span style={styles.colon}>-</span>
                  <span style={styles.value}>{student.mobile}</span>
                </div>
                <div style={styles.website}>www.synthosphereacademy.com</div>
              </div>
            </div>

            {/* <div style={styles.bottomLine}></div> */}
            <div style={styles.waveLeft}></div>
            <div style={styles.waveRight}></div>
          </div>
          {/* Card 2 */}
<div style={styles.card2}>
  <div style={styles.card2Inner}>
    
    {/* Watermark */}
    <div style={styles.watermarkText}>SYNTHOSPHERE</div>

    {/* Center Photo */}
    <div style={styles.photoWrap2}>
      <div style={styles.photoCircle2}>
        <img
          src={logo ? logo : "company"}
          alt="User"
          style={styles.photo2}
        />
      </div>
    </div>

    {/* Address + Mobile */}
    <div style={styles.body2}>
      <p style={styles.addressText}>{student.address}</p>
      <p style={styles.mobileText}>📞 6291583772</p>

      {/* Signature */}
      <div  style={styles.signatureWrap}>
       <img
    src={sign}
    alt="signature"
    style={styles.signatureImg}
  />
        <div style={styles.signatureLine}></div>
        <p style={styles.signatureText}>Authorised Signature</p>
      </div>
    </div>

  </div>
{/* Corner Design */}
<div style={styles.cornerTL}></div>
<div style={styles.cornerTR}></div>
<div style={styles.cornerBL}></div>
<div style={styles.cornerBR}></div>

  <div style={styles.waveLeft}></div>
  <div style={styles.waveRight}></div>
</div>

        </div>
   
        <button onClick={downloadCard} style={styles.downloadBtn}>
          ⬇ Download ID Card
        </button>
      </div>
    </>
  );
};

export default Idcard;

/* =======================
   STYLES
======================= */
const styles = {
  
  page: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    gap: "18px",
  },
logoWrap: {
  position: "absolute",
  top: "15px",
  left: "50%",
  transform: "translateX(-50%)",
  width: "70px",
  height: "70px",
  borderRadius: "50%",
  background: "#fff",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  boxShadow: "0px 6px 15px rgba(0,0,0,0.2)",
},
website:{
  fontSize: "14px",
  display: "flex",
  justifyContent: "center",
  fontWeight: "600",
  color: "#555",
  marginTop: "12px",
},
logoImg: {
  width: "55px",
  height: "55px",
  objectFit: "contain",
},

  // ✅ IMPORTANT: wrapper style
  wrapper: {
    display: "flex",
    gap: "20px",
    padding: "18px",
    // background: "#f4f6fb",
    // borderRadius: "20px",
    justifyContent: "center",
    alignItems: "flex-start",
    flexWrap: "wrap",
  },

  downloadBtn: {
    padding: "12px 20px",
    border: "none",
    borderRadius: "10px",
    background: "#6A2BBF",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "800",
    cursor: "pointer",
    boxShadow: "0px 6px 15px rgba(0,0,0,0.15)",
  },

  card: {
    width: "380px",
    borderRadius: "40px",
   border: "8px solid #4c1d95",

    overflow: "hidden",
    background: "#fff",
    position: "relative",
    boxShadow: "0px 10px 30px rgba(0,0,0,0.15)",
  },
  card2: {
    width: "380px",
    borderRadius: "22px",
    border: "8px solid #4c1d95",

    overflow: "hidden",
    background: "#fff",
    position: "relative",
    boxShadow: "0px 10px 30px rgba(0,0,0,0.15)",
  //     outline: "8px solid #4c1d95",
  // outlineOffset: "0px",
  },

  header: {
    height: "210px",
    background: "#b43f95",
    borderBottomLeftRadius: "90px",
    borderBottomRightRadius: "90px",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    paddingTop: "25px",
  },

  schoolTitle: {
  color: "#fff",
  fontWeight: "900",
  fontSize: "22px",
  textAlign: "center",
  letterSpacing: "1px",
  lineHeight: "1.2",
  padding: "70px 10px 0px", // ✅ changed
},


  branchText: {
    fontSize: "12px",
    fontWeight: "600",
    opacity: 0.95,
  },

  photoWrap: {
    position: "absolute",
    bottom: "-91px",
    left: "50%",
    transform: "translateX(-50%)",
  },

  photoCircle: {
    width: "140px",
    height: "140px",
    borderRadius: "50%",
    background: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0px 10px 25px rgba(0,0,0,0.18)",
  },
 

  photo: {
    width: "140px",
    height: "140px",
    borderRadius: "50%",
    objectFit: "cover",
  },

  body: {
    padding: "95px 22px 18px",
    textAlign: "center",
  },

  name: {
    fontSize: "30px",
    margin: "0px",
    fontWeight: "900",
    color: "#e255bc",
    textTransform: "capitalize",
  },

  stdBadge: {
    display: "inline-block",
    marginTop: "15px",
    padding: "7px 18px",
    borderRadius: "10px",
    background: "#7A3AE0",
    color: "#fff",
    fontWeight: "700",
    fontSize: "16px",
  },

  details: {
    marginTop: "18px",
    textAlign: "left",
    fontSize: "16px",
    fontWeight: "700",
    color: "#111",
  },

  row: {
    display: "grid",
    gridTemplateColumns: "120px 20px 1fr",
    gap: "5px",
    padding: "6px 0px",
  },

  label: {
    color: "#111",
  },

  colon: {
    textAlign: "center",
    fontWeight: "900",
  },

  value: {
    fontWeight: "800",
    color: "#333",
    wordBreak: "break-word",
  },

  bottomLine: {
    height: "7px",
    background: "#7A3AE0",
  },

  waveLeft: {
    position: "absolute",
    bottom: "0px",
    left: "-20px",
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    background: "rgb(123, 44, 191, 0.12)",
  },

  waveRight: {
    position: "absolute",
    bottom: "-40px",
    right: "-40px",
    width: "180px",
    height: "180px",
    borderRadius: "50%",
    background: "rgba(123, 44, 191, 0.12)",
  },

  // Card 2 specific styles
  signatureImg: {
  width: "130px",
  height: "40px",
  objectFit: "contain",
  marginBottom: "5px",
},
cornerTL: {
  position: "absolute",
  top: "0",
  left: "0",
  width: "70px",
  height: "70px",
  background: "#b43f95",
  borderBottomRightRadius: "40px",
},

cornerTR: {
  position: "absolute",
  top: "0",
  right: "0",
  width: "70px",
  height: "70px",
  background: "#b43f95",
  borderBottomLeftRadius: "40px",
},

cornerBL: {
  position: "absolute",
  bottom: "0",
  left: "0",
  width: "70px",
  height: "70px",
  background: "#b43f95",
  borderTopRightRadius: "40px",
},

cornerBR: {
  position: "absolute",
  bottom: "0",
  right: "0",
  width: "70px",
  height: "70px",
  background: "#b43f95",
  borderTopLeftRadius: "40px",
},

  card2Inner: {
  position: "relative",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  paddingTop: "30px",
  paddingBottom: "25px",

  // ✅ Light Premium Gradient
  background: "linear-gradient(135deg, #ffffff, #f3ecff)",
},

watermarkText: {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%) rotate(-25deg)",
  fontSize: "40px",
  fontWeight: "900",
  color: "rgba(122, 58, 224, 0.08)",
  letterSpacing: "3px",
  whiteSpace: "nowrap",
  pointerEvents: "none",
  userSelect: "none",
},

photoWrap2: {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "15px",
  zIndex: 2,
},

photoCircle2: {
  width: "130px",
  height: "130px",
  borderRadius: "50%",
  background: "#fff",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  boxShadow: "0px 8px 18px rgba(0,0,0,0.15)",
},

photo2: {
  width: "115px",
  height: "115px",
  borderRadius: "50%",
  objectFit: "cover",
},

body2: {
  width: "100%",
  padding: "0px 22px 18px",
  textAlign: "center",
  zIndex: 2,
},

addressText: {
  textAlign: "center",
  fontSize: "16px",
  fontWeight: "700",
  color: "#222",
  lineHeight: "1.7",
  padding: "0px 18px",
  margin: "10px 0px",
},

mobileText: {
  textAlign: "center",
  fontSize: "17px",
  fontWeight: "900",
  color: "#6A2BBF",
  margin: "8px 0px 20px",
},

signatureWrap: {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  paddingRight: "35px",
  marginTop: "12%",
},

signatureLine: {
  width: "140px",
  height: "2px",
  background: "#333",
  marginBottom: "6px",
},

signatureText: {
  fontSize: "13px",
  fontWeight: "800",
  color: "#111",
},

};

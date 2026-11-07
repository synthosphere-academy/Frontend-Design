import "../Css/Ourteam.css";
import face1 from "../Images/about7.jpg";
import face2 from "../Images/about5.jpg";
import face3 from "../Images/about6.jpg";
import face4 from "../Images/about2.jpg";
import face5 from "../Images/about1.jpg";
import Teamslider from "./Teamslider";
import face6 from "../Images/about4.jpg";
// import face7 from "../Images/about3.jpg";
import aritra from "../Images/aritra.png";
import bappa from "../Images/bappa.png";
import captain from "../Images/captain.png";
import chetri from "../Images/chetri.png";
import raha from "../Images/raha.png";
import rajib from "../Images/rajib.png";

function Ourteam() {
  const ourteamInfo = [
    {
      image: [face1],
      team_member: "Kesto Das",
      team_member_role: "Founder & C.E.O",
      team_member_description:
        "Empowering minds, shaping futures – Synthosphere Academy's courses redefine education in the age of synthetic intelligence",
    },
    {
      image: [face2],
      team_member: "Dipan Das",
      team_member_role: "Co-founder & C.O.O",
      team_member_description:
        "Join us in the future of technology with this Academy's visionary courses, driving innovation and progress forward.",
    },
    {
      image: [face3],
      team_member: "Kushal Saha",
      team_member_role: "Co-founder & C.F.O",
      team_member_description:
        "Empower your future with courses that fuel creativity and technological breakthroughs.",
    },
    {
      image: [aritra],
      team_member: "Aritra Kundu",
      team_member_role: "Chief Development Officer",
      team_member_description:
        "Learn. Evolve. Succeed. Step into the future with our transformative learning experience.",
    },
    {
      image: [captain],
      team_member: "Pravanjan Paria",
      team_member_role: "Manager",
      team_member_description:
        "Explore endless possibilities with our Academy’s future-focused courses—learn,innovate, and turn your ambitions into achievements!",
    },
    {
      image: [raha],
      team_member: "Sujit Raha",
      team_member_role: "Business Development Manager",
      team_member_description:
        "Empower your journey with next-generation learning at our Academy—gain knowledge, master new skills, and create opportunities for a brighter future!",
    },
    {
      image: [rajib],
      team_member: "Rajib Chakraborty",
      team_member_role: "Executive Teacher",
      team_member_description:
        "Step into a world of limitless learning with our Academy—discover new skills, embrace innovation, and turn your dreams into reality!",
    },
    {
      image: [face4],
      team_member: "Subham Sarkar",
      team_member_role: "Project head",
      team_member_description:
        "Unlock your potential with visionary courses designed to lead innovation in tech.",
    },
    {
      image: [face5],
      team_member: "Kalyan Das",
      team_member_role: "Head graphics designer",
      team_member_description:
        "Fuel your passion for technology and innovation with our Academy's forward-thinking curriculum.",
    },
    {
      image: [face6],
      team_member: "Srijani Banerjee",
      team_member_role: "IT head",
      team_member_description:
        "Master the tools of tomorrow with our Academy’s visionary courses—your future starts now!",
    },
    ,
    {
      image: [chetri],
      team_member: "Ashis Kumar Chettri",
      team_member_role: "Sr. Executive",
      team_member_description:
        "Shape your success through expert-led learning and practical skills—where knowledge meets innovation and every lesson brings you closer to your goals!",
    },
    {
      image: [bappa],
      team_member: "Utpal Kr. Das",
      team_member_role: "Sr. Supervisor",
      team_member_description:
        "Discover the power of learning with our Academy—gain real-world expertise, explore emerging technologies, and build the confidence to lead tomorrow!",
    },
  ];
  //  const renderteam=(card,index)=>{
  //     return(
  //         <div className="col-lg-3 text-center">
  //         <img className="rounded-circle shadow-1-strong mb-4"
  //           src={card.image}alt="avatar"
  //          style={{width:"130px"}} />
  //         <h5 className="mb-3">{card.team_member}</h5>
  //         <p> {card.team_member_role}</p>
  //         <p className="text-muted">
  //         <i className="fa fa-quote-left pe-2"></i>
  //           {card.team_member_description}
  //         </p>
  //         </div>
  //     )}

  return (
    <div style={{ backgroundColor: "rgba(244, 238, 238, 0.975)" }}>
      <div className="container py-5">
        <h4 className="display-4 text-center  teamheading mb-5">
          Our team is best for the academy
        </h4>
        <div className="team_member">
          <Teamslider users={ourteamInfo} />
        </div>
        {/* <div className="row mt-3" >
                 {ourteamInfo.map(renderteam)}
                </div> */}
      </div>
    </div>
  );
}

export default Ourteam;

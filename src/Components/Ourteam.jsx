import '../Css/Ourteam.css'
import face1 from '../Images/sourav.jpg';
import face2 from '../Images/dipan.jpg';
import face3 from '../Images/kushal.jpeg';
import face4 from '../Images/subham.png';
import face5  from "../Images/figo.jpg";
import Teamslider from './Teamslider';
import face6 from "../Images/srijani.jpg";
function Ourteam() {
    const ourteamInfo = [
       
        {
            image:[face1],
            team_member:"Sourav Basak ",
            team_member_role:"Co-founder & CTO",
            team_member_description: "Empowering minds, shaping futures – Synthosphere Academy's courses redefine education in the age of synthetic intelligence"
        },
        {
        image:[face2],
        team_member:"Dipan Das",
        team_member_role:"Co-founder & COO",
        team_member_description: "Join us in the future of technology with this Academy's visionary courses, driving innovation and progress forward."
        },
        {
            image:[face3],
            team_member:"Kushal Saha",
            team_member_role:"Co-founder & CFO",
            team_member_description: "Empower your future with courses that fuel creativity and technological breakthroughs."
            },
            {
                image:[face4],
                team_member:"Subham Sarkar",
                team_member_role:"Project head",
                team_member_description: "Unlock your potential with visionary courses designed to lead innovation in tech."
                },
                {
                    image:[face5],
                    team_member:"Kalyan Das",
                    team_member_role:"Graphics design",
                    team_member_description: "Fuel your passion for technology and innovation with our Academy's forward-thinking curriculum."
                    },
                    {
                        image:[face6],
                        team_member:"Srijani Banerjee",
                        team_member_role:"IT head",
                        team_member_description: "Master the tools of tomorrow with our Academy’s visionary courses—your future starts now!"
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
        <div style={{backgroundColor:"rgba(244, 238, 238, 0.975)"}}>
            <div className="container py-5">
                <h4 className='display-4 text-center mt-5 teamheading mb-3'>Our team is the best for the academy</h4>
                <Teamslider users={ourteamInfo} />
                {/* <div className="row mt-3" >
                 {ourteamInfo.map(renderteam)}
                </div> */}
            </div>
        </div>
    )
}

export default Ourteam

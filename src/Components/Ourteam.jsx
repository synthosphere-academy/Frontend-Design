import '../Css/Ourteam.css'
import face1 from '../Images/sourav.jpg';
import face2 from '../Images/dipan.jpg';

function Ourteam() {
    const ourteamInfo = [
       
        {
            image:[face1],
            team_member:"Sourav Basak ",
            team_member_role:"CTO",
            team_member_description: "Empowering minds, shaping futures – Synthosphere Academy's courses redefine education in the age of synthetic intelligence"
        },
        {
        image:[face2],
        team_member:"Dipan Das",
        team_member_role:" COO & Trainer",
        team_member_description: "Join us in the future of technology with this Academy's visionary courses, driving innovation and progress forward."
        }
       
      
       
    ];
     const renderteam=(card,index)=>{
        return(
            <div className="col-lg-6 text-center">
            <img className="rounded-circle shadow-1-strong mb-4"
              src={card.image}alt="avatar"
             style={{width:"130px"}} />
            <h5 className="mb-3">{card.team_member}</h5>
            <p> {card.team_member_role}</p>
            <p className="text-muted">
            <i className="fa fa-quote-left pe-2"></i>
              {card.team_member_description}
            </p>
            </div>
        )}
            {/* <article className=' text-center' key={index}>
                <img className=" img-fluid rounded-circle shadow-1-strong mb-4"
                            src={card.image} alt="avatar"
                            />
                             <h5 className="mb-3 teamname">{card.team_member}</h5>
                        <p className='teamrole'>
                            {card.team_member_role}
                        </p>
                        <p className="text-muted teamquote">
                            <i className="fa fa-quote-left pe-2"></i>
                            {card.team_member_description}
                        </p>
                </article>  */}
                 
        
     
    return (
        <div style={{backgroundColor:"rgba(244, 238, 238, 0.975)"}}>
            <div className="container py-5">
                <h4 className='display-4 text-center mt-5 teamheading'>Our team is the best for the academy</h4>
                <div className="row mt-3" >
                 {ourteamInfo.map(renderteam)}
   
                </div>

            </div>
        </div>
    )
}

export default Ourteam

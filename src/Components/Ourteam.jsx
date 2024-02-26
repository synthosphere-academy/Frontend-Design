import '../Css/Ourteam.css'
function Ourteam() {
    const ourteamInfo = [
        {
            image:["https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"],
            team_member:"Anna Deynah",
            team_member_role:"UX Designer",
            team_member_description: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur."

        },
        {
        image:["https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp"],
        team_member:"Sourav",
        team_member_role:"Trainer",
        team_member_description: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur."
        },
        {
            image:["https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"],
            team_member:"Maria Kate",
            team_member_role:"Photographer",
            team_member_description: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur."
    
        },
        {
            image:["https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"],
            team_member:"Maria Kate",
            team_member_role:"Photographer",
            team_member_description: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur."

        },
       
    ];
     const renderteam=(card,index)=>{
        return(
            <article className='grid-body text-center' key={index}>
                <img className="rounded-circle shadow-1-strong mb-4"
                            src={card.image} alt="avatar"
                            style={{ width: "44%" }} />
                             <h5 className="mb-3">{card.team_member}</h5>
                        <p >
                            {card.team_member_role}
                        </p>
                        <p className="text-muted">
                            <i className="fa fa-quote-left pe-2"></i>
                            {card.team_member_description}
                        </p>
                </article>  
        )
     }
    return (
        <div>
            <div className="container py-2">
                <h2 className='display-4 text-center fw-bold'>Our team is the best in the business</h2>
                <main className="grid team">
                 {ourteamInfo.map(renderteam)}
   
                </main>

            </div>
        </div>
    )
}

export default Ourteam

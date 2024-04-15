

const Orderhistory= () => {
    const Courseinfo = [
        {
            
                image: ["https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F26d8c986-c9fd-468b-b4be-660691f4aa48.jpg?source=next-article&fit=scale-down&quality=highest&width=700&dpr=1"],
                coursename: "The Cryptocurrency Course",
                // coursedetails:"Learn  about Cryptocurrency: From the Blockchain and Bitcoin to Cryptocurrency investing techniques!",
                course_currentprice: "₹899", 
                total_video:"20",
                teachername: "David Das",
               
          
              
        },
        {
            
            image: ["https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F26d8c986-c9fd-468b-b4be-660691f4aa48.jpg?source=next-article&fit=scale-down&quality=highest&width=700&dpr=1"],
            coursename: "The Cryptocurrency Course",
            // coursedetails:"Learn  about Cryptocurrency: From the Blockchain and Bitcoin to Cryptocurrency investing techniques!",
            course_currentprice: "₹899", 
            total_video:"20",
            teachername: "David Das",
        },
        
    ]
    const rendercourse=(card , index)=>{
        return(
            <div className="col-lg-12">
                  <div className="row" key={index}>
                            <div className="row align-items-center">
                                <div className="col-lg-3"><img className="img-fluid" src={card.image} /></div>
                                <div className="col-lg-6">
                                    <div className="row fw-bold "> {card.coursename}</div>
                                    <div className="row"> By {card.teachername}</div>
                                    <div className="row"> {card.total_video} total videos</div>
                                </div>
                                <div className="col-lg-3"> {card.course_currentprice}/-</div>
                                

                            </div>
                            

                        </div>
                        <hr className='mt-4' />
            </div>
        )
    }
  return (
    <>
    <h3 className="fw-bold">Order History</h3>
    <div className="container mt-4">
    <div className="row">

    {Courseinfo.map(rendercourse)}
  </div>
  </div>
    </>
  )
}

export default Orderhistory

import React from 'react'
import icon1 from "../Images/physical.png";
import icon2 from "../Images/affiliate.png";
const Typeofcourse = () => {
  return (
   <>
     <div className='features'>
                   <div className="container py-5">
                       <h1 className="display-4 text-center fw-bold heading">
                           Our Popular Courses
                       </h1>
   
                      <div className="row py-5 g-4" >
   
                           <div className="col-lg-6 ">
                           <a href='/physicalcourse' className='text-decoration-none'>
                               <div className="card  align-items-center carddesign1 cardshadow">
                                   <div className='feature mt-3'> 
   
                                   <img className="img mt-3 ms-3 " src={icon1} width={80}  alt="100%x280" />
                                   </div>
   
                                   <div className="card-body text-center mt-4">
                                       <h2 className="card-title">Physical Courses</h2>
                                       {/* <h6 className="card-text">This Academy offers elite programs for professional skill enhancement and career advancement</h6> */}
   
                                   </div>
                               </div>
                               </a>
                           </div>

                           <div className="col-lg-6 ">
                           <a href='/affiliatecourses'  className='text-decoration-none'>
                               <div className="card align-items-center carddesign2 cardshadow">
                                   <div className=' feature mt-3'>
                                   <img className="img mt-3 ms-3" src={icon2} width={80} alt="100%x280" />
                                   </div>
   
                                   <div className="card-body mt-4">
                                       <h2 className="card-title text-center fw-bold">Affiliate Courses</h2>
                                       {/* <h6 className="card-text text-center">Around-the-clock support available to all academy students for timely assistance & guidance.</h6> */}
                                   </div>
                               </div>
                               </a>
                           </div>
   
                       </div>
                   </div>
               </div>
   </>
  )
}

export default Typeofcourse
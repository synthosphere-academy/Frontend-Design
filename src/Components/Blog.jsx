
import img1 from '../Images/Image.png';
import img2 from '../Images/Image2.png';
import img3 from '../Images/Image3.png';

import '../Css/blog.css'
function Blog() {
const cardInfo=[
  {image:[img1],
    title:"text",
    text:"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."

  },
  {image:[img2],
    title:"text",
    text:"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
    
  },
  {image:[img3],
    title:"text",
    text:"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
    
  },
  {image:[img1],
    title:"text",
    text:"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
    
  },
  {image:[img2],
    title:"text",
    text:"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
    
  }

];
const renderCard =(card,index)=>{
 return( 

<div className="card" key={index}>
<img src={card.image} className="card-img-top" alt="..." />
<div className="card-body">
  <h5 className="card-title">{card.title}</h5>
  <p className="card-text">{card.text}</p>
</div>
</div>
 )
}

  return (
    <>
      <h2 className="heading display-5 text-center mt-5 fw-bold">News and Blog</h2>
      <p className='text-center fw-bold'>synthosphere academy news and blog</p>
      <div className="container mt-5 mb-5">
        <div className="row row-cols-1 row-cols-md-3 ">
          {/* <div className="col"> */}
            {cardInfo.map(renderCard)}

            
          
        </div>
      </div>
     
    </>
      

  )

 

  }



export default Blog

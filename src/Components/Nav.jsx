
import logo from '../Images/academy.png'
import '../Css/Nav.css'
import { Link } from 'react-router-dom';
function Nav() {
 

 
  
    return (
        <>
          <nav className="navbar navbar-expand-lg" style={{backgroundColor:"#5c0e47"}}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src={logo} width={60}/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mb-2 mb-lg-0 mx-auto">
        <li className="nav-item pe-2 ">
          <a className="nav-link active text-white" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item dropdown ">
          <a className="nav-link  text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Categories
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Blockchain</a></li>
            <li><a className="dropdown-item" href="#">Python</a></li>
            <li><a className="dropdown-item" href="#">Music</a></li>
          </ul>
        </li>
       

       
        {/* <li className="nav-item pe-2">
          <a className="nav-link text-white" href="#">Courses</a>
        </li> */}
        <li className="nav-item pe-2">
          <a className="nav-link text-white" href="/blog">
           Article
          </a>
          </li>
          <li>
          {/* <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul> */}
        </li>
        <li className="nav-item pe-2">
          <a className="nav-link text-white" href='/contact'>Contact</a>
        </li>
      </ul>
      <span className="navbar-text pe-4" >
      <i className="fa fa-shopping-cart cart" style={{fontSize:"30px"}}></i>
      </span>
      <span>
       <Link to="/login"><button className="btn btn btn-success" id='loginbutton' type="submit" >Login</button></Link>
      
      </span>
      {/* <form className="d-flex ml-2" role="search">
        <i className="fa fa-shopping-cart" style={{fontSize:"30px"}}></i>
        <button className="btn btn-outline-success" type="submit">Login</button>
      </form> */}
    </div>
  </div>
</nav>
           </>
    )
}

export default Nav

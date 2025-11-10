import logo from '../Images/academy.png'
import '../Css/Nav.css'
import { Link } from 'react-router-dom';


const Nav = () => {
 

  const handleLogout =(e) =>{
    e.preventDefault();
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('userid');
      sessionStorage.removeItem('useremail');
        sessionStorage.removeItem('userphone');
          sessionStorage.removeItem('userstatus');
    localStorage.removeItem('token');
    window.location.assign("/")
  }
    return (
    <>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "rgba(14, 18, 85, 1)" }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/"><img src={logo} width={60} /></a>
          <a href='/' className="text-decoration-none">
          <div className='d-flex flex-column'>
          <span className='text-white logoname'>Sythosphere Academy</span>
          <span className=' text-white isologo'>An ISO 9001:2015 Certified</span>

          </div>
         
          </a>
          <button className="navbar-toggler togglebutton" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fa fa-navicon iconnav"></i>
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent" >
            <ul className="navbar-nav mb-2 mb-lg-0 mx-auto text-center">
              <li className="nav-item pe-2 ">
                <a className="nav-link active text-white" aria-current="page" href="/">Home</a>
              </li>
              {/* <li className="nav-item pe-2 ">
                <a className="nav-link active text-white" aria-current="page" href="/ourteam">Our team</a>
              </li> */}
              <li className="nav-item dropdown ">
                <a className="nav-link  text-white" href="/course" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Courses
                </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item p-2" href="/course">All Courses</a></li>
                  <li><a className="dropdown-item p-2" href="/naildetails" target='_blank'>Nail extension</a></li>
                  <li><a className="dropdown-item p-2" href="/eyelashdetails">Eyelash extension</a></li>
                  <li><a className="dropdown-item p-2" href="/allmakeupcourse">Makeup courses </a></li>
                  <li><a className="dropdown-item p-2" href="/cryptodetails">Crypto trading  </a></li>
                  <li><a className="dropdown-item p-2" href="/tarotdetails">Tarot card reading </a></li>
                   <li><a className="dropdown-item p-2" href="/vocaldetails">Vocal course </a></li>
                </ul>
                </li>
              {/* </li>
              {/* <li className="nav-item pe-2">
                <a className="nav-link text-white" href="/allblogs">
                  Article
                </a>
              </li> */}
              <li className="nav-item pe-2">
                <a className="nav-link text-white" href='/contact'>Contact</a>
              </li>
              
              {/* <li className="nav-item pe-2">
                <a className="nav-link"  target='_blank'  href='https://drive.google.com/file/d/14REmABPFvJUy1JXkvEs2lygmrFNA9eHd/view?usp=drive_link'><span className='fw-bold' style={{color:"#FFFF00"}} >Download app 
                </span> </a>
              </li> */}
            </ul>
          
            {/* <button className='buttonstyle btn btn-sm text-white'>
                  <Link to="/register"><button className=" childbutton text-white" id='loginbutton' type="submit" >Signup</button></Link>/
                  <Link to="/login"><button className="childbutton text-white" id='loginbutton' type="submit" >Login</button></Link>
                </button> */}
            {
              sessionStorage.getItem("username") ?
                <div>
                <div className="me-5 userdrop dropdown">
                  <div className="buttonstyle dropdown-toggle text-white" type='button'  data-bs-toggle="dropdown" aria-expanded="false">
                    Hi, {sessionStorage.getItem("username")} 
                  </div>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item p-2" href="/userdashboard">Dashboard</a></li>
                    <li><a className="dropdown-item p-2" href="#" onClick={handleLogout}>Logout</a></li>
                   
                  </ul>
                </div>
                </div>
              

                : <div><Link to="/register"><button className=" buttonstyle btn btn-sm text-white" id='loginbutton' type="submit" >Signup</button></Link>
                  <Link to="/login"><button className="buttonstyle btn btn-sm text-white" id='loginbutton' type="submit" >Login</button></Link>
               </div>
                  
            } 
             

          </div>
        </div>
      </nav>
    </>
  )
}


export default Nav

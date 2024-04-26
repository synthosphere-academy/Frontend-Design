import logo from '../Images/academy.png'
import '../Css/Nav.css'
import { Link } from 'react-router-dom';
import icon from '../Images/icon.svg'

const Nav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "rgba(14, 18, 85, 1)" }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/"><img src={logo} width={60} /></a>
          <a href='/' className="text-decoration-none"><span className='text-white logoname'>Sythosphere Academy</span></a>
          <button className="navbar-toggler togglebutton" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fa fa-navicon iconnav"></i>
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent" >
            <ul className="navbar-nav mb-2 mb-lg-0 mx-auto text-center">
              <li className="nav-item pe-2 ">
                <a className="nav-link active text-white" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item pe-2 ">
                <a className="nav-link active text-white" aria-current="page" href="/course">Courses</a>
              </li>
              {/* <li className="nav-item dropdown ">
                {/* <a className="nav-link  text-white" href="/course" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Courses
                </a> */}
                {/* <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="/course">All</a></li>
                  <li><a className="dropdown-item" href="#">Blockchain</a></li>
                  <li><a className="dropdown-item" href="#">Python</a></li>
                  <li><a className="dropdown-item" href="#">Music</a></li>
                </ul> */}
              {/* </li> */}
              <li className="nav-item pe-2">
                <a className="nav-link text-white" href="/blog">
                  Article
                </a>
              </li>

              <li className="nav-item pe-2">
                <a className="nav-link text-white" href='/contact'>Contact</a>
              </li>
            </ul>
            <div className='me-2 cartpart'>
              <div className="navbar-text  cartstyle text-center" >
                <a href='/addtocart'>
                  <img src={icon} className='carticon' />
                </a>
                {/* <sup><span className="badge bg-danger">5</span></sup> */}
              </div>
            </div>

            
            <button className='buttonstyle btn btn-sm text-white'>
              <Link to="/register"><button className=" childbutton text-white" id='loginbutton' type="submit" >Signup</button></Link>/
              <Link to="/login"><button className="childbutton text-white" id='loginbutton' type="submit" >Login</button></Link>
            </button>

          </div>
        </div>
      </nav>
    </>
  )
}


export default Nav

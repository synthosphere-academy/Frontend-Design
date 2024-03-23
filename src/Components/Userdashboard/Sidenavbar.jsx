import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
// import Dashboard from './Dashboard';
// import { Link } from 'react-router-dom';
import pic from '../../Images/user.png';

function Sidenavbar() {
  return (
    <>
    <Sidebar>
  <Menu>

    <h2 className="mt-2 ms-2"><img src={pic} width="25%"/> Userpanel</h2><hr/>
    
    {/* <SubMenu label="Dashboard">
      <MenuItem> Pie charts </MenuItem>
      <MenuItem> Line charts </MenuItem>
    </SubMenu> */}
    <MenuItem  >
   
    <span><i className="fa fa-dashboard" style={{color:"rgb(92, 14, 71)"}}></i></span>
    <span className='ms-2'>Dashboard </span></MenuItem>
    <MenuItem > <span ><i className="fa fa-user" style={{color:"rgb(92, 14, 71)"}}></i></span> <span className='ms-2'>My Profile </span> </MenuItem>
    <MenuItem> <span ><i className="fa fa-graduation-cap" style={{color:"rgb(92, 14, 71)"}}></i></span> <span className='ms-1'>Entrolled Courses</span> </MenuItem>
    <MenuItem> <span ><i className="fa fa-heart-o"style={{color:"rgb(92, 14, 71)"}}></i></span> <span className='ms-1'>Wishlist</span> </MenuItem>
    <MenuItem> <span ><i className="fa fa-star-o" style={{color:"rgb(92, 14, 71)"}}></i></span> <span className='ms-1'>Review</span> </MenuItem>
    <MenuItem><span ><i className="fa fa-shopping-cart" style={{color:"rgb(92, 14, 71)"}}></i></span> <span className='ms-1'>Order History </span></MenuItem>
    <hr/>
    <MenuItem> <span ><i className="fa fa-gear"style={{color:"rgb(92, 14, 71)"}}></i></span> <span className='ms-1'>Settings</span>  </MenuItem>
    <MenuItem> <span ><i className="fa fa-sign-out"style={{color:"rgb(92, 14, 71)"}}></i></span> <span className='ms-1'>Logout</span> </MenuItem>
  </Menu>
</Sidebar>
{/* <section>
  <Router>
        <Routes>
         
          <Route path="dashboard" element={<Dashboard />} />
          
        </Routes>
        </Router>
      </section> */}

    </>
  )
}

export default Sidenavbar

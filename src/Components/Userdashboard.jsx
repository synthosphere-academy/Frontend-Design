import Sidenavbar from "./Userdashboard/Sidenavbar"
import '../Css/Userdashboard.css'

 //import Dashboard from '../Components/Userdashboard/Dashboard'
 import Myprofile from '../Components/Userdashboard/Myprofile'
 //import Wishlist from "./Userdashboard/Wishlist"
//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function Userdashboard() {
  return (
    <>
      <div className="container">
        <div className="row">
          
            <div className="col-lg-3 mb-2">
              <Sidenavbar />
            </div>
            <div className="col-lg-9 mt-4">
            {/* <Dashboard/> */}
             <Myprofile/>
            {/* <Wishlist/>  */}
              </div>
        
          </div>
        </div>
        {/* <Router>
      <div style={{ display: 'flex' }}>
        <Sidenavbar />
        <Switch>
          <Route path="Dashboard" component={Dashboard} />
         
        </Switch>
      </div>
    </Router> */}
      
    
    </>

  )
}


export default Userdashboard

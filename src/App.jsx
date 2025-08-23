
import Homepage from './Components/Homepage'
import Login from './Components/Login'
// import Nav from './Components/Nav';
import Register from './Components/Register'
import Contact from './Components/Contact'
import Blog from './Components/Blog';
// import Footer from "./Components/Footer"
import Forgotpage from "./Components/Forgotpage"
import Courses from './Components/Courses'
import Addtocart from './Components/Addtocart'
import Coursedetails from './Components/Coursedetails'
import Userdashboard from './Components/Userdashboard'
import Courseview from './Components/Courseview'
import Terms from './Components/Terms';
import Privatepolicy from './Components/Privatepolicy'
import Refundpolicy from './Components/Refundpolicy'
// import Invoice from './Components/Invoice'
import { Userlayout } from './Components/Userlayout';
import Offlineregister from './Components/Offlineregister';
import Checkout from './Components/Checkout';
import { Allblog } from './Components/Allblog';
//  import Admin from './Components/admin/layout/DefaultLayout'
import PaymentSucess from './Components/PaymentSucess'
import Invoice from './Components/Userdashboard/Invoice';
import Resetpassword from './Components/Fotgotpassword/Resetpassword';
 import Physicalcourse from "./Components/Ourcourse/Physicalcourse";
 import Onlinecourse from "./Components/Ourcourse/Onlinecourse";
 import Naildetails from "./Components/CourseDetails/Naildetails";
 import Promakeupdetails from "./Components/CourseDetails/Promakeupdetails";
 import Eyelashdetails from "./Components/CourseDetails/Eyelashdetails";
 import Makeupmasterdetails from "./Components/CourseDetails/Makeupmasterdetails";
 import Mehendidetails from "./Components/CourseDetails/Mehendidetails"
 import Tarotdetails from "./Components/CourseDetails/Tarotdetails";
 import Vocaldetails from "./Components/CourseDetails/Vocaldetails";
 import Advancemakeup from "./Components/CourseDetails/Advancemakeup";
 import Allmakeupcourse from "./Components/CourseDetails/Allmakeupcourse";
import './App.css'



import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';

function App() {

  
  return (
    <>
      <Router>
     
      {/* <Nav /> */}
        <Routes>
        <Route path="/" element={<Userlayout><Homepage /></Userlayout>} />
        <Route path="/login" element={<Userlayout><Login /></Userlayout>} />
        <Route path="/register" element={<Userlayout><Register /></Userlayout>} />
        <Route path="/contact" element={<Userlayout><Contact /></Userlayout>} />
        <Route path="/blog/:slug" element={<Userlayout><Blog/></Userlayout>} />
        <Route path='/forgotpassword' element={<Userlayout><Forgotpage/></Userlayout>}/>
        <Route path='/course' element={<Userlayout><Courses/></Userlayout>}/>
        {/* <Route path='/addtocart' element={<Userlayout><Addtocart/></Userlayout>}/> */}
        <Route path='/coursedetails/:id' element={<Userlayout><Coursedetails/></Userlayout>}/>
        <Route path='/userdashboard' element={<Userlayout><Userdashboard/></Userlayout>}/>
        <Route path='/courseview/:id' element={<Userlayout><Courseview/></Userlayout>}/>
        <Route path='/terms' element={<Userlayout><Terms/></Userlayout>}/>
        <Route path='/Privatepolicy' element={<Userlayout><Privatepolicy/></Userlayout>}/>
        <Route path='/physicalcourse' element={<Userlayout><Physicalcourse/></Userlayout>}/>
        <Route path='/onlinecourse' element={<Userlayout><Onlinecourse/></Userlayout>}/>
        <Route path='/Refundpolicy' element={<Userlayout><Refundpolicy/></Userlayout>}/>
        {/* <Route path='/userinvoice' element={<Userlayout><Invoice/></Userlayout>}/> */}
        <Route path='/Refundpolicy' element={<Userlayout><Refundpolicy/></Userlayout>}/>
        <Route path='/Offlineregister' element={<Userlayout><Offlineregister/></Userlayout>}/>
        {/* <Route path='/checkout' element={<Userlayout><Checkout/></Userlayout>}/> */}
        <Route path='/checkout/:id' element={<Userlayout><Checkout/></Userlayout>}/>
        <Route path='/paymentSucess' element={<Userlayout><PaymentSucess/></Userlayout>}/>
        <Route path='/allblogs' element={<Userlayout><Allblog/></Userlayout>}/>
        <Route path='/invoice/:id' element={<Userlayout><Invoice/></Userlayout>}/>
        <Route path='/verify-email' element={<Resetpassword/>} />
        {/* <Route path='/admin/*' element={<Admin/>}/> */}
       {/* course details */}
        <Route path='/naildetails' element={<Userlayout><Naildetails/></Userlayout>}/>
        <Route path='/promakeupdetails' element={<Userlayout><Promakeupdetails/></Userlayout>}/>
        <Route path='/eyelashdetails' element={<Userlayout><Eyelashdetails/></Userlayout>}/>
        <Route path='/makeupmasterdetails' element={<Userlayout><Makeupmasterdetails/></Userlayout>}/>
        <Route path='/mehendidetails' element={<Userlayout><Mehendidetails/></Userlayout>}/>
        <Route path='/tarotdetails' element={<Userlayout><Tarotdetails/></Userlayout>}/>
        <Route path='/vocaldetails' element={<Userlayout><Vocaldetails/></Userlayout>}/>
        <Route path='/advancemakeup' element={<Userlayout><Advancemakeup/></Userlayout>}/>
        <Route path='/allmakeupcourse' element={<Userlayout><Allmakeupcourse/></Userlayout>}/>
         {/* 404 page not found */}
      
        <Route path='*' element={<div className='text-center h1'>page not found</div>}/>
       </Routes>
        {/* <Footer /> */}
      
      </Router>
      

      
    </>
  )
}

export default App

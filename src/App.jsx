import Homepage from './Components/Homepage'
import Login from './Components/Login'
import Nav from './Components/Nav';
import Register from './Components/Register'
import Contact from './Components/Contact'
import Blog from './Components/Blog';
import Footer from "./Components/Footer"
import Forgotpage from "./Components/Forgotpage"
import Courses from './Components/Courses'
import Addtocart from './Components/Addtocart'
import Coursedetails from './Components/Coursedetails'
import './App.css'


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {


  return (
    <>
      <Router>
      <Nav/>
        <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog/>} />
        <Route path='/forgotpassword' element={<Forgotpage/>}/>
        <Route path='/course' element={<Courses/>}/>
        <Route path='/addtocart' element={<Addtocart/>}/>
        <Route path='/coursedetails' element={<Coursedetails/>}/>
       </Routes>
        <Footer />
      </Router>
      

      
    </>
  )
}

export default App

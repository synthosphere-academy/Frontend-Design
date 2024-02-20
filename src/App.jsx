import Homepage from './Components/Homepage'
import Login from './Components/Login'
import Nav from './Components/Nav';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {


  return (
    <>
      <Router>
      <Nav/>
        <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
      

      
    </>
  )
}

export default App

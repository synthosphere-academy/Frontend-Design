// import Nav from "./Nav" 
import Banner from "./Banner"
import Features from './Features'
import Steps from './Steps'
// import Footer from "./Footer"
// import Mostpopularcourse from "./Mostpopularcourse"
import Ourteam from './Ourteam';
import Chooseus from './Chooseus'
// import Ourblog from './Ourblog';
// import Typeofcourse from "./Typeofcourse";
import CryptoBeginnerSection from "./CryptoBeginnerSection";


function Homepage() {
  return (
    <>
    
      <Banner/>
      <CryptoBeginnerSection/>
      {/* <Typeofcourse/> */}
      <Features/>
      <Steps/>
      {/* <Mostpopularcourse/> */}
      <Chooseus/>
      {/* <Ourblog/> */}
      <Ourteam/>
      {/* <Footer/> */}
    </>
  )
}

export default Homepage

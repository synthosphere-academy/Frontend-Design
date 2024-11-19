import PropTypes from 'prop-types';
import Home from './Home';
import Myprofile from './Myprofile'
// import Wishlist from './Wishlist'
import Entrolled from './Entrolled';
import Orderhistory from './Orderhistory';
import Invoice from "./Invoice";
import Affiliate from './Affiliate';
const Dashboard = ({ currentContent }) => {
  return (
    <div className="dashboard">
      {currentContent === 'home' && <Home />}
      {currentContent === 'profile' && <Myprofile />}
      {/* {currentContent === 'wishlist' && <Wishlist />} */}
      {currentContent === 'entrolled' && <Entrolled />}
      {currentContent === 'orderhistory' && <Orderhistory />}
      {currentContent === 'invoicedownload' && <Invoice />}
      {currentContent === 'affiliate' && <Affiliate />}

    </div>
  )
}
Dashboard.propTypes = {
  currentContent: PropTypes.string.isRequired
};

export default Dashboard

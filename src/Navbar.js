import { Link } from "react-router-dom";
import {AiOutlineSearch, AiOutlineShopping} from "react-icons/ai"


const Navbar = () => {
    return ( 
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <div className="item item justify-content-start" id="hamburger-menu">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#hamburger" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>            
            <div className="collapse navbar-collapse" id="hamburger">
              <div className="navbar-nav">
                <a className="nav-link" href="#product-list">All</a>
                <a className="nav-link" href="#product-list">Sedans</a>
                <a className="nav-link" href="#product-list">SUV's</a>
                <a className="nav-link" href="#product-list">Wagons</a>
              </div>
            </div>
          </div>
          <div className="item d-flex justify-content-center">
            <Link to="/" className="navbar-brand text-center center-block bg-dark text-light p-2 br-0 m-0"><span>Kaf's Whips</span></Link>
          </div>
          <div className="item d-flex justify-content-end">
            <AiOutlineSearch className="nav-icons"/>
            <AiOutlineShopping className="nav-icons nav-icons-margin"/>
          </div>
          
        </div>
      </nav>
    );
}
 
export default Navbar;
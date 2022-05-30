import { Link } from "react-router-dom";
import {AiOutlineSearch, AiOutlineShopping} from "react-icons/ai"
import { useRef, useEffect } from "react";


const Navbar = () => {
    

    return ( 
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <div className="item" id="hamburger-menu">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#hamburger" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>            
            <div className="collapse navbar-collapse" id="hamburger">
              <div className="navbar-nav">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/products">All Cars</Link>
                <Link className="nav-link" to="/products">Wagons</Link>
                <Link className="nav-link" to="/products">Sedans</Link>
              </div>
            </div>
          </div>
          <div className="item d-flex justify-content-center" id="logo">
            <Link to="/" className="navbar-brand text-center center-block bg-dark text-light p-2 br-0 m-0"><span>Kaf's Whips</span></Link>
          </div>
          <div className="item d-flex justify-content-end" id="icons">
            <AiOutlineSearch className="nav-icons"/>
            <AiOutlineShopping className="nav-icons nav-icons-margin"/>
          </div>
          
        </div>
      </nav>
    );
}


 
export default Navbar;
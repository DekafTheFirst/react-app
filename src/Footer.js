import { Link } from "react-router-dom";

const Footer = () => {
    return (
        
        <footer id="footer">
            <div className="footer-wrapper container-fluid" >
            <div className="row">
                <div className="col col-6 col-md-3">
                    <div className="heading-wrapper">
                        <h3 className="title">ACCOUNT</h3>                
                        <ul>
                            <li><Link to="/">Sign in</Link></li>
                            <li><Link to="/">Register</Link></li>
                            <li><Link to="/">Order status</Link></li>
                        </ul>                    
                    </div>
                </div>
                <div className="col col-6 col-md-3">
                    <div className="heading-wrapper">
                        <h3 className="title">HELP</h3>
                        <ul>
                            <li><Link to="/">Sign in</Link></li>
                            <li><Link to="/">Register</Link></li>
                            <li><Link to="/">Order status</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col col-6 col-md-3">
                    <div className="heading-wrapper">
                        <h3 className="title">ABOUT US</h3>
                        <ul>
                            <li><Link to="/">Sign in</Link></li>
                            <li><Link to="/">Register</Link></li>
                            <li><Link to="/">Order status</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col col-6 col-md-3">
                    <div className="heading-wrapper">
                        <h3 className="title">LEGAL</h3>
                    
                    <ul>
                        <li><Link to="/">Sign in</Link></li>
                        <li><Link to="/">Register</Link></li>
                        <li><Link to="/">Order status</Link></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="row mt-3" id="social-media">
            <div className="col-12 col-md-6">
                <h3 className="title">FOLLOW KAF'S WHIPS ON:</h3>
                <ul>
                    <li><Link to="/"><img src={process.env.PUBLIC_URL+"/logos/facebook.png"} width="100%" alt="facebook" /></Link></li>
                    <li><Link to="/"><img src={process.env.PUBLIC_URL+"/logos/instagram.png"} width="100%" alt="instagram" /></Link></li>
                    <li><Link to="/"><img src={process.env.PUBLIC_URL+"/logos/twitter.png"} width="100%" alt="twitter" /></Link></li>
                    <li><Link to="/"><img src={process.env.PUBLIC_URL+"/logos/reddit.png"} width="100%" alt="reddit" /></Link></li>
                </ul>
            </div>
            <div className="col-12 col-md-6" id="copyright">
                <p>&copy; 2022, Kaf's Whips Inc. All Rights Reserved</p>
            </div>
        </div>
            </div>
        </footer>
        
     );
}
 
export default Footer;
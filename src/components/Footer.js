import React from "react";
import Logo from "../Logo_white.svg";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <div className='background'>

    
    <footer>
      <div className="icon">
        <img src={Logo} alt="this is Aagni logo" />
        <h1>Aagni</h1>
      </div>
      <div className="links">
      <ul>
                <Link to = '/'><li>Home</li></Link>
                <Link to = '/Aboutus'><li>About us</li></Link>
                <Link to = '/Story'><li>Our Story</li></Link>
                <Link to = '/gallery'><li>Gallery</li></Link>
                <Link to = '/contactus'><li>Contact us</li></Link>
            </ul>
      </div>
      <div className="flexbox">
      <div className="subcribtion">
      <h1>Subscribe to our Newsletter</h1>
<input type="text" placeholder='Enter you Email ' className='emailinput'/>
<input type="submit" value="Subscribe" className='emailsubmit'/>
      </div>

      </div>
   
    </footer>
<div className="footerfoot">
       <h1>All rights and copyrignt are rserved by aagni Pvt</h1>
       <div className="termsandcomdition">
        
           <Link to='/terms-and-conditions'>
             <div> Terms and condition</div>
           </Link>
           <Link to='/Privacy-Policy'>
             <div> Privacy Policy</div>
           </Link>
        
       </div>
       </div>
       </div>
  );
};

export default Footer;

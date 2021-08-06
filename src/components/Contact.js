import React from "react";
import './Contact.css'
const Contact = () => {
  return (
    <div>
      <div className="contactform">
        <div className="detail">
          <div className="contactdetail">
          <h1>Contact</h1>
          <ul>
            <li><i class="fas fa-mail-bulk "></i>Aagnijewel@gmail.com</li>
            <li><i class="fab fa-twitter "></i>@Aagnijewel</li>
            <li><i class="fas fa-phone-alt "></i>9786653214</li>
            <li><i class="fab fa-facebook "></i>Aagni Jewel</li>
            <li><i class="fab fa-instagram "></i>Aagni_jewel</li>
          </ul>
        </div>
        </div>

        <div className="form">
            <h1>Get in touch</h1>
            <form>
                <label htmlFor="name">Name</label><br />
                <input type="text" placeholder='   name.....' id='name'/><br />
                <label htmlFor="email">Email</label><br />
                <input type="text" placeholder='   Example@gmail.com' id='email'/><br />
                <label htmlFor="Subject">Subject</label><br />
                <input type="text" placeholder='   xxxxxxxxxxxxxxx' id='Subject'/><br />
                <label htmlFor="message">Message</label><br />
                <textarea name="message" id="message" cols="30" rows="5"></textarea><br />
                <input type="submit" value="Submit" id='submit' />    
            </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

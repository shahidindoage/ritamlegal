import React from "react";
import "./contact.css";
import Footer from "@/components/common/footer";
import Header from "@/components/common/header"

const ContactUs = () => {
  
  return (
    <>
    <div className="contact-us">
      <div className="contact-container">
        {/* Left Side */}
        <div className="left">
          <div className="contact-box">
            <div>
              <span><i className="fa-solid fa-house"></i></span> <a href="https://maps.app.goo.gl/vjwiRvgoX1ThDGLv5">First Floor, M-15, South Extension Part-2, Delhi 110049</a>
            </div>
            <div>
              <span><i className="fa-solid fa-phone"></i></span> <a href="tel:+911143552390">(+91) 11 4355 2390 </a>
            </div>
            <div>
              <span><i className="fa-solid fa-envelope"></i></span>              <a href="mailto:office@ritamlegal.com">office@ritamlegal.com</a>
            </div>
            <div>
              <span><i className="fa-solid fa-clock"></i></span> <a href="https://maps.app.goo.gl/vjwiRvgoX1ThDGLv5">Working hours : 24 x 7 (All Days)</a>
            </div>
          </div>
          
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.06756719693!2d77.21660859882833!3d28.567733705846454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce25b566edc03%3A0x996d821c065cbe59!2sRitam%20Legal!5e0!3m2!1sen!2sin!4v1734416324787!5m2!1sen!2sin"
            className="map"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
          
        </div>

        {/* Right Side */}
        <div className="right">
          <h1>Reach out to us</h1>
         
          <form action="https://formsubmit.co/office@ritamlegal.com" method="POST" >
          
          {/* <form action="https://formsubmit.co/abhishek@piana.in" method="POST" > */}
          <input type="hidden" name="_next" value="https://ritamlegal.com/thank-you"></input>
          <input type="hidden" name="_template" value="table"></input>
          <input type="hidden" name="_captcha" value="true"></input>
            <div className="form-group">
              <input type="text" id="name" name="name" className="input" placeholder="Name" required/>
            </div>

            <div className="form-group">
              <input type="text" id="mobile" name="mobile" className="input" pattern="\d{10}"  placeholder="Mobile" required/>
            </div>

            <div className="form-group">
              <input type="email" id="email" name="email" className="input" placeholder="Email" required/>
            </div>

            
            <div className="form-group">
              <textarea id="message" name="message" className="input" placeholder="Message" required></textarea>
            </div>

            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>
      </div>
    </div>
    </>

  );
};

export default ContactUs;

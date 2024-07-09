import React from "react";
import logo from "../../Assets/images/logo 1.png";
import "./Footer.scss";
import line from '../../Assets/images/Line 8.png'
import location from '../../Assets/images/icons8_location_96px 1.png'
import email from '../../Assets/images/email.png'
import phone from '../../Assets/images/phone.png'
import fb from '../../Assets/images/fb.png'
import insta from '../../Assets/images/insta.png'
import linkdin from '../../Assets/images/linkdin.png'
import skype from '../../Assets/images/skype.png'
import star1 from '../../Assets/images/Star 4.png'
import star2 from '../../Assets/images/Star 5.png'

const Footer = () => {
  return (
    <div>
      <footer>
       <img src={star1} alt="" className="star1"/>
      <img src={star2} alt="" className="star2"/>
        <div className="footer_pic">
          <img src={logo} alt="" />
        </div>

        <div className="footer_content_width">
        <div className="footer_content">
          <p>
            LookUP IT Solutions a team of dedicated professionals who are
            passionate about delivering high-quality software solutions to our
            clients. Our company was founded with the mission of providing
            innovative, efficient, and cost-effective technology services that
            meet the evolving needs of businesses in today's digital world.
          </p>
        </div>
        </div>
        <span className="footer_line">
            <img src={line} alt="" />
        </span>
        <div className="footer_container">
        <div className="footer_container__">
            <div className="footer_container_left">
                <div className="footer_container_left_corporates">
                    <span><img src={location} alt="" /></span><span >Corporates Office</span>
                    <p>⇢ Office Address: #1589, Aashvi Complex, Kadarenahalli Park, Banashankari, Bengaluru, India- 560070</p>
                    <p>⇢ Development Centre Address: 7th Floor, Eros City Square, Sector 49, Gurgaon, Haryana, 122018</p>
                    <p>⇢ Registered Address: 24, Abbhiya Reddy Layout, Bangalore, India-560093</p>
                </div>
                <div className="footer_container_left_email">
                   <span> <img src={email} alt="" /></span><span >Email</span>
                    <p>info@lookupsolutions.com</p>
                </div>
                <div className="footer_container_left_number">
                    <span><img src={phone} alt="" /></span><span >Phone Number</span>
                    <p>+91-80420 97099</p>
                    <p>+91-97411 23358</p>
                </div>
            </div>
            <div className="footer_container_right">
            <div className="footer_container_right_one">
            <div className="footer_container_right_one_services">
                <p id="heading">Services</p>
                <p>Service Name</p>
                <p>Service Name</p>
                <p>Service Name</p>
                <p>Service Name</p>
                <p>Service Name</p>
                <p>Service Name</p>
            </div>
            <div className="footer_container_right_one_media">
                <p id="heading">Join on Social Media</p>
                <span><img src={fb} alt=""  /></span>
                <span><img src={insta} alt="" /></span>
                <span><img src={linkdin} alt="" /></span>
                <span><img src={skype} alt="" /></span>
                
            </div>
           
            </div>
                <div className="footer_container_right_technologies">
                  <p id="heading">Technologies</p>
                  <p>Tech Name</p>
                  <p>Tech Name</p>
                  <p>Tech Name</p>
                  <p>Tech Name</p>
                  <p>Tech Name</p>
                  <p>Tech Name</p>
                </div>
            </div>
            
        </div>
        
        </div>
        
      </footer>
    </div>
  );
};

export default Footer;

import React from "react";
import "./RealEstate.scss";
import realEstate from "../../Assets/images/realEstate.png";
import dots from "../../Assets/images/dots.png";
import line from "../../Assets/images/our line.png";
import rectangle1 from "../../Assets/images/Rectangle 36.png";
import rectangle2 from "../../Assets/images/Rectangle 37.png";
import rectangle3 from "../../Assets/images/Rectangle 38.png";
import rectangle4 from "../../Assets/images/Rectangle 39.png";
// import Cdot from "../../Assets/images/Cdot.png";

const RealEstate = () => {
  return (
    <div className="realEstate">
      <div className="realEstate_container">
        <div className="realEstate_container_header">
          <div className="realEstate_container_header_content">
            <p className="heading_realEstate"> Real Estate</p>
            <p className="content_realEstate">
              Unlocking Your Dream Spaces: Redefining Real Estate with Expertise
            </p>
          </div>
        </div>
      </div>
      <div className="realEstatess_container">
        <div className="realEstatess_container_card">
          <div className="realEstatess_container_card_content">
            <p className="realEstatess_heading">Real Estate</p>
            <p className="realEstatess_content">
              Lookup It Solutions has consulted within the commercial Real
              estate management industry by providing custom software
              development, database application development, and software
              integration services. These, coupled with Intranet portal
              development, were focused upon cost cutting and cost avoidance.
              Dualapp works to identify challenges and recommend opportunities
              to leverage technology for cost saving. Once the challenges and
              opportunities are identified, Dualapp assists the client in the
              consideration of priorities. These are typically driven by the
              nature of the challenges and the ability to achieve a quick
              payback on the investment.
            </p>
            <p className="realEstatess_heading2">
            Few of our capabilities on Real-Estate domain are as following:
            </p>
            <ul>
              <li>Property management solutions</li>
              <li> Real estate portal development</li>
              <li>Customer relationship management solutions</li>
              <li>Lead capturing system solutions</li>
              <li>Social media analytics</li>
              <li>Online booking solutions</li>
              <li>Rewards and loyalty programs</li>
              <li>Virtual property on mobiles</li>
              <li>Content creation & enrichment (web based)</li>
              <li>Loyalty study analytics </li>
              <li>Customer segmentation analytics </li>
              <li>Market assessment analytics </li>
              <li>Customer purchase behaviour analytics</li>
            </ul>
            <img src={realEstate} alt="" />
            <img src={dots} alt="" className="img2" />
            {/* <img src={Cdot} alt="" className="img3" /> */}
          </div>
        </div>
      </div>
      <div className="ourwork">
        <div className="ourwork_container">
          <div className="ourwork_container_heading">
            <p>Our Recent work</p>
          </div>
          <div className="ourwork_container_line">
            <img src={line} alt="" />
          </div>
        </div>
      </div>
      <div className="ourwork_container2">
        <div className="ourwork_container2_img">
          <img src={rectangle1} alt="" className="ourimg1" />
          <div>
            <img src={rectangle2} alt="" className="ourimg2" />
            <img src={rectangle3} alt="" className="ourimg3" />
            <img src={rectangle4} alt="" className="ourimg4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealEstate;

import React from "react";
import "./Map.scss";
import map from "../../Assets/images/map.png";
import line from "../../Assets/images/our line.png";
import rectangle1 from "../../Assets/images/Rectangle 36.png";
import rectangle2 from "../../Assets/images/Rectangle 37.png";
import rectangle3 from "../../Assets/images/Rectangle 38.png";
import rectangle4 from "../../Assets/images/Rectangle 39.png";

const Map = () => {
  return (
    <div className="map">
      <div className="map_container">
        <div className="map_container_header">
          <div className="map_container_header_content">
            <p className="heading_map">Map</p>
            <p className="content_map">
              Navigating the World: Mapping Solutions for Seamless Exploration
            </p>
          </div>
        </div>
      </div>
      <div className="maps_container">
        <div className="maps_container_card">
          <div className="maps_container_card_content">
            <p className="maps_heading">Map Industry</p>
            <p className="maps_content">
              Maps serves companies in industries ranging from travel &
              hospitality through health care & financial to education &
              military. By customizing our unique illustrated maps to suit any
              purpose, we help our clients make a lasting impression. Businesses
              in a variety of industries know that our illustrated maps are a
              unique way to connect with their customers. Map print and
              interactive products and services are now in use in such
              industries as travel and hospitality, destination marketing,
              meeting planning, health care, education, local government and
              business organizations, real estate, and more. Map Services
              discovered as many uses for maps as there are businesses seeking
              to connect with customers.
            </p>
            <p className="maps_heading2">
            Main Features are: 
            </p>
            <ul>
              <li>Print Map</li>
              <li> Virtual Concierge </li>
              <li>Customized Maps</li>
              <li> Com for staging hosting</li>
              <li>Stripe for payment API</li>
            </ul>
            <img src={map} alt="" />
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

export default Map;

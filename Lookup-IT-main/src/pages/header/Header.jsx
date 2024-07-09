import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // Assuming you are using React Router
import Logo from "../../Assets/images/logo.png";
import "./Header.scss";
// import Offshore from '../off_shore/Offshore';
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const Header = () => {
  
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isIndustriesDropdownOpen, setIsIndustriesDropdownOpen] = useState(false);
  const [isResourcesDropdownOpen, setIsResourcesDropdownOpen] = useState(false);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  // Event handlers for hovering on the "Services" menu item
  const handleServicesMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleServicesMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  // Event handlers for hovering on the "Industries" menu item

  const handleIndustriesMouseEnter = () => {
    setIsIndustriesDropdownOpen(true);
  };

  const handleIndustriesMouseLeave = () => {
    setIsIndustriesDropdownOpen(false);
  };
  // Event handlers for hovering on the "Resources" menu item

  const handleResourcesMouseEnter = () => {
    setIsResourcesDropdownOpen(true);
  };

  const handleResourcesMouseLeave = () => {
    setIsResourcesDropdownOpen(false);
  };
  const handleHamburgerClick = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };
  const handleServicesClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setIsIndustriesDropdownOpen(false);
    setIsResourcesDropdownOpen(false);
  };

  const handleIndustriesClick = () => {
    setIsIndustriesDropdownOpen(!isIndustriesDropdownOpen);
    setIsDropdownOpen(false);
    setIsResourcesDropdownOpen(false);
  };

  const handleResourcesClick = () => {
    setIsResourcesDropdownOpen(!isResourcesDropdownOpen);
    setIsDropdownOpen(false);
    setIsIndustriesDropdownOpen(false);
  };

  return (
    <div className="header">
      <nav>
        <div className="header_container">
          <div className="header_container_logo">
            <NavLink className="navlink" to="/">
              {" "}
              <img src={Logo} alt="Logo" />
            </NavLink>
           <span className="hammberger" onClick={handleHamburgerClick}> {isHamburgerOpen ? <CloseOutlinedIcon /> : <MenuOutlinedIcon />}</span>
          </div>

          <div className={`header_container_list ${
              isHamburgerOpen ? "show" : "hide"
            }`}>
            <ul>
              <li>
                <NavLink className="navlink drpodown-menu" to="/">
                  Home
                </NavLink>
              </li>
              <li
                onMouseEnter={handleServicesMouseEnter}
                onMouseLeave={handleServicesMouseLeave}
              >
                {/* Add "dropdown-active" class to "dropdown-menu" when isDropdownOpen is true */}
                <NavLink
                  className={`navlink accordion ${
                    isDropdownOpen
                      ? "services-submenu.clicked"
                      : "services-submenu"
                  }`}
                  to="/serv"
                  onClick={handleServicesClick}
                >
                  Services
                </NavLink>
                {isDropdownOpen && (
                  <ul className="dropdown-menu one panel">
                    <li>
                      <NavLink className="nav-item" to="/mobile">
                        Mobile Application
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="nav-item" to="/">
                        Web Application
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="nav-item" to="/blockchain">
                        Block-Chain Development
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="nav-item" to="/Quote">
                        Quote
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="nav-item" to="/EcommerceDevelopment">
                        E-Commerce Development
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="nav-item" to="/offshore">
                        Off-Shore Developer
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="nav-item" to="/Maintan">
                        Maintenance & Support
                      </NavLink>
                    </li>
                  </ul>
                )}
              </li>
              <li
                onMouseEnter={handleIndustriesMouseEnter}
                onMouseLeave={handleIndustriesMouseLeave}
              >
                <NavLink
                  className={`navlink ${
                    isIndustriesDropdownOpen
                      ? "services-submenu.clicked"
                      : "services-submenu"
                  }`}
                  to="/"
                  onClick={handleIndustriesClick}
                >
                  Industries
                </NavLink>
                {isIndustriesDropdownOpen && (
                  <ul className="dropdown-menu two">
                    <li>
                      <NavLink className="nav-item2" to="/ecommerce">
                        E-Commerce
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="nav-item2" to="/jobportal">
                        Job Portal
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="nav-item2" to="/professional">
                        Professional Services
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="nav-item2" to="/sports">
                        Sports
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="nav-item2" to="/university">
                        University And Education
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="nav-item2" to="/entertainment">
                        Entertainment Industry
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="nav-item2" to="/manufacture">
                        Manufacturing Industries
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="nav-item2" to="/realEstate">
                        Real Estate
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="nav-item2" to="/Telicom">
                        Telecom & Engineering
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="nav-item2" to="/hospatility">
                        Hospitality
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="nav-item2" to="/map">
                        Map Industry
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="nav-item2" to="/retail">
                        Retail Industry
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="nav-item2" to="/tour">
                        Tour and Travel
                      </NavLink>
                    </li>
                  </ul>
                )}
              </li>
              <li
                onMouseEnter={handleResourcesMouseEnter}
                onMouseLeave={handleResourcesMouseLeave}
              >
                <NavLink
                  className={`navlink ${
                    isIndustriesDropdownOpen
                      ? "services-submenu.clicked"
                      : "services-submenu"
                  }`}
                  to="/"
                  onClick={handleResourcesClick}
                >
                  Resources
                </NavLink>
                {isResourcesDropdownOpen && (
                  <ul className="dropdown-menu three">
                    <li>
                      <NavLink className="nav-item" to="/expertise">
                        Expertise
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="nav-item" to="/Portfolio">
                        Portfolio
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="nav-item" to="/careers">
                        Careers
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="nav-item" to="/recentblogs">
                        Recentblogs
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="nav-item" to="/testimonials">
                        Testimonials
                      </NavLink>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <NavLink className="navlink" to="/about">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink className="navlink cont1" to="/contact">
                  Contact Us
                </NavLink>
              </li>
            </ul>
            
          </div>
          <div className="header_container_btn" >
            <button>
              <NavLink className="contact" to="/contact">
                Contact Us
              </NavLink>
            </button>
          </div>
         
        </div>
      </nav>
    </div>
  );
};

export default Header;

import React from "react";
import "./University.scss";
import university from "../../Assets/images/university1.png";
import dots from "../../Assets/images/dots.png";
import line from "../../Assets/images/our line.png";
import rectangle1 from "../../Assets/images/Rectangle 36.png";
import rectangle2 from "../../Assets/images/Rectangle 37.png";
import rectangle3 from "../../Assets/images/Rectangle 38.png";
import rectangle4 from "../../Assets/images/Rectangle 39.png";

const University = () => {
  return (
    <div className="university">
      <div className="university_container">
        <div className="university_container_header">
          <div className="university_container_header_content">
            <p className="heading_university">University</p>
            <p className="content_university">
              Unlocking Knowledge, Empowering Futures: Transforming Education
              with Excellence
            </p>
          </div>
        </div>
      </div>
      <div className="education_container">
        <div className="education_container_card">
          <div className="education_container_card_content">
            <p className="education_heading">University & Education</p>
            <p className="education_content">
              We at Lookup It Solutions believe that “New technologies offer new
              opportunities” so we keep us updated with advancement in device &
              network technologies and enables you to match right resources with
              right projects. Whether you are seeking solutions for Accounting
              Software, Research & Development ERP, Business Management
              Consulting, Architecture ERP and Business Process Management or
              Marketing Process Management, Lookup It Solutions has
              customization services for you. Lookup It Solutions domain
              expertise in providing robust solutions that address industry
              challenges while enhancing quality at optimal cost efficiencies.
              Not only this, we understand the industry and the ways in which
              technology can mobilize the learning process. To achieve this, we
              help you to develop an educational app or portal that helps you in
              connecting with the technology in an excellent manner. We help
              schools, educational institutions and universities built
              technology to offer better learning flexibility and business
              administration. We have created a number of solutions by
              delivering software products, teaching aids, training materials,
              custom solutions in e-learning, learning management, content
              delivery, distance learning and enterprise portal & collaborative
              solutions.
            </p>
            <p className="education_heading2">
              We provide services for University Research as:
            </p>
            <ul>
              <li>Online E-learning Services</li>
              <li>Remote learning websites</li>
              <li>Create stunning, intuitive Android user interfaces</li>
              <li>Web Applications/Portals</li>
              <li>Mobile Learning Applications</li>
              <li> Application Development and Maintenance</li>
            </ul>
            <img src={university} alt="" className="img1" />
            <img src={dots} alt="" className="img2" />
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

export default University;

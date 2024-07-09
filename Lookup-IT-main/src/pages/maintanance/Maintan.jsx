import React from "react";
import "./Maintanstyle.scss";
import star1 from "../../Assets/images/Star1.png";
import star2 from "../../Assets/images/Star2.png";
import star3 from "../../Assets/images/Star3.png";
import undline from "../../Assets/images/Underline.png";
import iconA from "../../Assets/images/icon1.png";
import iconB from "../../Assets/images/icon2.png";
import iconC from "../../Assets/images/icon3.png";
import iconD from "../../Assets/images/icon4.png";
import iconE from "../../Assets/images/icon5.png";
import Redbox from "../Redbox/Redbox";

const Maintan = () => {
  return (
    <>
      <div className="maintain">
        <img src={star1} alt="" className="astar1" />
        <img src={star2} alt="" className="astar2" />
        <img src={star3} alt="" className="astar3" />

        <div className="maintain__safe">
          <div className="maintain__safe__left">
            <h3>
              Safeguarding <br></br> Your <span>Digital</span> Assets: Expert
              <br></br>
              <span>Maintenance</span> and <br></br>
              <span>Support</span> Services
            </h3>
          </div>
          <div className="maintain__safe__right"></div>
        </div>
      </div>

      <div className="topic">
        <div className="topic__top">
          <h3>Maintenance and Support</h3>
          <img src={undline} alt="" />
        </div>
        <div className="topic__bottom">
          <p>
            At LookUP IT Solutions, we understand the importance of providing
            ongoing maintenance and support services to ensure that your
            software solution is always up-to-date, secure, and functioning at
            its best. Our maintenance and support services are designed to help
            you get the most out of your software solution and keep your
            business running smoothly.
          </p>
        </div>
      </div>
      <div className="services">
      <div className="services__container">
        <div className="services__container__software">
          <div className="services__container__software__iconpic">
            <img src={iconA} alt="" />
          </div>
          <h3>Software Maintenance</h3>
          <p>
            We provide regular software maintenance services to ensure that your
            software solution is always up-to-date with the latest security
            patches and updates. Our team of experts can identify and fix bugs,
            perform regular software updates, and provide ongoing technical
            support to ensure that your software solution is running smoothly.
          </p>
        </div>

        <div className="services__container__software">
          <div className="services__container__software__iconpic">
            <img src={iconB} alt="" />
          </div>
          <h3>Technical Support</h3>
          <p>
            Our team of technical support specialists is available 24/7 to
            provide technical assistance and troubleshoot any issues that may
            arise with your software solution. Whether it's a simple issue or a
            complex problem, our team has the expertise to help you resolve it
            quickly and efficiently.
          </p>
        </div>

        <div className="services__container__software">
          <div className="services__container__software__iconpic">
            <img src={iconC} alt="" />
          </div>
          <h3>Performance Optimization</h3>
          <p>
            We offer performance optimization services to help you improve the
            speed and efficiency of your software solution. Our team can perform
            a thorough analysis of your software solution to identify areas
            where performance can be improved, and then make the necessary
            adjustments to ensure that your software is running at peak
            performance..
          </p>
        </div>

        <div className="services__container__software">
          <div className="services__container__software__iconpic">
            <img src={iconD} alt="" />
          </div>
          <h3>Security Updates and Monitoring</h3>
          <p>
            We provide regular security updates and monitoring to ensure that
            your software solution is secure and protected against the latest
            security threats. Our team can identify potential security
            vulnerabilities and take the necessary steps to keep your software
            solution secure.
          </p>
        </div>

        <div className="services__container__software">
          <div className="services__container__software__iconpic">
            <img src={iconE} alt="" />
          </div>
          <h3>Backup and Recovery Service</h3>
          <p>
            We provide backup and recovery services to ensure that your data is
            always safe and secure. Our team can perform regular backups of your
            software solution to ensure that your data is always protected and
            can be easily recovered in case of an unexpected event.
          </p>
        </div>
      </div>
      </div>
      <Redbox />
    </>
  );
};

export default Maintan;

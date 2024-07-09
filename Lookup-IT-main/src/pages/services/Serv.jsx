import React from "react";
import "./Servstyles.scss";
import picture from "../../Assets/images/service.png";
import uline from "../../Assets/images/Line 4.png";
import pic1 from "../../Assets/images/custom.png";
import pic2 from "../../Assets/images/web.png";
import pic3 from "../../Assets/images/mobileweb.png";
import pic4 from "../../Assets/images/support.png";
import Redbox from "../Redbox/Redbox";

const Serv = () => {
  return (
    <>
      <div className="head">
        <div className="head__main">
          <div className="head__main__left">
            <h3>
              Where <span>Innovation</span> Meets Digital Excellence
            </h3>
            <p>
              We offer a range of web application solutions designed to help
              your business run more efficiently and effectively. Our solutions
              are tailored to your specific needs and can be customized to meet
              your unique business requirements. Our team of experienced
              developers and designers have the expertise to build web
              applications that can automate your business processes, improve
              collaboration among your team members, and streamline your
              operations. We use the latest technologies and best practices to
              ensure that our web applications are reliable, secure, and
              scalable.
            </p>
          </div>
          <div className="head__main__right">
            <img src={picture} alt="" />
          </div>
        </div>
      </div>

      <div className="our">
        <h3>Our web applications solutions include</h3>
        <img src={uline} alt="" />
      </div>

      <div className="customweb">
        <div className="customweb__main">
            <div className="customweb__main__left">
            <img src={pic1} alt="" />
            </div>
            <div className="customweb__main__right">
            <h4>Custom Web Application Development</h4>
            <p>
              We build custom web applications from scratch, tailored to your
              specific business needs. We start by understanding your
              requirements and then work closely with you to develop a solution
              that meets your needs and exceeds your expectations.
            </p>
            </div>
          
        </div>
      </div>

      <div className="web">
        <div className="web__main">
          <div className="web__main__left">
        <h4> Web Application Integration</h4>
        <p>
          We can integrate your existing web applications with other systems and
          tools to create a seamless workflow that saves you time and effort.
          Our team can help you integrate with various systems such as CRM, ERP,
          marketing automation, and more.
        </p>
        </div>
        <div className="web__main__right">
          <img src={pic2} alt="" />
        </div>
      </div>
      </div>


      <div className="mobileweb">
        <div className="mobileweb__content">
        <div className="mobileweb__content__left">
          <img src={pic3} alt="" />
        </div>
          <div className="mobileweb__content__right">
        <h4> Mobile Web Applications</h4>
        <p>
          We build mobile web applications that can be accessed from any mobile
          device, allowing your team to work on the go. Our mobile web
          applications are designed to be responsive, fast, and user-friendly.
        </p>
        </div>
        </div>
      </div>
      
      
      <div className="support">
        <div className="support__main">
          <div className="support__main__left">
        <h4> Web Application Maintenance and Support</h4>
        <p>
          We provide ongoing maintenance and support services to ensure that
          your web applications are always up-to-date, secure, and running
          smoothly. We offer a range of support options, including bug fixes,
          software updates, and technical support.
        </p>
        </div>
        <div className="support__main__right">
          <img src={pic4} alt="" />
        </div>
      </div>
      </div>
     <Redbox/>
    </>
  );
};

export default Serv;

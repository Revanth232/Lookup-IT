import React from "react";
import "./Manufacture.scss";
import manufacture from "../../Assets/images/manufacture.png";
import dots from "../../Assets/images/dots.png";
import line from "../../Assets/images/our line.png";
import rectangle1 from "../../Assets/images/Rectangle 36.png";
import rectangle2 from "../../Assets/images/Rectangle 37.png";
import rectangle3 from "../../Assets/images/Rectangle 38.png";
import rectangle4 from "../../Assets/images/Rectangle 39.png";
import Cdot from "../../Assets/images/Cdot.png";

const Manufacture = () => {
  return (
    <div className="manufacture">
      <div className="manufacture_container">
        <div className="manufacture_container_header">
          <div className="manufacture_container_header_content">
            <p className="heading_manufacture">Manufacturing</p>
            <p className="content_manufacture">
              Innovating the Future: Transforming Manufacturing through
              Excellence
            </p>
          </div>
        </div>
      </div>
      <div className="manufacturing_container">
        <div className="manufacturing_container_card">
          <div className="manufacturing_container_card_content">
            <p className="manufacturing_heading">Manufacturing Industries</p>
            <p className="manufacturing_content">
              Manufacturing is a process, where we transform raw materials into
              a product to meet customer's requirements, and it involves many
              stages. Increasing competition, global manufacturing scenario,
              changing customer needs, new supply chain problems, and many other
              problems in the manufacturing process call for the need of a
              system, which can facilitate the production process to be cost
              effective, accurate, time saving and help the organization to stay
              ahead of its competition. Binary Semantics' manufacturing
              solutions facilitate you to control all stages and bottlenecks of
              your manufacturing business-be it order processing, bill of
              material (BOM), material-resource planning (MRP), production
              planning and control (PPC), purchase, inventory management,
              production scheduling, quality management, job costing, and more.
              When your implement a Binary's manufacturing solution, you empower
              your manufacturing business to accomplish the desired results
              consistently. We help you to streamline your manufacturing
              processes for optimum results, and connect them to your sales,
              supply chain, finance, customer relationship management (CRM), and
              other business operations in your organization to achieve
              effective operations management. Data mining, optimization, linear
              programming and decision support science (DSS) being forte of our
              knowledge base positions us to empower your MIS reports to
              accomplish the business objectives consistently.
            </p>
            {/* <p className="manufacturing_heading2">
              Several external connections are present for various features,
              including:
            </p> */}
            <ul>
              <li> Custom Application Engineering Solution</li>
              <li> Product Engineering Solution </li>
              <li>Data Analysis Solution</li>
              <li> E-commerce Solution</li>
              <li>RFID Solution</li>
              <li>Telemarketing Support </li>
              <li>Reengineering Consulting</li>
            </ul>
            <img src={manufacture} alt="" className="img1"/>
            <img src={dots} alt="" className="img2" />
            <img src={Cdot} alt="" className="img3" />
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

export default Manufacture;

import React from "react";
import "./Hospatility.scss";
import line from "../../Assets/images/our line.png";
import hospitality from "../../Assets/images/hospitality.png";
import rectangle1 from "../../Assets/images/Rectangle 36.png";
import rectangle2 from "../../Assets/images/Rectangle 37.png";
import rectangle3 from "../../Assets/images/Rectangle 38.png";
import rectangle4 from "../../Assets/images/Rectangle 39.png";
import star from "../../Assets/images/Star 8.png";

const Hospatility = () => {
  return (
    <div className="hospatility">
      <div className="hospatility_container">
        <div className="hospatility_container_header">
          <div className="hospatility_container_header_content">
            <p className="heading_hospatility"> Hospitality </p>
            <p className="content_hospatility">
            Elevating Hospitality Experiences: Where Comfort Meets Exceptional Service
            </p>
          </div>
        </div>
      </div>
      <div className="hospatilityy_container">
        <div className="hospatilityy_container_card">
          <div className="hospatilityy_container_card_content">
            <p className="hospatilityy_heading">Hospitality Industry</p>
            <p className="hospatilityy_content">
              The hospitality industry is one of the leading industry of service
              sector of the India. It has evolved into an industry that is
              sensitive to the needs and desires of people. It has attained a
              much higher status in society and demands high standards of work
              from its employees. Lookup It Solutions powerful technology
              strategy is the key to success and staying ahead of the
              competition against the backdrop of ever-changing consumer
              demands. We also offer our services to independent software
              vendors who are specialists in the area of hospitality. Our
              hospitality expertise brings a practitioners understanding of the
              industry processes, challenges and needs. Our hospitality practice
              delivers business aligned, software solutions and services to the
              hospitality industry.
            </p>
            <img src={hospitality} alt="" />
          </div>
        </div>
      </div>
      <div className="hospitality_points">
        <div className="hospitality_points_list">
          <div className="hospitality_points_list1">
            <div className="list_items">
              <span>
                <img src={star} alt="" />
              </span>
              <p>Solutions for hotel management</p>
            </div>
            <div className="list_items">
              <span>
                <img src={star} alt="" />
              </span>
              <p>Solutions for hotel management</p>
            </div>
            <div className="list_items">
              <span>
                <img src={star} alt="" />
              </span>
              <p>Solutions for hotel management</p>
            </div>
            <div className="list_items">
              <span>
                <img src={star} alt="" />
              </span>
              <p>Solutions for hotel management</p>
            </div>
            <div className="list_items">
              <span>
                <img src={star} alt="" />
              </span>
              <p>Solutions for hotel management</p>
            </div>
          </div>
          <div className="hospitality_points_list2">
            <div className="list_items">
              <span>
                <img src={star} alt="" />
              </span>
              <p>Point of sale (POS) applications</p>
            </div>
            <div className="list_items">
              <span>
                <img src={star} alt="" />
              </span>
              <p>Point of sale (POS) applications</p>
            </div>
            <div className="list_items">
              <span>
                <img src={star} alt="" />
              </span>
              <p>Point of sale (POS) applications</p>
            </div>
            <div className="list_items">
              <span>
                <img src={star} alt="" />
              </span>
              <p>Point of sale (POS) applications</p>
            </div>
            <div className="list_items">
              <span>
                <img src={star} alt="" />
              </span>
              <p>Point of sale (POS) applications</p>
            </div>
          </div>
          <div className="hospitality_points_list3">
            <div className="list_items">
              <span>
                <img src={star} alt="" />
              </span>
              <p>Responsive web portals</p>
            </div>
            <div className="list_items">
              <span>
                <img src={star} alt="" />
              </span>
              <p>Responsive web portals</p>
            </div>
            <div className="list_items">
              <span>
                <img src={star} alt="" />
              </span>
              <p>Responsive web portals</p>
            </div>
            <div className="list_items">
              <span>
                <img src={star} alt="" />
              </span>
              <p>Responsive web portals</p>
            </div>
            <div className="list_items">
              <span>
                <img src={star} alt="" />
              </span>
              <p>Responsive web portals</p>
            </div>
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

export default Hospatility;

import React from "react";
import "./Professional.scss";
import professional from "../../Assets/images/professional.png";
import star from "../../Assets/images/star 9.png";
import arrow from "../../Assets/images/Arrow 1.png";

const Professional = () => {
  return (
    <div className="professional">
      <div className="professional_container">
        <div className="professional_container_header">
          <div className="professional_container_header_content">
            <p className="heading_container">Professional Services</p>
            <p className="content_container">
              Excellence in Expertise: Elevating Professional Services for
              Success
            </p>
          </div>
        </div>
      </div>
      <div className="professional_services">
        <div className="professional_services_content">
          <div className="professional_services_content_left">
            <img src={professional} alt="" />
          </div>
          <div className="professional_services_content_right">
            <p className="heading_services">Professional Services</p>
            <p className="content_services">
              Client is a contractor that provides calibration and maintenance
              services to a number of industrial customers. In this case the
              service is to ambient gas quality sensing for monitoring and
              alarm. This is a personal safety function that requires periodic
              testing, typically every 3 or 6 months. Complete and accurate
              records of testing and maintenance are required. Clear and concise
              customer reports are also required. The Admin Application is the
              repository for all collected data. As part of the dispatch
              process, relevant data is extracted (copied) from the Admin
              Application and transmitted to the Leader Application where new
              data is input. On completion of work the new data generated is
              uploaded to the Admin Application where it is audited before being
              added to the existing data. The Leader Application that is used
              under field conditions, makes extensive use of pull-down
              selections for data entry in order to: minimize errors, reduce
              data entry time and provide consistent data to simplify analysis.
            </p>
          </div>
        </div>
      </div>
      <div className="services_graph">
        <div className="services_graph_container">
          <div className="services_graph_container_content">
            <p className="graph_heading">
              Equipment control, last bullet. We will need to address two
              situations
            </p>
            <div className="services_graph_container_content_points1">
              <span>
                <img src={star} alt="" />
              </span>
              <p>
                During a calibration test we identify that the sensor has
                failed, it is replaced and the new sensor calibrated
              </p>
            </div>
            <div className="services_graph_container_content_points2">
              <span>
                <img src={star} alt="" />
              </span>
              <p>
                During normal day to day operation the sensor fails and we are
                called in to replace and calibrate this sensor only. In both
                cases we want to maintain a history of the measurement point
                (Tag Number)
              </p>
            </div>
            <p className="graph_content">
              Future use of this information will be to identify repeat
              offenders (so proactive corrective action can be initiated),
              adjust inventory levels- the life of a sensor is highly dependent
              on environment. We may occasionally need to print a Tag Number
              history (Marsh Letterhead, company header, instrument header,
              chronology: sort by date, event (calibration, repair/replace
              including new serial number and comments).
            </p>
          </div>
          <div className="services_graph_container_img">
            <div className="services_graph_container_img_content">
              <div className="services_graph_container_img_content_step1"></div>
              <div className="services_graph_container_img_content_step2"></div>
              <div className="services_graph_container_img_content_step3"></div>
              <div className="services_graph_container_img_content_step4"></div>

              <div className="services_graph_container_img_content_stepOne">
                <p>step 1</p>
              </div>
              <div className="services_graph_container_img_content_stepTwo">
                <p>step 2</p>
              </div>
              <div className="services_graph_container_img_content_stepThree">
                <p>step 3</p>
              </div>
              <div className="services_graph_container_img_content_stepFour">
                <p>step 4</p>
              </div>
            </div>
            <div className="services_graph_container_img_pic">
              <img src={arrow} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="services_cards">
        <div className="services_cards_main">
          <div className="services_cards_main_one">
            <p className="cards_heading">Test Gas data base</p>
            <p className="cards_content">
              Used to control test gases.Each recipe of test gas has an EQC #
              (EQC123) and each bottle of that gas has a unique identifier
              (EQC123.22)For each recipe, we require a supplier order numberFor
              each unique bottle of gas we require: purchase date, date of first
              use, date of last use, gas concentration, balance gas.
            </p>
          </div>
          <div className="services_cards_main_two">
            <p className="cards_heading">Customer data base</p>
            <p className="cards_content">
              Used to supply information for service report and test
              reportCustomer Company Name; Contact, address, city, Contact
              telephone
            </p>
          </div>
          <div className="services_cards_main_three">
            <p className="cards_heading">Regarding Gas Record</p>
            <p className="cards_content">
              Data Bases- all information input by Operator except as noted.
              Should be a separate screen for each data base.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Professional;

import React from "react";
import "./Retailstyle.scss";
import rimage from "../../Assets/images/retailimage.png";
import fline from "../../Assets/images/featureline.png";
import stars from "../../Assets/images/Fstar.png";
import lap from "../../Assets/images/R36.png";
import led from "../../Assets/images/R37.png";
import draw from "../../Assets/images/R38.png";
import desk from "../../Assets/images/R39.png";
import Redbox from "../Redbox/Redbox";

const Retail = () => {
  return (
    <>
      <div className="retail">
        <div className="retail__one">
          <h4>Retail</h4>
          <p>
            Elevate the Shopping Experience: Embracing <br></br>Innovation in
            Retail
          </p>
        </div>
      </div>

      <div className="Industry">
        <div className="Industry__sub">
          <div className="Industry__sub__retail">
            <img src={rimage} alt="" />
          </div>
          <div className="Industry__sub__about">
            <div className="Industry__sub__about__main">
              <h3>Retail Industry</h3>
              <p>
                Retail sounds small, but a massive industry connects nearly all.
                Lookup It Solutions understands the huge number of players and
                steep competition among them. Many of the functionalities can be
                automated with the help of latest technologies. Since customer
                loyalty is utmost important, activities like capturing interest,
                feedback, allowing online benefits are a few which can be
                improved with Lookup It Solutions expertise. Lookup It Solutions
                increases development pipeline volume by reusing product
                information from one project to another in order to develop
                variants more quickly. We help leading retailers increase
                revenue by delivering great products and by offering a
                comprehensive ensemble of retail services and solutions that
                enable end-to-end business transformations. We also have deep
                domain expertise in e-commerce and multichannel integration in
                retail for recess areas like Point of Sale (POS) Applications,
                Inventory management solutions, social media analytics,
                E-commerce Solutions. Lookup It Solutions is a professionally
                managed organization open for solution user-friendly robust
                application developments by fine understanding of business
                processes.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="Features">
        <div className="Features__heading">
          <h3>Main Features</h3>
          <img src={fline} alt="" />
        </div>
      </div>

      <div className="list">
        <div className="list__list1">
          <div className="list__list1__mobile">
            <img src={stars} alt="" />
            <p>Mobile POS</p>
          </div>
          <div className="list__list1__mobile">
            <img src={stars} alt="" />
            <p>Point of sale (POS) applications</p>
          </div>
          <div className="list__list1__mobile">
            <img src={stars} alt="" />
            <p>Retail Portals</p>
          </div>
          <div className="list__list1__mobile">
            <img src={stars} alt="" />
            <p>Real Time Instore Comparisons</p>
          </div>
          <div className="list__list1__mobile">
            <img src={stars} alt="" />
            <p>nventory Management Solutions</p>
          </div>
          <div className="list__list1__mobile">
            <img src={stars} alt="" />
            <p>Fraud Analytics</p>
          </div>
        </div>
      </div>

      <div className="work">
        <div className="work__recent">
          <h3>Our Recent Work</h3>
          <img src={fline} alt="" />
        </div>
      </div>

      <div className="total">
        <div className="total__left">
          <img src={lap} alt="" />
        </div>
        <div className="total__right">
          <div className="total__right__top">
            <img src={led} alt="" />
          </div>

          <div className="total__right__bot">
            <img src={draw} alt="" />
            <img src={desk} alt="" />
          </div>
        </div>
      </div>
      <Redbox/>
    </>
  );
};

export default Retail;

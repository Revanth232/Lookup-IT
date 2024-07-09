import React from "react";
import "./Toursheet.scss";
import tour from "../../Assets/images/tourimage.png";
import fline from "../../Assets/images/featureline.png";
import stars from "../../Assets/images/Fstar.png";
import lap from "../../Assets/images/R36.png";
import led from "../../Assets/images/R37.png";
import draw from "../../Assets/images/R38.png";
import desk from "../../Assets/images/R39.png";
import Redbox from "../Redbox/Redbox";

const Tour = () => {
  return (
    <>
      <div className="tour">
        <div className="tour__one">
          <h4>Tour and Travel Industries</h4>
          <p>
            Unforgettable Journeys, Seamless Adventures: Redefining Travel
            Experiences
          </p>
        </div>
      </div>

      <div className="Tourtravel">
        <div className="Tourtravel__sub">
          <div className="Tourtravel__sub__tour">
            <img src={tour} alt="" />
          </div>
          <div className="Tourtravel__sub__about">
            <div className="Tourtravel__sub__about__main">
              <h3>Tour and Travel Industries</h3>
              <p>
                Gone are the days when one had to stand in long queues to get
                tickets booked and make unlimited calls for searching and
                booking a hotel for their travel. Today with the expanse of the
                internet in every household, the travel and hospitality industry
                has also spread its reach and is providing faster and better
                services to the customers. Just a few clicks and you have your
                ticket, hotel, sight-seeing tours booked within minutes. Today
                the travel industry is well connected with each country giving
                high importance to tourism. Special packages and schemes are
                being offered to customers globally for almost all the
                destinations across the world. With new trends and expectations
                of the customers, competition within the industry has also
                increased. Complete travel services from worldwide hotel
                reservations, package tours, airport transfers, sight-seeing
                tours among others are being provided. Travel companies are
                largely outsourcing online processing services and customized
                booking engines and others for increased visibility and customer
                satisfaction. We are the creators of full-fledged cloud-based
                ERP system that automates & integrates all functions of a travel
                company, right from enquiry till accounting/reporting.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="Manage">
        <div className="Manage__heading">
          <h3>Main Features</h3>
          <img src={fline} alt="" />
        </div>
      </div>

      <div className="Type">
        <div className="Type__target">
          <div className="Type__target__contact">
            <img src={stars} alt="" />
            <p>Manage Contacts</p>
          </div>
          <div className="Type__target__contact">
            <img src={stars} alt="" />
            <p>Manage Holiday Sales</p>
          </div>
          <div className="Type__target__contact">
            <img src={stars} alt="" />
            <p>Manage Enquires</p>
          </div>
          <div className="Type__target__contact">
            <img src={stars} alt="" />
            <p>Manage Product</p>
          </div>
          <div className="Type__target__contact">
            <img src={stars} alt="" />
            <p>Manage Contacts</p>
          </div>
          <div className="Type__target__contact">
            <img src={stars} alt="" />
            <p>Manage Holiday Sales</p>
          </div>
          <div className="Type__target__contact">
            <img src={stars} alt="" />
            <p>Manage Enquires</p>
          </div>
          <div className="Type__target__contact">
            <img src={stars} alt="" />
            <p>Manage Product</p>
          </div>
        </div>
      </div>

      <div className="ourwork">
        <div className="ourwork__name">
          <h3>Our Recent Work</h3>
          <img src={fline} alt="" />
        </div>
      </div>

      <div className="ttl">
        <div className="ttl__left">
          <img src={lap} alt="" />
        </div>
        <div className="ttl__right">
          <div className="ttl__right__top">
            <img src={led} alt="" />
          </div>

          <div className="ttl__right__bot">
            <img src={draw} alt="" />
            <img src={desk} alt="" />
          </div>
        </div>
      </div>
      <Redbox/>
    </>
  );
};

export default Tour;

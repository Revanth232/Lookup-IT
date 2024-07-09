import React from "react";
import "./Home.scss";
import Redbox from "../Redbox/Redbox";
import vector from "../../Assets/images/Vector 1.png";
import group10 from "../../Assets/images/Group 10.png";
import Avatar1 from "../../Assets/images/Ellipse 9.png";
import Avatar2 from "../../Assets/images/Ellipse 8.png";
import Avatar3 from "../../Assets/images/Ellipse 11.png";
import Avatar4 from "../../Assets/images/Ellipse 12.png";
import line3 from "../../Assets/images/Line 3.png";
import four4 from "../../Assets/images/400+.png";
import ai from "../../Assets/images/ai.png";
import block from "../../Assets/images/block.png";
import cloud from "../../Assets/images/cloud.png";
import ecomers from "../../Assets/images/ecomers.png";
import maintainance from "../../Assets/images/maintainance.png";
import mobile from "../../Assets/images/mobile.png";
import offshore from "../../Assets/images/offshore.png";
import uiux from "../../Assets/images/uiux.png";
import webdev from "../../Assets/images/webdev.png";
import line from "../../Assets/images/Line 4.png";
import Angular from "../../Assets/images/angular.png";
import nft from "../../Assets/images/nft.png";
import python from "../../Assets/images/python.png";
import php from "../../Assets/images/php.png";
import java from "../../Assets/images/java.png";
import react from "../../Assets/images/react.png";
import "./Home.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import fixed from "../../Assets/images/fixes.png";
import staff from "../../Assets/images/staff.png";
import { Button } from "react-bootstrap";
import { height } from "@mui/system";
import tik from "../../Assets/images/tik (2).png";
import hourly from "../../Assets/images/hourly.png";
import testline from "../../Assets/images/testline.jpg";

import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import alica from "../../Assets/images/alica.png";
import alicaline from "../../Assets/images/alicaline.png";
import image1 from '../../Assets/images/1 img.png'
import image2 from '../../Assets/images/2 img.png'
import image3 from '../../Assets/images/3 img.png'
import image4 from '../../Assets/images/4 img.png'
import image5 from '../../Assets/images/5 img.png'


const steps = [
  {
    label: "Step 1",
    description: "Description for Step 1",
    Image: image1,
  },
  {
    label: "Step 2",
    description: "Description for Step 2",
    Image: image2,
  },
  {
    label: "Step 3",
    description: "Description for Step 3",
    Image: image3,
  },
  {
    label: "Step 4",
    description: "Description for Step 4",
    Image: image4,
  },
  {
    label: "Step 5",
    description: "Description for Step 5",
    Image: image5,
  },
  {
    label: "Step 6",
    description: "Description for Step 6",
    Image: image3,
  },
];



const VerticalLinearStepper = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepClick = (step) => () => {
    setActiveStep(step);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  return (
    <div className="stepps">
      <Box sx={{ maxWidth: 400 }}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel
                onClick={handleStepClick(index)}
                optional={
                  index === steps.length - 1 ? (
                    <Typography variant="caption">Last step</Typography>
                  ) : null
                }
              >
                {step.label}
              </StepLabel>
              <StepContent className="steppsmain">
                <Typography>{step.description}</Typography>
                <img className="steppstwo" src={step.Image} alt={`Step ${index + 1}`} />
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} sx={{ p: 3 }}>
            <Typography>All steps completed - you&apos;re finished</Typography>
            <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
              Reset
            </Button>
          </Paper>
        )}
      </Box>
    </div>
  );
};

const Home = () => {
  const clickone = () => {
    console.log("hello");
  };

  return (
    <>
      <div className="main">
        <div className="main__sub">
          <div className="main__sub__two">
            <div className="main__sub__two__top">
              <div className="main__sub__two__top__left">
                <h1>Revitalise your</h1>
              </div>
              <div className="main__sub__two__top__right">
                <p>
                  We assist companies to upgrade technology,reconceptualize
                  process and transform experience so they be ready for fast-changing
                  world.
                </p>
              </div>
            </div>
            <div className="main__sub__two__center__text">
              <h1>Brand with Expert</h1>
            </div>
            <div className="main__sub__two__bottom">
              <h1>Consulting Services</h1>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div className="main__sub__two__center__icon1">
                <img src={vector} alt="" />
              </div>
              <div className="main__sub__two__center__icon2">
                <img src={group10} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid section ">
        <div className="row m-0 d-flex justify-content-around sectionmain">
          <div className="col-sm-12 col-md-8 col-lg-4 card__one">
            <div className="card__one__first">
              <h1>800+</h1>
            </div>
            <div className="card__one__second">
              <p>projects Done</p>
            </div>
            <div className="card__one__third">
              <p>
                Lorem Ipsum is simply <br />
                dummy text of the printing <br /> and typesetting industry
              </p>
            </div>
            <div className="card__one__fourth">
              <Button className=" btttn"> Get quote</Button>
            </div>
          </div>
          <div className="col-sm-12 col-md-8 col-lg-3 card__two">
            <div className="card__two__first">
              <h1>30+</h1>
            </div>
            <div className="card__two__second">
              <p>professional team</p>
            </div>
            <div className="card__two__third">
              <AvatarGroup total={24}>
                <Avatar alt="Remy Sharp" src={Avatar1} />
                <Avatar alt="Travis Howard" src={Avatar2} />
                <Avatar alt="Agnes Walker" src={Avatar3} />
                <Avatar alt="Trevor Henderson" src={Avatar4} />
                <Avatar alt="Trevor Henderson" src={Avatar1} />
                <Avatar alt="Trevor Henderson" src={Avatar1} />
              </AvatarGroup>
            </div>
          </div>
          <div className="card__emty">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="col-sm-12 col-md-8 col-lg-4 card__three">
            <div className="card__three__left">
              <div className="card__three__left__first">
                <h1>400+</h1>
              </div>
              <div className="card__three__left__second">
                <p>Happy Clients</p>
              </div>
              <div className="card__three__left__third">
                <img src={line3} alt="" />
              </div>
              <div className="card__three__left__fourth">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry
                </p>
              </div>
              <div className="card__three__left__fifth">
                <p>john smith, CEO</p>
              </div>
            </div>
            <div className="card__three__right">
              <img src={four4} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="ourservices">
        <div className="ourservices__heading">
          <div className="ourservices__heading__text">
            <p>Our services</p>
          </div>
          <div className="ourservices__border__border">
            <img src={line} alt="" />
          </div>
        </div>
      </div>
      <div className="ourservices__divs container-fluid">
        <div className="ourservices__divs__done">
          <div className=" ourservices__divs__done__icon">
            <img src={ai} alt="" />
          </div>
          <div className=" ourservices__divs__done__heading">
            <p>Ai & Machine Leaninig</p>
          </div>
          <div className=" ourservices__divs__done__content">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
        <div className="ourservices__divs__done">
          <div className=" ourservices__divs__done__icon">
            <img src={block} alt="" />
          </div>
          <div className=" ourservices__divs__done__heading">
            <p>Blockchain Development</p>
          </div>
          <div className=" ourservices__divs__done__content">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
        <div className="ourservices__divs__done">
          <div className=" ourservices__divs__done__icon">
            <img src={mobile} alt="" />
          </div>
          <div className=" ourservices__divs__done__heading">
            <p>Mobile App Development</p>
          </div>
          <div className=" ourservices__divs__done__content">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
        <div className="ourservices__divs__done">
          <div className=" ourservices__divs__done__icon">
            <img src={webdev} alt="" />
          </div>
          <div className=" ourservices__divs__done__heading">
            <p>Web App Development</p>
          </div>
          <div className=" ourservices__divs__done__content">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
        <div className="ourservices__divs__done">
          <div className=" ourservices__divs__done__icon">
            <img src={cloud} alt="" />
          </div>
          <div className=" ourservices__divs__done__heading">
            <p>Cloud Solution</p>
          </div>
          <div className=" ourservices__divs__done__content">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
        <div className="ourservices__divs__done">
          <div className=" ourservices__divs__done__icon">
            <img src={ecomers} alt="" />
          </div>
          <div className=" ourservices__divs__done__heading">
            <p>Ecommerce Development</p>
          </div>
          <div className=" ourservices__divs__done__content">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
        <div className="ourservices__divs__done">
          <div className=" ourservices__divs__done__icon">
            <img src={maintainance} alt="" />
          </div>
          <div className=" ourservices__divs__done__heading">
            <p>Maintainance Support</p>
          </div>
          <div className=" ourservices__divs__done__content">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
        <div className="ourservices__divs__done">
          <div className=" ourservices__divs__done__icon">
            <img src={uiux} alt="" />
          </div>
          <div className=" ourservices__divs__done__heading">
            <p>UI UX Design</p>
          </div>
          <div className=" ourservices__divs__done__content">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
        <div className="ourservices__divs__done">
          <div className=" ourservices__divs__done__icon">
            <img src={offshore} alt="" />
          </div>
          <div className=" ourservices__divs__done__heading">
            <p>Offshore Development</p>
          </div>
          <div className=" ourservices__divs__done__content">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
      <div className="technologies">
        <div className="technologies__hd">
          <h2>
            Technologies we work on{" "}
          </h2>
          <img src={line} alt="" />
          <div className="technologies__hd__cont">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              cupiditate rem velit beatae magnam optio delectus quia quibusdam
              iure. Architecto optio veniam, totam perspiciatis aut quaerat ex
              fugiat nesciunt nam?
            </p>
          </div>
        </div>
        <div className="technologies__pic">
          <div className="technologies__pic__one">
            <div className=" technologies__pic__one__icon">
              <img src={Angular} alt="" />
            </div>
            <div className=" technologies__pic__one__heading">
              <p className="fs-5">Angular.js</p>
            </div>
          </div>
          <div className="technologies__pic__two">
            <div className=" technologies__pic__one__icon">
              <img src={nft} alt="" />
            </div>
            <div className=" technologies__pic__one__heading">
              <p>NFT</p>
            </div>
          </div>
          <div className="technologies__pic__three">
            <div className=" technologies__pic__one__icon">
              <img src={python} alt="" />
            </div>
            <div className=" technologies__pic__one__heading">
              <p>Python</p>
            </div>
          </div>
          <div className="technologies__pic__four">
            <div className=" technologies__pic__one__icon">
              <img src={php} alt="" />
            </div>
            <div className=" technologies__pic__one__heading">
              <p> PHP</p>
            </div>
          </div>
          <div className="technologies__pic__five">
            <div className=" technologies__pic__one__icon">
              <img src={java} alt="" />
            </div>
            <div className=" technologies__pic__one__heading">
              <p>Java</p>
            </div>
          </div>
          <div className="technologies__pic__six">
            <div className=" technologies__pic__one__icon">
              <img src={react} alt="" />
            </div>
            <div className=" technologies__pic__one__heading">
              <p>React.js</p>
            </div>
          </div>
        </div>
      </div>
      <VerticalLinearStepper />
      <div className="engagement">
        <div className="engagement__hd">
          <p>Engagement Model </p>
          <img src={line} alt="" />
          <div className="engagement__hd__cont">
            <p>
              We offer a variety of Pricing models to match the needs of your
              business.
            </p>
          </div>
        </div>
      </div>
      <div className="engag">
        <div className="engag__main">
          <div className="engag__main__one">
            <div className="engag__main__one__box">
              <div className="engag__main__one__box__in">
                <h3>Fixed Cost Model</h3>
                <img src={fixed} alt="" />
                <p>plan for your basic needs</p>
              </div>
            </div>
            <div className="engag__main__one__content">
              <span>
                <img src={tik} alt="" /> &nbsp;
              </span>{" "}
              <span>If the scope is definite and clear</span>
              <br />
              <span>
                <img src={tik} alt="" /> &nbsp;
              </span>{" "}
              <span>If the scope is definite and clear</span>
              <br />
              <span>
                <img src={tik} alt="" /> &nbsp;
              </span>{" "}
              <span>If the scope is definite and clear</span>
              <br />
              <span>
                <img src={tik} alt="" /> &nbsp;
              </span>{" "}
              <span>If the scope is definite and clear</span>
              <br />
              <span>
                <img src={tik} alt="" /> &nbsp;
              </span>{" "}
              <span>If the scope is definite and clear</span>
              <br />
              <span>
                <img src={tik} alt="" /> &nbsp;
              </span>{" "}
              <span>If the scope is definite and clear</span>
              <br />
              <span>
                <img src={tik} alt="" /> &nbsp;
              </span>{" "}
              <span>If the scope is definite and clear</span>
              <br />
              <span>
                <img src={tik} alt="" /> &nbsp;
              </span>{" "}
              <span>If the scope is definite and clear</span>
              <br />
            </div>
          </div>
          <div className="engag__main__two">
            <div className="engag__main__two__box">
              <div className="engag__main__two__box__in">
                <h3>Staff Augmented</h3>
                <img src={staff} alt="" />
                <p>Plan for your ultimate needs</p>
              </div>
            </div>
            <div className="engag__main__two__content">
              <span>
                <img src={tik} alt="" /> &nbsp;
              </span>{" "}
              <span>If the scope is definite and clear</span>
              <br />
              <span>
                <img src={tik} alt="" /> &nbsp;
              </span>{" "}
              <span>If the scope is definite and clear</span>
              <br />
              <span>
                <img src={tik} alt="" /> &nbsp;
              </span>{" "}
              <span>If the scope is definite and clear</span>
              <br />
              <span>
                <img src={tik} alt="" /> &nbsp;
              </span>{" "}
              <span>If the scope is definite and clear</span>
              <br />
              <span>
                <img src={tik} alt="" /> &nbsp;
              </span>{" "}
              <span>If the scope is definite and clear</span>
              <br />
              <span>
                <img src={tik} alt="" /> &nbsp;
              </span>{" "}
              <span>If the scope is definite and clear</span>
              <br />
              <span>
                <img src={tik} alt="" /> &nbsp;
              </span>{" "}
              <span>If the scope is definite and clear</span>
              <br />
              <span>
                <img src={tik} alt="" /> &nbsp;
              </span>{" "}
              <span>If the scope is definite and clear</span>
              <br />
            </div>
          </div>
          <div className="engag__main__three">
            <div className="engag__main__three__box">
              <div className="engag__main__three__box__in">
                <h3>Hourly Model</h3>
                <img src={hourly} alt="" />
                <p>Plan for your premium needs</p>
              </div>
            </div>
            <div className="engag__main__three__content">
              <span>
                <img src={tik} alt="" /> &nbsp;
              </span>{" "}
              <span>If the scope is definite and clear</span>
              <br />
              <span>
                <img src={tik} alt="" /> &nbsp;
              </span>{" "}
              <span>If the scope is definite and clear</span>
              <br />
              <span>
                <img src={tik} alt="" /> &nbsp;
              </span>{" "}
              <span>If the scope is definite and clear</span>
              <br />
              <span>
                <img src={tik} alt="" /> &nbsp;
              </span>{" "}
              <span>If the scope is definite and clear</span>
              <br />
              <span>
                <img src={tik} alt="" /> &nbsp;
              </span>{" "}
              <span>If the scope is definite and clear</span>
              <br />
              <span>
                <img src={tik} alt="" /> &nbsp;
              </span>{" "}
              <span>If the scope is definite and clear</span>
              <br />
              <span>
                <img src={tik} alt="" /> &nbsp;
              </span>{" "}
              <span>If the scope is definite and clear</span>
              <br />
              <span>
                <img src={tik} alt="" /> &nbsp;
              </span>{" "}
              <span>If the scope is definite and clear</span>
              <br />
            </div>
          </div>
        </div>
      </div>
      <div className="testimonials">
        <div className="testimonials__maine">
          <div className="testimonials__maine__stiky">
            <div className="testimonials__maine__stiky__fix">
              <h3>Testimonials</h3>
              <img src={testline} alt="" />
              <p>What our clients say about us</p>
            </div>

            <div className="testimonials__maine__stiky__move">
              <div className="testimonials__maine__stiky__move__one">
                <div className="testimonials__maine__stiky__move__one__img">
                  <legend>
                    <img src={alica} alt="" />
                  </legend>
                </div>
                <div className="testimonials__maine__stiky__move__one__conte">
                  <h3>Alica Smith</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took
                  </p>
                  <img src={alicaline} alt="" />
                  <h5>CEO, Company Name</h5>
                </div>
              </div>
              <div className="testimonials__maine__stiky__move__two">
                <div className="testimonials__maine__stiky__move__two__img">
                  <img src={alica} alt="" />
                </div>
                <div className="testimonials__maine__stiky__move__two__conte">
                  <h3>Alica Smith</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took
                  </p>
                  <img src={alicaline} alt="" />
                  <h5>CEO, Company Name</h5>
                </div>
              </div>
              <div className="testimonials__maine__stiky__move__three">
                <div className="testimonials__maine__stiky__move__three__img">
                  <img src={alica} alt="" />
                </div>
                <div className="testimonials__maine__stiky__move__three__conte">
                  <h3>Alica Smith</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took
                  </p>
                  <img src={alicaline} alt="" />
                  <h5>CEO, Company Name</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Redbox />
    </>
  );
};

export default Home;

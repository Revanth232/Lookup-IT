import React from 'react'
import "./Offshore.scss";
import offshore from '../../Assets/images/offshoremain.png'
import offline from '../../Assets/images/offshoreline.png'
import offcost from '../../Assets/images/offcustiom.png'
import offded from '../../Assets/images/offdedicated.png'
import offfagile1 from '../../Assets/images/offagile1.svg'
import offqualityy from '../../Assets/images/offqualityy.png'
import offongoingg from '../../Assets/images/offOngoingg.png'
import alica from '../../Assets/images/alica.png'
import alicaline from '../../Assets/images/alicaline.png'
import testline from '../../Assets/images/testline.jpg'
import Redbox from '../Redbox/Redbox';

const Offshore = () => {
  return (
    <>
    <div className='offshore'>
        <div className='offshore__main'> 
            <div className='offshore__main__left'>
                <p>Accelerate Your <span>Success</span> with 
                 <span> Offshore</span> Development Expertise</p>
            </div>
        </div>
    </div>
    <div className='offc'>
        <div className='offc__heading'> 
            <p>Offshore Development</p>
        </div>
        <div className='offc__border'> 
            <img src={offline} alt="" />
        </div>
        <div className='offc__content'>
            <p>At LookUP IT Solutions, we offer offshore development services to help businesses around the world reduce their development costs and improve their time-to-market. Our team of experienced offshore developers has the expertise to build custom software solutions that meet your specific requirements, whether you're looking to develop a mobile app, web app, or enterprise software.</p>
        </div>
    </div>
    <div className="offshores__divs container-fluid">
        <div className="offshores__divs__done">
          <div className=" offshores__divs__done__icon">
            <img src={offcost} alt="" />
          </div>
          <div className=" offshores__divs__done__heading">
            <p>Custom Software Development</p>
          </div>
          <div className=" offshores__divs__done__content">
            <p>
             We provide customized software development services to help you build tailor-made software solutions that are specifically designed to meet your unique business requirements. Our experienced offshore development team works closely with you to understand your needs, and then develops a solution that meets those needs precisely. We can develop custom software solutions for various platforms, including web applications, mobile applications, and enterprise software.
            </p>
          </div>
        </div>
        <div className="offshores__divs__done">
          <div className=" offshores__divs__done__icon">
            <img src={offded} alt="" />
          </div>
          <div className=" offshores__divs__done__heading">
            <p>Dedicated Offshore Development Team</p>
          </div>
          <div className=" offshores__divs__done__content">
            <p>
            We can provide a dedicated offshore development team that works exclusively on your project. Our team of developers, designers, and project managers are available to provide ongoing support and ensure that your project is delivered on time and within budget.
            </p>
          </div>
        </div>
        <div className="offshores__divs__done">
          <div className=" offshores__divs__done__icon">
            <img src={offfagile1} alt="" />
          </div>
          <div className=" offshores__divs__done__heading">
            <p>Agile Development Methodology</p>
          </div>
          <div className=" offshores__divs__done__content">
            <p>
            We use an Agile development methodology to ensure that your project is delivered on time and within budget. Our Agile development process allows us to be flexible and adaptable to changing requirements, ensuring that we can deliver high-quality software solutions that meet your needs.
            </p>
          </div>
        </div>
        <div className="offshores__divs__done">
          <div className=" offshore__divs__done__icon">
            <img src={offqualityy} alt="" />
          </div>
          <div className=" offshores__divs__done__heading">
            <p>Quality Assurance and Testing</p>
          </div>
          <div className=" offshores__divs__done__content">
            <p>
            We provide quality assurance and testing services to ensure that your software solution is reliable, scalable, and user-friendly. Our team of quality assurance specialists uses a wide range of testing methods to ensure that your software solution is free of bugs and meets your requirements.
            </p>
          </div>
        </div>
        <div className="offshores__divs__done">
          <div className=" offshore__divs__done__icon">
            <img src={offongoingg} alt="" />
          </div>
          <div className=" offshores__divs__done__heading">
            <p>Ongoing Maintenance and Support</p>
          </div>
          <div className=" offshores__divs__done__content">
            <p>
            We provide ongoing maintenance and support services to ensure that your software solution is always up-to-date and functioning smoothly. Our team is available to provide technical support and troubleshooting to help you resolve any issues that may arise.
            </p>
          </div>
        </div>
        </div>
        <div className="offshoretestimonials">
        <div className="offshoretestimonials__main">
          <div className="offshoretestimonials__main__stiky">
            <div className="offshoretestimonials__main__stiky__fix">
              <h3>Testimonials</h3>
              <img src={testline} alt="" />
              <p>What our clients say about us</p>
            </div>
            <div className="offshoretestimonials__main__stiky__move">
              <div className="offshoretestimonials__main__stiky__move__one">
                <div className="offshoretestimonials__main__stiky__move__one__img">
                 <legend><img src={alica} alt="" /></legend>
                 </div>
                 <div className="offshoretestimonials__main__stiky__move__one__conte">
                    <h3>Alica Smith</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took</p>
                    <img src={alicaline} alt="" />
                    <h5>CEO, Company Name</h5>
                 </div>
              </div>
              <div className="offshoretestimonials__main__stiky__move__two">
              <div className="offshoretestimonials__main__stiky__move__two__img">
                 <img src={alica} alt="" />
                 </div>
                 <div className="offshoretestimonials__main__stiky__move__two__conte">
                    <h3>Alica Smith</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took</p>
                    <img src={alicaline} alt="" />
                    <h5>CEO, Company Name</h5>
                 </div>
              </div>
              <div className="offshoretestimonials__main__stiky__move__three">
                <div className="offshoretestimonials__main__stiky__move__three__img">
                 <img src={alica} alt="" />
                 </div>
                 <div className="offshoretestimonials__main__stiky__move__three__conte">
                    <h3>Alica Smith</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took</p>
                    <img src={alicaline} alt="" />
                    <h5>CEO, Company Name</h5>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Redbox/>
    </>
  )
}

export default Offshore

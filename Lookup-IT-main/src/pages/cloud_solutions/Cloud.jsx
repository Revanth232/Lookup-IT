import React from 'react'
import "./Cloud.scss";
import clodmain from '../../Assets/images/main 8.png'
import line from "../../Assets/images/Line 4.png";
import cloud from '../../Assets/images/cloud8.png'
import migratiom from '../../Assets/images/migration.png'
import security from '../../Assets/images/security.png'
import recovery from '../../Assets/images/recovery.png'
import Redbox from '../Redbox/Redbox';

const Cloud = () => {
  return (
    <>
    <div className='cloud'>
      <div className='cloud__main'>
        <div className='cloud__main__left'>
            <p>
                Innovate, Scale, Succeed: <span>Cloud</span> <span>Solutions</span> for Tomorrow's Businesses
            </p>

        </div>
        <div className='cloud__main__right'> 
        <img src={clodmain} alt="" />
        </div>
      </div>
    </div>
    <div className='c'>
        <div className='c__heading'> 
            <p>Cloud Solutions</p>
        </div>
        <div className='c__border'> 
            <img src={line} alt="" />
        </div>
        <div className='c__content'>
            <p>In today's fast-paced business environment, it's critical to have a reliable and secure cloud solution to keep your business operations running smoothly. At LookUP IT Solutions, we offer cloud solutions that are tailored to your specific business needs, whether you're looking to move your entire infrastructure to the cloud or simply looking for a cloud-based backup solution.</p>
        </div>
    </div>
    <div className="clouds__divs container-fluid">
        <div className="clouds__divs__done">
          <div className=" clouds__divs__done__icon">
            <img src={cloud} alt="" />
          </div>
          <div className=" clouds__divs__done__heading">
            <p>Ai & Machine Leaninig</p>
          </div>
          <div className=" clouds__divs__done__content">
            <p>
            Our team of cloud experts will work with you to assess your current infrastructure and identify opportunities for moving to the cloud. We'll help you determine which cloud solutions are right for your business and provide recommendations on how to optimize your cloud infrastructure
            </p>
          </div>
        </div>
        <div className="clouds__divs__done">
          <div className=" clouds__divs__done__icon">
            <img src={migratiom} alt="" />
          </div>
          <div className=" clouds__divs__done__heading">
            <p>Blockchain Development</p>
          </div>
          <div className=" clouds__divs__done__content">
            <p>
            If you're looking to move your infrastructure to the cloud, our team can help you migrate your existing data, applications, and systems to a cloud-based environment. We'll work closely with you to ensure a seamless transition to the cloud, minimizing downtime and maximizing the benefits of your new cloud infrastructure.
            </p>
          </div>
        </div>
        <div className="clouds__divs__done">
          <div className=" clouds__divs__done__icon">
            <img src={security} alt="" />
          </div>
          <div className=" clouds__divs__done__heading">
            <p>Mobile App Development</p>
          </div>
          <div className=" clouds__divs__done__content">
            <p>
            We understand the importance of cloud security, and we'll work with you to ensure that your cloud infrastructure is secure and protected from cyber threats. We'll implement the latest security protocols and provide ongoing monitoring and support to ensure the integrity of your cloud environment.
            </p>
          </div>
        </div>
        <div className="clouds__divs__done">
          <div className=" clouds__divs__done__icon">
            <img src={recovery} alt="" />
          </div>
          <div className=" clouds__divs__done__heading">
            <p>Web App Development</p>
          </div>
          <div className=" clouds__divs__done__content">
            <p>
            Our cloud backup and recovery solutions provide reliable and secure backup options for your critical business data. We'll work with you to develop a backup strategy that meets your specific business needs, ensuring that your data is protected and easily recoverable in the event of a disaster.
            </p>
          </div>
        </div>
    </div>
    <Redbox/>
    </>
  )
}

export default Cloud

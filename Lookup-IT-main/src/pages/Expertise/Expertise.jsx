import React from 'react'
import './Expertise.scss';
import pic from './Expertiseimages/Rectangle 34.png';
export default function Expertise() {
  return (
    <div> 
         <div className='expertisecontainer'>
    <div className='expertisecontainer__recent'>
      <div className='expertisecontainer__recent__text'>
   <p id="para1">Expertise</p>
   <p id='para2'>Our deep domain expertise ensures one-stop solutions for your business needs.</p>
      </div>
    </div>
    </div>


    <div  className='expertisepictextcontainer'>
    <div className='row expertisepictextcontainer__row'>
     <div className='col-12 col-md-5 expertisepictextcontainer__row__colone'>
        <div>
            <img src={pic} alt="" style={{width:'100%'}}/>
        </div>
     </div>
     <div className='col-12 col-md-7 expertisetext'>
        <p className='expertisepara card'>In the continuously evolving digital universe, we connect the dots across your business through our innovative, commercialized, unique expertise rich delivering solutions that work for your business challenges. Lookupit solutions are the best IT solution provider in India. We are a transforming IT service provider driving towards a connected system. With over 19 years of experience, we help leverage the power of technology and businesses to yield more revenue-oriented results. We apply industry expertise, leading world-class analytics, strategies, and technologies to make your business lead in your niche.We at Lookupit solutions provide reliable long-term solutions that satisfy and boost your IT business. We also provide Expert IT setup services for budding startups and other businesses looking to shift base. For over 19 years, we have delivered deep analytics and industry expertise to help our customers flourish.</p>
    </div>
    </div>
    </div>
    </div>
  )
}

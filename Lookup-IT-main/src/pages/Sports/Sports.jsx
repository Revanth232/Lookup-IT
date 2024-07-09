import React from 'react'
import './Sports.scss';

import jobline from './Sportsimages/Line 4 (2).png';
import job1 from './Sportsimages/Rectangle 32 (3).png';
import job2 from './Sportsimages/Rectangle 36.png';
import job3 from './Sportsimages/Rectangle 37.png';
import job4 from './Sportsimages/Rectangle 38.png';
import job5 from './Sportsimages/Rectangle 39.png';

export default function Sports() {
  return (
    <div>
  <div className='sportscontainer'>
    <div className='sportscontainer__recent'>
      <div className='sportscontainer__recent__text'>
   <p id="sportspara1" style={{color:'#C63D33'}}>Sports</p>
   <p id='sportspara2'>Unleashing the Power of Sports: Inspiring <br></br>Excellence, Creating Legends </p>
      </div>
    </div>
    </div>



  <div id="sportscat">
    <div className='row sport'>
  <div className='col-12 col-lg-9 sport__containerdata'>
  <div className='sport__container__text'>
  <p id="sportpara1">Sports</p>
  <p id="sportpara2">In the emerging information age, sports research and practice development model should meet the times to make sport towards a “Digital Sports” direction. We at Dualapp, mastered the ways to develop sports and cultural resources, the latest scientific training methods and new technology to increase the level of sports can be an invincible position in internal fields of sports.
With the B2B technology, we engage consumers with the sports by providing them comprehensive solutions to remain competitive in the market. We use data & analytics which will increasingly shape the business side of the sports industry. Not only this, we help the owners of sports enterprise to build a more diverse sports experience by developing applications that help them to take strategic decisions for teams & leagues. We also help them in reducing the cyber risk and increase security of sports industry and enhance their digital experience.
Our software solutions are easing out the management of high priority organizational tasks, such as sales tracking, inventory management, timely delivery, tracking of pending orders etc. that maximize the revenue through close follow-ups with the clients on order. We provide you with most efficient & flexible software solution that can handle high volumes of data without taxing the existing manpower in the industry.</p>
  </div>
  <div className='sport__container__text__pic'>
    <img src={job1} alt="" id='sportsbodypic'/>
  </div>
  </div>
    </div>
    </div>



    <div className='sportplaintext' >
 <div><p className='sporteplaintext__cont1'>  Our Recent work</p></div> 
 <div id='sportsnone' style={{marginTop:'-20px'}}><img src={jobline} alt=""/></div>
    </div>



  <div class='sportsfooter'>  
    <div className='row'style={{display:'flex',justifyContent:'space-evenly'}}>
 <div className='col-12 col-md-5'>
    <img src={job2} alt="" width={'100%'} height={'100%'}/>
 </div>
 <div className='col-12 col-md-6 sportsfooter__firstpic'>
   <div className='row'>
   <div>
    <img src={job3} alt="" width={'100%'}/>
 </div>
   </div>
   <div className='row' style={{marginTop:'20px'}}>
   <div className='col-12 col-md-6'>
    <img src={job4} alt="" width={'100%'}/>
 </div>
 <div className='col-12 col-md-6 sportsfooter__lastpic'>
    <img src={job5} alt="" width={'100%'}/>
 </div>
   </div>
   
 </div>

    </div>

    </div>

    </div>
  )
}

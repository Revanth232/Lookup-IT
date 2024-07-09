import React from 'react'
import './Jobpotal.scss';
import jobline from './Jobportalimages/Line 4 (2).png';
import jobpic from './Jobportalimages/Rectangle 32 (2).png';
import jobpic2 from './Jobportalimages/Rectangle 36.png';
import jobpic3 from './Jobportalimages/Rectangle 37.png';
import jobpic4 from './Jobportalimages/Rectangle 38.png';
import jobpic5 from './Jobportalimages/Rectangle 39.png';

export default function Jobportal() {
  return (
    <div className='container-fluid'>


<div>
           <div className='jobcontainer'>
    <div className='jobcontainer__recent'>
      <div className='jobcontainer__recent__text'>
   <p id="jobpara1" style={{color:'#C63D33'}}>Job Portal</p>
   <p id='jobpara2'>Connecting Talent to Opportunity: Empowering <br></br>Careers, Enriching Industries</p>
      </div>
    </div>
    </div>



  <div style={{display:'flex',justifyContent:'center'}}>
    <div className='row job'>
  <div className='col-12 col-md-9 job__containerdata'>
  <div className='job__container__text'>
  <p id="jobtextpara1">Job Portal</p>
  <p id="jobtextpara2">We have developed, cost effective solutions to local employers regardless of industry or geographic location. Having trouble filling job openings, need more qualified applicants, looking for a lower cost job listing source, want to partner with a reputable non-profit focused on giving back to the community and bringing job seekers and employers together? Our Business Solutions are you one store source for all recruiting needs.</p>
  <p id="jobtextpara1">Key features are:</p>
  <p id="jobtextpara2">
 <ul>
 <li>Wage reimbursement (typically 50% of salary)</li>  
 <li>Recuruitment services</li>  
 <li>Job postings</li>  
 <li>Candidate pre-screening and scheduling of interviews</li>  
 <li>On-site hiring events & job fairs</li>  
 <li>Background check assistance</li>  
 <li>Work card & clothing/shoes voucher assistance</li>  
</ul></p>
  </div>
  <div className='job__container__text__pic'>
    <img id="jobbodypic" src={jobpic} alt="" />
  </div>
  </div>
    </div>
    </div>



    <div className='jobplaintext'>
 <div><p className='commerceplaintext__cont1'>  Our Recent work</p></div> 
 <div style={{marginTop:'-20px'}} id="jobline"><img src={jobline} alt="" /></div>
    </div>



  <div  className='footercard'>  
    <div className='row'style={{display:'flex',justifyContent:'space-evenly'}}>
 <div className='col-12 col-md-5'>
    <img src={jobpic2} alt="" width={'100%'} height={'100%'}/>
 </div>
 <div className='col-12 col-md-6'>
   <div className='row footercard__firstpic'>
   <div>
    <img src={jobpic3} alt="" width={'100%'}/>
 </div>
   </div>
   <div className='row' style={{marginTop:'20px'}}>
   <div className='col-12 col-md-6'>
    <img src={jobpic4} alt="" width={'100%'}/>
 </div>
 <div className='col-12 col-md-6 footercard__lastpic'>
    <img src={jobpic5} alt="" width={'100%'}/>
 </div>
   </div>
   
 </div>

    </div>

    </div>
    </div>


    </div>
  )
}

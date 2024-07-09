import React from 'react'
import './Technologies.scss';
import line1 from './Technologiesimages/Line1 4.png'
import reactpic1 from './Technologiesimages/react1.png';
import angularpic1 from './Technologiesimages/angular1.png';
import pythonpic1 from './Technologiesimages/phython1.png';
import phppic1 from './Technologiesimages/php1.png';
import javapic1 from './Technologiesimages/java1.png';
import nftpic1 from './Technologiesimages/nft1.png';

export const Technologies=()=> {
  return (
  <div className='container-fluid'>
      <div className="tech">
    <div className="row techcontainer">
        <div className="col-12 col-md-11 col-lg-11 techtext">
      <div className="row techtext1">
        <p>Technologies</p>
      </div>
      <div className="row techtext2">
<p> Innovative Solutions, Powered by Cutting-Edge <br/>Technologies </p>
      </div>
        </div>
    </div>
    </div>
    <div className="row tech_wework">
<div className="col-12 tech_wework_container">
    <div className="row wework_container1">
<p>Technologies we work on</p>
</div>
<div className="line">
    <div className="linebox">
    <img src={line1} alt=""></img>
</div>
</div>
<div className="row wework_container2 d-flex justify-content-center">
  <p style={{width:'90%'}}>We are a team of experts with a proven track record in creating software applications and technology products and in the production of impactful results. You focus on other aspects of your business- we will focus on creating an impact on your business.</p>
    </div>
</div>
    </div>




    <div className="row reactscontainer mt-5">
        <div className="col-12 col-md-6 col-lg-2 reacts">
           <div className="techcard">
  <div className="techcardbody">
    <img src={reactpic1} alt=""></img>
    <h4>React.js</h4>
  </div>
     </div>
        </div>
        <div className="col-12 col-md-6 col-lg-2 reacts" id="pos" >
            <div class="techcard">
   <div className="techcardbody">
     <img src={angularpic1} alt=""></img>
     <h4>React.js</h4>
   </div>
      </div>
         </div>
         <div class="col-12 col-md-6 col-lg-2 reacts">
            <div className="techcard">
   <div className="techcardbody">
     <img src={nftpic1} alt=""></img>
     <h4>React.js</h4>
   </div>
      </div>
         </div>
         <div className="col-12 col-md-6 col-lg-2 reacts" id="pos" >
            <div className="techcard">
   <div className="techcardbody">
     <img src={pythonpic1} alt=""></img>
     <h4>React.js</h4>
   </div>
      </div>
         </div>
         <div className="col-12 col-md-6 col-lg-2 reacts">
            <div className="techcard">
   <div className="techcardbody">
     <img src={phppic1} alt=""></img>
     <h4>React.js</h4>
   </div>
      </div>
         </div>
         <div className="col-12 col-md-6 col-lg-2 reacts" id="pos">
            <div class="techcard">
   <div className="techcardbody">
     <img src={pythonpic1}alt=""></img>
     <h4>React.js</h4>
   </div>
      </div>
         </div>
       
    </div>



    <div className="row reactscontainer" id="row2" >
        <div className="col-12 col-md-6 col-lg-2 reacts">
           <div className="techcard">
  <div className="techcardbody">
    <img src={reactpic1} alt=""></img>
    <h4>React.js</h4>
  </div>
     </div>
        </div>
        <div className="col-12 col-md-6 col-lg-2 reacts" id="pos">
            <div className="techcard">
   <div className="techcardbody">
     <img src={angularpic1} alt=""></img>
     <h4>React.js</h4>
   </div>
      </div>
         </div>
         <div className="col-12 col-md-6 col-lg-2 reacts">
            <div className="techcard">
   <div className="techcardbody">
     <img src={pythonpic1} alt=""></img>
     <h4>React.js</h4>
   </div>
      </div>
         </div>
         <div className="col-12 col-md-6 col-lg-2 reacts" id="pos">
            <div className="techcard">
   <div className="techcardbody">
     <img src={angularpic1} alt=""></img>
     <h4>React.js</h4>
   </div>
      </div>
         </div>
         <div className="col-12 col-md-6 col-lg-2 reacts">
            <div className="techcard">
   <div className="techcardbody">
     <img src={phppic1}alt=""></img>
     <h4>React.js</h4>
   </div>
      </div>
         </div>
         <div className="col-12 col-md-6 col-lg-2 reacts" id="pos">
            <div className="techcard">
   <div className="techcardbody">
     <img src={reactpic1} alt=""></img>
     <h4>React.js</h4>
   </div>
      </div>
         </div>
       
    </div>
  </div>
  
  )
}

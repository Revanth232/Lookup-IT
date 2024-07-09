import React from 'react'
import './Ecommerce.scss';
import ecommercelappy from './Ecommerceimages/Rectangle 32 (1).png';
import line from './Ecommerceimages/Line 4 (2).png';
import commercepic1 from './Ecommerceimages/Rectangle 36.png';
import commercepic2 from './Ecommerceimages/Rectangle 37.png';
import commercepic3 from './Ecommerceimages/Rectangle 38.png';
import commercepic4 from './Ecommerceimages/Rectangle 39.png';
export default function Ecommerce() {
  return (
    <div>
           <div className='ecommercecontainer'>
    <div className='ecommercecontainer__recent'>
      <div className='ecommercecontainer__recent__text'>
   <p id="ecommercepara1" style={{color:'#C63D33'}}>E-commerce</p>
   <p id='ecommercepara2'>Empowering E-commerce Success: Unleashing <br></br>Potential in Every Industry</p>
      </div>
    </div>
    </div>
  <div style={{display:'flex',justifyContent:'center'}}>
    <div className='row commerce'>
  <div className='col-12 col-md-9 commerce__containerdata'>
  <div className='commerce__container__text'>
  <p id="commercepara1">E-commerce Industry</p>
  <p id="commercepara2">Lookup make use of technology to innovate and generate business-focused solutions for your business needs. We facilitate transition of businesses from traditional business models to e-business models and help them in becoming modern enterprises. To be successful with e-business, your company needs a web site that can communicate with customers, promote products, and securely handle business transactions. It also requires the ability to efficiently deliver maximum performance to a highly variable number of users. Our e-commerce solutions provide a customizable e-business for the rapid construction and deployment of database-driven storefronts while meeting your goals. Our software can be used by businesses to sell directly to consumers (B2C) or to other businesses (B2B), thus maximizing your profits by focusing on increasing revenue. We have a proven record of achieving results that will help your business grow. By focusing our efforts not on a single component, but rather on the multiple components of successful e-commerce solutions, we are able to effectively help our client's web sites succeed. Elements such as topnotch graphic design, fast page loading, secure online transactions and high search engine visibility combined with our unsurpassed customer service make us the right choice to achieve your ambitious business goals.</p>
  </div>
  <div className='commerce__container__text__pic'>
    <img src={ecommercelappy} alt="" id="commercebodypic"/>
  </div>
  </div>
    </div>
    </div>



    <div className='commerceplaintext' style={{marginTop:'100px'}}>
 <div><p className='commerceplaintext__cont1'>  Our Recent work</p></div> 
 <div style={{marginTop:'-20px'}}  id='commerceline'><img src={line} alt="" /></div>
    </div>



  <div className='commercefooterfinal'>  
    <div className='row'style={{display:'flex',justifyContent:'space-evenly'}}>
 <div className='col-12 col-md-5'>
    <img src={commercepic1} alt="" width={'100%'} height={'100%'}/>
 </div>
 <div className='col-12 col-md-6 commercefooterfinal__firstpic'>
   <div className='row'>
   <div>
    <img src={commercepic2} alt="" width={'100%'}/>
 </div>
   </div>
   <div className='row' style={{marginTop:'20px'}}>
   <div className='col-12 col-md-6'>
    <img src={commercepic3} alt="" width={'100%'}/>
 </div>
 <div className='col-12 col-md-6'>
    <img src={commercepic4} alt="" width={'100%'} className="commercefooterfinal__lastpic"/>
 </div>
   </div>
   
 </div>

    </div>

    </div>
    </div>
  )
}

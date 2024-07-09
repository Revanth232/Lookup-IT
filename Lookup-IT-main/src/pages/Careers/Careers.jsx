import React from 'react'
import './Careers.scss';
import icon from './Careersimages/icons8_new_job_96px 1.png';
import pic from './Careersimages/Rectangle 32.png'

export default function Careers() {
  return (
    <div>
        <div className='Careerscontainer'>
    <div className='Careerscontainer__recent'>
      <div className='Careerscontainer__recent__text'>
   <p id="Careerspara1" style={{color:'#C63D33'}}>Career</p>
   <p id='Carrerspara2'>Our deep domain expertise ensures one-stop solutions for your business needs.</p>
      </div>
    </div>
    </div>




    <div  className='Careerspictextcontainer'>
    <div className='row Careerspictextcontainer__row'>
     <div className='col-12 col-md-7 Careerspictextcontainer__row__colone'>
        <div>
            <img src={pic} alt="" style={{width:'100%'}}/>
        </div>
     </div>
     <div className='col-12 col-md-5 Careerstext'>
        <p className='Careerpara card'>At Lookupit solutions, we breathe and thrive on a culture of ideation and innovation, never shying away from risks. With 19 years of expertise, our team is the ideal hub to fulfill your career goals.Our vibrant office space and young talented team members encourage each other to create the workspace, a fun ride. We offer huge opportunities for growth and development. Join a team that is inventive and diverse. We are visionaries who advance, prosper, and thrive.</p>
    </div>
    </div>
    </div>



    <div className='careercards'>
  <div className='row careercards__container'>
    <div className='col-12 col-md-5 careercards__container__right card'>
    <div className='careercards__container__rightcard__one'>
    <div className='row'>
      <p className='careers__cardheading'>Blockchain/ Solidity Developer</p>
      <p className='careers__cardbody'>We are looking for talented Blockchain Developers having hands-on experience in Ethereum and sidechains like ETH, BSC, Polygon, Solana. You will be responsible for designing, implementing, and supporting a distributed blockchain-based network. Your primary responsibility will be analyzing requirements, designing blockchain technology around a certain business model, and building and launching a blockchain network.</p>
    </div>
    
    <div className='row' style={{paddingLeft:'0px',marginTop:'20px'}}> 
  <div className='col-1'>
    <img src={icon} alt="" />
  </div>
  <div className='col-5'>
   <p className='careersfootertext'>Candidate must have 3 to 6 years of experience in ASP.NET with C#</p>
  </div>
  <div className='col-1'>
    <img src={icon} alt="" />
  </div>
  <div className='col-5'>
   <p className='careersfootertext'>Candidate must have 3 to 6 years of experience in ASP.NET with C#</p>
  </div>
    </div>
    </div>
  </div>
  
  <div className='col-12 col-md-5 careercards__container__right card' id="careersfooterspace">
    <div className='careercards__container__rightcard__one'>
    <div className='row'>
      <p className='careers__cardheading'>Blockchain/ Solidity Developer</p>
      <p className='careers__cardbody'>We are looking for talented Blockchain Developers having hands-on experience in Ethereum and sidechains like ETH, BSC, Polygon, Solana. You will be responsible for designing, implementing, and supporting a distributed blockchain-based network. Your primary responsibility will be analyzing requirements, designing blockchain technology around a certain business model, and building and launching a blockchain network.</p>
    </div>
    
    <div className='row' style={{paddingLeft:'0px',marginTop:'20px'}}> 
  <div className='col-1'>
    <img src={icon} alt="" />
  </div>
  <div className='col-5'>
   <p className='careersfootertext'>Candidate must have 3 to 6 years of experience in ASP.NET with C#</p>
  </div>
  <div className='col-1'>
    <img src={icon} alt="" />
  </div>
  <div className='col-5'>
   <p className='careersfootertext'>Candidate must have 3 to 6 years of experience in ASP.NET with C#</p>
  </div>
    </div>
    </div>
  </div>

  </div>
    </div>
    </div>
  )
}

import React from 'react'
import pic from './aboutpics/z.png';
import pic1 from './aboutpics/aboutusbanner.png';
import pic2 from './aboutpics/whoweare.png';
import mainlline1 from './aboutpics/Vector 5 (1).png';
import mainlline2 from './aboutpics/Vector 4 (1).png';
import mainlline3 from './aboutpics/Vector 6 (1).png'
import picback from './aboutpics/2.png';
import line from './aboutpics/aboutline.png';
import aboutcardpics from './aboutpics/aboutcardpics.png';
import './About.scss';

export const About = () => {
  return (
    <div className='container-fluid'>
      <div className='container-fluid'>
        <div className='aboutcontainers'>
          <div className="row aboutcontainers__header">
            <div className='mt-5 aboutcontainers__aboutheading' style={{ position: 'relative' }} >AboutUs</div>
            <div className='aboutcontainers__aboutheading__image' style={{ position: 'absolute', zIndex: '1', top: '40px', left: '30px',width:'95%' }}><img src={pic1}></img></div>
          </div>
          <div style={{ position: 'absolute', top: '50px', zIndex: '0', width: '93%'}}><img src={mainlline1} alt="" width={'100%'}/></div>
          <div style={{ position: 'absolute', top: '100px', zIndex: '0', width: '93%' }}><img src={mainlline1} alt="" width={'100%'} /></div>
          <div style={{ position: 'absolute', top: '150px', zIndex: '0', width: '93%' }}><img src={mainlline1} alt="" width={'100%'} /></div>
        </div>

    

        <div style={{ display: 'flex', justifyContent: 'center'}}>
          <div id="aboutwidth" style={{ width: '95%' }}>
            <div className="row abouttextcontainer">
            <p id="aboutusnone">AboutUs</p>
              <div className="col-12 col-lg-6 abouttextcontainer__whoweare">
               
                <img className="col-12 col-lg-6 abouttextcontainer__whoweareimage" src={pic1} style={{ width: '100%' }}></img>
              </div>
              <div className="col-12 col-md-12 col-lg-6 abouttextcontainer__a">
                <p id='aboutpara1'>Who we are ?</p>
                <p className='abouttextcontainer__whowearepara'>LookUP IT Solutions is a Global Technology Services Company-offering a full range of Technology Products, Solutions, and Services with a presence in all key markets in the US, Europe, Asia-Pacific, etc serving large, medium, and small-sized enterprise.
                  LookUP IT Solutions is a team of experienced professionals dedicated to providing best in-class IT solutions to our clients. LookUP IT Solutions specializes in a wide range of IT services, including Customised Software Development, Mobile App Development, Cloud Solutions, Blockchain Development, IT consulting, and more.
                  We believe in delivering innovative and sustainable solutions that not only meet our clients' needs but also exceed their expectations. We understand that every business is unique, and that's why we take a personalized approach to every project we undertake.
                  Our team comprises skilled developers, UX/UI designers, and project managers who work collectively to ensure the success of every project. We are committed to staying up-to-date with the latest technological advancements and trends to provide our clients with cutting-edge solutions.
                  We work closely with our clients to understand their business objectives and provide tailored solutions that are aligned with their goals.</p>
              </div>
            </div>
          </div>
        </div>






        <div className="row threepillarscontainer">
          <div className="threepillarscontainer__add">
            <div className="col-12 col-md-11 col-lg-6 threepillarscontainer__threepillarpic">
              <div className='threepillarscontainer__threepillar_pic'>
                <img src={pic} style={{ width: '100%' }}></img>
              </div>
            </div>
            <div className="col-12 col-md-11 col-lg-5 d-flex threepillar_container">
              <div className='threepillar'>
                <p className='threepillarpara1'>Three Founding Pillar</p>
                <p className='threepillarpara2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum hastype specimen book.</p>
              </div>
            </div>
          </div>
        </div>
   




        <div className="threecardmain" style={{ marginBottom: '100px'}}>
        <div className="row threecardcontainer">
          <div className="card col-12 col-md-4" id="c">
            <div className="threecardbody">
              <p id='threecardpara1'>Mission</p>
              <p id='threecardpara2'>Our mission is to provide excellent services to our clients through the best IT solutions in the shortest possible time and establish a long-term relationship with every client. Apart from providing the best overall experience to our clients, we will provide growth opportunities to our employee and adopt highest compliances standard such as CMMI level 5.</p>
            </div>
          </div>
          <div className="col-12 col-md-4" id="cc">
            <div className="threecardbody">
              <p id='threecardpara1'>values</p>
              <p id='threecardpara2'>
                We operate within strict legal and ethical guidelines while maintaining strict confidentiality of our client's data. We maintain a cordial work environment and ensure progressive opportunities to our employees.
              </p> </div>
          </div>
          <div className="card col-12 col-md-4" id="ccc">
            <div className="threecardbody">
              <p id='threecardpara1'>vision</p>
              <p id='threecardpara2'>  We are dedicated to emerge as a preferred IT support partner to the global business house.
              </p> </div>
          </div>
        </div>
      </div>



      <div className='aboutjusttext' style={{marginBottom:'100px'}}>
  <div className='aboutjusttext__text'>
   <div>Recent Blogs</div> 
   <img src={line} alt="" />
  </div>
        </div>


      <div style={{ display: 'flex', justifyContent: 'center',width:'100%' }} id="aboutdisplay">
        <div className='row aboutpiccards' style={{ width: '95%'}}>
          <div className='col-3 aboutpiccards__firstcolumn'>
            <div className='card aboutcardpic'>
              <div className='cardimage'>
                <img src={aboutcardpics} alt="" width={'100%'} height={'100%'} />
              </div>
            </div>
            <div className='cradinput'><input type="text" placeholder='John Smith' className='abouttype' /></div>
          </div>
          <div className='col-3 aboutpiccards__firstcolumn'>
            <div className='card aboutcardpic'>
              <div className='cardimage'>
                <img src={aboutcardpics} alt="" width={'100%'} height={'100%'} />
              </div>
            </div>
            <div className='cradinput'><input type="text" placeholder='John Smith' className='abouttype' /></div>
          </div>
          <div className='col-3 aboutpiccards__firstcolumn'>
            <div className='card aboutcardpic'>
              <div className='cardimage'>
                <img src={aboutcardpics} alt="" width={'100%'} height={'100%'} />
              </div>
            </div>
            <div className='cradinput'><input type="text" placeholder='John Smith' className='abouttype' /></div>
          </div>

        </div>

      </div>



      <div style={{ display: 'flex', justifyContent: 'center',width:'100%'}} id="aboutdisplay">
        <div className='row aboutpiccards' style={{ marginTop: '50px',width:'95%'}} id='aboutfinalpicsfooter'>
          <div className='col-3 aboutpiccards__firstcolumn'>
            <div className='card aboutcardpic'>
              <div className='cardimage'>
                <img src={aboutcardpics} alt="" width={'100%'} height={'100%'} />
              </div>
            </div>
            <div className='cradinput'><input type="text" placeholder='John Smith' className='abouttype' /></div>
          </div>
          <div className='col-3 aboutpiccards__firstcolumn'>
            <div className='card aboutcardpic'>
              <div className='cardimage'>
                <img src={aboutcardpics} alt="" width={'100%'} height={'100%'} />
              </div>
            </div>
            <div className='cradinput'><input type="text" placeholder='John Smith' className='abouttype' /></div>
          </div>
          <div className='col-3 aboutpiccards__firstcolumn'>
            <div className='card aboutcardpic'>
              <div className='cardimage'>
                <img src={aboutcardpics} alt="" width={'100%'} height={'100%'} />
              </div>
            </div>
            <div className='cradinput'><input type="text" placeholder='John Smith' className='abouttype' /></div>
          </div>

        </div>

      </div>
       
    </div>
    </div>
  )
}


import React from 'react'
import '../Blockchain.scss';
import background from './page6background.png';
import banner from './page6banner.png';
import icon from './page6icon.png'
import star from './Star 6.png'
import chainimg from './chainimage.png';
import chainbackground from './yellowbackgroundforchain.png';
import icon1 from './icon1.png';
import icon2 from './icon2.png';
import icon3 from './icon3.png';
import icon4 from './icon4.png';
import icon5 from './icon5.png';
import icon6 from './icon6.png';

;export default function Blockchain() {
  return (
    <div>
         <div className="row banner">
           
     <div className="col-12 col-md-6 banner__bannerleft">
        <div className="banner__bannerleft__bannertext">
        <p className="banner__bannerleft__bannertext_para">Transforming <span  className="banner__bannerleft__bannertext_span" >Trust</span> and <span  className="banner__bannerleft__bannertext_span">security</span> with Blockchain Development</p>  
    </div>
     </div>
     <div className="col-12 col-md-6 bannerright">
  <div className="bannerright__banner6pic">
    <img  src={star} alt=""  className="bannerright__banner6pic__img1"></img>
    <img  src={banner} alt=""  className="bannerright__banner6pic__img2" id="blockheadpic"></img>
    <img src={star} alt="" className="bannerright__banner6pic__img3"></img>

  </div>
     </div>
   </div>



   <div className="blockcards">
   <div className="row blockcards__container">
    <div className="col-12 col-md-4 blockcards__container__cardcontainer">
   <div className="blockcards__container__cardcontainer__card">
    <div className="card-img-top">
        <div class="blockchaincard">

   <img src={icon1} alt="" style={{padding:'10px'}}></img>
</div>
   <p id="cardheading">Define the content structure</p>
   <p id="cardpara">First, you need to define the structure of your website content, including the types of data you want to store, such as text, images, videos, and so on.</p>

</div>
   </div>
    </div>
    <div className="col-12 col-md-4 blockcards__container__cardcontainer">
   <div className="blockcards__container__cardcontainer__card">
    <div className="card-img-top">
        <div class="blockchaincard">

   <img src={icon2} alt="" style={{padding:'10px'}}></img>
</div>
   <p id="cardheading">Define the content structure</p>
   <p id="cardpara">First, you need to define the structure of your website content, including the types of data you want to store, such as text, images, videos, and so on.</p>

</div>
   </div>
    </div>
    <div className="col-12 col-md-4 blockcards__container__cardcontainer">
   <div className="blockcards__container__cardcontainer__card">
    <div className="card-img-top">
        <div class="blockchaincard">

   <img src={icon3} alt="" style={{padding:'10px'}}></img>
</div>
   <p id="cardheading">Define the content structure</p>
   <p id="cardpara">First, you need to define the structure of your website content, including the types of data you want to store, such as text, images, videos, and so on.</p>
</div>
   </div>
    </div> 


    <div className="col-12 col-md-4 blockcards__container__cardcontainer" id='carddisable'>
   <div className="blockcards__container__cardcontainer__card">
    <div className="card-img-top">
        <div class="blockchaincard">

   <img src={icon5} alt="" style={{padding:'10px'}}></img>
</div>
   <p id="cardheading">Define the content structure</p>
   <p id="cardpara">First, you need to define the structure of your website content, including the types of data you want to store, such as text, images, videos, and so on.</p>

</div>
   </div>
    </div>



</div>
   </div>








   <div className="blockcards">
   <div className="row blockcards__container">
    <div className="col-12 col-md-4 blockcards__container__cardcontainer">
   <div className="blockcards__container__cardcontainer__card">
    <div className="card-img-top">
        <div class="blockchaincard">

   <img src={icon4} alt="" style={{padding:'10px'}}></img>
</div>
   <p id="cardheading">Define the content structure</p>
   <p id="cardpara">First, you need to define the structure of your website content, including the types of data you want to store, such as text, images, videos, and so on.</p>

</div>
   </div>
    </div>
    <div className="col-12 col-md-4 blockcards__container__cardcontainer">
   <div className="blockcards__container__cardcontainer__card">
    <div className="card-img-top">
        <div class="blockchaincard">

   <img src={icon5} alt="" style={{padding:'10px'}}></img>
</div>
   <p id="cardheading">Define the content structure</p>
   <p id="cardpara">First, you need to define the structure of your website content, including the types of data you want to store, such as text, images, videos, and so on.</p>

</div>
   </div>
    </div>
    <div className="col-12 col-md-4 blockcards__container__cardcontainer" id="laptopview">
   <div className="blockcards__container__cardcontainer__card">
    <div className="card-img-top">
        <div class="blockchaincard">

   <img src={icon5} alt="" style={{padding:'10px'}}></img>
</div>
   <p id="cardheading">Define the content structure</p>
   <p id="cardpara">First, you need to define the structure of your website content, including the types of data you want to store, such as text, images, videos, and so on.</p>

</div>
   </div>
    </div>
    
</div>
   </div>


















   <div className="row blockcontainers mt-5">
        <div className="blockcontainers__text">
       <div className="blockcontainers__text__potions">
           <img src={chainbackground} alt="" className="blockcontainers__text__potions__image1"></img>
           <img src={chainimg} alt="" className="blockcontainers__text__potions__image2"></img>
       </div>
       <div className="text1">
       <h1 className="text1__h">Blockchain Potential</h1>
       <p className="text1__p">At our core, we believe that blockchain has the potential to transform the way we interact with each other and the world around us. By leveraging this powerful technology, we can create a more secure, transparent, and equitable future for all. Contact us today to learn more about how we can help you unlock the potential of blockchain.</p>
       </div>
       </div>
    </div>
    </div>

  )
}

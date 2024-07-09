import React from 'react'
import './Recentblogs.scss'
import banner from './Recentblogsimages/Recentblogsbanner.png';
import line from './Recentblogsimages/Line 4 (2).png';
import card1 from './Recentblogsimages/card1.png';
import card2 from './Recentblogsimages/Rectangle 27 (1).png';
import card3 from './Recentblogsimages/Rectangle 27 (2).png';
import card4 from './Recentblogsimages/Rectangle 27 (3).png';
import card5 from './Recentblogsimages/Rectangle 27 (4).png';
import card6 from './Recentblogsimages/Rectangle 27 (5).png';
import card7 from './Recentblogsimages/Rectangle 27 (6).png';
import card8 from './Recentblogsimages/Rectangle 27 (7).png';
import card9 from './Recentblogsimages/Rectangle 27.png';

export default function Recentblogs() {
  return (
    <div>
        <div className='recentcontainer'>
        <div className='recentcontainer__recent'>
          <div className='recentcontainer__recent__text'>
            <div>Blogs</div> 
          </div>
        </div>
        </div>
        <div className='justtext'>
  <div className='justtext__text'>
   <div>Recent Blogs</div> 
   <img src={line} alt="" />
  </div>
        </div>




        <div className='row mt-5' style={{display:'flex',justifyContent:'space-evenly'}}>
        <div className='card recentcards col-12 col-md-3'>
        <div className='recentcards__card__img'>
 <img src={card1} alt="" style={{width:'100%'}} />
</div> 
<div className='recentcards__card__img__text'>
<p>Some blog Title</p>
</div>
<div className='recentcards__card__img__text1'>
<p>Lorem Ipsum is simply dummy text of the printing and type...</p>
</div>
<div className='recentcards__card__img__text__date'>
20/07/199
</div>
   </div>

        <div className='card recentcards col-12 col-md-3' id="blogspace">
        <div className='recentcards__card__img'>
 <img src={card2} alt="" style={{width:'100%'}} />
</div> 
<div className='recentcards__card__img__text'>
<p>Some blog Title</p>
</div>
<div className='recentcards__card__img__text1'>
<p>Lorem Ipsum is simply dummy text of the printing and type...</p>
</div>
<div className='recentcards__card__img__text__date'>
20/07/199
</div>

        </div>


        <div className='card recentcards col-12 col-md-3' id="blogspace">
        <div className='recentcards__card__img'>
 <img src={card3} alt="" style={{width:'100%'}} />
</div> 
<div className='recentcards__card__img__text'>
<p>Some blog Title</p>
</div>
<div className='recentcards__card__img__text1'>
<p>Lorem Ipsum is simply dummy text of the printing and type...</p>
</div>
<div className='recentcards__card__img__text__date'>
20/07/199
</div>


        </div>
    </div>

    <div className='row mt-5' style={{display:'flex',justifyContent:'space-evenly'}}>
        <div className='card recentcards col-12 col-md-3'>
        <div className='recentcards__card__img'>
 <img src={card4} alt="" style={{width:'100%'}} />
</div> 
<div className='recentcards__card__img__text'>
<p>Some blog Title</p>
</div>
<div className='recentcards__card__img__text1'>
<p>Lorem Ipsum is simply dummy text of the printing and type...</p>
</div>
<div className='recentcards__card__img__text__date'>
20/07/199
</div>

        </div>
        <div className='card recentcards col-12 col-md-3' id="blogspace">
        <div className='recentcards__card__img'>
 <img src={card5} alt="" style={{width:'100%'}} />
</div> 
<div className='recentcards__card__img__text'>
<p>Some blog Title</p>
</div>
<div className='recentcards__card__img__text1'>
<p>Lorem Ipsum is simply dummy text of the printing and type...</p>
</div>
<div className='recentcards__card__img__text__date'>
20/07/199
</div>

        </div>
        <div className='card recentcards col-12 col-md-3' id="blogspace">
        <div className='recentcards__card__img'>
 <img src={card6} alt="" style={{width:'100%'}} />
</div> 
<div className='recentcards__card__img__text'>
<p>Some blog Title</p>
</div>
<div className='recentcards__card__img__text1'>
<p>Lorem Ipsum is simply dummy text of the printing and type...</p>
</div>
<div className='recentcards__card__img__text__date'>
20/07/199
</div>

        </div>
    </div>


      <div className='row mt-5' style={{display:'flex',justifyContent:'space-evenly'}}>
        <div className='card recentcards col-12 col-md-3'>
        <div className='recentcards__card__img'>
 <img src={card7} alt="" style={{width:'100%'}} />
</div> 
<div className='recentcards__card__img__text'>
<p>Some blog Title</p>
</div>
<div className='recentcards__card__img__text1'>
<p>Lorem Ipsum is simply dummy text of the printing and type...</p>
</div>
<div className='recentcards__card__img__text__date'>
20/07/199
</div>

        </div>
        <div className='card recentcards col-12 col-md-3' id="blogspace">
        <div className='recentcards__card__img'>
 <img src={card8} alt="" style={{width:'100%'}} />
</div> 
<div className='recentcards__card__img__text'>
<p>Some blog Title</p>
</div>
<div className='recentcards__card__img__text1'>
<p>Lorem Ipsum is simply dummy text of the printing and type...</p>
</div>
<div className='recentcards__card__img__text__date'>
20/07/199
</div>

        </div>
        <div className='card recentcards col-12 col-md-3' id="blogspace">
        <div className='recentcards__card__img'>
 <img src={card9} alt="" style={{width:'100%'}} />
</div> 
<div className='recentcards__card__img__text'>
<p>Some blog Title</p>
</div>
<div className='recentcards__card__img__text1'>
<p>Lorem Ipsum is simply dummy text of the printing and type...</p>
</div>
<div className='recentcards__card__img__text__date'>
20/07/199
</div>

        </div>
    </div>
    
    </div>
  )
}

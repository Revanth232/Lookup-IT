import React from 'react'
import './Redbox.scss';
import star from './Redboximages/Star 3.png';
import { useState } from 'react';
import { senddata } from '../utils/apicalls';


export default function Redbox() {
//   const[inputvalue,setinputvalue]=useState('');
//   const[email,setemail]=useState('');
//   const[password,setpassword]=useState('');
//   function changename(e)
//   {
// setinputvalue(e.target.value);
//   }
//   function changeemail(e)
//   {
// setemail(e.target.value);
//   }
//   function changepassword(e)
//   {
// setpassword(e.target.value);
//   }
//   function submitdata(e)
//   {
// console.log(inputvalue);
// console.log(email);
// console.log(password);
//   }
const[post,setpost]=useState({username:"",email:""});
function handlechange(e)
{
setpost({...post,[e.target.name]:e.target.value})
}
function handlesubmit()
{

  const payload ={
    fullName:post.username,
    email:post.email
  }

  senddata((res)=>{
    console.log(res)
  },payload)


}
  return (
    <div>
       <div className="redboxcontainer">
        <div className="row container-fluid redbox">
            <div className="col-12 star">
                <div><h1><img src={star} alt=""></img></h1></div>
                <div><h1><img src={star} alt=""></img></h1></div>
            </div>
            <div className="col-12"> 
                <h1 className='text-white'>Schedule a call for free consultation</h1>
            </div>

            <div className="col-12 detilscontainer">
               <div className="row details">
                <div className="col-12 col-md-3 name"><input type="text" placeholder="Enter Name" className='input'value={post.username} name={"username"} onChange={handlechange}></input></div>
                <div className="col-12 col-md-3 email"><input type="text" placeholder="email" className='input'value={post.email} name={"email"} onChange={handlechange}></input></div>
        
                <div className="col-12 col-md-3 password"><input type="text" placeholder="password" className='input'value={post.password} name={"password"} onChange={handlechange}></input></div>
                <div className="col-12 col-md-3 submit"><button className="btn btn-danger" onClick={handlesubmit}>submit</button></div>
               </div>
            </div>
            <div className="star3">
          <h1><img src={star} alt=""></img></h1>
            </div>
        </div>
    </div>
    </div>
  )
}

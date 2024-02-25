import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
function Contactfrm() {
  
  const [input,setInput] = useState({
    message: '',
    name: '',
    email: '',
    subject: ''
   })
   function handlechange(event)
   {
   const{name,value}=event.target
   setInput(prevInput=>{
   return{
   ...prevInput,
   [name]:value  
   }  
   })
   }
   function handleclick(event)
   {
   event.preventDefault();
   const newnote={
    message: input.message,
    name: input.name,
    email: input.email,
    subject: input.subject
   }
   axios.post('https://cloudy-slug-outfit.cyclic.app/api/contact',newnote)
   if(newnote)
   {
    alert("Data Posted")
   }
   console.log(input);
   }  
  return (
    <div className='cntct-blk'>  
    <form>
    <div className='container'>
    <div className='row'>
    <div className='col-md-12'>
    <textarea name='message' value={input.message} placeholder='Enter Message' onChange={handlechange}></textarea>  
      </div>  
      <div className='row rh'>
      <div className='col-md-6'>
    <input type='text' name='name' value={input.name} placeholder='Enter Your Name' onChange={handlechange}></input>  
      </div>
      <div className='col-md-6'>
    <input type='email' name='email' value={input.email} placeholder='Enter Email Address' onChange={handlechange}></input>  
      </div>
      </div>
      <div className='col-md-12'>
    <input type='text' name='subject' value={input.subject} placeholder='Enter Subject' onChange={handlechange}></input>  
      </div>
      <div className='col-md-12'>
    <button onClick={handleclick}>Send Message</button>  
      </div>
      </div>  
      </div>  
      </form>
    </div>
  )
}

export default Contactfrm
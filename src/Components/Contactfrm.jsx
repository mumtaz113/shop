import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import Validation from './Validation';
import { colors } from '@mui/material';
import Swal from 'sweetalert2'

// or via CommonJS
// const Swal = require('sweetalert2')
function Contactfrm() {
  const[errors,setErrors]=useState({})
  const email_pattern= /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
  const [input,setInput] = useState({
    message: '',
    name: '',
    email: '',
    subject: ''
   })
   function handlechange(event)
   {
    const newobj={...input,[event.target.name]:event.target.value}
    setInput(newobj)
   const{name,value}=event.target
   setInput(prevInput=>{
   return{
   ...prevInput,
   [name]:value  
   }  
   })
   }
  //  function handleclick(event)
  //  {
  //  event.preventDefault();
  //  const newnote={
  //   message: input.message,
  //   name: input.name,
  //   email: input.email,
  //   subject: input.subject
  //  }
  //  axios.post('localhost:5000/api/contact',newnote)
  //  if(newnote)
  //  {
  //   alert("Data Posted")
  //  }
  //  console.log(input);
  //  }  
   function handleValidation(event)
   {
    event.preventDefault()
    setErrors(Validation(input))
    event.preventDefault();
    if(input.message === "" || input.name=== "" || input.email=== "" || input.subject=== "")
    {
      console.log('Error')
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Validation Error",
        footer: ''
      });
    }
  else{
    const newnote={
      message: input.message,
      name: input.name,
      email: input.email,
      subject: input.subject
     }
     axios.post('https://lucky-moccasins-bat.cyclic.app/api/contact',newnote)
     if(newnote)
     {
      alert("Data Posted")
     }
     console.log(input);   
     Swal.fire({
      position: "center",
      icon: "success",
      title: "Your Email has sent Succesfully",
      showConfirmButton: false,
      timer: 1500
    });
  }
    
     
       
           
    }
                   
      
  
    
  
    
   
  return (
    <div className='cntct-blk'>  
    <form onSubmit={handleValidation}>
    <div className='container'>
    <div className='row'>
    <div className='col-md-12'>
    <textarea name='message' value={input.message} placeholder='Enter Message' onChange={handlechange}></textarea>  
    {errors.message && <p style={{color:"red"}}>{errors.message}</p>}
      </div>  
      <div className='row rh'>
      <div className='col-md-6'>
    <input type='text' name='name' value={input.name} placeholder='Enter Your Name' onChange={handlechange}></input>
    {errors.name && <p style={{color:"red"}}>{errors.name}</p>}  
      </div>
      <div className='col-md-6'>
    <input type='email' name='email' value={input.email} placeholder='Enter Email Address' onChange={handlechange}></input>  
    {errors.email && <p style={{color:"red"}}>{errors.email}</p>}
      </div>
      </div>
      <div className='col-md-12'>
    <input type='text' name='subject' value={input.subject} placeholder='Enter Subject' onChange={handlechange}></input> 
    {errors.subject && <p style={{color:"red"}}>{errors.subject}</p>} 
      </div>
      <div className='col-md-12'>
    <button >Send Message</button>  
      </div>
      </div>  
      </div>  
      </form>
    </div>
  )
}

export default Contactfrm
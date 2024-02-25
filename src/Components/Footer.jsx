import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
function Footer() {
  return (
   <footer>
   <div className='container'>
   <div className='row'>
    <div className='col-md-2'>
    <h4>Category</h4>
    <ul>
    <li><a href='#'>Male</a></li>
    <li><a href='#'>Female</a></li>
    <li><a href='#'>Shoes</a></li>
    <li><a href='#'>Fashion</a></li>    
    </ul>    
    </div>
    <div className='col-md-3'>
    <h4>Company</h4>
    <ul>
    <li><a href='#'>About</a></li>
    <li><a href='#'>News</a></li>
    <li><a href='#'>Faq</a></li>
    <li><a href='#'>Contact</a></li>    
    </ul>    
    </div>
    <div className='col-md-3'>
    <h4>Address</h4>
    <ul>
    <li><a href='#'>200, Green block, NewYork</a></li>
    <li><a href='tel:104562671678'>+10 456 267 1678</a></li>   
    <li><a href='mailto:Contact89@Winter.Com'>Contact89@Winter.Com</a></li> 
    </ul>    
    </div>
    <div className='col-md-4'>
    <h4>NewsSletter</h4>
    <form>
    <input type='mail' placeholder='Email Address'></input>
    <button className='btn'>Subscribe</button>    
    </form>
    <div className='social-icons'>
    <FaFacebook  size={21} style={{color:'#fff'}}/>
    <FaTwitter size={21}  style={{color:'#fff'}} />
    <FaInstagram size={21}  style={{color:'#fff'}}/>
    </div>    
    </div>
    </div> 
    </div> 
   </footer>
  )
}

export default Footer
import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Contactfrm from '../Components/Contactfrm';
import { FaHome } from "react-icons/fa";
import { FaTabletAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import BreadCumb from '../Components/BreadCumb';
function Contactus() {
  return (
    <>
   <section className='breadcumb-sec'>
    <div className='container'>
    <BreadCumb/> 
    </div>
    </section> 
    <section className='map-sec'>
    <div className='container'>
    <div className='row'>
    <div className='mp-map'>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46830151.117958285!2d-119.8093025!3d44.24236485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2s!4v1708485668195!5m2!1sen!2s"></iframe>    
    </div>    
    </div>    
    </div>
    </section>
    <section className='contact-blkk'>
    <div className='container'>
    <div className='row'>
    <div className='col-md-6'>
    <Contactfrm/>    
    </div>
    <div className='col-md-6'>
    <div className='cn-blk'>
      <div className='cn-img'>
      <FaHome size={30} />  
      </div>
      <div className='cn-info'>
      <h3>Buttonwood, California.</h3>  
      <p>Rosemead, CA 91770</p>
      </div>
    </div>
    <div className='cn-blk'>
      <div className='cn-img'>
      <FaTabletAlt size={30} /> 
      </div>
      <div className='cn-info'>
      <a href='tel:004409865562'>00 (440) 9865 562</a>  
      <p>Mon to Fri 9am to 6pm</p>
      </div>
    </div>
    <div className='cn-blk'>
      <div className='cn-img'>
      <FaEnvelope size={30} /> 
      </div>
      <div className='cn-info'>
      <a href='mailto:support@colorlib.com'>support@colorlib.com</a>
      <p>Send us your query anytime!</p>
      </div>
    </div>  
    </div>    
    </div>
    </div>    
    </section>
    <section className='gallery-sec'>
    <div className='container-fluid'>
    <div className='img-blk'>
     <div className='inr-img'>
     <div className='img-blkk'> 
     <img src='../src/images/inst1.png'></img>
     <div className='img-logo'>
     <FaInstagram size={30} style={{color:'#fff'}} />
      </div> 
     </div> 
     <div className='img-blkk'> 
     <img src='../src/images/inst2.png'></img>
     <div className='img-logo'>
     <FaInstagram size={30} style={{color:'#fff'}} />
      </div> 
     </div> 
     <div className='img-blkk'> 
     <img src='../src/images/inst3.png'></img>
     <div className='img-logo'>
     <FaInstagram size={30} style={{color:'#fff'}} />
      </div> 
     </div> 
     <div className='img-blkk'> 
     <img src='../src/images/inst4.png'></img>
     <div className='img-logo'>
     <FaInstagram size={30} style={{color:'#fff'}} />
      </div> 
     </div> 
     <div className='img-blkk'> 
     <img src='../src/images/inst5.png'></img>
     <div className='img-logo'>
     <FaInstagram size={30} style={{color:'#fff'}} />
      </div> 
     </div> 
    </div> 
     </div>     
    </div>  
    </section>
    </>
  )
}

export default Contactus
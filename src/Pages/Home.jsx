import React from 'react'
import Category from '../Components/Category';
import Arrival from '../Components/Arrival'
import { FaInstagram } from "react-icons/fa";
function Home() {
  return (
    <>
    <section className='banner-sec'>
    <div className='container'>
    <div className='row'>
    <div className='col-md-6'>
    <div className='bnr-blk'>    
    <div className='bnr-info'>
    <h5>Winter Fashion</h5>
    <h1>Fashion<br/>Collection 2019</h1>
    <a href='#' className='btn'>Shop Now</a>
    </div> 
    </div>   
    </div>    
    </div>
    </div>    
    </section>
    <section className='category-sec p-5'>
     <Category/>  
    </section>
    <section className='arrival-sec'>
    <h4 className='text-uppercase text-center'>New Arrival</h4>
    <Arrival/>  
    </section>
    <section className='shopping-sec'>
    <div className='container'>
      <div className='row'>
      <div className='col-md-3'>
       <div className='shp-blk'>
        <img src='../src/images/icon1.png'></img>
        <h4>Free shipping</h4>
        <p>Divided face for bearing the divide unto seed winged divided light Forth.</p>
       </div> 
       </div>  
       <div className='col-md-3'>
       <div className='shp-blk'>
        <img src='../src/images/icon2.png'></img>
        <h4>Free shipping</h4>
        <p>Divided face for bearing the divide unto seed winged divided light Forth.</p>
       </div> 
       </div> 
       <div className='col-md-3'>
       <div className='shp-blk'>
        <img src='../src/images/icon3.png'></img>
        <h4>Free shipping</h4>
        <p>Divided face for bearing the divide unto seed winged divided light Forth.</p>
       </div> 
       </div> 
       <div className='col-md-3'>
       <div className='shp-blk'>
        <img src='../src/images/icon4.png'></img>
        <h4>Free shipping</h4>
        <p>Divided face for bearing the divide unto seed winged divided light Forth.</p>
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

export default Home
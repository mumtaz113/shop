
import axios from 'axios';
import  { useEffect, useState } from 'react'
import { json, useParams } from 'react-router-dom'
import Carousel from "react-bootstrap/Carousel";
import BreadCumb from '../Components/BreadCumb';
export default function Products() {
    const { id } = useParams();
    const[product,SetProduct]=useState();
    
        useEffect(() => {
            axios.get(`https://dummyjson.com/products/${id}`).then(json=>SetProduct(json.data));
        },[])
       
    
  return (
    <>
   <section className='breadcumb-sec'>
    <div className='container'>
    <BreadCumb/> 
    </div>
    </section> 
   { console.log(id)}
   <h1 className='d-flex justify-content-center p-5 text-uppercase'>Single Product Page</h1>
  <div className='container'>
  <div className='row p-5'>
  <div className='col-md-6'>
  <Carousel>
                {product?.images?.map((val, key) => (
                  <Carousel.Item key={key} className='shadow-lg'>
                    <img
                      className="d-block w-100" style={{height:"500px",objectFit:"cover"}}
                      src={val}
                      alt="First slide"
                    />
                  </Carousel.Item>
                ))}
              </Carousel> 
  </div>
   <div className='col-md-6 product p-3'>
   {product ? <div>
    <h1>{product.title}</h1>
    <p>{product.description}</p>
    <h3>{product.price}</h3>
    <h6>Stock:{product.stock}</h6>
    <h5>Brand:{product.brand}</h5>
    <button>Add To Cart</button>
   </div>:null}
  </div> 
    </div>  
  </div>
    </>
  )
}



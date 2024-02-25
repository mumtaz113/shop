import React from 'react'
import { useEffect,useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {ClipLoader} from 'react-spinners'
import BreadCumb from '../Components/BreadCumb';
import Container from 'react-bootstrap/Container';
function AllProduct() {
const [loading,setLoading]=useState(true)
const [myData, setMyData] = useState([]);
const [isError, setIsError] = useState("");
const [search,setSearch]=useState("");
useEffect(() => {
  axios
    .get("https://fakestoreapi.com/products")
    .then((response) => setMyData(response.data))
    .catch((error) => setIsError(error.message));
    setLoading(false)
}, []);
  return (
    <>
     <section className='breadcumb-sec'>
     <Container> 
     <BreadCumb/>
     </Container> 
    </section>
   { loading ?(<ClipLoader loading={loading} 
        size={70} className='d-flex  justify-content-center text-center mx-auto'/>):
(
   <div className='grid-blk'>       
   <div className='grid text-center mt-100'>      
    <div className='container'>
    <div className="row">
      <input type='search' name='src' value={search} className='search-product-box form-control' placeholder='Search Products' onChange={(e=>{setSearch(e.target.value)})}/>
     {

     myData.filter((row)=>{
      if(search==""){
    
    return row;
      }
      else if(row.title.toLowerCase().includes(search.toLowerCase())){
       return row;
    
      }
                
     })
     .map((row,i)=>{
      return (
        <div className='col-md-3'>
        <div className=' grid text-center shadow-lg' key={i}>
        <img className='w-100 img-fluid' src={row.image}></img>
        <h2>{row.title}</h2>
        <h6>{row.price}</h6>
        </div>
        </div>
    
      )
    })

     }

  </div>
  </div>
  </div> 
  </div>)}
          
  </>
)}

export default AllProduct
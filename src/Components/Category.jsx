import React from 'react'
import { useEffect, useState,useContext } from 'react';
import axios from 'axios';
import { Link,Routes,Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Category() {
  const [category, setCategory] = useState([]);
  const [isError, setIsError] = useState("");
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/categories`)
      .then((response) => setCategory(response.data))
      .catch((error) => setIsError(error.message));
  }, []);
  return (
    <>
      {isError !== "" && <h2>{isError}</h2>}

      <div className="container category">
        <h4 className='text-uppercase text-dark text-center'>Categories</h4>
        <div className="row my-5">

          {

            category.map((val, key) => <div className='col-md-3 mt-5 category-blk ' key={key} >
            <div className='cat-img'>
           <Link className='text-decoration-none text-dark' to={`/products/category/${val}`}>{val.toUpperCase()}</Link>
            <div className='ct-blk'>
            </div>
            </div>    
             
              

            </div>)
          }
        </div>
      </div>
    </>
  )
}

export default Category
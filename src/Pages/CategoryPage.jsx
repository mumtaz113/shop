import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProductCard from '../Components/ProductCard';
import BreadCumb from '../Components/BreadCumb';
function CategoryPage() {
    const [isError, setIsError] = useState("");
    const [products, setProducts] = useState([]);
    const { categoryName } = useParams();
    useEffect(() => {
      axios
        .get(`https://fakestoreapi.com/products/category/${categoryName}`)
        .then((json) => setProducts(json.data));
    }, [categoryName]);
    
    return (
      <>
     <section className='breadcumb-sec'>
    <div className='container'>
    <BreadCumb/> 
    </div>
    </section> 
        <div className="container">
          <div className="text-center">
            <h1 className="mt-5">{categoryName.title}</h1>
          </div>
  
          <div className="row">
            {products.map((val, key) => (
              <ProductCard key={key} product={val}/>
            ))}
          </div>
        </div>
      </>
    );
}

export default CategoryPage
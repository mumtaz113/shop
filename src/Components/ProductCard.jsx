import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
function ProductCard({product}) {
const [showReadMoreButton, setshowReadMoreButton] = useState(false);
const[isOpen,setIsOpen]=useState(false)
const ref=useRef(null)
const paragraphStyles={
WebkitLineClamp:2,
WebkitBoxOrient:'Vertical',
overflow:'hidden' ,
display:'-webKit-box' 
}
useEffect(()=>{
  if(ref.current)
  {
    console.log(ref.current.scrollHeight,ref.current.ClientHeight)
  setshowReadMoreButton(ref.current.scrollHeight !== ref.current.ClientHeight)
  }
},[])
  return (
    <div className="col-md-6 my-4 products" >
      <Card  className="p-4" style={{height:'100%'}}>
        <Card.Img variant="top" src={product.image} className="img-fluid object-fit-cover" style={{height:'100vh'}}/>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text style={isOpen ? null :paragraphStyles} ref={ref}> 
          {/* {product.description} */}
          </Card.Text>
          <p style={isOpen ? null :paragraphStyles} ref={ref}>{product.description}</p>
          {showReadMoreButton && (
          <button onClick={()=>setIsOpen(!isOpen)}>
          {isOpen ? 'Read Less' : 'Read More'}  
          </button>  
          )}
          
          <Link to={`/products/${product.id}`} className="btn w-100 pt-2 pb-2 text-dark text-capatilize " onClick={() => setShowMore(!showMore)} >View Product</Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProductCard;

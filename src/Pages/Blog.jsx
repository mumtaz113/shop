import React from 'react'
import { useEffect, useState} from 'react';
import axios from 'axios';
import { Link,Routes,Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Pagination from '../Components/Pagination';
function Blog() {
  const [posts, setPost] = useState([]);
  const [isError, setIsError] = useState("");
  const[currentPage,setCurrentPage]=useState(1)
  const recordperpage=5
  const lastindex=currentPage*recordperpage;
  const firstindex=lastindex-recordperpage;
  const record=posts.slice(firstindex,lastindex)
  const npage=Math.ceil(posts.length/recordperpage)
  const number=[...Array(npage+1).keys()].slice(1)
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => setPost(response.data))
      .catch((error) => setIsError(error.message));
  }, []);
  return (
    <>
      {isError !== "" && <h2>{isError}</h2>}

      <div className="container ">
        <h4 className='text-uppercase text-dark text-center mt-5 mb-5'>Blog</h4>
        <div className="row">
          {

            record.map((val, key) => <div className='col-md-4 ' key={key} >
            <div className='post-blk shadow-lg bg-white rounded p-3'>
           <h2>UserId:{val.id}</h2>   
           <h3 className='text-capitalize'>{val.title}</h3>
           <p>{val.body}</p>
            <div className='ct-blk'>
            </div>
            </div>    
             
              

            </div>)
          }
        </div>
        <nav>
        <ul className="pagination">
          <li className='page-item'>
          <a href='#' className='page-link text-dark' onClick={prePage}>Prev</a>  
          </li>
          {
          number.map((n,i)=>(
          <li className={`page-item ${currentPage=== n ? 'active' : '' }`} key={i}>
          <a href='#' className='page-link text-dark' onClick={()=>changeCpage(n)}>{n}</a>  
          </li>  
          ))  
          }
          <li className='page-item'>
          <a href='#' className='page-link text-dark' onClick={nextPage}>Next</a>  
          </li>
       </ul>  
        </nav>
      </div>
    </>
  )
  function changeCpage(id)
  {
setCurrentPage(id)
  }
  function prePage()
  {
if(currentPage !==1)
 {
  setCurrentPage(currentPage-1)
 }
  }
  function nextPage()
  {
  if(currentPage !==npage)
  {
  setCurrentPage(currentPage + 1)  
  }
  }
}

export default Blog
import React from 'react'
import { useLocation,Link } from 'react-router-dom'

export default function BreadCumb() {
 const location=useLocation()
    console.log(location)
    let currentLinlk='';
    const crumbs=location.pathname.split('/')
    .filter(crumb=> crumb !== '')
    .map(crumb=>{
    currentLinlk=+ `/${crumb}` 
    return (
        <div className='crumbb' key={crumb}>
         <Link to={currentLinlk}>{crumb}</Link>   
        </div>
      )
       
    })
     return(
      <div className='breadcrumb'>
        {crumbs}
        </div>
     )}





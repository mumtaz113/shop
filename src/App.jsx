import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { Route, Routes } from 'react-router-dom';
import CategoryPage from './Pages/CategoryPage';
import AllProduct from './Components/AllProduct';
import Home from './Pages/Home'
import Products from './Pages/Products'
import Cart from './Pages/Cart'
import Contactus from './Pages/Contactus'
import NotFound from './Pages/NotFound'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Routes>
    <Route path="/" element={<Home/>} />   
         <Route path="/products/category/:categoryName" element={<CategoryPage />} />
         <Route path="/products/:id" element={<Products/>} />
         <Route path="/cart" element={<Cart />} />
         <Route path='/ContactUs' element={<Contactus/>}/>
         <Route path='/AllProduct' element={<AllProduct/>}/>
         <Route path='*' element={<NotFound/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App

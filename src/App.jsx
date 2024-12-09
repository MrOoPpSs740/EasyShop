import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import './index.css';


import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from './components/Home/Home';




import Login from './pages/Login';
import Aboutus from './pages/Abotus';
import Products from './pages/Products';
import Contact from './pages/Contact';
import ProductDetails from './pages/ProductDetails';


const App = () => {
  return (
    <>
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="pt-16">
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<Aboutus/>} />
            <Route path="/product" element={<Products/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/productdetails" element={<ProductDetails/>} />
            
            <Route path="/product/:id" element={<ProductDetails />} />
          
          
           
           
            
            
            
            <Route path="/login" element={<Login/>} />


          </Routes>
        </main>
        </div>
        <Footer />
      </div>
    </Router>
    </>
  )
}

export default App
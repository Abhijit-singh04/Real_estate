import "./App.css"
import React from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/common/Header/Header";
import Home from "./components/home/Home";
import Footer from "./components/common/Footer/Footer";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Blog from "./components/blog/Blog";
import Pricing from "./components/Pricing/Pricing";
import Contact from "./components/Contact/Contact";



function App() {
  return (
    <Router>
       <Header />
     <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/pricing' element={<Pricing/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      <Footer/>
    </Router> 
  );

}

export default App
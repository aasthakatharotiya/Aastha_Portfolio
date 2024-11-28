// App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Navbar from './Navbar';
import Home from './Component/Home';
import About from './Component/About';
import Resume from './Component/Resume';
import Contact from './Component/Contact';
import Navbar from './Component/Navbar';
import Skill from './Component/Skill';
import Blog from './Component/Blog';
import Prooject from './Component/Prooject';


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <div className='contentStyles'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skill />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/project" element={<Prooject />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

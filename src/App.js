import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SingleMovie from './pages/SingleMovie';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<SingleMovie/>}/>
      </Routes>
    </>
  )
};

export default App

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Home';
import FilmsByContinent from './FilmsByContinent';

import '../styles/style.scss';
import FilmIndex from './FilmIndex';
import Login from './auth/Login.js';
import Register from './auth/Register.js';
import Navbar from './Navbar';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/filmIndex" element={<FilmIndex />} />
      <Route path="/film/continent/:continent" element={<FilmsByContinent />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  </BrowserRouter>
);

export default App;

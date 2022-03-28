import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Home.js';

import '../styles/style.scss';
import FilmIndex from './FilmIndex';
import Login from './auth/Login.js';
import Register from './auth/Register.js';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/FilmIndex" element={<FilmIndex />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  </BrowserRouter>
);

export default App;

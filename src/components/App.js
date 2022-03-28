import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Home.js';

import '../styles/style.scss';
import FilmIndex from './FilmIndex';
import Login from './auth/Login.js';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/FilmIndex" element={<FilmIndex />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>
);

export default App;

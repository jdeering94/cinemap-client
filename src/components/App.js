import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Home.js';

import '../styles/style.scss';
import FilmIndex from './FilmIndex';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/FilmIndex" element={<FilmIndex />} />
    </Routes>
  </BrowserRouter>
);

export default App;

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Home';
import FilmsByContinent from './FilmsByContinent';

import '../styles/style.scss';
import FilmIndex from './FilmIndex';
import Login from './auth/Login.js';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/FilmIndex" element={<FilmIndex />} />
<<<<<<< HEAD
      <Route path="/film/continent/:continent" element={<FilmsByContinent />} />
=======
      <Route path="/login" element={<Login />} />
>>>>>>> main
    </Routes>
  </BrowserRouter>
);

export default App;

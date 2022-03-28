import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Home';
import FilmsByContinent from './FilmsByContinent';

import '../styles/style.scss';
import FilmIndex from './FilmIndex';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/FilmIndex" element={<FilmIndex />} />
      <Route path="/film/continent/:continent" element={<FilmsByContinent />} />
    </Routes>
  </BrowserRouter>
);

export default App;

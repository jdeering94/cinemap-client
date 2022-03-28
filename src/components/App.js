import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import '../styles/style.scss';
import FilmIndex from './FilmIndex';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<h1>Hello world</h1>} />
      <Route path="/FilmIndex" element={<FilmIndex />} />
    </Routes>
  </BrowserRouter>
);

export default App;

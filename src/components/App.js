import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Home.js';

import '../styles/style.scss';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
);

export default App;

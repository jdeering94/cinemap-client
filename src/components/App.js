import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../styles/style.scss';
import '../styles/navbar.scss';
import '../styles/home.scss';
import '../styles/header.scss';
import '../styles/footer.scss';
import '../styles/filmIndex.scss';
import '../styles/likeButton.scss';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import FilmsByContinent from './FilmsByContinent';
import FilmIndex from './FilmIndex';
import Login from './auth/Login.js';
import Register from './auth/Register.js';
import CreateFilm from './CreateFilm';
import MyFavourites from './MyFavourites';
import ShowFilm from './ShowFilm';
import RandomFilm from './RandomFilm';
import UserList from './UserList';
import Footer from './Footer';
import Header from './Header';

const App = () => (
  <BrowserRouter>
    <Header />
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/filmIndex" element={<FilmIndex />} />
      <Route path="/film/continent/:continent" element={<FilmsByContinent />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/create" element={<CreateFilm />} />
      <Route path="/users/:userId/myFavourites" element={<MyFavourites />} />
      <Route path="/film/:filmId" element={<ShowFilm />} />
      <Route path="/randomFilm" element={<RandomFilm />} />
      <Route path="/userList" element={<UserList />}></Route>
      <Route path="/logout" element={<Home />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default App;

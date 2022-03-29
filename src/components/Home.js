import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="hero is-full-height-with-navbar">
      <div className="hero-body">
        <div className="container">
          <p className="title has-text-centered">
            <span></span>World Films
          </p>
        </div>
      </div>
      <section className="container">
        <div className="continents">
          <ul>
            <li>
              <Link to={'/film/continent/Africa'}>Africa</Link>
            </li>
            <li>
              <Link to={'/film/continent/Antarctica'}>Antarctica</Link>
            </li>
            <li>
              <Link to={'/film/continent/Asia'}>Asia</Link>
            </li>
            <li>
              <Link to={'/film/continent/Oceania'}>Oceania</Link>
            </li>
            <li>
              <Link to={'/film/continent/Europe'}>Europe</Link>
            </li>
            <li>
              <Link to={'/film/continent/North America'}>North America</Link>
            </li>
            <li>
              <Link to={'/film/continent/South America'}>South America</Link>
            </li>
          </ul>
        </div>
      </section>
    </section>
  );
};

export default Home;

import logo from '../assets/cinemap-logo.png';
import React from 'react';

const Header = () => {
  return (
    <>
      <section className="hero is-small header">
        <div className="hero-body">
          <div className="has-text-centered">
            <figure className="image is-inline-block logo is-128x128">
              <img src={logo} />
            </figure>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;

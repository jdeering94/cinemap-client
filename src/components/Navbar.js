import React from 'react';
import { Link } from 'react-router-dom';
import { getLoggedInUserId } from '../lib/authentication';

const Navbar = () => {
  const userId = getLoggedInUserId();
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          Home
        </Link>
        <Link to="/filmIndex" className="navbar-item">
          Film Index
        </Link>
        <Link to="/login" className="navbar-item">
          Login
        </Link>
        <Link to="/register" className="navbar-item">
          Register
        </Link>
        {userId && (
          <Link to={`/users/${userId}/myFavourites`} className="navbar-item">
            My Favs
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

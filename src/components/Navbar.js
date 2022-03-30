import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getLoggedInUserId } from '../lib/authentication';
import { removeToken, removeUserId } from '../api/auth';
import { Divide as Hamburger } from 'hamburger-react';

// const mainNav = document.getElementById('main-nav');
// document.addEventListener('click', function (event) {
//   if (!event.target.matches('.nav-menu')) return;
//   mainNav.classList.toggle('nav-open');
// });

const Navbar = () => {
  const userId = getLoggedInUserId();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const navigate = useNavigate();
  // const params = useParams();
  const handleLogout = () => {
    removeToken();
    console.log(userId);
    removeUserId();
    navigate('/');
    console.log('logged out');
  };

  const options = [
    {
      name: 'Disable body scrolling',
      scroll: false,
      backdrop: true,
    },
  ];

  return (
    <nav id="main-nav" className="nav">
      <Hamburger color="#000000" toggled={show} toggle={setShow} {...options} />
      {show && (
        <div className="nav-menu">
          <div className="nav-menu-side">
            <ul className="nav-menu-side-nav">
              <li>
                <Link onClick={handleClose} to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link onClick={handleClose} to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link onClick={handleClose} to="/filmIndex">
                  Film Index
                </Link>
              </li>
              <li>
                <Link onClick={handleClose} to="/login">
                  Login
                </Link>
              </li>
              <li>
                <Link onClick={handleClose} to="/register">
                  Register
                </Link>
              </li>
              {userId ? (
                <>
                  <li>
                    <Link
                      onClick={handleClose}
                      to={`/users/${userId}/myFavourites`}
                    >
                      My Favs
                    </Link>
                  </li>
                  <li>
                    <Link onClick={handleClose} to={'/randomFilm'}>
                      Random Film
                    </Link>
                  </li>
                  <li>
                    <Link onClick={handleClose} to="/create">
                      Create
                    </Link>
                  </li>
                  <li>
                    <Link onClick={handleLogout} to="/logout">
                      Logout
                    </Link>
                  </li>
                </>
              ) : (
                <></>
              )}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

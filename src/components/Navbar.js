import React from 'react';
import { useState } from 'react';
import { getLoggedInUserId, isAdmin } from '../lib/authentication';
import { Link, useNavigate } from 'react-router-dom';
import { removeToken, removeUserId } from '../api/auth';
import { Divide as Hamburger } from 'hamburger-react';

const Navbar = () => {
  const userId = getLoggedInUserId();
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  const navigate = useNavigate();
  const [sideBar, setSideBar] = useState(false); // changes between true and false
  const toggleMenu = () => setSideBar(!sideBar); // whenever the hamburger is clicked on, change the true/false
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
    <nav
      className={sideBar ? 'sidebar active' : 'sidebar'}
      onClick={toggleMenu}
    >
      <Hamburger
        color="#000000"
        toggled={sideBar}
        toggle={setSideBar}
        {...options}
      />
      {sideBar && (
        <div className="navbar">
          <div className="nav-menu">
            <ul className="nav-menu-side-nav">
              <li>
                <Link onClick={toggleMenu} to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link onClick={toggleMenu} to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link onClick={toggleMenu} to="/filmIndex">
                  Film Index
                </Link>
              </li>
              <li>
                <Link onClick={toggleMenu} to="/login">
                  Login
                </Link>
              </li>
              <li>
                <Link onClick={toggleMenu} to="/register">
                  Register
                </Link>
              </li>
              {userId ? (
                <>
                  <li>
                    <Link
                      onClick={toggleMenu}
                      to={`/users/${userId}/myFavourites`}
                    >
                      My Favs
                    </Link>
                  </li>
                  <li>
                    <Link onClick={toggleMenu} to={'/randomFilm'}>
                      Random Film
                    </Link>
                  </li>
                  <li>
                    <Link onClick={toggleMenu} to="/create">
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
              {isAdmin() && (
                <li>
                  <Link onClick={toggleMenu} to="/userList">
                    User List
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getLoggedInUserId } from '../lib/authentication';
import { Divide as Hamburger } from 'hamburger-react';
import { Offcanvas } from 'react-bootstrap';

const Navbar = () => {
  const userId = getLoggedInUserId();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  // const handleLogout = () => {
  //   removeToken()
  //   removeUserId()
  //   setIsLoggedIn(false)
  //   history.push('/')
  // }

  const options = [
    {
      name: 'Disable body scrolling',
      scroll: false,
      backdrop: true,
    },
  ];

  return (
    <nav>
      <Hamburger color="#000000" toggled={show} toggle={setShow} {...options} />
      <Offcanvas show={show}>
        <div className="hamburger">
          <ul>
            <li>
              <Link onClick={handleClose} to="/">
                Home
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
                  <Link onClick={handleClose} to="/create">
                    Create
                  </Link>
                </li>
                <li>
                  <Link onClick={handleClose} to="/logout">
                    Logout
                  </Link>
                </li>
              </>
            ) : (
              <></>
            )}
          </ul>
        </div>
      </Offcanvas>
    </nav>
  );
};

export default Navbar;

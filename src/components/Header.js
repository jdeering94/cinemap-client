import logo from '../assets/cinemap-logo.png';
import React from 'react';

import { getCurrentUserById } from '../api/auth';
import { getLoggedInUserId } from '../lib/authentication';

const Header = () => {
  const [username, SetUsername] = React.useState('');

  const userID = getLoggedInUserId();

  React.useEffect(() => {
    const getData = async () => {
      if (window.sessionStorage.token) {
        const user = await getCurrentUserById(userID);
        SetUsername(user.username);
      }
    };
    getData();
  }, [userID]);

  return (
    <>
      <section className="hero is-small header">
        <div className="hero-body">
          <div className="has-text-centered">
            <figure className="image is-inline-block logo is-128x128">
              <img src={logo} />
            </figure>
            {userID && <p className="is-pulled-right">Hello {username}!</p>}
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;

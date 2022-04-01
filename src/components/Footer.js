import React from 'react';
import { ImGithub } from 'react-icons/Im';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <footer>
      <section className="footer">
        <div className="footer-info">
          <span>Cinemap - Discover. Enjoy. Discuss.</span>
          <span className="rights">&copy; 2022 All rights reserved</span>
          <p>
            Find Us on GitHub <ImGithub />
          </p>
        </div>
      </section>
    </footer>
  );
};
export default Footer;

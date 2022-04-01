import React from 'react';
import { ImGithub } from 'react-icons/Im';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <footer>
      <section className="footer">
        <div className="footer-info">
          <p>
            <a href="https://github.com/jdeering94/ga-project-3-api">
              {' '}
              Visit us on GitHub
              <ImGithub />
            </a>
          </p>
          <span>CineMap </span>
          <span className="rights">&copy; 2022 All rights reserved</span>
        </div>
      </section>
    </footer>
  );
};
export default Footer;

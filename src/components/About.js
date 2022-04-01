import React from 'react';

const About = () => {
  return (
    <>
      <h1 className="title is-1 has-text-centered">
        Welcome to the World of Cinema!
      </h1>
      <div className="container">
        <div className="columns">
          <div className="column card m-4 is-one-half box">
            <br />
            <h2 className="title is-2">About CineMap</h2>
            <p>
              CineMap is a curated collection of the very best of world cinema.
            </p>
            <p>
              Join us and explore a delightful new way to discover, review and
              discuss your favourite films.
            </p>
            <br />
            <p>
              🧡 Thank you for being part of our mission to help everyone
              discover the joy of world cinema!
            </p>
            <br />
            <h2 className="title">The App</h2>
            <p>
              CineMap is built on the MERN stack (MongoDB Express, React and
              Node) and uses packages that include:
            </p>
            <br />
            <ul>
              <li>
                <a href="https://www.npmjs.com/package/react-world-map">
                  🍔 hamburger-react
                </a>
              </li>
              <li>
                <a href="https://www.npmjs.com/package/react-world-map">
                  🌎 react-world-map
                </a>
              </li>

              <li>
                <a href="https://www.npmjs.com/package/react-world-map">
                  🏁 country-emoji
                </a>
              </li>
              <li>
                <a href="https://bulma.io/"> 💚 bulma.io</a>
              </li>
            </ul>

            <br />
            <h2 className="title">Our Team</h2>
            <p>
              CineMap was built with 🧡 by{' '}
              <a href="https://github.com/Dani-Gordon">Dani</a>,{' '}
              <a href="https://github.com/gabriel-arafa">Gabriel</a> and{' '}
              <a href="https://github.com/jdeering94">Joe</a>
            </p>
            <br />
            <p>
              CineMap is the first Full Stack application we've made during our
              Software Engineering Immersive course at General Assembly.
            </p>
            <p>
              We have learned so much from developing it and we hope you enjoy
              using it!
            </p>
            <br />
            <h2 className="title is-5">Missing a classic?</h2>
            <p>
              Our passion is providing an exquisitely curated Smörgåsbord of
              films that are worth your time and attention. We are constantly
              looking for new films or rediscovering classics may have
              overlooked. If there is a film you cant believe we havent
              showcased yet, please let us know and we will consider adding it
              to our growing comendium of cinematic delights.
            </p>
            <p>
              🗣 <a href="mailto:gaps@worldfilm">gaps@cinemap</a>
            </p>
            <br />
            <h2 className="title is-5">Spotted something wrong?</h2>
            <p>
              We may be peerless pedants and committed curators of cinema, but
              that does not mean we are not human. We will correct any
              innacuracies as soon as we hear about them.
            </p>

            <p>
              If you do notice any errors in our content, please contact our
              editorial team (and accept our humblest apologies!).
            </p>

            <p>
              🗣 <a href="mailto:editors@cinemap"> correct@worldfilm</a>
            </p>
            <p>
              ✋ or raise an issue at our{' '}
              <a href="https://github.com/jdeering94/ga-project-3-api/issues">
                project repository on GitHub
              </a>
            </p>
            <br />
            <h2 className="title is-4">With special thanks to:</h2>
            <ul>
              <li>
                🧡 The brilliant instruction team at GA - Milo, Simon, Nick,
                Tristan and Garry
              </li>
              <li>🧡 All of our wonderful classmates</li>
              <li>
                🧡 <strong>YOU</strong> - for using CineMap!
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

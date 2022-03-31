import React from 'react';

const About = () => {
  return (
    <>
      <h1 className="title is-1 has-text-centered">About Cinemap</h1>
      <div className="container">
        <div className="columns">
          <div className="column card m-4 is-one-half box">
            <h2 className="title">Product</h2>
            <p className="card-content">
              What it does, who its for and why its great. Misson / vision /
              elevator pitch, etc.
            </p>
            <p>
              Made using the MERN stack (MongoDB Express Angular Node),{' '}
              <a href="https://bulma.io/">Bulma, </a>
              <a href="https://www.npmjs.com/package/react-world-map">
                React world map,
              </a>{' '}
              and [other technologies]
            </p>
            <br />
            <h2 className="title">Meet the Team</h2>
            <p className="card-content">
              CineMap was built by{' '}
              <a href="https://github.com/Dani-Gordon">Dani</a>,{' '}
              <a href="https://github.com/gabriel-arafa">Gabriel</a> and{' '}
              <a href="https://github.com/jdeering94">Joe</a> as a project for
              the General Assembly Software Engineering Immersive course.
            </p>
            <p>
              Thank you for visiting - and for being part of our mission to help
              people discover the joy of world cinema! We have learned a lot
              making this site and we hope you enjoy using it!
            </p>
            <br />
            <h2 className="title">Many Thanks!</h2>
            <p>With special thanks to everyone who has helped along the way:</p>
            <ul>
              <li>Milo and Simon</li>
              <li>Nick, Garry and Tristan</li>
              <li>All of our SEI! coursemates</li>
            </ul>
            <br />
            <h2 className="title">Have we missed a gem??</h2>
            <p className="content">
              Our passion is providing an exquisitely curated Smörgåsbord of
              films that are worth your time and attention. We are constantly
              looking for new films or rediscovering classics may have
              overlooked. If there is a film you cant believe we havent
              showcased yet, please let us know at{' '}
              <a href="mailto:gaps@worldfilm">gaps@worldfilm</a> and we will
              consider adding it to our growing comendium of cinematic delights.
            </p>
            <br />
            <h2 className="title">Spotted something wrong?</h2>
            <p className="content">
              We may be peerless pedants and committed curators of cinema, but
              that does not mean we are not human. If you have noticed any
              errors or innacuracies in our content, please contact our
              editorial team - and accept our apologies. We will check and if
              necesary correct any innacuracies as soon as we hear about them.
              at <a href="mailto:correct@worldfilm">correct@worldfilm</a> or
              raise an issue through our{' '}
              <a href="https://github.com/jdeering94/ga-project-3-api/issues">
                project repository on GitHub
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

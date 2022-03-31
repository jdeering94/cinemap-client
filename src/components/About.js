import React from 'react';

const About = () => {
  return (
    <>
      <h1 className="title is-1 has-text-centered">About WorldFilm</h1>
      <div className="content is-small">
        <p>Please note this is draft content meant as a placeholder!</p>
      </div>
      <div className="content is-normal">
        <h2>Product</h2>
        <p>
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

        <h2>People</h2>
        <p>
          World film was built by{' '}
          <a href="https://github.com/Dani-Gordon">Dani</a>,{' '}
          <a href="https://github.com/gabriel-arafa">Gabriel</a> and{' '}
          <a href="https://github.com/jdeering94">Joe</a> as a project for the
          General Assembly Software Engineering Immersive course.
        </p>
        <p>
          Thank you for visiting - and for being part of our mission to help
          people discover the joy of world cinema! We have learned a lot making
          this site and we hope you enjoy using it!
        </p>
      </div>
      <div className="content is-small">
        <h3>With special thanks to everyone who has helped along the way:</h3>
        <ul>
          <li>Milo and Simon</li>
          <li>Nick, Garry and Tristan</li>
          <li>All of our SEI! coursemates</li>
        </ul>

        <h2>Have we missed a gem?</h2>
        <p>
          Our passion is providing an exquisitely curated Smörgåsbord of films
          that are worth your time and attention. We are constantly looking for
          new films or rediscovering classics may have overlooked. If there is a
          film you cant believe we havent showcased yet, please let us know at{' '}
          <a href="mailto:gaps@worldfilm">gaps@worldfilm</a> and we will
          consider adding it to our growing comendium of cinematic delights.
        </p>
        <h2>Spotted something wrong?</h2>
        <p>
          We may be peerless pedants and committed curators of cinema, but that
          does not mean we are not human. If you have noticed any errors or
          innacuracies in our content, please contact our editorial team - and
          accept our apologies. We will check and if necesary correct any
          innacuracies as soon as we hear about them. at{' '}
          <a href="mailto:correct@worldfilm">correct@worldfilm</a> or raise an
          issue through our{' '}
          <a href="https://github.com/jdeering94/ga-project-3-api/issues">
            project repository on GitHub
          </a>
          .
        </p>
      </div>
    </>
  );
};

export default About;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import WorldMap from 'react-world-map';

const Home = () => {
  const [selected, onSelect] = React.useState(null);
  const navigate = useNavigate();

  React.useEffect(() => {
    console.log('selected continent', selected);
    switch (selected) {
      case 'na':
        navigate('/film/continent/North America');
        break;
      case 'sa':
        navigate('/film/continent/South America');
        break;
      case 'eu':
        navigate('/film/continent/Europe');
        break;
      case 'as':
        navigate('/film/continent/Asia');
        break;
      case 'af':
        navigate('/film/continent/Africa');
        break;
      case 'oc':
        navigate('/film/continent/Oceania');
        break;
    }
  }, [selected]);

  return (
    <section className="hero is-full-height-with-navbar">
      <div className="hero-body">
        <div className="container">
          <p className="title is-1 has-text-centered ">
            <h1>World Films</h1>
          </p>
        </div>
      </div>
      <section className="container">
        <WorldMap selected={selected} onSelect={onSelect} />
        {/* <div className="continents">
          <ul>
            <li>
              <Link to={'/film/continent/Africa'}>Africa</Link>
            </li>
            <li>
              <Link to={'/film/continent/Asia'}>Asia</Link>
            </li>
            <li>
              <Link to={'/film/continent/Oceania'}>Oceania</Link>
            </li>
            <li>
              <Link to={'/film/continent/Europe'}>Europe</Link>
            </li>
            <li>
              <Link to={'/film/continent/North America'}>North America</Link>
            </li>
            <li>
              <Link to={'/film/continent/South America'}>South America</Link>
            </li>
          </ul>
        </div> */}
      </section>
    </section>
  );
};

export default Home;

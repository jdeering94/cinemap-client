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
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          <p className="title is-1 has-text-centered "></p>
        </div>
      </div>
      <section className="container">
        <WorldMap selected={selected} onSelect={onSelect} />
      </section>
    </section>
  );
};

export default Home;

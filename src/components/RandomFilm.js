import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getRandomFilm } from '../api/films';

const RandomFilm = () => {
  const navigate = useNavigate();
  React.useEffect(() => {
    const getData = async () => {
      const randomFilmObject = await getRandomFilm();
      navigate(`/film/${randomFilmObject[0]._id}`);
    };
    getData();
  }, []);

  return <h1>Loading...</h1>;
};

export default RandomFilm;

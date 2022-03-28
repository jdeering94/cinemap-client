import React from 'react';
import { getFilmById } from '../api/films';
import { useParams } from 'react-router-dom';

const ShowFilm = () => {
  const { filmId } = useParams();
  const [film, setFilm] = React.useState(null);
  // const [commentValue, setCommentValue] = React.useState('');

  React.useEffect(() => {
    const getData = async () => {
      const film = await getFilmById(filmId);
      setFilm(film);
    };
    getData();
  }, []);

  if (!film) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container">
      <div className="columns">
        <div className="column is-half">
          <figure className="image">
            <img src={film.img} alt={film.title} />
          </figure>
        </div>
        <div className="column is-half">
          <div className="card p-6">
            <h2 className="title">{film.title}</h2>
            <p>Country of Origin: {film.country}</p>
            <p>Director: {film.director}</p>
            <p>Released in: {film.releaseYear}</p>
            <p>Runtime: {film.runTime} min</p>
            <p>Description: {film.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowFilm;

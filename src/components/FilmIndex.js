import React from 'react';
import { Link } from 'react-router-dom';
import { getAllFilms } from '../api/films';
import { averageRating } from '../lib/ratingFunctions';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { flag } from 'country-emoji';
import { deleteFilm } from '../api/films';
import { isAdmin } from '../lib/authentication';

const FilmIndex = () => {
  const [films, setFilms] = React.useState(null);

  React.useEffect(() => {
    const getData = async () => {
      const films = await getAllFilms();
      setFilms(
        films.sort((a, b) =>
          a.title > b.title ? 1 : b.title > a.title ? -1 : 0
        )
      );
    };
    getData();
  }, []);

  const handleDeleteFilm = async (filmId) => {
    if (isAdmin()) {
      await deleteFilm(filmId);
      const films = await getAllFilms();
      setFilms(
        films.sort((a, b) =>
          a.title > b.title ? 1 : b.title > a.title ? -1 : 0
        )
      );
    } else {
      window.alert('You must be an Admin to delete a Film');
    }
  };

  return (
    <>
      <h1 className="title has-text-centered">Film Index</h1>
      {films ? (
        <div className="container">
          <div className="columns is-multiline">
            {films.map((film) => (
              <div
                key={film._id}
                className="column card m-3 is-one-fifth film-card"
              >
                {isAdmin() && (
                  <FontAwesomeIcon
                    onClick={() => handleDeleteFilm(film._id)}
                    className="x-mark"
                    icon={faXmark}
                  />
                )}
                <Link to={`/film/${film._id}`}>
                  <div className="card-image">
                    <figure className="image is-4by5">
                      <img src={film.img} alt={film.title} />
                    </figure>
                  </div>
                  <div className="is-flex is-justify-content-space-between">
                    <p className="">{film.title}</p>
                    <p className="">{flag(`${film.country}`)}</p>
                  </div>
                  {/* <p>{film.country}</p> */}
                  <div className="card-footer">
                    {film.comments.length > 0 && (
                      <p className="card-footer-item">
                        {averageRating(film).toFixed(1)} ⭐️
                      </p>
                    )}
                    {film.likedBy.length > 0 && (
                      <p className="card-footer-item">
                        💙 {film.likedBy.length}
                      </p>
                    )}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p>Loading</p>
      )}
    </>
  );
};

export default FilmIndex;

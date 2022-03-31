import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getAllFilmsByContinent } from '../api/films';
import { averageRating } from '../lib/ratingFunctions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { flag } from 'country-emoji';
import { deleteFilm } from '../api/films';
import { isAdmin } from '../lib/authentication';

const FilmsByContinent = () => {
  const { continent } = useParams();
  const [films, setFilm] = React.useState(null);
  console.log(continent);
  let titleContinent = 'Loading';
  if (continent === 'North America') {
    titleContinent = 'North and Central America';
  } else {
    titleContinent = continent;
  }
  React.useEffect(() => {
    const getData = async () => {
      const filmList = await getAllFilmsByContinent(continent);
      const sortedList = filmList.sort((a, b) =>
        a.title > b.title ? 1 : b.title > a.title ? -1 : 0
      );
      setFilm(sortedList);
    };
    getData();
  }, []);

  const handleDeleteFilm = async (filmId) => {
    if (isAdmin()) {
      await deleteFilm(filmId);
      const films = await getAllFilmsByContinent();
      setFilm(
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
      <h1 className="title is-1 has-text-centered">
        Films from {titleContinent}
      </h1>
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

export default FilmsByContinent;

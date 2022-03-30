import React from 'react';
import { Link } from 'react-router-dom';
import { getAllFilms } from '../api/films';
import { averageRating } from '../lib/ratingFunctions';
import { getRandomFlag } from '../lib/flagHelper';

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
  console.log(films);

  return (
    <>
      <h1 className="title">Film Index</h1>
      {films ? (
        <div className="container">
          <div className="columns is-multiline">
            {films.map((film) => (
              <div key={film._id} className="column card m-3 is-one-fifth">
                <Link to={`/film/${film._id}`}>
                  <div className="card-image">
                    <figure className="image is-4by5">
                      <img src={film.img} alt={film.title} />
                    </figure>
                  </div>
                  <div className="is-flex is-justify-content-space-between">
                    <p className="">{film.title}</p>
                    <p className="">{getRandomFlag()}</p>
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

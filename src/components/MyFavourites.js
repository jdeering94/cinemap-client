import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getAllLikedFilmsForUser } from '../api/films';
import { averageRating } from '../lib/ratingFunctions';
import { flag } from 'country-emoji';

const MyFavourites = () => {
  const { userId } = useParams();
  const [films, setFilms] = React.useState(null);

  React.useEffect(() => {
    const getData = async () => {
      const myFavs = await getAllLikedFilmsForUser(userId);
      console.log('this is my favs', myFavs);
      const sortedMyFavs = myFavs.sort((a, b) =>
        a.title > b.title ? 1 : b.title > a.title ? -1 : 0
      );
      setFilms(sortedMyFavs);
    };
    getData();
  }, []);

  return (
    <>
      <h1 className="title has-text-centered">My Favs</h1>
      {films ? (
        <div className="container">
          <div className="columns is-multiline">
            {films.map((film) => (
              <div
                key={film._id}
                className="column card m-3 is-one-fifth film-card"
              >
                <Link to={`/film/${film._id}`}>
                  <div className="card-image">
                    <figure className="image is-4by5">
                      <img src={film.img} alt={film.title} />
                    </figure>
                  </div>
                  <div className="is-flex is-justify-content-space-between">
                    <p className="card-text">{film.title}</p>
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

export default MyFavourites;

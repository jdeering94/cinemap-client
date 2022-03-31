import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getAllLikedFilmsForUser } from '../api/films';
import { averageRating } from '../lib/ratingFunctions';

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
      <h1 className="title">My Favs</h1>
      {films ? (
        <div className="container">
          <div className="columns is-multiline">
            {films.map((film) => (
              <div
                key={film._id}
                className="column card m-3 is-one-fifth film-card"
              >
                <Link to={`/film/${film._id}`}>
                  <h2 className="card-header">
                    {film.title} - {film.country}
                  </h2>
                  <div className="card-image">
                    <figure className="image is-4by5">
                      <img src={film.img} alt={film.title} />
                    </figure>
                    {film.comments.length > 0 && (
                      <p>{averageRating(film)} ⭐️</p>
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

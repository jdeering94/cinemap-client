import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getAllFilmsByContinent } from '../api/films';
import { averageRating } from '../lib/ratingFunctions';

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
  return (
    <>
      <h1 className="title">Films from {titleContinent}</h1>
      {films ? (
        <div className="container">
          <div className="columns is-multiline">
            {films.map((film) => (
              <div key={film._id} className="column card m-3 is-one-fifth">
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

export default FilmsByContinent;

import React from 'react';
import { getFilmById, createComment, deleteComment } from '../api/films';
import { useParams } from 'react-router-dom';
import { getLoggedInUserId } from '../lib/authentication';
import { getCurrentUserById } from '../api/auth';

const ShowFilm = () => {
  const { filmId } = useParams();
  const [film, setFilm] = React.useState(null);
  const [commentValue, setCommentValue] = React.useState('');
  const [ratingValue, setRatingValue] = React.useState(null);
  const [username, SetUsername] = React.useState(getLoggedInUserId());

  React.useEffect(() => {
    const getData = async () => {
      const filmdata = await getFilmById(filmId);
      const user = await getCurrentUserById(getLoggedInUserId());
      SetUsername(user.username);
      setFilm(filmdata);
    };
    getData();
  }, []);

  if (!film) {
    return <p>Loading...</p>;
  }

  const handleCommentChange = (e) => {
    setCommentValue(e.target.value);
  };
  const handleRatingChange = (e) => {
    setRatingValue(e.target.value);
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    const data = await createComment(filmId, {
      text: commentValue,
      rating: ratingValue,
      username: username,
    });
    setCommentValue('');
    setFilm(data);
  };

  const handleCommentDelete = async (commentId) => {
    const data = await deleteComment(filmId, commentId);
    console.log('comment deleted');
    setFilm(data);
    console.log('comment deleted and film updated');
  };

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

          <form onSubmit={handleCommentSubmit}>
            <div className="form">
              <label htmlFor="comment" className="label">
                Post a new a Comment
              </label>
              <div className="control">
                <textarea
                  name="text"
                  className="input"
                  value={commentValue}
                  onChange={handleCommentChange}
                ></textarea>
                <input
                  type="number"
                  name="rating"
                  min="1"
                  max="10"
                  value={ratingValue}
                  onChange={handleRatingChange}
                />
                <input type="submit" value="Post Comment" />
              </div>
            </div>
          </form>

          <div>
            {film.comments.map((comment) => {
              return (
                <div key={comment._id}>
                  <p>{comment.text}</p>
                  <p>{comment.rating}/10</p>
                  <p>{comment.username}</p>
                  {getLoggedInUserId() === comment.createdBy && (
                    <button
                      key={comment._id}
                      type="button"
                      className="button is-danger"
                      onClick={() => handleCommentDelete(comment._id)}
                    >
                      Delete Comment
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowFilm;

import React from 'react';
import { Rating } from 'react-simple-star-rating';
import {
  getFilmById,
  createComment,
  deleteComment,
  editComment,
  addLikedFilm,
  removeLikedFilm,
} from '../api/films';
import { useParams } from 'react-router-dom';
import {
  getLoggedInUserId,
  getLoggedInUsername,
  isAdmin,
} from '../lib/authentication';
import { averageRating, isLiked } from '../lib/ratingFunctions';
import { getCurrentUserById } from '../api/auth';

const ShowFilm = () => {
  const { filmId } = useParams();
  const [film, setFilm] = React.useState(null);
  const [commentValue, setCommentValue] = React.useState('');
  const [ratingValue, setRatingValue] = React.useState(1);
  const [liked, setLiked] = React.useState(null);
  const username = getLoggedInUsername();

  React.useEffect(() => {
    const getData = async () => {
      const filmdata = await getFilmById(filmId);
      if (window.sessionStorage.token) {
        const user = await getCurrentUserById(getLoggedInUserId());
        setLiked(isLiked(user, filmdata));
      }
      setFilm(filmdata);
    };
    getData();
  }, []);

  console.log('isAdmin', isAdmin());

  if (!film) {
    return <p>Loading...</p>;
  }

  const handleCommentChange = (e) => {
    setCommentValue(e.target.value);
  };

  const handleRating = (rate) => {
    setRatingValue(rate / 10);
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (
      film.comments.some((comment) => comment.createdBy === getLoggedInUserId())
    ) {
      window.alert('you have already reviewed this film!');
    } else {
      const data = await createComment(filmId, {
        text: commentValue,
        rating: ratingValue,
        username: username,
      });
      setCommentValue('');
      setRatingValue(1);
      setFilm(data);
    }
  };

  const handleCommentDelete = async (commentId) => {
    const data = await deleteComment(filmId, commentId);
    setFilm(data);
  };

  const handleCommentEdit = async () => {
    const commentObject = film.comments.find(
      (comment) => comment.createdBy === getLoggedInUserId()
    );
    const commentId = commentObject._id;
    console.log(commentId);
    const data = await editComment(filmId, commentId, {
      text: commentValue,
      rating: ratingValue,
    });
    setFilm(data);
  };

  const handleLikeButton = async () => {
    if (liked === true) {
      const data = await removeLikedFilm(filmId);
      setFilm(data);
      setLiked(false);
    } else {
      const data = await addLikedFilm(filmId);
      setFilm(data);
      setLiked(true);
    }
  };

  const average = averageRating(film);

  const canDelete = (comment) => {
    if (getLoggedInUserId() === comment.createdBy || isAdmin()) {
      return true;
    } else {
      return false;
    }
  };

  const hasReviewed = () => {
    if (
      film.comments.some((comment) => comment.createdBy === getLoggedInUserId())
    ) {
      return true;
    } else {
      return false;
    }
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
            <p>
              <strong>Country of Origin:</strong> {film.country}
            </p>
            <p>
              <strong>Director: </strong>
              {film.director}
            </p>
            <p>
              <strong>Released in:</strong> {film.releaseYear}
            </p>
            <p>
              <strong>Runtime:</strong> {film.runTime} min
            </p>
            <p>
              <strong>Description:</strong> {film.description}
            </p>
            <p>
              <strong>Likes:</strong> {film.likedBy.length}
            </p>
            {average ? (
              <p>
                <strong>Average Rating:</strong> {average}
              </p>
            ) : (
              <p>
                <strong>Not yet rated</strong>
              </p>
            )}
            {getLoggedInUserId() && (
              <>
                <button
                  className="like-button button is-info"
                  onClick={handleLikeButton}
                >
                  {liked ? '♥' : '♡'}
                </button>
              </>
            )}
          </div>

          {getLoggedInUserId() && (
            <form
              onSubmit={hasReviewed() ? handleCommentEdit : handleCommentSubmit}
            >
              <div className="form">
                <label htmlFor="comment" className="label">
                  {hasReviewed() ? 'Edit your Review!' : 'Post a Review!'}
                </label>
                <div className="control">
                  <textarea
                    name="text"
                    className="input"
                    value={commentValue}
                    onChange={handleCommentChange}
                  ></textarea>
                  <Rating
                    onClick={handleRating}
                    value={ratingValue}
                    iconsCount={10}
                  />
                  <input
                    type="submit"
                    value={hasReviewed() ? 'Edit Review' : 'Post Review'}
                    className="button"
                  />
                </div>
              </div>
            </form>
          )}

          {film.comments.length > 0 && (
            <div className="card p-4 m-3">
              <h1>Reviews</h1>
              {film.comments.map((comment) => {
                return (
                  <div key={comment._id}>
                    <p>{comment.text}</p>
                    <p>{comment.rating} ⭐️</p>
                    <p>{comment.username}</p>
                    {canDelete(comment) && (
                      <button
                        key={comment._id}
                        type="button"
                        className="button is-danger"
                        onClick={() => handleCommentDelete(comment._id)}
                      >
                        Delete Review
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShowFilm;

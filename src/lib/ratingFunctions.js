export function averageRating(film) {
  const ratingArray = film.comments.map((comment) => {
    return comment.rating;
  });
  const average = ratingArray.reduce((a, b) => a + b, 0) / ratingArray.length;
  return average;
}

export function isLiked(user, film) {
  if (film.likedBy.includes(user._id)) {
    return true;
  } else return false;
}

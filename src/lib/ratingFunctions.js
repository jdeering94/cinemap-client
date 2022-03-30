export function averageRating(film) {
  const ratingArray = film.comments.map((comment) => {
    return comment.rating;
  });
  const average = ratingArray.reduce((a, b) => a + b, 0) / ratingArray.length;
  return average;
}

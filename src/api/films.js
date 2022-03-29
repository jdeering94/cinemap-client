import axios from 'axios';

export const getAllFilms = async () => {
  const options = {
    method: 'GET',
    url: '/api/film',
  };

  const { data } = await axios.request(options);
  return data;
};

export const getAllFilmsByContinent = async (continent) => {
  const options = {
    method: 'GET',
    url: `/api/film/continent/${continent}`,
  };

  const { data } = await axios.request(options);
  return data;
};

export const createFilm = async (filmData) => {
  const options = {
    method: 'POST',
    url: '/api/film',
    data: filmData,
  };

  const { data } = await axios.request(options);
  return data;
};

export const getAllLikedFilmsForUser = async (userId) => {
  const options = {
    method: 'GET',
    url: `/api/users/${userId}`,
    headers: {
      authorization: `Bearer ${window.sessionStorage.getItem('token')}`,
    },
  };

  const { data } = await axios.request(options);
  return data;
};

export const getFilmById = async (filmId) => {
  const options = {
    method: 'GET',
    url: `/api/film/${filmId}`,
  };

  const { data } = await axios.request(options);
  return data;
};

export const createComment = async (filmId, comment) => {
  const options = {
    method: 'POST',
    url: `/api/film/${filmId}/comments`,
    data: comment,
    headers: {
      authorization: `Bearer ${window.sessionStorage.getItem('token')}`,
    },
  };

  const { data } = await axios.request(options);
  return data;
};

export const deleteComment = async (filmId, commentId) => {
  const options = {
    method: 'DELETE',
    url: `/api/film/${filmId}/comment/${commentId}`,
    headers: {
      authorization: `Bearer ${window.sessionStorage.getItem('token')}`,
    },
  };

  const { data } = await axios.request(options);
  return data;
};

export const addLikedFilm = async (filmId) => {
  const options = {
    method: 'PUT',
    url: `/api/film/${filmId}/like`,
    headers: {
      authorization: `Bearer ${window.sessionStorage.getItem('token')}`,
    },
  };

  const { data } = await axios.request(options);
  return data;
};
export const removeLikedFilm = async (filmId) => {
  const options = {
    method: 'PUT',
    url: `/api/film/${filmId}/removeLike`,
    headers: {
      authorization: `Bearer ${window.sessionStorage.getItem('token')}`,
    },
  };

  const { data } = await axios.request(options);
  return data;
};

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

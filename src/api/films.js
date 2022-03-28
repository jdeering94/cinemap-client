import axios from 'axios';

export const getAllFilms = async () => {
  const options = {
    method: 'GET',
    url: '/api/film',
  };

  const { data } = await axios.request(options);
  return data;
};

import axios from 'axios';

export const loginUser = async (credentials) => {
  const options = {
    method: 'POST',
    url: '/api/login',
    data: credentials,
  };

  const { data } = await axios.request(options);
  if (data.token) {
    window.sessionStorage.setItem('token', data.token);
  } else {
    window.sessionStorage.removeItem('token');
  }
  console.log(data);
  return data.message;
};

export const registerUser = async (credentials) => {
  const options = {
    method: 'POST',
    url: '/api/register',
    data: credentials,
  };

  const { data } = await axios.request(options);
  console.log(data);
  return data.message;
};

export const getCurrentUserById = async (userId) => {
  const options = {
    method: 'GET',
    url: `/api/users/currentUser/${userId}`,
    headers: {
      authorization: `Bearer ${window.sessionStorage.getItem('token')}`,
    },
  };

  const { data } = await axios.request(options);
  return data;
};

export const getToken = () => {
  return window.sessionStorage.getItem('token');
};

export const setToken = (token) => {
  window.sessionStorage.setItem('token', token);
};

export const removeToken = () => {
  window.sessionStorage.removeItem('token');
};

export const removeUserId = () => {
  window.sessionStorage.removeItem('userId');
};

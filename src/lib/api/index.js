import axios from 'axios';
import { saveToken } from '../auth';
import { API_URL } from './api.config';

export const getData = (path) => {
  axios
    .get(`${API_URL}${path}`)
    .then((res) => console.log(res))
    .catch((error) => console.log(error));
};

export const postData = (id, body, error = 'error') => {
  axios
    .post(`${API_URL}${id}`, body, {
      headers: {
        'Content-type': 'application/json',
      },
    })
    .then((res) => {
      saveToken(res.data.token);
      document.location.href = '/';
    })
    .catch((res) => alert(error));
};

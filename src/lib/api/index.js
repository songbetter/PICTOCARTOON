import axios from 'axios';
import { useEffect } from 'react';
import { saveToken } from '../auth';
import { API_URL } from './api.config';

export const useGetData = (path, pending, func, deps = []) => {
  useEffect(() => {
    const getData = async () => {
      pending(true);
      await axios
        .get(path)
        .then((res) => func(res.data))
        .catch((error) => console.log(error));
      pending(false);
    };
    getData();
  }, deps);
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

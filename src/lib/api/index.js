import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { API_URL, CONTENT_TYPE, SERVICE_URL } from './api.config';
import { saveToken } from '../auth';

export const useGetData = (path, pending, func, deps = []) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      dispatch(pending(true));
      await axios
        .get(path)
        .then((res) => dispatch(func(res.data)))
        .catch((error) => console.log(error));
      dispatch(pending(false));
    };
    getData();
  }, deps);
};

export const postData = (id, body, error = 'error') => {
  axios
    .post(`${API_URL}${id}`, body, {
      headers: {
        'Content-type': CONTENT_TYPE,
      },
    })
    .then((res) => {
      saveToken(res.data.token);
      document.location.href = SERVICE_URL;
    })
    .catch((res) => alert(error));
};

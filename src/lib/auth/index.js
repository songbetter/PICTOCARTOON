export const getToken = () => {
  return {
    token: window.localStorage.getItem('token'),
  };
};

export const saveToken = (token) => {
  window.localStorage.setItem('token', token);
};

export const destroyToken = () => {
  window.localStorage.removeItem('token');
};

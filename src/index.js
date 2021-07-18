import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../src/lib/styles/globalstyles';
import { theme } from '../src/lib/styles/theme';
import Routes from './Routes';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './modules';

const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

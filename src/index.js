import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Routes from './Routes';
import rootReducer from './modules';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../src/lib/styles/globalstyles';
import { theme } from '../src/lib/styles/theme';

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

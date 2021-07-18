import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
${normalize}

html,
body {
  padding: 0;
  margin: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

input, button, select {
    background-color: transparent;
    border: none;
    outline: none;
  }

* {
  box-sizing: border-box;
}
`;

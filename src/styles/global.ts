import { createGlobalStyle } from 'styled-components';

const headings = [1, 2, 3, 4, 5, 6].map(number => `h${number}`).join(', ');

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    outline: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;

    &:not(${headings}) {
      font-family: Arial, Helvetica, sans-serif;
    }
  }

  ${headings} {
    font-family: monospace;
  }

  html, body, #root {
    background-color: ${({ theme: { colors } }) => colors.primary};
    height: 100%;
  }

  body, input, button {
    font-family: Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }
`;

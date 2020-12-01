import { createGlobalStyle } from 'styled-components';

const headings = [1, 2, 3, 4, 5, 6].map(number => `h${number}`).join(', ');

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    outline: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;

    ::selection {
      background: #000;
      color: ${({ theme: { colors } }) => colors.texts};
    }

    &:not(${headings}) {
      font-family: Arial, Helvetica, sans-serif;
    }
  }

  ${headings} {
    font-family: 'Sedgwick Ave Display', cursive;
  }

  html, body, #root {
    background: linear-gradient(46.79deg, #08B8E7 19.7%, #61DAFB 127.6%);
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

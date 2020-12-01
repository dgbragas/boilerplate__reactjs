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
      background: ${({ theme: { colors } }) => colors.texts};
      color: #fff;
    }

    &:not(${headings}) {
      font-family: Arial, Helvetica, sans-serif;
    }
  }

  ${headings} {
    font-family: 'Sedgwick Ave Display', cursive;
  }

  html, body, #root {
    background: linear-gradient(64.65deg, #E4A126 -24.78%, #F0C725 87.07%);
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

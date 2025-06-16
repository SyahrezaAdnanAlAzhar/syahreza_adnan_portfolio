import { createGlobalStyle } from 'styled-components';

const monokai = {
  background: '#272822',
  foreground: '#F8F8F2',
  comment: '#75715E',
  purple: '#AE81FF',
  orange: '#FD971F',
  blue: '#66D9EF',
  green: '#A6E22E',
  red: '#F92672',
};

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Audiowide&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700;900&display=swap');

  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    background-color: ${monokai.background};
    color: ${monokai.foreground};
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3 {
    font-weight: 900;
    line-height: 1.2;
    color: ${monokai.blue}; 
  }

  a {
    text-decoration: none;
    color: inherit;
  }

`;

export default GlobalStyles;
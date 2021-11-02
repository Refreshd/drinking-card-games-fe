import { createGlobalStyle } from "styled-components";
import { COLORS, FONTSIZES, SIZES } from "../../constants/styles";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html,
  body {
    min-height: 100vh;
  }

  html {
    min-height: -webkit-fill-available;
    font-size: ${SIZES[1]}px;
  }

  body {
    min-height: -webkit-fill-available;
    margin: 0;
    color: ${COLORS.brandWhite};
    font-size: ${FONTSIZES.base}rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${COLORS.brandBlack};
  }
`

export default GlobalStyles
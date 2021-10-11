import {createGlobalStyle} from "styled-components";
import {ThemeType} from "./theme";


export const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    text-decoration: none;
    font-size: ${props => props.theme.textSize.main};
  }

  h1, button {
    font-family: Comic Sans MS, Comic Sans, cursive;
  }

  #root {
    margin: 0 auto;
  }

  body {
    background-color: ${props => props.theme.backgroundColor.main};

    a {
      color: ${props => props.theme.Link.color};
      text-decoration: ${props => props.theme.Link.decoration};
      transition: ${props => props.theme.Link.transition};

      &:hover {
        color: ${props => props.theme.Link.hoverColor};
      }
    }
  }
`
import styled from "styled-components";
import {FlexCenter} from "../styles";

export const HomepageWrapper = styled.div`
  margin-top: 80px;
min-width: 1300px;
  ${FlexCenter}
  & h1 {
    font-size: ${props => props.theme.textSize.redirect};
    color: white;
  }
`

import styled from "styled-components";
import {FlexCenter} from "../styles";

export const DashBoardContainer = styled.div`
  color: ${props => props.theme.textColors.main};
  height: 90vh;
  overflow-y: hidden;
  ${FlexCenter};
  min-width: 1300px;
`

export const PaintWrapper = styled.div`
  padding: 20px;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  border: 2px solid red;
`
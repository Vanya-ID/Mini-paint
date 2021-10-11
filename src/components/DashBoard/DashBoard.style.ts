import styled from "styled-components";
import {FlexCenter} from "../../shared/styles";

export const DashBoardContainer = styled.div`
  color: ${props => props.theme.textColors.main};
  height: 90vh;
  overflow-y: hidden;
  ${FlexCenter};
  min-width: 1300px;
`

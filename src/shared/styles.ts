import styled, {css} from "styled-components";
import {Button} from "../controls/Button/Button";

export const FormButton = styled(Button)<{ width?: string, marginRight?: string }>`
  width: ${props => props.width ? props.width : '140px'};
  margin-right: ${props => props.marginRight ?? '0'};
  padding: 2px;
  height: 37px;
  border-radius: 15px;
  background-color: #d2c1b5;
  border: none;
  cursor: pointer;
  transition: all 0.5s;

  &:hover {
    background-color: #928880;
  }
  
  &:disabled{
    color: transparent;
    background-color: transparent;
    cursor: default;
  }
`

type FlexCenterType = {
    justify?: string
}

export const FlexCenter = ({justify}: FlexCenterType) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${justify ?? 'center'};
`

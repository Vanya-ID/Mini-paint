import styled from "styled-components";
import {FlexCenter} from "../../shared/styles";

export const CollectionsContainer = styled.div`
  background-color: ${props => props.theme.backgroundColor.main};
  margin-top: 30px;
  ${FlexCenter};
  min-width: 1300px;
`

export const CollectionsWrapper = styled.div`
  border: 4px solid ${props => props.theme.borders.paint};
  background-color: ${props => props.theme.backgroundColor.button};
  border-radius: 10px;
  color: ${props => props.theme.textColors.dark};
  min-width: 1300px;
}

input {
  box-sizing: border-box;
  padding: 4px 10px 4px 10px;
  margin-right: 20px;
  border: none;
  color: ${props => props.theme.textColors.main};
  border-radius: ${props => props.theme.borders.inputRadius};
  width: 320px;
  height: 37px;
  background-color: ${props => props.theme.backgroundColor.input};

  &::placeholder {
    color: ${props => props.theme.textColors.placeholder};
  }
`

export const SearchWrapper = styled.div`
  background-color: ${props => props.theme.backgroundColor.button};
  width: 100%;
  min-height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`
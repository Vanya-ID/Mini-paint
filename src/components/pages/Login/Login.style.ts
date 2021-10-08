import styled from "styled-components";
import {FlexCenter} from "../../styles";

export const FormContainer = styled.div`
  ${FlexCenter({justify: 'space-evenly'})}
  border: ${props => props.theme.borders.modal};
  border-radius: ${props => props.theme.borders.modalRadius};
  background-color: ${props => props.theme.backgroundColor.modal};
  width: 680px;
  color: ${props => props.theme.textColors.main};
  margin-top: 30px;
  min-height: 450px;

  & h1 {
    font-size: ${props => props.theme.textSize.title};
    padding-right: 32px;
  }
`

export const FormSection = styled.section`
  width: 100vw;
  min-width: 1300px;
  display: flex;
  justify-content: center;
`

export const FormWrapper = styled.form`
  min-height: 300px;

  ${FlexCenter({justify: 'space-between'})}
  & input {
    box-sizing: border-box;
    padding: 4px 10px 4px 10px;
    border: none;
    color: ${props => props.theme.textColors.main};
    border-radius: ${props => props.theme.borders.inputRadius};
    width: 320px;
    height: 37px;
    background-color: ${props => props.theme.backgroundColor.input};

    &::placeholder {
      color: ${props => props.theme.textColors.placeholder};
    }
  }
`
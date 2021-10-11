import styled from "styled-components";
import {FlexCenter} from "../../shared/styles";

export const ModalBackground = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${props => props.theme.backgroundColor.dark};
  opacity: 0.7;
  z-index: 1;
  animation-name: backgroundAnime;
  animation-duration: .8s;
  @keyframes backgroundAnime {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 0.9;
    }
  }
`

export const Modal = styled.div`
  position: absolute;
  bottom: 50%;
  transform: translateY(50%);
  border-radius: 5px;
  padding: 25px;
  background-color: ${props => props.theme.backgroundColor.button};
  min-height: 200px;
  min-width: 350px;
  z-index: 2;
  animation-name: modalAnime;
  animation-duration: .6s;
  @keyframes modalAnime {
    0% {
      opacity: 0;
      bottom: 0;
      transform: translateY(0);
    }
    100% {
      opacity: 1;
      bottom: 50%;
      transform: translateY(50%);
    }
  }

  & h2 {
    color: ${props => props.theme.textColors.dark};
    font-size: ${props => props.theme.textSize.title};
  }
`

export const CloseModal = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  position: absolute;
  top: 0;
  right: 0;
  margin: 10px;
  display: flex;
  z-index: 5;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  font-weight: bold;
  transition: .3s;
  color: ${props => props.theme.textColors.dark};

  &:hover {
    cursor: pointer;
    background-color: ${props => props.theme.backgroundColor.dark};
    opacity: 0.4;
    color: ${props => props.theme.textColors.main};
  }
`

export const ModalContainer = styled.div`
  height: 250px;
  width: 400px;

  ${FlexCenter({justify: 'space-evenly'})}
  & input {
    padding: 4px 10px 4px 10px;
    border: none;
    color: ${props => props.theme.textColors.main};
    border-radius: ${props => props.theme.borders.inputRadius};
    background-color: ${props => props.theme.backgroundColor.input};

    &::placeholder {
      color: ${props => props.theme.textColors.placeholder}
    }
  }
`

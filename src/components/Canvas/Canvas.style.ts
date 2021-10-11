import styled from "styled-components";

export const CanvasContainer = styled.div`
  margin-top: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  border: 4px solid ${props => props.theme.borders.paint};
  border-radius: 10px;

  canvas {
    background-color: ${props => props.theme.backgroundColor.light};
  }
`
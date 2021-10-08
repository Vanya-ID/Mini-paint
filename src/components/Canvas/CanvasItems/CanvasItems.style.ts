import styled, {css} from "styled-components";

export const ItemsContainer = styled.div`
  width: 100%;
  min-height: 50px;
  background-color: ${props => props.theme.backgroundColor.button};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: ${props => props.theme.textColors.dark};
  padding-bottom: 2px;

   div {
    cursor: pointer;
  }

`

export const ChoseColor = styled.input`
  height: 30px;
  width: 30px;
  border: none;
  padding: 2px;
  cursor: pointer;
`

export const ChoseLineWidth = styled.input`
  height: 30px;
  border: none;
  cursor: pointer;
`

export const ShowWidth = styled.span`
  cursor: default;
  margin-right: 15px;
`

export const LineWidthWrapper = styled.div`
  display: flex;
  align-items: center;
`

type ItemsType = {
    width?: string,
    height?: string,
    radius?: string
}

const Items = ({width, height, radius}: ItemsType) => css`
  border: none;
  background: ${props => props.theme.backgroundColor.main};
  box-shadow: 2px 2px 4px #4e4540;
  width: ${width};
  height: ${height};
  border-radius: ${radius};
  cursor: pointer;
`

export const Rectangle = styled.button`
  ${Items({width: '50px', height: '20px'})};
`

export const Circle = styled.button`
  ${Items({width: '30px', height: '30px', radius: '50%'})};
`

export const Line = styled.button`
  ${Items({width: '60px', height: '5px'})};
`

export const Brush = styled.button`
  ${Items({width: '30px', height: '30px'})};
  img{
    width: 30px;
    height: 30px;
  }
`
export const Eraser = styled.button`
  ${Items({width: '30px', height: '30px'})};
  img{
    width: 30px;
    height: 30px;
  }
`















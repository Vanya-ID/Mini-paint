import styled from "styled-components";

export const ItemContainer = styled.div`
  h2 {
    padding-top: 10px;
  }

  img {
    background-color: ${props => props.theme.backgroundColor.light};
    width: 100%;
    height: 100%;
    border-radius: 20px;
  }

  
`

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme.backgroundColor.input};
  border-radius: 20px;
  color: ${props => props.theme.textColors.main};
  margin: 20px auto ;
  width: 80%;
`

export const ImgWrapper = styled.div`
  height: 400px;
  width: 70%;
  padding: 20px;
`
export const TitleWrapper = styled.div`
  padding-top: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`


import styled from "styled-components";

export type MsgProps = {
    type: string
}

export const MessageBlock = styled.article<MsgProps>`
  color: ${({type}) => type === 'danger' ? 'red' : 'green'};
  font-weight: bold;
  position: relative;
  min-height: 35px;
  width: 100%;

  & div {
    position: absolute;
  }
`
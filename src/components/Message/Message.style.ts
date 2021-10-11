import styled from "styled-components";

export type MsgProps = {
    type: string
}

export const MessageBlock = styled.article<MsgProps>`
  color: ${(props) => props.type === 'danger' ? props.theme.textColors.danger : props.theme.textColors.success};
  font-weight: bold;
  position: relative;
  min-height: 35px;
  width: 100%;

  & div {
    position: absolute;
  }
`
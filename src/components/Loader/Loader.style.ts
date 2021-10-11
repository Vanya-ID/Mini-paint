import styled from "styled-components";

export const LoaderContainer = styled.div`
  .preloader {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    border: 5px solid #81b5de;
    border-top-color: #0962ad;

    animation-name: spin;
    animation-duration: .5s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`
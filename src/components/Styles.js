import styled from 'styled-components';

export const Heading = styled.h1`
  text-align: center;
  
`;

export const Content = styled.div`
  overflowY: scroll;
  height: 2500px;

`;

export const Button = styled.div`
  position: fixed;
  width: 100%;
  left: 95%;
  bottom: 80px;
  font-size: 3rem;
  z-index: 1;
  cursor: pointer;
  .circle-resize {
    width: 100%;
  }
`;

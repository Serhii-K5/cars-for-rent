import styled from "styled-components";

export const H1 = styled.h1`
  text-align: center;
  font-size: 70px;
`;

export const P = styled.p`
  // marggin-top: 24px;
  font-size: 30px;
`;

export const A = styled.a`
  // color: inherit;  
  // color: var(--text-color-blue);
  text-align: center;
  // text-shadow: 1px 1px 0px rgba(0,0,0,0.5);

  color: rgba(0,0,0,0.6);
  text-shadow: 1px 1px 0px rgba(255,255,255,20);

  &:hover {
    color: var(--text-color-active-blue);
  }

  &.active {
    color: var(--text-color-active-blue);
  }
`;

export const H2 = styled.h2`
  text-align: center;
  font-size: 50px;
`;

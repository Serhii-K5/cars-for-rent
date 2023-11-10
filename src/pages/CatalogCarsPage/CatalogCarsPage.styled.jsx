import styled from 'styled-components';

export const Ul = styled.ul`
  display: flex;
  margin: 0 auto;
  max-width: 1440px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  column-gap: 29px;
  row-gap: 50px;
  padding-bottom: 30px;
`;

export const Button = styled.button`
  margin: 0 auto;
  width: 270px;
  height: 50px;
  align-items: center;
  justify-content: center;
  background-color: var(--text-color-blue);
  color: #FFF;
  font-family: inherit;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;
  border: none;
  border-radius: 12px;
  transition: background-color 250ms linear;
`
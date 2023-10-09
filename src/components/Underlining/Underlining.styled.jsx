import styled from 'styled-components';  

export const Underline = styled.div`  
  content: "";
  display: inline-block;
  position: absolute;
  width: 100%;
  height: 4px;
  padding: 0;
  bottom: 0;
  left: 0;

  border-radius: 2px;
  border: transparent;
  background-color: var(--bg-active-button-color);
`
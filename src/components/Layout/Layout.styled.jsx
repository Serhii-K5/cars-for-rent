import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.div`
  display: flex;
  // margin-bottom: 20px;
  gap: 20px;
  padding: 7px 16px;
  // box-shadow: 0px 4px 4px rgba(0,0,0,0.5);  
  max-width: 1440px;
  text-align: center;
`;

export const Div = styled.div`
  // margin-bottom: 50px;
  padding: 7px;
  background-color: transparent;
  box-shadow: 0px 4px 4px rgba(0,0,0,0.5);
  background: linear-gradient(to top, var(--bg-primary-green), var(--bg-second-green), var(--bg-second-green), var(--bg-primary-green)); 
`;

export const NavContainer = styled.nav`
  display: flex;
  margin: 0;
  align-items: center;
  gap: 30px;  
`;

export const NavLinkStyle = styled(NavLink)`
  color: #000;
  position: relative;
  font-size: 36px;
  font-weight: 700;  
  text-shadow: 1px 1px 0px rgba(255,255,255,20);
  
  &:hover {
    color: var(--text-color-active-blue);
  }

  &.active {
    color: var(--text-color-active-blue);
  }
`;

export const LoginBtn = styled.button`
  margin-left: auto; 
  background-color: transparent;
  border: none;
  font-size: larger;
  font-weight: 700;

  &:hover {
    color: var(--text-color-active-blue);
  }
`;

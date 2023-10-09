import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.div`
  display: flex;
  margin-bottom: 20px;
  gap: 20px;
  padding: 7px 16px;
  box-shadow: 0px 4px 4px rgba(0,0,0,0.5);
`;

export const Container = styled.div`
  margin: 0;
  padding: 7px;
  height: 50px;

`;

export const NavContainer = styled.nav`
  display: flex;
  margin: 0;
  align-items: center;
  gap: 16px;  
`;

export const NavLinkStyle = styled(NavLink)`
  color: #000;
  position: relative;
  font-size: larger;
  font-weight: 700;
  
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

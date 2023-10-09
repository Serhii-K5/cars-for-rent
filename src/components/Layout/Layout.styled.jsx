import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.div`
  display: flex;
  margin-bottom: 20px;
  gap: 20px;
`;

export const Container = styled.div`
  margin: 0;
  
`;

export const NavContainer = styled.nav`
  display: flex;
  margin: 0;
  gap: 16px;
  
`;

export const NavLinkStyle = styled(NavLink)`
  color: #000;
  position: relative;
  
  
`;

import styled from 'styled-components';
import { NavLink } from "react-router-dom";
import BgImg from "assets/images/auto/cars-rent.jpg";

export const Ul = styled.ul`
  display: flex;
  justify-content: center;
  padding: 16px 24px;
  color: var(--text-color-blue);
  gap: 30px;
  font-size: 30px;
  text-shadow: 1px 1px 0px rgba(0,0,0,0.5);
`;

export const A = styled.a`
  // color: inherit;  
  color: var(--text-color-blue);
  text-align: center;
  text-shadow: 1px 1px 0px rgba(0,0,0,0.5);
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  padding: 50px 16px 24px;
`;

export const Div = styled.div`
  width: 90%; 
  background-image: url(${BgImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-color: rgba(255, 0, 0, 0.5);
`;

export const H1 = styled.h1`
  text-align: center;
  font-size: 70px;
`;

export const P = styled.p`
  // marggin-top: 24px;
  font-size: 30px;
`;

export const H2 = styled.h2`
  text-align: center;
  font-size: 50px;
`;

export const Section = styled.section`
  margin-bottom: 30px;
`;

export const Img = styled.img`
  width: 300px;
`;

export const Aside = styled.aside`
  padding-left: 0.5rem;
  margin-left: 0.5rem;
  float: right;
  box-shadow: inset 5px 0 5px -5px #29627e;
  font-style: italic;
  color: #29627e;

  & > p {
    margin: 0.5rem;
  }
`
export const NavContainer = styled.nav`
  display: flex;
  margin: 0;  
  align-items: flex-start;
  gap: 15px;
  flex-direction: column;
`;

export const NavLinkStyle = styled(NavLink)`
  color: #000;
  position: relative;
  font-size: 36px;
  font-weight: 700;
  text-shadow: 1px 1px 0px rgba(0,0,0,0.3);
  
  &:hover {
    color: var(--text-color-active-blue);
  }

  &.active {
    color: var(--text-color-active-blue);
  }
`;



import { Outlet } from "react-router-dom";
import {
  Header,
  NavContainer,
  NavLinkStyle,
  Div,
} from "./Layout.styled";

import logo from "../../assets/images/logo.png";

export default function Layout() {
  
  return (
    <>
      <Div>
        <Header>
          <img src={logo} alt="Logo company" style={{width: "120px", boxShadow: "1px 1px 0px rgba(255,255,255)"}} />
          <NavContainer>
            <NavLinkStyle to="/" >
                Home
            </NavLinkStyle>
            <NavLinkStyle to="/catalog">
              Catalog
            </NavLinkStyle>
            <NavLinkStyle to="/favorites">Favorites</NavLinkStyle>
          </NavContainer>
        </Header>
      </Div>
      
      <div>
        <Outlet />
      </div>
    </>    
  );
}

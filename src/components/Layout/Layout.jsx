// import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import {
  Header,
  Container,
  NavContainer,
  NavLinkStyle,
} from "./Layout.styled";

import Underlining from "../Underlining/Underlining";

import logo from "../../assets/images/logo.png";

export default function Layout() {
  // const [isRegistered, setIsRegistered] = useState(false);
  // const [isLogInShown, setLogInShown] = useState(false);
  // const [isLogOutShown, setLogOutShown] = useState(false);
  
  // const onOpenModal = () => {
  //   setIsRegistered(isRegistered);
  // };

  return (
    <>
      <Header>
        <img src={logo} alt="Logo company" style={{width: "120px"}} />
        <NavContainer>
          <NavLinkStyle to="/">
            Home
            <Underlining />
          </NavLinkStyle>
          <NavLinkStyle to="/catalog">
            Catalog            
            <Underlining />
          </NavLinkStyle>
          {/* {isRegistered && <NavLinkStyle to="/favorites">Favorites</NavLinkStyle>} */}
          {/* <NavLinkStyle to="/favorites">{isRegistered ? "LogOut" : "LogIn" }</NavLinkStyle> */}
          {/* {isRegistered ? "LogOut" : "LogIn" } */}
        </NavContainer>
        {/* {isRegistered && <button onClick={}>"LogOut"</button> }
        {!isRegistered && <button onClick={ }>"LogIn"</button>}
        {isLogInShown && <LogIn card={card} onClose={onCloseModal} />}
        {isLogInShown && <LogIn card={card} onClose={onCloseModal} />} */}
      </Header>
      <Container>
        <Outlet />
      </Container>
    </>    
  );
}

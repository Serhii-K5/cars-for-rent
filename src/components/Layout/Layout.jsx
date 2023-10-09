import { useState, useEffect } from "react";
import { BiLogIn } from 'react-icons/bi';
import { TbLogin } from 'react-icons/tb';
import { Outlet } from "react-router-dom";
import {
  Header,
  Container,
  NavContainer,
  NavLinkStyle,
  LoginBtn,
} from "./Layout.styled";

import logo from "../../assets/images/logo.png";

export default function Layout() {
  const [isRegistered, setIsRegistered] = useState(false);
  // const [isRegistered, setIsRegistered] = useState(false);
  // const [isLogInShown, setLogInShown] = useState(false);
  // const [isLogOutShown, setLogOutShown] = useState(false);
  // const [isUnderlineShown, setUnderlineShown] = useState(1);
  
  // const onUnderliningShow = (page) => {
  //   setUnderlineShown(page);
  // };
  const handleLog = () => {
    return
    setIsRegistered(!isRegistered);
  };
  
  // useEffect(() => {
  //   const handleKeyDown = (event) => {
  //     if (event.code === "Escape") {
  //       onClose();
  //     }
  //   };
  //   window.addEventListener("keydown", handleKeyDown);
  //   return () => {
  //     window.removeEventListener("keydown", handleKeyDown);
  //   };
  // }, [onClose]);

  return (
    <>
      <Header>
        <img src={logo} alt="Logo company" style={{width: "120px"}} />
        <NavContainer>
          <NavLinkStyle to="/" >
              Home
          </NavLinkStyle>
          <NavLinkStyle to="/catalog">
            Catalog
          </NavLinkStyle>
          {isRegistered && <NavLinkStyle to="/favorites">Favorites</NavLinkStyle>}
          {/* <NavLinkStyle to="/favorites">{isRegistered ? "LogOut" : "LogIn" }</NavLinkStyle> */}
          {/* {isRegistered ? "LogOut" : "LogIn" } */}
        </NavContainer>
        {isRegistered && <LoginBtn onClick={handleLog}>LogOut <TbLogin /></LoginBtn> }
        {!isRegistered && <LoginBtn onClick={handleLog }>LogIn <BiLogIn/></LoginBtn>}
        {/* {isLogInShown && <LogIn card={card} onClose={onCloseModal} />}
        {isLogInShown && <LogIn card={card} onClose={onCloseModal} />} */}
      </Header>
      <Container>
        <Outlet />
      </Container>
    </>    
  );
}

import Link from "next/link";
import React, { useState } from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineMenu,
  AiOutlineCloseCircle,
} from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";
import useWindowDimensions from "../../hooks/window-dimension";

import {
  Container,
  Div1,
  Div2,
  Div3,
  Div4,
  Div5,
  Div6,
  Div7,
  NavLink,
  SocialIcons,
  Span,
  Img,
} from "./HeaderStyles";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const [showCloseButton, setShowCloseButton] = useState(false);
  const width = useWindowDimensions().width;
  const isMobile = width < 768;

  const handleMenuClick = () => {
    setShowNav(true);
    setShowCloseButton(true);
  };

  const handleCloseButton = () => {
    setShowNav(false);
    setShowCloseButton(false);
  };
  return (
    <Container>
      <Div1>
        <Link href="/">
          <a
            style={{
              zIndex: "10",
              display: "flex",
              alignItems: "center",
              color: "white",
              marginBottom: "15px",
              marginRight: "25px",
            }}
          >
            <Img src="./images/pp4.png"></Img>
            <Span>&nbsp;Nasyx Nadeem</Span>
          </a>
        </Link>
        <Div7></Div7>
      </Div1>
      {!isMobile && (
        <Div2>
          <li>
            <Link href="#projects">
              <NavLink>Projects</NavLink>
            </Link>
          </li>
          <li>
            <Link href="#tech">
              <NavLink>Technologies</NavLink>
            </Link>
          </li>
          <li>
            <Link href="#about">
              <NavLink>About</NavLink>
            </Link>
          </li>
        </Div2>
      )}
      {!isMobile && (
        <Div3>
          <SocialIcons href="https://github.com">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://linkedin.com">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://instagram.com">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
        </Div3>
      )}
      {isMobile && !showCloseButton && (
        <Div3>
          <SocialIcons onClick={handleMenuClick}>
            <AiOutlineMenu size="3rem" />
          </SocialIcons>
        </Div3>
      )}

      {isMobile && showCloseButton && (
        <Div3>
          <SocialIcons onClick={handleCloseButton}>
            <AiOutlineCloseCircle size="3rem" />
          </SocialIcons>
        </Div3>
      )}
      {isMobile && showCloseButton && (
        <Div4>
          <Div5>
            <li>
              <Link href="#projects">
                <NavLink onClick={handleCloseButton}>Projects</NavLink>
              </Link>
            </li>
            <li>
              <Link href="#tech">
                <NavLink onClick={handleCloseButton}>Technologies</NavLink>
              </Link>
            </li>
            <li>
              <Link href="#about">
                <NavLink onClick={handleCloseButton}>About</NavLink>
              </Link>
            </li>
          </Div5>
          <Div6>
            <SocialIcons href="https://github.com">
              <AiFillGithub size="3rem" />
            </SocialIcons>
            <SocialIcons href="https://linkedin.com">
              <AiFillLinkedin size="3rem" />
            </SocialIcons>
            <SocialIcons href="https://instagram.com">
              <AiFillInstagram size="3rem" />
            </SocialIcons>
          </Div6>
        </Div4>
      )}
    </Container>
  );
};

export default Header;

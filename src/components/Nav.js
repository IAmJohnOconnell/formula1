import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import f1Logo from "../assets/generalPhotos/f1logo.png";

const NavContainer = styled.nav`
  width: 100%;
  display: flex;
  z-index: 10;

  a {
    padding: 1rem;
    color: #f1f1f1;
    text-decoration: none;
    font-family: "Formula1";
    font-size: 14px;
  }

  a:hover {
    color: #e10600;
  }

  @media screen and (max-width: 500px) {
    position: absolute;
    display: ${(props) => (props.isOpen ? "flex" : "none")};
    flex-direction: column;
    background: #131313;
  }
`;

const Logo = styled.div`
  .f1Logo {
    margin-left: 2rem;
    max-width: 80px;
    width: 100%;

    @media screen and (max-width: 500px) {
      display: ${(props) => (props.isOpen ? "flex" : "none")};
    }
  }
`;

const HamburgerIcon = styled.div`
  display: none;
  flex-direction: column;
  padding: 1rem;
  gap: 5px;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  background-color: #15151e;

  .line1,
  .line2,
  .line3 {
    width: 20px;
    height: 2px;
    background-color: white;
    border-radius: 5px;
    transition: all 0.3s ease;
  }

  ${(props) =>
    props.isOpen &&
    `
    .line1 {
      transform: rotate(-45deg) translate(-5px, 5px);
    }
    .line2 {
      opacity: 0;
    }
    .line3 {
      transform: rotate(45deg) translate(-5px, -5px);
    }
  `}

  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
  }
`;

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <HamburgerIcon onClick={toggleMenu} isOpen={isMenuOpen}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </HamburgerIcon>
      <NavContainer isOpen={isMenuOpen}>
        <Logo>
          <img className="f1Logo" src={f1Logo} alt="" />
        </Logo>
        <Link to="/" onClick={() => setIsMenuOpen(false)}>
          Home
        </Link>
        <Link to="/teams" onClick={() => setIsMenuOpen(false)}>
          Teams
        </Link>
        <Link to="/drivers" onClick={() => setIsMenuOpen(false)}>
          Drivers
        </Link>
        <Link to="/standings" onClick={() => setIsMenuOpen(false)}>
          Standings
        </Link>
        <Link to="/races" onClick={() => setIsMenuOpen(false)}>
          Races
        </Link>
        <Link to="/results" onClick={() => setIsMenuOpen(false)}>
          Results
        </Link>
      </NavContainer>
    </>
  );
};

export default Nav;

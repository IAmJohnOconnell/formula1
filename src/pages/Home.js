import React from "react";
import styled from "styled-components";
import Nav from "../components/Nav";
import whiteRedBull3 from "../assets/generalPhotos/whiteRedBull3.jpeg";
import { Link } from "react-router-dom";

const StyledHome = styled.div`
  .bg-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    object-fit: cover;
    z-index: -1;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: linear-gradient(
      rgba(0, 0, 0, 0.3) 0%,
      rgba(0, 0, 0, 0.6) 70%,
      rgba(0, 0, 0, 0.9) 100%
    );

    z-index: -1;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 2rem;
  width: 100%;

  h1 {
    margin-bottom: 0;
    text-shadow: 0px 3px 6px rgba(0, 0, 0, 0.95);
    font-family: "Formula1";
    font-size: clamp(1.5rem, 4.5vw, 3.5rem);
    color: #ff1e00;
    color: white;

    @media screen and (max-width: 500px) {
      margin: 0 auto;
      text-shadow: 0px 3px 6px rgba(0, 0, 0, 0.15);
    }
  }

  h2 {
    color: white;
    font-family: "formula1";
    font-size: clamp(1rem, 1.5vw, 1.2rem);
    text-shadow: 0px 3px 6px rgba(0, 0, 0, 0.95);
    margin: 1rem 2rem;
    max-width: 30ch;

    @media (max-width: 768px) {
      text-align: center;
      margin: 1rem auto;
      padding-inline: 2rem;
    }

    @media screen and (max-width: 500px) {
      text-align: center;
      text-shadow: 0px 3px 6px rgba(0, 0, 0, 0.15);
    }
  }

  .ctaContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-inline: 2rem;
    gap: 1rem;

    @media (max-width: 768px) {
      flex-direction: column;
    }

    @media (max-width: 500px) {
      flex-wrap: wrap;
      gap: 3rem;
      padding-inline: 0.5rem;
      justify-content: center;
    }
  }

  .buttonContainer {
    display: flex;
    gap: 1rem;
  }

  @media screen and (max-width: 500px) {
    margin-top: 50%;
  }
`;

const Cta = styled.button`
  padding: 1rem;
  color: white;
  border-radius: 4px;
  background-color: #ff1e00;
  border: none;
  font-family: formula1-bold;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease;
  white-space: nowrap;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid #ff1e00;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.98);
  }

  @media screen and (max-width: 500px) {
    font-size: 0.8rem;
    letter-spacing: 1px;
    padding: 0.8rem;
  }
`;

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  padding-top: 1rem;
  padding-left: 2rem;
  text-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
  background: #131313;
  width: 100%;

  h1 {
    font-family: "Formula1-wide";
    font-size: clamp(1.2rem, 1.5vw, 2rem);
    color: white;

    @media screen and (max-width: 500px) {
      font-size: 1.2rem;
    }
  }

  h2 {
    font-family: "formula1";
    font-size: clamp(1rem, 1vw, 1.5rem;);
    margin: 1rem 0;
    color: #ff1e00;
  }

  @media screen and (max-width: 500px) {
    padding-left: 1rem;
    display: none;
  }
`;

const Home = () => {
  return (
    <StyledHome>
      <Nav className="navContainer" />
      <Header>
        <div className="ctaContainer">
          <h1>Experience Speed</h1>
          <div className="buttonContainer">
            <Link to="/results">
              <Cta>Race Results</Cta>
            </Link>
            <Link to="/standings">
              <Cta>View Standings</Cta>
            </Link>
          </div>
        </div>
        <h2>
          Stay updated with race results, standings, and info about the teams
          and drivers.
        </h2>
      </Header>
      <img src={whiteRedBull3} alt="f1" className="bg-img" />
      <Footer>
        <h1>Formula 1 Hub</h1>
        <h2>Your Pit Stop for All Things F1</h2>
      </Footer>
    </StyledHome>
  );
};

export default Home;

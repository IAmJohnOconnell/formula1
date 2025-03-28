import React from "react";
import styled from "styled-components";
import { getTeamColor } from "../services/utilitiesService";

const TeamText = styled.p`
  padding: 0.5em 1em;
  color: #919bb3;
  transition: all 0.3s ease;
  font-size: 1rem;
`;

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 -2px 0 hsla(0 0% 100% / 15%), 0px 0px 4px hsla(0 0% 0% / 50%);
  background-color: #2f2f2f;
  overflow: hidden;
  height: 250px;
  transition: all 0.3s ease;
  border-radius: 5px;

  header {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    padding: 1rem;
    padding-top: 0.5rem;
    font-size: 1.1rem;

    .number {
      font-family: "Formula1";
      color: white;
    }

    .flag {
      max-width: 32px;
      width: 100%;
    }
  }

  hr {
    display: block;
    background-color: ${(props) => props.teamColor};
    border: 2px solid ${(props) => props.teamColor};
    width: 100%;
  }

  &:hover {
    background-color: ${(props) => props.teamColor};

    ${TeamText} {
      color: white;
      font-weight: bold;
    }
  }
`;

const Name = styled.p`
  color: #f1f1f1;
`;

const NumberWrapper = styled.div`
  display: flex;
  gap: 0.5em;
`;

const CardBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;
  z-index: 1;
`;

const CardImg = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;

  img {
    width: 60%;
    margin: 0 auto;
    height: auto;
    display: block;
  }
`;

const removeDiacritics = (str) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

const Card = ({ photo, driverData, flag }) => {
  const teamColor = getTeamColor(driverData.team);

  return (
    <StyledCard teamColor={teamColor}>
      <header>
        <NumberWrapper>
          <div className="number">{driverData.number}</div>
        </NumberWrapper>
        <Name>{removeDiacritics(driverData.name)}</Name>
        <img
          className="flag"
          src={flag}
          alt={`${driverData.nationality} flag`}
        />
      </header>
      <hr />
      <TeamText>{driverData.team}</TeamText>

      <CardBody>
        <CardImg>
          <picture>
            <source type="image/avif" srcSet={photo} />
            <img src={driverData.photo} alt=""></img>
          </picture>
        </CardImg>
      </CardBody>
    </StyledCard>
  );
};

export default Card;

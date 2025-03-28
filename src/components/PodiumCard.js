import React from "react";
import styled from "styled-components";
import { ReactComponent as FirstPlace } from "../assets/icons/firstPlace.svg";
import { ReactComponent as SecondPlace } from "../assets/icons/secondPlace.svg";
import { ReactComponent as ThirdPlace } from "../assets/icons/thirdPlace.svg";
import {
  getPhotos,
  getDriverFlag,
  getTeamColor,
} from "../services/utilitiesService";

const StyledPodiumCard = styled.div`
  max-width: 250px;
  min-width: 200px;
  width: 100%;
  background-color: #f1f1f1;
  border-radius: 15px;
  align-items: flex-end;
  position: relative;

  .positionIcon {
    width: 80px;
    height: 80px;
    position: relative;
    z-index: 3;

    & path {
      fill: ${(props) => props.teamColor};
    }

    @media (max-width: 500px) {
      max-width: 150px;
    }
  }

  hr {
    width: 100%;
    background-color: ${(props) => props.teamColor};
    height: 8px;
    outline: none;
    border: none;
    z-index: 1;
    position: relative;
    margin: 0;
  }

  .top {
    max-height: 90px;
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    position: relative;
    z-index: 2;
    margin-bottom: -8px;
    padding-inline: 1rem;
  }

  .driverPhoto {
    max-width: 70%;
    margin-left: -10%;
    z-index: 2;
  }

  .driver {
    font-size: 1.5rem;
    padding: 1rem;
    background-color: #33363d;
    border: 2px solid #f1f1f1;
    border-top: none;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    z-index: 2;
    color: white;
    font-family: formula1;
    max-height: 90px;
    position: relative;
    z-index: 2;

    .firstFlag {
      display: flex;
      gap: 1rem;
      font-size: 14px;
    }

    .flag {
      max-width: 24px;
      width: 100%;
    }

    .lastName {
      display: flex;
      gap: 1rem;
      font-size: 25px;
    }
  }
`;

const PodiumCard = ({ driver, photo, position }) => {
  const getPositionIcon = () => {
    if (position === 1) {
      return <FirstPlace className="positionIcon" />;
    } else if (position === 2) {
      return <SecondPlace className="positionIcon" />;
    } else if (position === 3) {
      return <ThirdPlace className="positionIcon" />;
    }
    return <FirstPlace className="positionIcon" />;
  };

  const photos = getPhotos();
  let normalizedDriverName = `${driver.Driver.givenName.split(" ").join("")}${
    driver.Driver.familyName
  }`
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  let driverPhoto = photos.driver[normalizedDriverName];
  const flag = getDriverFlag(photos, driver.Driver.nationality);
  const teamColor = getTeamColor(driver.Constructor.name);

  return (
    <StyledPodiumCard teamColor={teamColor}>
      <div className="top">
        {getPositionIcon()}
        <img
          className="driverPhoto"
          src={driverPhoto}
          alt={`${driver.Driver.givenName.split(" ").join("")}${
            driver.Driver.familyName
          }`}
        />
      </div>
      <hr />
      <div className="driver">
        <div className="firstFlag">
          <p>{driver.Driver.givenName}</p>
          <img className="flag" src={flag} alt="" />
        </div>
        <p className="lastName">{driver.Driver.familyName}</p>
      </div>
    </StyledPodiumCard>
  );
};

export default PodiumCard;

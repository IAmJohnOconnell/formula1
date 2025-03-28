import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

//Driver Profile Photos
import albon from "../assets/profilePhotos/albon.avif";
import alonso from "../assets/profilePhotos/alonso.avif";
import antonelli from "../assets/profilePhotos/antonelli.avif";
import bearman from "../assets/profilePhotos/bearman.avif";
import bortoleto from "../assets/profilePhotos/bortoleto.avif";
import doohan from "../assets/profilePhotos/doohan.avif";
import gasly from "../assets/profilePhotos/gasly.avif";
import hadjar from "../assets/profilePhotos/hadjar.avif";
import hamilton from "../assets/profilePhotos/hamilton.avif";
import hulkenberg from "../assets/profilePhotos/hulkenberg.avif";
import lawson from "../assets/profilePhotos/lawson.avif";
import leclerc from "../assets/profilePhotos/leclerc.avif";
import norris from "../assets/profilePhotos/norris.avif";
import ocon from "../assets/profilePhotos/ocon.avif";
import piastri from "../assets/profilePhotos/piastri.avif";
import russell from "../assets/profilePhotos/russell.avif";
import sainz from "../assets/profilePhotos/sainz.avif";
import stroll from "../assets/profilePhotos/stroll.avif";
import tsunoda from "../assets/profilePhotos/tsunoda.avif";
import verstappen from "../assets/profilePhotos/verstappen.avif";

const driverProfilePhotos = {
  Albon: albon,
  Alonso: alonso,
  Antonelli: antonelli,
  Bearman: bearman,
  Bortoleto: bortoleto,
  Doohan: doohan,
  Gasly: gasly,
  Hadjar: hadjar,
  Hamilton: hamilton,
  Hulkenberg: hulkenberg,
  Lawson: lawson,
  Leclerc: leclerc,
  Norris: norris,
  Ocon: ocon,
  Piastri: piastri,
  Russell: russell,
  Sainz: sainz,
  Stroll: stroll,
  Tsunoda: tsunoda,
  Verstappen: verstappen,
};

const removeDiacritics = (str) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

const getLastName = (driver) => {
  let seperatedNames = driver.trim().split(" ");
  return seperatedNames[seperatedNames.length - 1];
};

const TeamInfo = () => {
  const location = useLocation();
  const [teamData, setTeamData] = useState();
  let constructor = location.state;

  useEffect(() => {
    if (location.state) {
      if (constructor.constructorProfile) {
        constructor.constructorProfile = JSON.parse(
          JSON.stringify(constructor.constructorProfile)
        );
      } else {
        constructor.constructorProfile = JSON.parse(
          JSON.stringify(constructor)
        );
      }

      if (constructor.constructorProfile.drivers) {
        constructor.constructorProfile.drivers =
          constructor.constructorProfile.drivers.map((driver) => {
            const lastName = getLastName(driver.name);
            const normalizedFamilyName = removeDiacritics(lastName);

            return {
              ...driver,
              driverProfilePhoto: driverProfilePhotos[normalizedFamilyName],
            };
          });
      }

      setTeamData(constructor);
    }
  }, [location.state, constructor]);

  if (!teamData) {
    return <div>Loading team data...</div>;
  }

  const TeamInfoPage = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    gap: 2rem;
    color: white;
    padding-inline: 2rem;
    padding-bottom: 2rem;
    max-width: 1300px;
    font-size: 1.2rem;

    img {
      width: 100%;
      max-width: 350px;
      height: auto;
    }

    .driverProfile {
      display: flex;
      gap: 1rem;

      @media (max-width: 500px) {
        flex-direction: column;
      }
    }

    .teamInfo {
      display: flex;
      gap: 2rem;
      justify-content: space-between;

      @media (max-width: 500px) {
        flex-direction: column;
      }
    }

    .teamBio {
      .header {
        font-family: "formula1";
        margin-bottom: 1rem;
        font-weight: bold;
        color: white;
      }

      .bio {
        white-space: pre-line;
      }
    }
  `;

  const TeamHeader = styled.div`
    padding-top: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .car {
      img {
        width: 100%;
        height: auto;
      }
    }

    @media (max-width: 500px) {
      flex-direction: column;
      align-items: center;
    }
  `;

  const TeamWrapper = styled.dl`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;

    dt {
      font-weight: bold;
    }
  `;

  const Drivers = styled.div`
    display: flex;
    font-size: 1rem;
    gap: 0.5rem;

    .driverProfilePhoto {
      font-family: "formula1";

      .driverInfo {
        display: flex;
        flex-direction: column;
        padding: 0.5rem;
        gap: 1rem;
      }
      :hover {
        background-color: #f1f1f1;
        color: black;
        transition: 0.5s ease;

        b {
          color: black;
          transition: 0.5s ease;
        }
      }
    }
  `;
  return (
    <>
      <TeamInfoPage>
        <TeamHeader>
          <picture>
            <source type="image/avif" srcSet={teamData.logo} />
            <img src={teamData.logo} alt={`${teamData.name} logo`}></img>
          </picture>
          <picture className="car">
            <source type="image/avif" srcSet={teamData.car} />
            <img src={teamData.logo} alt={`${teamData.name} logo`}></img>
          </picture>
        </TeamHeader>
        <div className="teamInfo">
          <TeamWrapper>
            <dt>Team Name: </dt>
            <dd>{teamData.constructorProfile.teamName}</dd>

            <dt>Base: </dt>
            <dd>{teamData.constructorProfile.base}</dd>

            <dt>Team Chief: </dt>
            <dd>{teamData.constructorProfile.teamPrincipal}</dd>

            <dt>Technical Chief: </dt>
            <dd>{teamData.constructorProfile.technicalChief}</dd>

            <dt>Chassis: </dt>
            <dd>{teamData.constructorProfile.chassis}</dd>

            <dt>Power Unit: </dt>
            <dd>{teamData.constructorProfile.powerUnit}</dd>

            <dt>First Team Entry: </dt>
            <dd>{teamData.constructorProfile.firstEntry}</dd>

            <dt>World Championships: </dt>
            <dd>{teamData.constructorProfile.worldChampionships}</dd>
          </TeamWrapper>
          <Drivers>
            {teamData.constructorProfile.drivers.map((driver) => {
              return (
                <div className="driverProfilePhoto" key={driver.name}>
                  <picture>
                    <source
                      type="image/avif"
                      srcSet={driver.driverProfilePhoto}
                    />
                    <img
                      src={driver.driverProfilePhoto}
                      alt={`${driver.name}`}
                    ></img>
                  </picture>
                  <div className="driverInfo">
                    <p>
                      <b>{driver.number}</b>
                    </p>
                    <h3>{driver.name}</h3>
                    <p>{teamData.name}</p>
                  </div>
                </div>
              );
            })}
          </Drivers>
        </div>
        <div className="teamBio">
          <p className="header">Biography: </p>
          <div className="bio">{teamData.constructorProfile.bio}</div>
        </div>
      </TeamInfoPage>
    </>
  );
};

export default TeamInfo;

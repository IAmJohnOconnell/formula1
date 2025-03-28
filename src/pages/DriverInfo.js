import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
//Driver Helmet Photos
import albonHelmet from "../assets/helmets/albon.avif";
import alonsoHelmet from "../assets/helmets/alonso.avif";
import antonelliHelmet from "../assets/helmets/antonelli.avif";
import bearmanHelmet from "../assets/helmets/bearman.avif";
import bortoletoHelmet from "../assets/helmets/bortoleto.avif";
import doohanHelmet from "../assets/helmets/doohan.avif";
import gaslyHelmet from "../assets/helmets/gasly.avif";
import hadjarHelmet from "../assets/helmets/hadjar.avif";
import hamiltonHelmet from "../assets/helmets/hamilton.avif";
import hulkenbergHelmet from "../assets/helmets/hulkenberg.avif";
import lawsonHelmet from "../assets/helmets/lawson.avif";
import leclercHelmet from "../assets/helmets/leclerc.avif";
import norrisHelmet from "../assets/helmets/norris.avif";
import oconHelmet from "../assets/helmets/ocon.avif";
import piastriHelmet from "../assets/helmets/piastri.avif";
import russellHelmet from "../assets/helmets/russell.avif";
import sainzHelmet from "../assets/helmets/sainz.avif";
import strollHelmet from "../assets/helmets/stroll.avif";
import tsunodaHelmet from "../assets/helmets/tsunoda.avif";
import verstappenHelmet from "../assets/helmets/verstappen.avif";

const driverHelmetPhotos = {
  Albon: albonHelmet,
  Alonso: alonsoHelmet,
  Antonelli: antonelliHelmet,
  Bearman: bearmanHelmet,
  Bortoleto: bortoletoHelmet,
  Doohan: doohanHelmet,
  Gasly: gaslyHelmet,
  Hadjar: hadjarHelmet,
  Hamilton: hamiltonHelmet,
  Hulkenberg: hulkenbergHelmet,
  Lawson: lawsonHelmet,
  Leclerc: leclercHelmet,
  Norris: norrisHelmet,
  Ocon: oconHelmet,
  Piastri: piastriHelmet,
  Russell: russellHelmet,
  Sainz: sainzHelmet,
  Stroll: strollHelmet,
  Tsunoda: tsunodaHelmet,
  Verstappen: verstappenHelmet,
};

const removeDiacritics = (str) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

const DriverInfo = () => {
  const location = useLocation();
  const driver = location.state;
  const driverHelmetPhoto =
    driverHelmetPhotos[removeDiacritics(driver.Driver.familyName)];

  const DriverInfoPage = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    gap: 2rem;
    color: white;
    padding-inline: 2rem;
    max-width: 1300px;
    font-size: 1.2rem;
    margin-bottom: 2rem;

    img {
      width: 100%;
      max-width: 500px;
      height: auto;
    }

    .driverProfile {
      display: flex;
      gap: 2rem;

      @media (max-width: 599px) {
        flex-direction: column;
      }
    }

    .driverBio {
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

  const DriverHeader = styled.div`
    font-size: 2rem;
    color: white;
    padding-top: 2rem;
    display: flex;
    justify-content: space-between;

    .driverNumberFlag {
      display: flex;
      gap: 1rem;
      align-items: center;
    }

    .flag {
      max-width: 15%;
      width: 100%;

      @media (max-width: 500px) {
        max-width: 20%;
      }
    }

    h1 {
      font-size: 3rem;
    }

    .teamName {
      font-size: 1.5rem;
    }

    .nameFlagHelmet {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
  `;

  const DriverWrapper = styled.dl`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    font-size: 1.2rem;
    gap: 1rem;
    justify-content: space-between;
    width: 100%;

    dt {
      font-weight: bold;
      font-family: "formula1";
    }
  `;

  const DriverHelmetImage = styled.div`
    max-width: 50%;
    img {
      max-width: 40%;

      @media (max-width: 500px) {
        max-width: 100%;
      }
    }
  `;

  return (
    <DriverInfoPage>
      <DriverHeader>
        <div>
          <div className="driverNumberFlag">
            <p>{driver.Driver.permanentNumber}</p>
            <img
              className="flag"
              src={driver.flag}
              alt={`${driver.Driver.nationality} flag`}
            />
          </div>
          <div>
            <h1>
              {driver.Driver.givenName}{" "}
              {removeDiacritics(driver.Driver.familyName)}{" "}
            </h1>
          </div>
          <div className="teamName">{driver.Constructors[0].name}</div>
        </div>
        <DriverHelmetImage>
          <picture>
            <source type="image/avif" srcSet={driverHelmetPhoto} />
            <img
              src={driverHelmetPhoto}
              alt={`${driver.Driver.givenName} ${removeDiacritics(
                driver.Driver.familyName
              )}`}
            ></img>
          </picture>
        </DriverHelmetImage>
      </DriverHeader>
      <div className="driverProfile">
        <picture>
          <source type="image/avif" srcSet={driver.profilePhoto} />
          <img
            src={driver.profilePhoto}
            alt={`${driver.Driver.givenName} ${removeDiacritics(
              driver.Driver.familyName
            )}`}
          ></img>
        </picture>
        <DriverWrapper>
          <dt>Name: </dt>
          <dd>
            {driver.Driver.givenName}{" "}
            {removeDiacritics(driver.Driver.familyName)}
          </dd>
          <dt>Date of Birth: </dt>
          <dd>{driver.Driver.dateOfBirth}</dd>
          <dt>Nationality: </dt>
          <dd>{driver.Driver.nationality}</dd>
          <dt>Number: </dt>
          <dd>{driver.Driver.permanentNumber}</dd>
          <dt>Points: </dt>
          <dd>{driver.points}</dd>
          <dt>Wins: </dt>
          <dd>{driver.wins}</dd>
          <dt>Position: </dt>
          <dd>{driver.position}</dd>
        </DriverWrapper>
      </div>
      <div className="driverBio">
        <p className="header">Biography: </p>
        <div className="bio">{driver.bio}</div>
      </div>
    </DriverInfoPage>
  );
};

export default DriverInfo;

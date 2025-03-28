import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import SectionHeader from "../components/SectionHeader";
import {
  getTrackLayout,
  getPhotos,
  getTrackInfo,
  getCircuitFlag,
} from "../services/utilitiesService";

const RaceInfoPage = styled.div`
  max-width: 1300px;
  padding-inline: 2rem;
  padding-bottom: 2rem;
  margin: auto;
  font-size: 1rem;
  font-family: "formula1";
  color: white;

  a:link {
    text-decoration: none;
  }

  .circuitInfoWrapper {
    display: flex;
    padding: 2rem;
    border: 8px solid transparent;
    border-top: 8px solid #7d8391;
    border-right: 8px solid #7d8391;
    border-top-right-radius: 16px;
    gap: 2rem;

    @media (max-width: 768px) {
      padding: 0.5rem;
      border: none;
      flex-direction: column;
    }
  }

  .trackLayoutImageContainer {
    flex: 1;
    min-width: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .trackLayoutImageContainer img {
    max-width: 100%;
    height: auto;
    object-fit: contain;
  }

  .circuitInfo {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .trackDataRow {
    display: flex;
    flex-direction: row;
    gap: 1rem;

    @media (max-width: 500px) {
      flex-direction: column;
    }
  }

  .trackDataPoint {
    padding: 0.5rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
    border: 1px solid transparent;
    border-bottom: 2px solid #7d8391;
    border-right: 2px solid #7d8391;
    border-bottom-right-radius: 8px;

    .data {
      font-weight: bold;
      font-size: 2rem;
    }

    em {
      margin-left: 10px;
      font-size: 0.8rem;
      font-weight: normal;
    }
  }

  .trackBio {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-top: 4rem;
  }

  .bioRow {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 65ch;

    @media (max-width: 500px) {
      font-size: 1rem;
    }
  }

  @media (max-width: 500px) {
    padding: 0.5rem;
  }
`;

const RaceInfo = () => {
  let location = useLocation();
  let race = location.state;
  const photos = getPhotos();
  const locationCountry = race.Circuit.Location.country;
  const trackLayoutPhoto = getTrackLayout(photos, locationCountry);
  const circuitFlag = getCircuitFlag(photos, locationCountry);
  let trackInfo = getTrackInfo(locationCountry);

  return (
    <RaceInfoPage>
      <SectionHeader
        title={race.raceName}
        subtitle={race.Circuit.circuitName}
        flag={circuitFlag}
      />
      <div className="circuitInfoWrapper">
        <div className="trackLayoutImageContainer">
          <picture>
            <source type="image/avif" srcSet={trackLayoutPhoto} />
            <img src={trackLayoutPhoto} alt={``} />
          </picture>
        </div>
        <div className="circuitInfo">
          <div className="trackDataRow">
            <div className="trackDataPoint">
              <p>First Grand Prix</p>
              <p className="data">{trackInfo.firstGP}</p>
            </div>
            <div className="trackDataPoint">
              <p>Number of Laps</p>
              <p className="data">{trackInfo.numberofLaps}</p>
            </div>
          </div>
          <div className="trackDataRow">
            <div className="trackDataPoint">
              <p>Circuit Length</p>
              <p className="data">{trackInfo.circuitLength}</p>
            </div>
            <div className="trackDataPoint">
              <p>Race Distance</p>
              <p className="data">{trackInfo.raceDistance}</p>
            </div>
          </div>
          <div className="trackDataPoint">
            <p>Lap Record</p>
            <p className="data">
              {trackInfo.lapRecord.time}{" "}
              <span>
                <em>{trackInfo.lapRecord.driver}</em>
              </span>
            </p>
          </div>
        </div>
      </div>
      {trackInfo.bio && (
        <div className="trackBio">
          <div className="bioRow">
            <h3>When was the track built?</h3>
            <p>{trackInfo.bio.constructed}</p>
          </div>
          <div className="bioRow">
            <h3>When was its first Grand Prix?</h3>
            <p>{trackInfo.bio.firstGP}</p>
          </div>
          <div className="bioRow">
            <h3>What’s the circuit like?</h3>
            <p>{trackInfo.bio.circuitTraits}</p>
          </div>
          <div className="bioRow">
            <h3>Why go?</h3>
            <p>{trackInfo.bio.whyGo}</p>
          </div>
          <div className="bioRow">
            <h3>Where is the best place to watch?</h3>
            <p>{trackInfo.bio.bestSeats}</p>
          </div>
        </div>
      )}
    </RaceInfoPage>
  );
};

export default RaceInfo;

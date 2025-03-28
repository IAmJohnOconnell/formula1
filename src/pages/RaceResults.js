import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import SectionHeader from "../components/SectionHeader";
import Table from "../components/Table";
import ResultRow from "../components/ResultRow";
import Podium from "../components/Podium";
import PodiumCard from "../components/PodiumCard";
import { getPhotos, getCircuitFlag } from "../services/utilitiesService";

const RaceResultPage = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding-inline: 2rem;
  padding-bottom: 2rem;

  table {
    background-image: linear-gradient(
      to right,
      transparent 30%,
      rgba(174, 4, 0, 0.05) 100%
    );
    background-size: 100px 100%;
    background-repeat: no-repeat;
    background-position: right;
  }

  a:link {
    text-decoration: none;
  }

  .slash-icon {
    width: 100px;
    height: 100px;
  }

  .podiumContainer {
    margin-top: 4rem;
  }

  @media (max-width: 500px) {
    padding: 0.5rem;
  }
`;

const RaceResults = () => {
  const location = useLocation();
  let raceResult = location.state;
  const photos = getPhotos();
  const circuitFlag = getCircuitFlag(
    photos,
    raceResult.Circuit.Location.country
  );

  const getPodiumDrivers = () => {
    let podiumDrivers = raceResult.Results.filter((result) => {
      return result.position <= 3;
    });
    return podiumDrivers;
  };

  getPodiumDrivers();

  return (
    <RaceResultPage>
      <SectionHeader
        title={`${raceResult.raceName} Results`}
        flag={circuitFlag}
      />
      <div className="podiumContainer">
        <Podium>
          <PodiumCard position={1} driver={getPodiumDrivers()[0]}></PodiumCard>
          <PodiumCard position={2} driver={getPodiumDrivers()[1]}></PodiumCard>
          <PodiumCard position={3} driver={getPodiumDrivers()[2]}></PodiumCard>
        </Podium>
      </div>
      <Table>
        <thead>
          <tr>
            <th>Pos</th>
            <th>No</th>
            <th>Driver</th>
            <th>Constructor</th>
            <th>Laps</th>
            <th>Time</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {raceResult.Results &&
            raceResult.Results.map((result) => {
              return (
                <ResultRow key={result.position}>
                  <td>{result.position}</td>
                  <td>{result.number}</td>
                  <td>
                    {result.Driver.givenName} {result.Driver.familyName}
                  </td>
                  <td>{result.Constructor.name}</td>
                  <td>{result.laps}</td>
                  <td>{result.Time?.time || "DNF"}</td>
                  <td>{result.points}</td>
                </ResultRow>
              );
            })}
        </tbody>
      </Table>
    </RaceResultPage>
  );
};

export default RaceResults;

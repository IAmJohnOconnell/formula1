import React from "react";
import styled from "styled-components";
import SectionHeader from "../components/SectionHeader";
import PageContainer from "../components/PageContainer";
import { Link } from "react-router-dom";
import RaceWeekendCard from "../components/RaceWeekendCard";
import {
  getYear,
  getPhotos,
  getCircuitFlag,
  getCircuitPhoto,
} from "../services/utilitiesService";

const ResultsPage = styled.div`
  max-width: 1300px;
  padding-inline: 2rem;
  padding-bottom: 2rem;
  margin: auto;

  a:link {
    text-decoration: none;
  }

  @media (max-width: 500px) {
    padding: 0.5rem;
  }
`;

const Results = ({ raceResults }) => {
  const photos = getPhotos();

  return (
    <ResultsPage>
      <SectionHeader
        title={`${getYear()} Race Weekend Results`}
        subtitle={"See how the season is playing out so far"}
      />
      <PageContainer>
        {raceResults &&
          raceResults.map((raceResult) => {
            const locationCountry = raceResult.Circuit.Location.country;
            const circuitPhoto = getCircuitPhoto(photos, locationCountry);
            const circuitFlag = getCircuitFlag(photos, locationCountry);

            return (
              <Link
                to={`/results/${raceResult.raceName.split(" ").join("")}`}
                key={raceResult.round}
                state={raceResult}
              >
                <RaceWeekendCard
                  raceResult={raceResult}
                  circuitPhoto={circuitPhoto}
                  circuitFlag={circuitFlag}
                  key={raceResult.round}
                />
              </Link>
            );
          })}
      </PageContainer>
    </ResultsPage>
  );
};

export default Results;

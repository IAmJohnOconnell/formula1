import React from "react";
import styled from "styled-components";
import SectionHeader from "../components/SectionHeader";
import PageContainer from "../components/PageContainer";
import { Link } from "react-router-dom";
import RaceWeekendCard from "../components/RaceWeekendCard";
import {
  getYear,
  getPhotos,
  getCircuitPhoto,
  getCircuitFlag,
} from "../services/utilitiesService";

const RacesPage = styled.div`
  max-width: 1300px;
  padding-inline: 2rem;
  margin: auto;
  margin-bottom: 2rem;

  a:link {
    text-decoration: none;
  }

  @media (max-width: 500px) {
    padding: 0.5rem;
  }
`;

const Races = ({ races }) => {
  const photos = getPhotos();

  return (
    <RacesPage>
      <SectionHeader
        title={`${getYear()} Races`}
        subtitle={"Check out the races on this years calendar"}
      />
      <div className="racesContainer">
        <PageContainer>
          {races &&
            races.map((raceResult) => {
              const locationCountry = raceResult.Circuit.Location.country;
              const circuitPhoto = getCircuitPhoto(photos, locationCountry);
              const circuitFlag = getCircuitFlag(photos, locationCountry);

              return (
                <Link
                  to={`/races/${raceResult.raceName.split(" ").join("")}`}
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
      </div>
    </RacesPage>
  );
};

export default Races;

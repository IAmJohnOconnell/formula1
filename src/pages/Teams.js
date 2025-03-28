import React from "react";
import styled from "styled-components";
import TeamCard from "../components/TeamCard";
import SectionHeader from "../components/SectionHeader";
import { Link } from "react-router-dom";
import PageContainer from "../components/PageContainer";
import { getPhotos, getYear } from "../services/utilitiesService";

const TeamsPage = styled.div`
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

const Teams = ({ constructors }) => {
  const photos = getPhotos();

  return (
    <TeamsPage>
      <SectionHeader
        title={`F1 Teams ${getYear()}`}
        subtitle={"Check out the teams competing for the top spot."}
      />
      <PageContainer>
        {constructors &&
          constructors.map((constructor) => {
            let constructorData = {};

            let constructorCar =
              constructor.Constructor.name.split(" ").join("") + "_car";
            constructorCar = constructorCar.split("-").join("");
            constructorCar = constructorCar
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "");

            let constructorLogo = constructor.Constructor.name
              .split(" ")
              .join("");
            constructorLogo = constructorLogo.split("-").join("");
            constructorLogo = constructorLogo
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "");

            constructorData.name = constructor.Constructor.name;
            constructorData.car = photos.car[constructorCar];
            constructorData.logo = photos.team[constructorLogo];
            constructorData.constructorProfile = constructor;

            return (
              <Link
                to={`/teams/${constructor.constructorId}`}
                key={constructor.constructorId}
                state={constructorData}
              >
                <TeamCard
                  constructorData={constructorData}
                  photo={photos.car[constructorCar]}
                  logo={photos.team[constructorLogo]}
                  // key={constructor.id}
                  type="teams"
                />
              </Link>
            );
          })}
      </PageContainer>
    </TeamsPage>
  );
};

export default Teams;

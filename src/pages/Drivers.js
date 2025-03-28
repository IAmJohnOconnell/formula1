import React from "react";
import styled from "styled-components";
import PageContainer from "../components/PageContainer";
import DriverCard from "../components/DriverCard";
import SectionHeader from "../components/SectionHeader";
import { Link } from "react-router-dom";
import {
  getDriverFlag,
  getYear,
  getPhotos,
} from "../services/utilitiesService";

const DriversPage = styled.div`
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

const removeDiacritics = (str) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

const Drivers = ({ drivers }) => {
  const photos = getPhotos();

  return (
    <DriversPage>
      <SectionHeader
        title={`F1 Drivers ${getYear()}`}
        subtitle={"Check out this season's official F1 line-up."}
      />
      <PageContainer>
        {drivers &&
          drivers.map((driver) => {
            let driverphoto = `${driver.Driver.givenName.split(" ").join("")}${
              driver.Driver.familyName
            }`
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "");
            let driverData = {};
            driverData.name = `${driver.Driver.givenName.normalize()} ${removeDiacritics(
              driver.Driver.familyName
            )}`;
            driverData.team = driver.Constructors[0].name;
            driverData.photo = photos.driver[driverphoto];
            driverData.number = driver.Driver.permanentNumber;
            driverData.nationality = driver.Driver.nationality
              .split(" ")
              .join("");
            const flag = getDriverFlag(photos, driverData.nationality);
            const profilePhoto =
              photos.driverProfile[removeDiacritics(driver.Driver.familyName)];

            const enrichedDriver = {
              ...driver,
              flag,
              profilePhoto,
            };

            return (
              <Link
                to={`/drivers/${driver.Driver.driverId}`}
                key={driver.position}
                state={enrichedDriver}
              >
                <DriverCard
                  driverData={driverData}
                  flag={flag}
                  key={driver.driver}
                />
              </Link>
            );
          })}
      </PageContainer>
    </DriversPage>
  );
};

export default Drivers;

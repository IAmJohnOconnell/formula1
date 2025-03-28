import { getDriverBios } from "./utilitiesService";

const baseURL = `https://api.jolpi.ca/ergast/f1/2025`;

export const fetchDriverData = async () => {
  try {
    const response = await fetch(`${baseURL}/driverstandings/?format=json`);
    if (!response.ok) {
      throw new Error(`Failed to fetch users`);
    }
    let data = await response.json();
    data = data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
    const driversWithBio = data.map((driver) => ({
      ...driver,
      bio: getDriverBios(driver.Driver.familyName.toLowerCase()),
    }));
    return driversWithBio;
  } catch (error) {
    console.log("Failed to fetch driver data", error);
  }
};

export const fetchConstructorStandings = async () => {
  try {
    const response = await fetch(
      `${baseURL}/constructorstandings/?format=json`
    );
    if (!response.ok) {
      throw new Error(`Failed to fetch constructors`);
    }
    let data = await response.json();
    data = data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
    return data;
  } catch (error) {
    console.log("Failed to fetch constructor data", error);
  }
};

export const fetchRaceResults = async () => {
  try {
    const response = await fetch(`${baseURL}/results/?format=json`);
    if (!response.ok) {
      throw new Error("Failed to fetch race results");
    }

    let data = await response.json();
    data = data.MRData.RaceTable.Races;
    return data;
  } catch (error) {
    console.log("Failed to race result data", error);
  }
};

export const fetchRaces = async () => {
  try {
    const response = await fetch(`${baseURL}/races/?format=json`);
    if (!response.ok) {
      throw new Error("Failed to fetch races");
    }

    let data = await response.json();
    data = data.MRData.RaceTable.Races;
    return data;
  } catch (error) {
    console.log("Failed to fech race results", error);
  }
};

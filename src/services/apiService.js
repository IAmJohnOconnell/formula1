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
    const countResponse = await fetch(
      `${baseURL}/results/?format=json&limit=1`
    );
    const countData = await countResponse.json();
    const total = parseInt(countData.MRData.total);

    const pageSize = 100;
    const pages = Math.ceil(total / pageSize);

    let allRaces = [];

    for (let i = 0; i < pages; i++) {
      const offset = i * pageSize;
      // console.log(`Fetching page ${i + 1}/${pages} (offset: ${offset})`);

      const response = await fetch(
        `${baseURL}/results/?format=json&limit=${pageSize}&offset=${offset}`
      );

      if (!response.ok) {
        const errorText = await response.text();
        console.error(`API error on page ${i + 1}:`, errorText);
        throw new Error(`Failed to fetch race results: ${response.status}`);
      }

      const data = await response.json();

      if (!data.MRData?.RaceTable?.Races) {
        console.error("Unexpected API response format:", data);
        throw new Error("Invalid API response format");
      }

      allRaces = [...allRaces, ...data.MRData.RaceTable.Races];
    }

    return allRaces;
  } catch (error) {
    console.error("Error fetching race results:", error);
    throw error;
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

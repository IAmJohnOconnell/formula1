import React, { useState } from "react";
import styled from "styled-components";
import SectionHeader from "../components/SectionHeader";
import Table from "../components/Table";
import ResultRow from "../components/ResultRow";

const StandingsPage = styled.div`
  padding-inline: 2rem;
  padding-bottom: 2rem;
  max-width: 1300px;
  margin: auto;

  @media (max-width: 500px) {
    padding: 0.5rem;
  }
`;

const StandingsSelector = styled.div`
	  display: flex;
	  margin-bottom: 1rem;
	  background-color: #1a1d23;
    border: 1px solid #ff1e00;
	  border-radius: 20px;
    width: fit-content;
    
    button {
      font-family: "formula1";
    background-color: #ff1e00;
    color: white;
    border: none;
    padding: .8rem 2rem;
	  border-radius: 20px;
    // width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
}

    .active {
      background-color: #1a1d23;
    }
  }
`;

const Standings = ({ driverData, constructorStandings }) => {
  const [isActive, setIsActive] = useState(false);
  const [driverTable, setDriverTable] = useState(true);
  const toggleActive = () => {
    setIsActive(!isActive);
    setDriverTable(!driverTable);
  };

  return (
    <StandingsPage>
      <SectionHeader
        title={"Championship Standings"}
        subtitle={"Who will claim victory and make history?"}
      />
      <div>
        <StandingsSelector>
          <button className={isActive ? "active" : ""} onClick={toggleActive}>
            Drivers
          </button>
          <button className={!isActive ? "active" : ""} onClick={toggleActive}>
            Constructors
          </button>
        </StandingsSelector>
        {driverTable ? (
          <Table>
            <thead>
              <tr>
                <th>Pos</th>
                <th>Driver</th>
                <th>Car</th>
                <th>Points</th>
              </tr>
            </thead>
            <tbody>
              {driverData &&
                driverData.map((result) => {
                  let driver = result.Driver;
                  let driverTeaminfo = result.Constructors[0];
                  let driverName = `${driver.givenName.normalize()} ${driver.familyName.normalize()}`;
                  return (
                    <ResultRow key={result.position}>
                      <td>{result.position}</td>
                      <td>{driverName}</td>
                      <td>{driverTeaminfo.name}</td>
                      <td>{result.points}</td>
                    </ResultRow>
                  );
                })}
            </tbody>
          </Table>
        ) : (
          <Table>
            <thead>
              <tr>
                <th>Pos</th>
                <th>Constructor</th>
                <th>Points</th>
                <th>Wins</th>
              </tr>
            </thead>
            <tbody>
              {constructorStandings &&
                constructorStandings.map((result) => {
                  let constructor = result;
                  let constructorName = `${constructor.Constructor.name.normalize()}`;
                  return (
                    <ResultRow key={result.position}>
                      <td>{result.position}</td>
                      <td>{constructorName}</td>
                      <td>{result.points}</td>
                      <td>{result.wins}</td>
                    </ResultRow>
                  );
                })}
            </tbody>
          </Table>
        )}
      </div>
    </StandingsPage>
  );
};

export default Standings;

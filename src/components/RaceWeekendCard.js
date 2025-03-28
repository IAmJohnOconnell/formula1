import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;
  overflow: hidden;
  height: 300px;
  transition: all 0.3s ease;
  padding-right: 0.5rem;
  max-width: 400px;
  font-size: 1rem;
  border: 1px solid transparent;

  border-top: 2px solid #7d8391;
  border-right: 2px solid #7d8391;
  border-top-right-radius: 8px;

  header {
    display: flex;
    flex-direction: column;
    width: 100%;
    color: white;
    position: relative;

    .round {
      text-transform: uppercase;
      font-weight: bold;
    }

    .raceNameAndFlag {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-family: "Formula1";
    }

    .flag,
    img {
      max-width: 48px;
      width: 100%;
    }
  }

  &:hover {
    border-top: 2px solid #e10600;
    border-right: 2px solid #e10600;
    border-top-right-radius: 8px;
  }

  .firstRow {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #f1f1f1;
  border-radius: 5px;
`;

const CardImg = styled.div`
  display: flex;
  justify-content: center;

  img {
    width: 100%;
    margin: 0 auto;
    height: auto;
    display: block;
    max-width: 250px;
  }
`;

const RaceWeekendCard = ({ raceResult, circuitPhoto, circuitFlag }) => {
  return (
    <StyledCard>
      <header>
        <p className="round">Round {raceResult.round}</p>
        <div className="raceNameAndFlag">
          <p>{raceResult.raceName}</p>
          <picture className="flag">
            <source type="image/avif" srcSet={circuitFlag} />
            <img src={circuitFlag} alt={``} />
          </picture>
        </div>
        <p>{raceResult.date}</p>
      </header>
      <CardBody>
        <CardImg>
          <picture>
            <source type="image/avif" srcSet={circuitPhoto} />
            <img src={circuitPhoto} alt={``} />
          </picture>
        </CardImg>
      </CardBody>
    </StyledCard>
  );
};

export default RaceWeekendCard;

import React from "react";
import styled from "styled-components";
import { getTeamColor } from "../services/utilitiesService";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  padding-block: 1rem;
  box-shadow: 0 -2px 0 hsla(0 0% 100% / 15%), 0px 0px 4px hsla(0 0% 0% / 50%);
  background-color: #2f2f2f;
  overflow: hidden;
  transition: all 0.3s ease;
  border-radius: 5px;
  border: 2px solid transparent;
  
  &:hover {
    border: 2px solid ${(props) => props.teamColor};
    background-color ${(props) => props.teamColor};
  }

  header {
    display: flex;
    align-items: center;
    gap: 0.4em;
    padding-inline: 1em;

    img {
    width: 100%;
    }
  }

  .divider {
    display: block;
    background-color: ${(props) => props.teamColor};
    border: 2px solid ${(props) => props.teamColor};
    margin-bottom: 1rem;
    width: 100%;
  }
`;

const CardBody = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  z-index: 1;
`;

const CardImg = styled.div`
  display: flex;

  img {
    max-width: 100%;
    width: 100%;
    height: auto;
  }
`;

const Card = ({ constructorData }) => {
  const teamColor = getTeamColor(constructorData.name);

  return (
    <StyledCard teamColor={teamColor}>
      <span className="divider" />
      <header>
        <picture>
          <source type="image/avif" srcSet={constructorData.logo} />
          <img src={constructorData.logo} alt={`${constructorData.name}`} />
        </picture>
      </header>

      <CardBody>
        <CardImg>
          <picture>
            <source type="image/avif" srcSet={constructorData.car} />
            <img
              src={constructorData.car}
              alt={`${constructorData.name} car`}
            />
          </picture>
        </CardImg>
      </CardBody>
    </StyledCard>
  );
};

export default Card;

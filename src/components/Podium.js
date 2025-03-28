import React from "react";
import styled from "styled-components";

const StyledPodium = styled.div`
  display: flex;
  gap: 2rem;
  align-items: flex-end;
  justify-content: center;
  margin-bottom: 1rem;

  @media (max-width: 500px) {
    margin-top: 30%;
  }

  > *:nth-child(1) {
    transform: scale(1.15);
    transform-origin: bottom;
  }

  > *:nth-child(2) {
    order: -1;

    @media (max-width: 500px) {
      display: none;
    }
  }

  > *:nth-child(3) {
    @media (max-width: 500px) {
      display: none;
    }
  }
`;

const Podium = ({ children }) => {
  return <StyledPodium>{children}</StyledPodium>;
};

export default Podium;

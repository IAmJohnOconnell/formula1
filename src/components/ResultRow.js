import React from "react";
import styled from "styled-components";

const StyledResultRow = styled.tr`
  :nth-child(even) {
    background-color: #1a1d23;
  }

  :hover {
    background-color: #ff1e00;
  }
`;

const ResultRow = ({ children }) => {
  return <StyledResultRow>{children}</StyledResultRow>;
};

export default ResultRow;

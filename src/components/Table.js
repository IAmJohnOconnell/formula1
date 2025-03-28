import React from "react";
import styled from "styled-components";

const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;

  border-radius: 5px;

  @media (max-width: 500px) {
    border-radius: 5px;
  }
`;

const StyledTable = styled.table`
  max-width: 100%;
  width: 100%;
  border-collapse: collapse;
  color: #f1f1f1;
  font-size: 1rem;
  overflow-x: auto;

  th {
    border-bottom: 1px solid red;
    font-family: "formula1";
  }

  td,
  th {
    text-align: left;
    padding: 0.5rem;
    font-family: "formula1";
  }
`;

const Table = ({ children }) => {
  return (
    <TableWrapper>
      <StyledTable>{children}</StyledTable>;
    </TableWrapper>
  );
};

export default Table;

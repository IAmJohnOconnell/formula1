import React from "react";
import styled from "styled-components";

const PageContainerComponent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-flow: row;

  max-width: 100%;
  gap: 1rem;
  scroll-behavior: smooth;

  @media screen and (min-width: 600px) {
    grid-template-columns: repeat(2, auto);
  }

  @media screen and (min-width: 900px) {
    grid-template-columns: repeat(3, auto);
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(4, auto);
  }
`;

const PageContainer = ({ children }) => {
  return <PageContainerComponent>{children}</PageContainerComponent>;
};

export default PageContainer;

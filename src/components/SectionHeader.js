import React from "react";
import styled from "styled-components";

const SectionHeaderComponent = styled.div`
  margin-block: 2rem;
  display: flex;
  gap: 1rem;
  align-items: top;
  font-family: "formula1";

  h1 {
    font-size: 1.5rem;
    color: white;
  }

  h2 {
    max-width: 55ch;
    padding-top: 0.5rem;
    color: #919bb3;
    font-size: 1rem;
    font-weight: normal;
  }

  .flag-image {
    max-width: 44px;
    width: 100%;
  }
`;

const SectionHeader = ({ title, subtitle, flag }) => {
  return (
    <SectionHeaderComponent>
      {flag && (
        <div className="flag">
          <img src={flag} alt="Country flag" className="flag-image" />
        </div>
      )}
      <div>
        <h1>{title}</h1>
        {subtitle ? <h2>{subtitle}</h2> : null}
      </div>
    </SectionHeaderComponent>
  );
};

export default SectionHeader;

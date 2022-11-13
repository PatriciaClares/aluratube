import React from "react";
import { StyledHeader, StyledImg, StyledSection } from "./header.styled";
import config from "../../../../../config.json";

const Header = () => {
  return (
    <StyledHeader>
      <StyledSection>
        <StyledImg src={`https://github.com/${config.github}.png`} />
        <div>
          <h2>{config.name}</h2>
          <p>{config.job}</p>
        </div>
      </StyledSection>
    </StyledHeader>
  );
};

export default Header;

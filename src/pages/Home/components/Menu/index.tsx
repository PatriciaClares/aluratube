import React from "react";
import { Logo } from "./Icons/Logo";
import { StyledMenu } from "./menu.styled";

const Menu = () => {
  return (
    <StyledMenu>
      <div>
        <Logo />
      </div>
    </StyledMenu>
  );
};

export default Menu;

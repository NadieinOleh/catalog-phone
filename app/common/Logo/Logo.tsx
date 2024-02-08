"use client";

import React from "react";
import Logo from "../icons/Logo";

import { LogoStyled } from "./Styles";

const LogoBlock = () => {
  return (
    <LogoStyled href="/">
      <Logo />
    </LogoStyled>
  );
};

export default LogoBlock;

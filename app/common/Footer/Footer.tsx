"use client";

import React from "react";
import LogoBlock from "../Logo/Logo";
import BackToTop from "./components/BackToTop/BackToTop";
import Links from "./components/Links/Links";

import { BoxStyled, BoxMobileStyled } from "./Styles";

const Footer = () => {
  return (
    <footer>
      <BoxStyled>
        <LogoBlock />
        <Links />
        <BackToTop />
      </BoxStyled>

      <BoxMobileStyled>
        <LogoBlock />
        <BackToTop />
        <Links />
      </BoxMobileStyled>
    </footer>
  );
};

export default Footer;

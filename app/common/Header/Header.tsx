"use client";

import React from "react";

import CustomDrawer from "../Drawer/CustomDrawer";
import LogoBlock from "../Logo/Logo";
import Basket from "./components/Basket/Basket";
import Links from "./components/Links/Links";

import { BoxLinksStyled, BoxMobileStyled } from "./Styles";

const Header = () => {
  return (
    <header id="header">
      <BoxLinksStyled>
        <Links />
        <Basket />
      </BoxLinksStyled>

      <BoxMobileStyled>
        <LogoBlock />
        <CustomDrawer />
      </BoxMobileStyled>
    </header>
  );
};

export default Header;

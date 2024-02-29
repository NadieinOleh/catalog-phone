"use client";

import React from "react";

import CustomDrawer from "../Drawer/CustomDrawer";
import LogoBlock from "../Logo/Logo";
import SwitchMode from "../Switch/Switch";
import Basket from "./components/Basket/Basket";
import Links from "./components/Links/Links";

import {BoxLinksStyled, BoxMobileStyled, BoxMobile} from "./Styles";

const Header = () => {
  return (
    <header id="header">
      <BoxLinksStyled>
        <Links />
        <Basket />
      </BoxLinksStyled>

      <BoxMobileStyled>
        <LogoBlock />
        <BoxMobile>
          <SwitchMode />
          <CustomDrawer />
        </BoxMobile>
      </BoxMobileStyled>
    </header>
  );
};

export default Header;

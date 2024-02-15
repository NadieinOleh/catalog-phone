"use client";

import React from "react";

import LogoBlock from "@/app/common/Logo/Logo";
import { headerLinks, Link } from "@/helpers/constants";

import { LinkStyled, BoxStyled } from "./Styles";
import SwitchMode from "@/app/common/Switch/Switch";

const Links = () => {
  return (
    <BoxStyled>
      <LogoBlock />

      {headerLinks.map((link: Link) => (
        <LinkStyled key={link.id} href={`/${link.link}`}>
          {link.link}
        </LinkStyled>
      ))}

      <SwitchMode />
    </BoxStyled>
  );
};

export default Links;

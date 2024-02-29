"use client";

import React from "react";
import { Typography } from "@mui/material";

import House from "../icons/House";
import ArrowRight from "../icons/ArrowRight";

import { BoxStyled, LinkStyled, Container } from "./Styles";

const Nav = ({ mainPath, slug }: { mainPath: string; slug?: string }) => {
  return (
    <Container>
      <BoxStyled>
        <LinkStyled href={"/"}>
          <House />
        </LinkStyled>

        <BoxStyled>
          <ArrowRight />

          <LinkStyled href={`/${mainPath.toLowerCase()}`}>
            <Typography color="secondary.main" variant="body1">
              {mainPath}
            </Typography>
          </LinkStyled>

          {slug && (
            <>
              <ArrowRight />
              <Typography color="secondary.main" variant="body1">
                {slug}
              </Typography>
            </>
          )}
        </BoxStyled>
      </BoxStyled>
    </Container>
  );
};

export default Nav;

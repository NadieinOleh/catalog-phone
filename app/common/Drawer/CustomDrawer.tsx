'use client'

import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import MenuIcon from "@mui/icons-material/Menu";

import { headerLinks, Link as HeaderLink } from "@/helpers/constants";
import { LinkStyled } from "../Header/components/Links/Styles";
import Basket from "../Header/components/Basket/Basket";

import { BoxStyled } from "./Styles";

type Anchor = "right";

export default function CustomDrawer() {
  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: "100%" }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <BoxStyled>
        {headerLinks.map((link: HeaderLink) => (
          <LinkStyled key={link.id} href={`/${link.link}`}>
            {link.link}
          </LinkStyled>
        ))}
      </BoxStyled>

      <Divider />
      <Basket />
      <Divider />
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer("right", true)}>
        <MenuIcon />
      </Button>
      <Drawer
        anchor="right"
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
      >
        {list("right")}
      </Drawer>
    </div>
  );
}

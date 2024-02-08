"use client";

import { Box, styled } from "@mui/material";

export const BoxLinksStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  borderBottom: "1px",
  borderBottomColor: theme.palette.info.main,
  borderBottomStyle: "solid",

  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const BoxMobileStyled = styled(Box)(({ theme }) => ({
  display: "none",
  
  [theme.breakpoints.down("md")]: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing(2, 0),
  },
}));

"use client";

import {Box, styled} from "@mui/material";

export const BoxStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: theme.spacing(8),
  padding: theme.spacing(3),
  borderTop: "1px",
  borderTopColor: theme.palette.info.main,
  borderTopStyle: "solid",
  flexWrap: "wrap",

  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const BoxMobileStyled = styled(Box)(({ theme }) => ({
  display: "none",

  [theme.breakpoints.down("md")]: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: theme.spacing(8),
    padding: theme.spacing(3),
    borderTop: "1px",
    borderTopColor: theme.palette.info.main,
    borderTopStyle: "solid",
    flexWrap: "wrap",
  },
}));

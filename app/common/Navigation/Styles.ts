"use client";

import { styled, Box } from "@mui/material";
import Link from "next/link";

export const BoxStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: theme.spacing(1),
}));

export const Container = styled(Box)(({ theme }) => ({
  margin: theme.spacing(3, 0, 5),
}));

export const LinkStyled = styled(Link)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textDecoration: "none",
  color: theme.palette.secondary.main,
}));

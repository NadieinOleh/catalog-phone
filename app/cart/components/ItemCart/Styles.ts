"use client";

import { styled, Box } from "@mui/material";

export const BoxStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: theme.spacing(3),
  padding: theme.spacing(3),
  border: `1px solid ${theme.palette.secondary.main}`,
  marginBottom: theme.spacing(2),
}));

export const BoxDesc = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: theme.spacing(3),
}));

export const BoxPrice = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: theme.spacing(5),
}));

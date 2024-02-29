"use client";

import { Box, styled } from "@mui/material";

export const BoxStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: theme.spacing(2),
}));

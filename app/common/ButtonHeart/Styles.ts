"use client";

import { Box, styled } from "@mui/material";

export const BoxStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: theme.spacing(2),
  border: `1px solid ${theme.palette.secondary.main}`,
  padding: theme.spacing(1),

  "&:hover": {
    border: `1px solid ${theme.palette.primary.main}`,
  },
}));

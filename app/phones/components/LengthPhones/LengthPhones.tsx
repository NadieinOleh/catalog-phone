"use client";

import React, { useEffect, useState } from "react";
import { Typography, useTheme } from "@mui/material";

const LengthPhones = () => {
  const [length, setLength] = useState<number | string>(0);
  const theme = useTheme();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedLength = localStorage.getItem("length");
      setLength(storedLength ? String(storedLength) : "0");
    }
  }, []); 

  return (
    <Typography
      color={"secondary.main"}
      sx={{ margin: theme.spacing(1, 0, 5) }}
    >
     {length} models
    </Typography>
  );
};

export default LengthPhones;

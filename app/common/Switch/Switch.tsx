"use client";

import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import useColorModeStore from "@/app/store/ColorModeStore";

const SwitchMode = () => {
  const [checked, setChecked] = useState(true);
  const setMode = useColorModeStore(state => state.changeMode)

  useEffect(() => {
    setMode(checked)
  }, [checked]);

  return (
    <>
      <Box
        onClick={() => setChecked((prev) => !prev)}
        sx={{ cursor: "pointer", display: 'flex' }}
      >
        {checked ? (
          <LightModeIcon color="primary" />
        ) : (
          <DarkModeIcon color="primary" />
        )}
      </Box>
    </>
  );
};

export default SwitchMode;

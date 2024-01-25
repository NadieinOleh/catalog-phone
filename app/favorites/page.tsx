import { Typography } from "@mui/material";
import React from "react";
import Nav from "../common/Navigation/Nav";
import Title from "../common/Title/Title";

const Favorites = () => {
  return (
    <>
      <Nav mainPath={"Favorites"} />
      <Title title={"Favorites"} spacing={0} />
      <Typography variant="body1" color="secondary.main" sx={{marginBottom: '40px'}}>
        items
      </Typography>
    </>
  );
};

export default Favorites;

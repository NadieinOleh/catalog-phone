"use client";

import { Typography } from "@mui/material";
import React from "react";
import Nav from "../common/Navigation/Nav";
import PhoneCard from "../common/PhoneCard/PhoneCard";
import Title from "../common/Title/Title";
import useStore from "../store/store";

const Favorites = () => {
  const item = useStore((state) => state.quantityFavorites);
  const phones = useStore((state) => state.favoritesPhone);

  console.log(phones);

  return (
    <>
      <Nav mainPath={"Favorites"} />
      <Title title={"Favorites"} spacing={0} />
      <Typography
        variant="body1"
        color="secondary.main"
        sx={{ marginBottom: "40px" }}
      >
        {item === 1 ? `${item} item` : `${item} items`}
      </Typography>

      {!!phones.length ? <PhoneCard phones={phones} /> : <Typography sx={{textAlign: 'center'}} variant='h2' color='warning.main'>Your favorite cart is empty</Typography>}
    </>
  );
};

export default Favorites;

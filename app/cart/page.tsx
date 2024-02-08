"use client";

import { Box, Grid, Typography, useTheme } from "@mui/material";
import React from "react";

import Nav from "../common/Navigation/Nav";
import Title from "../common/Title/Title";
import useStore from "../store/store";
import ListCart from "./components/ListCart/ListCart";
import Total from "./components/Total/Total";

const Cart = () => {
  const phones = useStore((state) => state.cartPhones);
  const theme = useTheme();

  return (
    <Box sx={{marginBottom: theme.spacing(5)}}>
      <Nav mainPath="Cart" />
      <Title title={"Cart"} />

      {!!phones.length ? (
        <Grid container spacing={2}>
          <Grid item lg={8} md={9} xs={12}>
            <ListCart />
          </Grid>

          <Grid item lg={4} md={3} xs={12}>
            <Total length={phones.length}/>
          </Grid>
        </Grid>
      ) : (
        <Typography
          sx={{ textAlign: "center" }}
          variant="h2"
          color="warning.main"
        >
          Your cart is empty
        </Typography>
      )}
    </Box>
  );
};

export default Cart;

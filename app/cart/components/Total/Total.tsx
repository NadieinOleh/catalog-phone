"use client";

import React, { useEffect, useState } from "react";
import { Button, IconButton, Snackbar, Typography } from "@mui/material";

import { Phones } from "@/helpers/types";
import useStore from "@/app/store/store";

import { BoxStyled, TextBlock } from "./Styles";

const Total = ({ length }: { length: number }) => {
  const [total, setTotal] = useState(0);
  const [open, setOpen] = useState(false);
  const cartPhones = useStore((state) => state.cartPhones);

  useEffect(() => {
    findTotal();
  }, [cartPhones]);

  const findTotal = () => {
    const totalPrice = cartPhones
      .map((phone: Phones) => {
        return phone.isSale
          ? phone.price * phone.quantity
          : phone.sale * phone.quantity;
      })
      .reduce((acc: number, price: number) => acc + price, 0);

    setTotal(totalPrice);
  };

  const action = (
    <>
      <Button color="secondary" size="small" onClick={() => setOpen(false)}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={() => setOpen(false)}
      ></IconButton>
    </>
  );

  return (
    <BoxStyled>
      <TextBlock>
        <Typography variant="h1" color="primary.main">{`$${total}`}</Typography>
        <Typography
          variant="body1"
          color="secondary.main"
        >{`Total for ${length} ${length === 1 ? "item" : "items"}`}</Typography>
      </TextBlock>

      <Button onClick={() => setOpen(true)} variant="contained">
        Checkout
      </Button>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
        message="This feature has not implemented yet"
        action={action}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      />
    </BoxStyled>
  );
};

export default Total;

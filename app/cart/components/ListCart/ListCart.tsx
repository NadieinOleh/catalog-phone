"use client";

import React from "react";
import { Box } from "@mui/material";

import useStore from "@/app/store/store";

import { BoxStyled } from "../ItemCart/Styles";
import ItemCart from "../ItemCart/ItemCart";

const ListCart = () => {
  const phones = useStore((state) => state.cartPhones);

  console.log(phones);

  return (
    <Box>
      {phones.map((phone) => (
        <ItemCart key={phone._id} phone={phone} />
      ))}
    </Box>
  );
};

export default ListCart;

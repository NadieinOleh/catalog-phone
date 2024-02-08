"use client";

import Minus from "@/app/common/icons/Minus";
import Plus from "@/app/common/icons/Plus";
import useStore from "@/app/store/store";
import { Phones } from "@/helpers/types";
import { Typography } from "@mui/material";
import React from "react";

import { BoxStyled, BoxAdd } from "./Styles";

const AdditionBlock = ({ phone }: { phone: Phones }) => {
  const increase = useStore((state) => state.increaseQuantityCart);
  const decrease = useStore((state) => state.decreaseQuantityCart);

  const doDecrease = (id: number) => {
    if (phone.quantity !== 1) {
      decrease(id);
    }
  };

  const doIncrease = (id: number) => {
    increase(id);
  };

  return (
    <BoxAdd>
      <BoxStyled onClick={() => doDecrease(phone._id)}>
        <Minus />
      </BoxStyled>
      <Typography variant="body1">{phone.quantity}</Typography>
      <BoxStyled onClick={() => doIncrease(phone._id)}>
        <Plus />
      </BoxStyled>
    </BoxAdd>
  );
};

export default AdditionBlock;

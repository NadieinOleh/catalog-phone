"use client";

import React from "react";
import Image from "next/image";
import { Box, Typography } from "@mui/material";

import { Phones } from "@/helpers/types";
import Cross from "@/app/common/icons/Cross";
import useStore from "@/app/store/store";
import AdditionBlock from "../AdditionBlock/AdditionBlock";

import { BoxStyled, BoxDesc, BoxPrice } from "./Styles";

const ItemCart = ({ phone }: { phone: Phones }) => {
  const remove = useStore((state) => state.removeCart);
  const decrease = useStore((state) => state.decreaseCart);

  const removeCard = (id: number) => {
    remove(id);
    decrease();
  };

  return (
    <BoxStyled>
      <BoxDesc>
        <Box onClick={() => removeCard(phone._id)}>
          <Cross />
        </Box>
        <Image src={phone.image} height={66} width={66} alt={phone.name} />
        <Typography variant="body1">{phone.name}</Typography>
      </BoxDesc>

      <BoxPrice>
        <AdditionBlock phone={phone}/>
        <Typography variant="h2">
          ${phone.isSale ? phone.price : phone.sale}
        </Typography>
      </BoxPrice>
    </BoxStyled>
  );
};

export default ItemCart;

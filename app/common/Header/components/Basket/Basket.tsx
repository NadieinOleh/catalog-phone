"use client";

import React from "react";

import Bin from "@/app/common/icons/Bin";
import Heart from "@/app/common/icons/Heart";
import BasketLinks from "./BasketLinks/BasketLinks";
import useStore from "@/app/store/store";

import { BoxStyled } from "./Styles";

const Basket = () => {
  const heartBadge = useStore((state) => state.quantityFavorites);
  const cartBadge = useStore((state) => state.quantityCart);

  return (
    <BoxStyled>
      <BasketLinks icon={<Heart />} count={heartBadge} link={"favorites"} />
      <BasketLinks icon={<Bin />} count={cartBadge} link={"cart"} />
    </BoxStyled>
  );
};

export default Basket;

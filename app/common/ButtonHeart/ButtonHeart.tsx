"use client";

import useStore from "@/app/store/store";
import { Phones } from "@/helpers/types";
import React, { useEffect, useState } from "react";
import Heart from "../icons/Heart";
import HeartRed from "../icons/HeartRed";

import { BoxStyled } from "./Styles";

const ButtonHeart = ({phone}: {phone: Phones}) => {
  const [selected, setSelected] = useState(false);
  const add = useStore(state => state.add)
  const remove = useStore(state => state.remove)
  const increase = useStore(state => state.increase)
  const decrease = useStore(state => state.decrease)

  const a = useStore(state => state.quantityFavorites)
console.log(a);

  const AddOrRemove = (phone: Phones) => {
    if (selected) {
      remove(phone._id)
      decrease()
      setSelected((prev) => !prev)
    } else {
      add(phone)
      increase()
      setSelected((prev) => !prev)
    }
  }

  return (
  <>
    <BoxStyled onClick={() => AddOrRemove(phone)}>
      {selected ? <HeartRed /> : <Heart />}
    </BoxStyled>
  </>
  );
};

export default ButtonHeart;

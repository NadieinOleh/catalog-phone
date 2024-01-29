"use client";

import useStore from "@/app/store/store";
import { Phones } from "@/helpers/types";
import React, { useEffect, useState } from "react";
import Heart from "../icons/Heart";
import HeartRed from "../icons/HeartRed";

import { BoxStyled } from "./Styles";

const ButtonHeart = ({ phone }: { phone: Phones }) => {
  const { selected } = phone;
  const add = useStore((state) => state.add);
  const remove = useStore((state) => state.remove);
  const increase = useStore((state) => state.increase);
  const decrease = useStore((state) => state.decrease);
  const editPhone = useStore((state) => state.edit);

  console.log(phone);
  

  const AddOrRemove = (phone: Phones) => {
    if (selected) {
      editPhone(phone._id);
      remove(phone._id);
      decrease();
    } else {
      editPhone(phone._id);
      add(phone);
      increase();
    }
  };

  return (
    <>
      <BoxStyled onClick={() => AddOrRemove(phone)}>
        {selected ? <HeartRed /> : <Heart />}
      </BoxStyled>
    </>
  );
};

export default ButtonHeart;

"use client";

import React from "react";
import { Button } from "@mui/material";

import ButtonHeart from "@/app/common/ButtonHeart/ButtonHeart";
import { Phones } from "@/helpers/types";

import useStore from "@/app/store/store";

const ButtonBlock = ({ phone }: { phone: Phones }) => {
  const { selectedCart } = phone;
  const add = useStore((state) => state.addCart);
  const remove = useStore((state) => state.removeCart);
  const increase = useStore((state) => state.increaseCart);
  const decrease = useStore((state) => state.decreaseCart);
  const editPhone = useStore((state) => state.editCart);
  
  const AddOrRemove = (phone: Phones) => {
    if (selectedCart) {
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
      <Button
        variant="contained"
        color={!phone.selectedCart ? "primary" : "secondary"}
        onClick={() => AddOrRemove(phone)}
      >
        {!selectedCart ? "Add to cart" : "Added to cart"}
      </Button>
      <ButtonHeart phone={phone} />
    </>
  );
};

export default ButtonBlock;

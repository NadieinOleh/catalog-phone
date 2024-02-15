"use client";

import React, { useEffect } from "react";
import Title from "@/app/common/Title/Title";
import { Phones } from "@/helpers/types";
import PhoneCard from "../PhoneCard/PhoneCard";
import useStore from "@/app/store/store";
import { CircularProgress } from "@mui/material";
import { BoxStyled } from "@/app/phones/components/GetPhonesList/Styles";

const ListPhones = ({
  phones,
  title,
}: {
  phones: Phones[];
  title?: string;
}) => {
  const phonesStorage = useStore((state) => state.phones);
  const setPhone = useStore((state) => state.setPhones);

  useEffect(() => {
    setPhone(phones);
  }, [phones]);

  return (
    <>
      {title && <Title title={title} />}
      {!!phonesStorage.length ? (
        <PhoneCard phones={phonesStorage} />
      ) : (
        <BoxStyled>
          <CircularProgress />
        </BoxStyled>
      )}
    </>
  );
};

export default ListPhones;

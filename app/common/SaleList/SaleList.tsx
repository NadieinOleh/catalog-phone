"use client";

import React, { useEffect } from 'react';
import Title from '@/app/common/Title/Title';
import {Phones} from '@/helpers/types';
import PhoneCard from '../PhoneCard/PhoneCard';
import useStore from '@/app/store/store';

const ListPhones = ({phones, title}: {phones: Phones[]; title?: string}) => {
  const phonesStorage = useStore((state) => state.phones)
  const setPhone = useStore((state) => state.setPhones)

console.log(phones);

  useEffect(() => {
     setPhone(phones);
  }, [phones]);

  return (
    <>
      {title && <Title title={title} />}
        <PhoneCard phones={phonesStorage} />
    </>
  );
};

export default ListPhones;

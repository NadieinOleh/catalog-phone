import React from 'react';
import Title from '@/app/common/Title/Title';
import {Phones} from '@/helpers/types';
import PhoneCard from '../../../common/PhoneCard/PhoneCard';

const ListPhones = ({phones, title}: {phones: Phones[]; title: string}) => {
  return (
    <>
      <Title title={title} />
      <PhoneCard phones={phones} />
    </>
  );
};

export default ListPhones;

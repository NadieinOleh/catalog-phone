import React from 'react';
import Title from '@/app/common/Title/Title';
import {Phones} from '@/helpers/types';
import PhoneCard from '../PhoneCard/PhoneCard';

const ListPhones = ({phones, title}: {phones: Phones[]; title?: string}) => {
  return (
    <>
      {title && <Title title={title} />}
      <PhoneCard phones={phones} />
    </>
  );
};

export default ListPhones;

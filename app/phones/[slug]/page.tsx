import React from 'react';

import Nav from '@/app/common/Navigation/Nav';
import {getPhone} from '@/helpers/helper';
import Title from '@/app/common/Title/Title';
import Back from './components/BackLink/Back';
import PhoneCard from './components/Back/PhoneCard/PhoneCard';
import DataProvider from './context/DataProvider';
import Definition from './components/Back/PhoneCard/components/Definition/Definition';

const Phone = async ({params}: {params: {slug: string}}) => {
  const phone = await getPhone(params.slug);

  return (
    <DataProvider value={phone}>
      <Nav mainPath={'Phones'} slug={phone.name} />
      <Back />
      <Title title={phone.name} />
      <PhoneCard />
      <Definition />
    </DataProvider>
  );
};

export default Phone;

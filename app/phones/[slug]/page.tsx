import React from 'react';

import Nav from '@/app/common/Navigation/Nav';
import {getPhone} from '@/helpers/helper';
import Title from '@/app/common/Title/Title';
import Back from './components/Back/Back';
import PhoneCard from './components/Back/PhoneCard/PhoneCard';

const Phone = async ({params}: {params: {slug: string}}) => {
  const phone = await getPhone(params.slug);
  console.log(phone);

  return (
    <div>
      <Nav mainPath={'Phones'} slug={phone.name} />
      <Back />
      <Title title={phone.name} />
      <PhoneCard phone={phone} />
      My Post: {params.slug}
    </div>
  );
};

export default Phone;

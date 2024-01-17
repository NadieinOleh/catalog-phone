import React from 'react';
import Nav from '../common/Navigation/Nav';
import Title from '../common/Title/Title';
import SortedBlock from './components/SortedBlock/SortedBlock';

import GetPhonesList from './components/GetPhonesList/GetPhonesList';
import LengthPhones from './components/LengthPhones/LengthPhones';

const Phones = () => {
  return (
    <>
      <Nav mainPath={'Phones'} />
      <Title title={'Mobile phones'} spacing={0} />
      <LengthPhones />
      <SortedBlock />
      <GetPhonesList />
    </>
  );
};

export default Phones;

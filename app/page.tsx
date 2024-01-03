import React from 'react';

import ShopByCatalog from './(home)/components/ShopByCatalog/ShopByCatalog';
import ListPhones from './common/SaleList/SaleList';
import {getPhonesHomePage} from '@/helpers/helper';
import MainSlider from './(home)/components/SliderBlock/Slider';

const Home = async () => {
  const {phonesWithSale, phonesWithoutSale, lengthPhones} = await getPhonesHomePage();

  return (
    <>
      <MainSlider />
      <ListPhones phones={phonesWithSale} title={'Hot prices'} />
      <ShopByCatalog amount={lengthPhones.length} />
      <ListPhones phones={phonesWithoutSale} title={'Brand new models'} />
    </>
  );
};

export default Home;

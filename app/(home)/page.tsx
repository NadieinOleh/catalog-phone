import React from 'react';

import ShopByCatalog from './components/ShopByCatalog/ShopByCatalog';
import ListPhones from '../(home)/components/SaleList/SaleList';
import {getPhones} from '@/helpers/helper';
import MainSlider from './components/SliderBlock/Slider';

import styles from './page.module.css';

const Home = async () => {
  const {phonesWithSale, phonesWithoutSale, lengthPhones} = await getPhones();
  console.log(lengthPhones.length);

  return (
    <main className={styles.main}>
      <MainSlider />
      <ListPhones phones={phonesWithSale} title={'Hot prices'} />
      <ShopByCatalog amount={lengthPhones.length} />
      <ListPhones phones={phonesWithoutSale} title={'Brand new models'} />
    </main>
  );
};

export default Home;

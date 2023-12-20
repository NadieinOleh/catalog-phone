import {Box, Typography, useColorScheme} from '@mui/material';
import {notFound} from 'next/navigation';
import ButtonExample from '../common/Button/ButtonExample';
import Title from '../common/Title/Title';
import ShopByCatalog from './components/ShopByCatalog/ShopByCatalog';
import styles from './page.module.css';

const getData = async () => {
  const res = await fetch('http://localhost:3000/api/phones', {cache: 'no-store'});

  if (!res.ok) return notFound();

  return res.json();
};

const Home = async () => {
  const phone = await getData();
  console.log(phone[0]);

  return (
    <main className={styles.main}>
    
          Oleh {phone[0].phone}
        
          <Title title={'bla bla'}/>
          <ButtonExample />      
          <ShopByCatalog />
    </main>
  );
};

export default Home;

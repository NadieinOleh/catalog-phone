'use client';

import React, {useState, useEffect} from 'react';

import ListPhones from '@/app/common/SaleList/SaleList';
import {getPhones} from '@/helpers/helper';
import useStore from '@/app/store/store';
import {CircularProgress, Typography} from '@mui/material';
import {BoxStyled} from './Styles';

const GetPhonesList = () => {
  const [phones, setPhones] = useState();
  const [error, setError] = useState('');
  const countItems = useStore(state => state.itemsOnPage);
  const sortBy = useStore(state => state.sortBy);

  const getAllPhones = async (item: number, sortBy: string) => {
    try {
      const data = await getPhones(item, sortBy);
      setPhones(data);
    } catch (error) {
      console.log(error);
      
      setError('Opps we have problem');
    }
  };

  useEffect(() => {
    getAllPhones(countItems, sortBy);
  }, [countItems, sortBy]);

  return (
    <>
      {phones ? (
        <ListPhones phones={phones} />
      ) : (
        <BoxStyled>
          <CircularProgress />
        </BoxStyled>
      )}
      {error && (
        <BoxStyled>
          <Typography variant="h3">{error}</Typography>
        </BoxStyled>
      )}
    </>
  );
};

export default GetPhonesList;

'use client';

import React, {useState} from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import {Typography} from '@mui/material';
import useStore from '@/app/store/store';

import {BoxStyled} from './Styles';

const SortedBlock = () => {
  const [price, setPrice] = useState('');
  const [amount, setAmount] = useState('');
  const getItemsOnPage = useStore(state => state.getItemsOnPage);
  const getSortBy = useStore(state => state.getSortBy);

  const handleChangePrice = (event: SelectChangeEvent) => {
    setPrice(event.target.value as string);
    getSortBy(event.target.value as string);
  };

  const handleChangeAmount = (event: SelectChangeEvent) => {
    setAmount(event.target.value as string);
    getItemsOnPage(+event.target.value as number);
  };

  return (
    <BoxStyled>
      <FormControl sx={{minWidth: 200}}>
        <InputLabel id="label">Sort by</InputLabel>
        <Select
          labelId="label"
          id="select"
          value={price}
          label="Sort by"
          onChange={handleChangePrice}
          inputProps={{MenuProps: {disableScrollLock: true}}}>
          <MenuItem value={'increase'}>
            <Typography variant="h5" color={'primary.main'}>
              Increase price
            </Typography>
          </MenuItem>
          <MenuItem value={'decrease'}>
            <Typography variant="h5" color={'primary.main'}>
              Decrease price
            </Typography>
          </MenuItem>
        </Select>
      </FormControl>

      <FormControl sx={{minWidth: 150}}>
        <InputLabel id="label">Items on page</InputLabel>
        <Select
          labelId="label"
          id="select"
          value={amount}
          label="Items on page"
          onChange={handleChangeAmount}
          inputProps={{MenuProps: {disableScrollLock: true}}}>
          {[5, 10, 15, 20].map((num: number) => (
            <MenuItem value={num} key={num}>
              <Typography variant="h5" color={'primary.main'}>
                {num}
              </Typography>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </BoxStyled>
  );
};

export default SortedBlock;

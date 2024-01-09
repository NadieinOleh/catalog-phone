'use client';

import React from 'react';

import ArrowLeft from '@/app/common/icons/ArrowLeft';
import {Typography} from '@mui/material';
import {BoxStyled} from './Styles';
import {useRouter} from 'next/navigation';

const Back = () => {
  const router = useRouter();

  const goBack = () => router.back();

  return (
    <BoxStyled onClick={() => goBack()}>
      <ArrowLeft />
      <Typography variant="body2" color={'secondary.main'}>
        Back
      </Typography>
    </BoxStyled>
  );
};
export default Back;

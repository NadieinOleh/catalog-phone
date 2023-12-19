'use client';

import React from 'react';
import {Container} from '@mui/material';

import Basket from './components/Basket/Basket';
import Links from './components/Links/Links';

import {BoxLinksStyled} from './Styles';

const Header = () => {
  return (
    <header id='header'>
      <Container>
        <BoxLinksStyled>
          <Links />
          <Basket />
        </BoxLinksStyled>
      </Container>
    </header>
  );
};

export default Header;

'use client';

import React from 'react';

import Basket from './components/Basket/Basket';
import Links from './components/Links/Links';

import {BoxLinksStyled} from './Styles';

const Header = () => {
  return (
    <header id="header">
      <BoxLinksStyled>
        <Links />
        <Basket />
      </BoxLinksStyled>
    </header>
  );
};

export default Header;

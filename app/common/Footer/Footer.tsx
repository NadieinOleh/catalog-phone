'use client';

import Link from 'next/link';
import React from 'react';
import Logo from '../icons/Logo';
import BackToTop from './components/BackToTop/BackToTop';
import Links from './components/Links/Links';
import {BoxStyled} from './Styles';

const Footer = () => {
  return (
    <footer>
      <BoxStyled>
        <Link href={'/'}>
          <Logo />
        </Link>

        <Links />

        <BackToTop />
      </BoxStyled>
    </footer>
  );
};

export default Footer;

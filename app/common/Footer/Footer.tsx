'use client';

import {Container, Box} from '@mui/material';
import Link from 'next/link';
import React from 'react';
import Logo from '../icons/Logo';
import BackToTop from './components/BackToTop/BackToTop';
import Links from './components/Links/Links';
import { BoxStyled } from './Styles';

const Footer = () => {
  return (
    <footer>
      <Container>
        <BoxStyled>
          <Link href={'/'}>
            <Logo />
          </Link>

          <Links />

          <BackToTop />
        </BoxStyled>
      </Container>
    </footer>
  );
};

export default Footer;

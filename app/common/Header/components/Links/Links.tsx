'use client';

import Logo from '@/app/common/icons/Logo';
import {headerLinks} from '@/helpers/constants';
import {Box} from '@mui/material';
import Link from 'next/link';
import React from 'react';
import {LinkStyled, BoxStyled, LogoStyled} from './Styles';

const Links = () => {
  return (
    <BoxStyled>
      <LogoStyled href="/">
        <Logo />
      </LogoStyled>

      {headerLinks.map(link => (
        <LinkStyled key={link.id} href={link.link}>
          {link.link}
        </LinkStyled>
      ))}
    </BoxStyled>
  );
};

export default Links;

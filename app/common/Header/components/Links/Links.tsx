'use client';

import React from 'react';

import Logo from '@/app/common/icons/Logo';
import {headerLinks, Link} from '@/helpers/constants';

import {LinkStyled, BoxStyled, LogoStyled} from './Styles';

const Links = () => {
  return (
    <BoxStyled>
      <LogoStyled href="/">
        <Logo />
      </LogoStyled>

      {headerLinks.map((link: Link) => (
        <LinkStyled key={link.id} href={`/${link.link}`}>
          {link.link}
        </LinkStyled>
      ))}
    </BoxStyled>
  );
};

export default Links;

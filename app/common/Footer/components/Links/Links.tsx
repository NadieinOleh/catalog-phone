'use client';

import React from 'react';

import {footerLinks} from '@/helpers/constants';

import {BoxStyled, LinkStyled} from '@/app/common/Header/components/Links/Styles';

const Links = () => {
  return (
    <BoxStyled>
      {footerLinks.map(link => (
        <LinkStyled key={link.id} href={link.link}>
          {link.title}
        </LinkStyled>
      ))}
    </BoxStyled>
  );
};

export default Links;

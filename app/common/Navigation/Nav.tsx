'use client';

import React from 'react';
import {Typography} from '@mui/material';
import {usePathname} from 'next/navigation';

import ArrowRight from '../icons/arrowRight';
import House from '../icons/House';

import {BoxStyled, LinkStyled, Container} from './Styles';

const Nav = () => {
  const pathname = usePathname();
  const arrayPath = pathname.split('/').filter(Boolean);

  return (
    <Container>
      <BoxStyled>
        <LinkStyled href={'/'}>
          <House />
        </LinkStyled>

        {arrayPath.map(path => {
          const upperPath = path[0].toUpperCase() + path.slice(1);

          return (
            <BoxStyled key={path}>
              <ArrowRight />

              <LinkStyled href={path}>
                <Typography color="secondary.main" variant="body1">
                  {upperPath}
                </Typography>
              </LinkStyled>
            </BoxStyled>
          );
        })}
      </BoxStyled>
    </Container>
  );
};

export default Nav;

'use client';

import React, {FC, ReactNode} from 'react';

import {Badge} from '@mui/material';

import {IconStyled} from './Styles';

type Props = {
  icon: ReactNode;
  count: number;
};

const BasketLinks: FC<Props> = ({icon, count} ) => {

  return (
    <IconStyled>
      <Badge badgeContent={count} invisible={false} color="error">
        {icon}
      </Badge>
    </IconStyled>
  );
};

export default BasketLinks;

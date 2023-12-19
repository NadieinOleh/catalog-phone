'use client';

import React, {FC, ReactNode} from 'react';

import {Badge} from '@mui/material';

import {IconStyled} from './Styles';

type Props = {
  icon: ReactNode;
};

const BasketLinks: FC<Props> = ({icon}) => {
  return (
    <IconStyled>
      <Badge badgeContent={1} invisible={false} color="error">
        {icon}
      </Badge>
    </IconStyled>
  );
};

export default BasketLinks;

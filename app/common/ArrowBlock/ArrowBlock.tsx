'use client';

import React, {FC, ReactNode} from 'react';

import {BoxStyled} from './Styles';

type Props = {
  icon: ReactNode;
  link?: string;
};

const ArrowBlock: FC<Props> = ({icon, link}) => {
  return (
    <a href={link}>
      <BoxStyled>{icon}</BoxStyled>
    </a>
  );
};

export default ArrowBlock;

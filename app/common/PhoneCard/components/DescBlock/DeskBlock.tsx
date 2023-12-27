'use client';

import React, {FC} from 'react';
import {Typography} from '@mui/material';

import {BoxPrice, SaleText, BoxDesc} from './Styles';

type Props = {
  sale?: number | string;
  desc: number | string;
  title: string;
  isSale?: boolean;
};

const DeskBlock: FC<Props> = ({desc, sale, title, isSale}) => {
  if (!desc) return null;

  return (
    <>
      {title === 'price' ? (
        <BoxPrice>
          <Typography variant="h2" color="text.secondary">
            ${desc}
          </Typography>
          <SaleText variant="h2" color="secondary.main">
            {isSale ? `$${sale}` : null}
          </SaleText>
        </BoxPrice>
      ) : (
        <BoxDesc>
          <Typography variant="body2" color="secondary.main">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {desc}
          </Typography>
        </BoxDesc>
      )}
    </>
  );
};

export default DeskBlock;

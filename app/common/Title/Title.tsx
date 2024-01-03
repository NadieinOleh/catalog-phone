'use client';

import React, {FC} from 'react';
import {Typography, useTheme} from '@mui/material';

type Props = {
  title: string;
  spacing?: number;
};

const Title: FC<Props> = ({title, spacing = 3}) => {
  const theme = useTheme();

  return (
    <Typography variant="h1" sx={{marginBottom: theme.spacing(spacing)}}>
      {title}
    </Typography>
  );
};

export default Title;

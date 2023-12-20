'use client';

import React, {FC} from 'react';
import {Typography, useTheme} from '@mui/material';

type Props = {
  title: string;
};

const Title: FC<Props> = ({title}) => {
  const theme = useTheme();

  return (
    <Typography variant="h1" sx={{marginBottom: theme.spacing(3)}}>
      {title}
    </Typography>
  );
};

export default Title;

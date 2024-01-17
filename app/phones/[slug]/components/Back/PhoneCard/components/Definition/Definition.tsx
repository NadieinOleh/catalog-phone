'use client';

import React from 'react';
import {Grid, Typography} from '@mui/material';
import {Box} from '@mui/system';
import {useDataContext} from '@/app/phones/[slug]/context/useData';

import {GridStyled, Title, SubTitle, Article, TechStyled} from './Styles';

const Definition = () => {
  const {about, camera, definition, screen, cameraInfo, processor, cell, zoom, memory, ram} = useDataContext();

  return (
    <GridStyled container columnSpacing={6} rowSpacing={4}>
      <Grid item xs={12} xl={6} lg={6}>
        <Title>
          <Typography variant="h2">About</Typography>
        </Title>
        <SubTitle>
          <Typography variant="h3">And then there was Pro</Typography>
        </SubTitle>
        <Article>
          <Typography variant="body1" color="secondary.main">
            {about}
          </Typography>
        </Article>

        <SubTitle>
          <Typography variant="h3">Camera</Typography>
        </SubTitle>
        <Article>
          <Typography variant="body1" color="secondary.main">
            {camera}
          </Typography>
        </Article>
        <SubTitle>
          <Typography variant="h3">
            Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.
          </Typography>
        </SubTitle>
        <Box>
          <Typography variant="body1" color="secondary.main">
            {definition}
          </Typography>
        </Box>
      </Grid>

      <Grid item xs={12} xl={6} lg={6}>
        <Title>
          <Typography variant="h2">Tech specs</Typography>
        </Title>

        <TechStyled>
          <Typography variant="body1" color="secondary.main">
            Screen
          </Typography>
          <Typography variant="body1">{screen}</Typography>
        </TechStyled>

        <TechStyled>
          <Typography variant="body1" color="secondary.main">
            Processor
          </Typography>
          <Typography variant="body1">{processor}</Typography>
        </TechStyled>

        <TechStyled>
          <Typography variant="body1" color="secondary.main">
            RAM
          </Typography>
          <Typography variant="body1">{ram}</Typography>
        </TechStyled>

        <TechStyled>
          <Typography variant="body1" color="secondary.main">
            Built in memory
          </Typography>
          <Typography variant="body1">{memory}</Typography>
        </TechStyled>

        <TechStyled>
          <Typography variant="body1" color="secondary.main">
            Camera
          </Typography>
          <Typography variant="body1">{cameraInfo}</Typography>
        </TechStyled>

        <TechStyled>
          <Typography variant="body1" color="secondary.main">
            Zoom
          </Typography>
          <Typography variant="body1">{zoom}</Typography>
        </TechStyled>

        <TechStyled>
          <Typography variant="body1" color="secondary.main">
            Cell
          </Typography>
          <Typography variant="body1">{cell}</Typography>
        </TechStyled>
      </Grid>
    </GridStyled>
  );
};

export default Definition;

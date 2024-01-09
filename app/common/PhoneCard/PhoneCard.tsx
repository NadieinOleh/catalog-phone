import React from 'react';
import {Card, CardActions, CardContent, CardMedia, Grid} from '@mui/material';
import {Phones} from '@/helpers/types';
import DeskBlock from './components/DescBlock/DeskBlock';
import ButtonBlock from './components/ButtonBlock/ButtonBlock';

import {LinkStyled, TypographyStyled} from './Styles';

const PhoneCard = ({phones}: {phones: Phones[]}) => {
  return (
    <Grid container spacing={'24px'} sx={{marginBottom: '80px'}}>
      {phones.map((phone: Phones) => (
        <Grid item key={phone._id} xs={3}>
          <Card sx={{maxWidth: 350}}>
            <CardMedia sx={{height: 208, backgroundSize: 'contain'}} image={phone.image} title={phone.name} />

            <CardContent>
              <LinkStyled href={`phones/${phone._id}`}>
                <TypographyStyled color={'primary.main'} variant="body1">
                  {phone.name}
                </TypographyStyled>
              </LinkStyled>

              <DeskBlock sale={phone.sale} title={'price'} desc={phone.price} isSale={phone.isSale} />

              <DeskBlock title={'Screen'} desc={phone.screen} />

              <DeskBlock title={'Capacity'} desc={phone.capacity} />

              <DeskBlock title={'RAM'} desc={phone.ram} />
            </CardContent>

            <CardActions>
              <ButtonBlock />
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default PhoneCard;

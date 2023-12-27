import React from 'react';
import {Card, CardActions, CardContent, CardMedia, Grid, Typography} from '@mui/material';
import {Phones} from '@/helpers/types';
import DeskBlock from './components/DescBlock/DeskBlock';
import ButtonBlock from './components/ButtonBlock/ButtonBlock';

const PhoneCard = ({phones}: {phones: Phones[]}) => {
  return (
    <Grid container spacing={'24px'} sx={{marginBottom: '80px'}}>
      {phones.map((phone: Phones) => (
        <Grid item key={phone._id} xs={3}>
          <Card sx={{maxWidth: 350}}>
            <CardMedia sx={{height: 208, backgroundSize: 'contain'}} image={phone.image} title={phone.name} />

            <CardContent>
              <Typography variant="body1">{phone.name}</Typography>

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

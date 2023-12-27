'use client';

import React, {Component} from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

import {StyledSlider, BoxStyled} from './Styles';

export default class MainSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrow: false,
    };
    return (
      <BoxStyled>
        <StyledSlider {...settings}>
          <Image height={400} width={1140} alt="Banner" src={'/Banner.png'} style={{objectFit: 'cover'}} />
          <Image height={400} width={1140} alt="Banner" src={'/Banner.png'} style={{objectFit: 'cover'}} />
          <Image height={400} width={1140} alt="Banner" src={'/Banner.png'} style={{objectFit: 'cover'}} />
        </StyledSlider>
      </BoxStyled>
    );
  }
}

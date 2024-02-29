"use client";

import React, { FC } from "react";
import Link from "next/link";

import { BoxStyled, ImageStyled } from "./Styles";

type Props = {
  bg: string;
  path: string;
  image: string;
};

const ImageBlock: FC<Props> = ({ bg, path, image }) => {
  return (
    <BoxStyled sx={{ background: bg }}>
      <Link href={path}>
        <ImageStyled src={image} height={368} width={429} alt={image} />
      </Link>
    </BoxStyled>
  );
};

export default ImageBlock;

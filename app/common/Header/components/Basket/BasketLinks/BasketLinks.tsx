"use client";

import React, { FC, ReactNode } from "react";
import Link from "next/link";
import { Badge } from "@mui/material";


import { IconStyled } from "./Styles";

type Props = {
  icon: ReactNode;
  count: number;
  link: string;
};

const BasketLinks: FC<Props> = ({ icon, count, link }) => {
  return (
    <IconStyled>
      <Link href={link}>
        <Badge badgeContent={count} invisible={false} color="error">
          {icon}
        </Badge>
      </Link>
    </IconStyled>
  );
};

export default BasketLinks;

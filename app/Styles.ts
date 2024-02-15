'use client';

import {Box, styled} from '@mui/material';

export const MainContainer = styled(Box)(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    position: 'relative',
    overflowX: 'hidden',
    paddingInline: theme.spacing(1),
    background: theme.palette.background.default,

    [theme.breakpoints.up('lg')]: {
        paddingInline: theme.spacing(3),
    },

    [theme.breakpoints.up('xl')]: {
        width: '1440px',
        margin: 'auto',
    },
}));

export const Main = styled('div')(() => ({
    flexGrow: 1,
}));

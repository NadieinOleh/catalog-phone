/* eslint-disable max-len */
import {Theme, createTheme, colors} from '@mui/material';

import lightPalette from './lightPalette';

export const toolbarHeights = {
  mobilePortrait: 60,
  mobileLandscape: 60,
  tabletDesktop: 79,
};

const createCommonTheme = (theme: Theme) =>
  createTheme({
    ...theme,
    breakpoints: {
      values: {
        xs: 0,
        sm: 660,
        md: 788,
        lg: 1200,
        xl: 1440,
      },
    },
    spacing: 8,
    mixins: {
      toolbar: {
        minHeight: toolbarHeights.mobilePortrait,
        [`${theme.breakpoints.up('xs')} and (orientation: landscape)`]: {
          minHeight: toolbarHeights.mobileLandscape,
        },
        [theme.breakpoints.up('sm')]: {
          minHeight: toolbarHeights.mobileLandscape,
        },
        [theme.breakpoints.up('md')]: {
          minHeight: toolbarHeights.tabletDesktop,
        },
      },
    },
    components: {
      MuiTypography: {
        styleOverrides: {
          root: {
            fontFamily: 'inherit',
            color: theme.palette.background.black,
          },
          h1: {
            fontSize: '32px',
            lineHeight: '41px',
            fontWeight: '700',
            letterSpacing: '-0.01em',
          },
          h2: {
            fontSize: '22px',
            lineHeight: '31px',
            fontWeight: '700',
          },
          h3: {
            fontSize: '20px',
            lineHeight: '26px',
            fontWeight: '500',
          },
          h4: {
            // uppercase
            fontSize: '12px',
            lineHeight: '11px',
            fontWeight: '700',
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
          },
          h5: {
            //buttons
            fontSize: '14px',
            lineHeight: '21px',
            fontWeight: '600',
          },
          body1: {
            fontSize: '14px',
            lineHeight: '21px',
            fontWeight: '400',
          },
          body2: {
            fontSize: '12px',
            lineHeight: '15px',
            fontWeight: '600',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',

            '&:hover': {
              background: theme.palette.info.dark,
            }
          },
          startIcon: {
            display: 'flex',
            marginLeft: `-15px`,
            justifyContent: 'center',
            alignItems: 'center',
            width: '48px',
            height: '48px',
            borderRadius: '100%',
          },
          containedPrimary: {
            color: theme.palette.background.white,

            minHeight: '2.5rem',
            minWidth: '11rem',
            background: theme.palette.primary.main,
          },
          containedSecondary: {
            borderBlockStyle: 'solid',
            borderBlockColor: theme.palette.background.white,
            borderBlock: '1px',
            color: theme.palette.success.main,
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            padding: theme.spacing(1),
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundColor: theme.palette.background.default,
            padding: theme.spacing(4),
            borderRadius: 28,
            border: `2px solid ${theme.palette.background.border}`,
            height: '100%',

            '& .MuiCardActions-root': {
              alignSelf: 'flex-end',
            },
            '& .MuiCardContent-root': {
              display: 'flex',
              flexDirection: 'column',
              gap: theme.spacing(3),
              padding: 0,
            },
          },
        },
      },
    },
  });

export const lightTheme = createTheme(createCommonTheme(lightPalette));

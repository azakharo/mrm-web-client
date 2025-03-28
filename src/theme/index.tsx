// This import is necessary for theming mui/lab components
// noinspection ES6UnusedImports
import type {} from '@mui/lab/themeAugmentation';
import {CircularProgress, colors} from '@mui/material';
import {ruRU} from '@mui/material/locale';
import {createTheme, lighten} from '@mui/material/styles';

import {
  COLOR__BACK,
  COLOR__ERROR,
  COLOR__ERROR_DARK,
  COLOR__ERROR_LIGHT,
  COLOR__INFO,
  COLOR__LIGHT_GRAY,
  COLOR__LINE,
  COLOR__MAIN_BLACK,
  COLOR__PRIMARY,
  COLOR__PRIMARY_DARK,
  COLOR__PRIMARY_LIGHT,
  COLOR__SECONDARY,
  COLOR__SECONDARY_DARK,
  COLOR__SECONDARY_LIGHT,
  COLOR__SUCCESS,
  COLOR__SUCCESS_DARK,
  COLOR__SUCCESS_LIGHT,
  COLOR__TEXT_DISABLED,
  COLOR__TEXT_PRIMARY,
  COLOR__TEXT_SECONDARY,
  COLOR__WARNING,
  COLOR__WARNING_DARK,
  COLOR__WARNING_LIGHT,
  COLOR__WHITE,
} from './colors';
import ExpandIcon from './expand.svg?react';
import typography from './typography';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: false; // removes the `xs` breakpoint
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true; // adds the `mobile` breakpoint
    tablet: true;
    desktop: true;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    subtle: true;
  }
}

const theme = createTheme(
  {
    palette: {
      primary: {
        main: COLOR__PRIMARY,
        light: COLOR__PRIMARY_LIGHT,
        dark: COLOR__PRIMARY_DARK,
        contrastText: COLOR__MAIN_BLACK,
      },
      secondary: {
        main: COLOR__SECONDARY,
        light: COLOR__SECONDARY_LIGHT,
        dark: COLOR__SECONDARY_DARK,
        contrastText: colors.common.white,
      },
      error: {
        main: COLOR__ERROR,
        light: COLOR__ERROR_LIGHT,
        dark: COLOR__ERROR_DARK,
      },
      warning: {
        main: COLOR__WARNING,
        light: COLOR__WARNING_LIGHT,
        dark: COLOR__WARNING_DARK,
      },
      info: {
        main: COLOR__INFO,
        contrastText: colors.common.white,
      },
      success: {
        main: COLOR__SUCCESS,
        light: COLOR__SUCCESS_LIGHT,
        dark: COLOR__SUCCESS_DARK,
      },
      text: {
        primary: COLOR__TEXT_PRIMARY,
        secondary: COLOR__TEXT_SECONDARY,
        disabled: COLOR__TEXT_DISABLED,
      },
    },
    breakpoints: {
      values: {
        mobile: 0,
        tablet: 768,
        desktop: 1440,
      },
    },
    components: {
      MuiUseMediaQuery: {
        defaultProps: {
          noSsr: true,
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: ({ownerState}) => ({
            ...(ownerState.color === 'default' && {
              color: COLOR__TEXT_PRIMARY,
            }),
          }),
        },
      },
      MuiButtonBase: {
        defaultProps: {
          disableRipple: true,
        },
      },
      MuiButton: {
        defaultProps: {
          variant: 'contained',
          disableRipple: true,
        },
        styleOverrides: {
          root: ({ownerState}) => ({
            borderRadius: 17,
            ...(ownerState.variant === 'contained' && {
              '&:hover': {
                backgroundColor: '#FFA806',
              },
              '&:active': {
                backgroundColor: '#FFA806',
              },
              // Вариант из Фигмы закомментарен, т.к. меньше нравится
              // '&.Mui-disabled': {
              //   opacity: 0.2,
              //   backgroundColor: COLOR__LINE,
              //   color: COLOR__MAIN_BLACK,
              // },
            }),
            ...(ownerState.variant === 'outlined' && {
              backgroundColor: COLOR__PRIMARY_LIGHT,
              color: '#FFA806',
              border: '1px solid transparent',
              '& span.MuiCircularProgress-root': {
                color: COLOR__PRIMARY,
              },
              '&:hover': {
                backgroundColor: '#FFF3D0',
                border: '1px solid transparent',
              },
              '&:active': {
                backgroundColor: '#FFF3D0',
                border: '1px solid transparent',
              },
              '&.Mui-disabled': {
                backgroundColor: COLOR__PRIMARY_LIGHT,
                color: '#FFE083',
                border: '1px solid transparent',
              },
            }),
            ...(ownerState.variant === 'subtle' &&
              ownerState.color === 'primary' && {
                backgroundColor: COLOR__WHITE,
                color: COLOR__WARNING,
                border: `1px solid ${COLOR__LINE}`,
                '& span.MuiCircularProgress-root': {
                  color: COLOR__PRIMARY,
                },
                '&:hover': {
                  backgroundColor: COLOR__WHITE,
                  boxShadow: '0 0 8px 8px #FFFAEC',
                },
                '&:focus': {},
                '&:active': {},
                '&.Mui-disabled': {
                  color: COLOR__WARNING,
                  opacity: 0.5,
                },
              }),
            ...(ownerState.variant === 'subtle' &&
              ownerState.color === 'error' && {
                backgroundColor: COLOR__ERROR_LIGHT,
                color: COLOR__ERROR,
                border: `1px solid ${COLOR__LINE}`,
                '& span.MuiCircularProgress-root': {
                  color: COLOR__PRIMARY,
                },
                '&:hover': {
                  backgroundColor: COLOR__ERROR_LIGHT,
                  boxShadow: `0 0 8px 8px ${lighten(COLOR__ERROR_LIGHT, 0.1)}`,
                },
                '&:focus': {},
                '&:active': {},
                '&.Mui-disabled': {
                  color: COLOR__ERROR,
                  opacity: 0.5,
                },
              }),
          }),
          sizeMedium: {
            padding: '14px 32px',
          },
        },
      },
      MuiTextField: {
        variants: [
          {
            props: {variant: 'outlined'},
            style: {
              '& input': {
                padding: '10px 16px',
                lineHeight: '20.5px',
                color: COLOR__MAIN_BLACK,
              },
              '& input::placeholder': {
                color: COLOR__LIGHT_GRAY,
                lineHeight: '20.5px',
              },
              border: 'none',
              '& fieldset': {
                // Stuff necessary for placing label above TextField (outside)
                // https://github.com/mui/material-ui/issues/30379#issuecomment-1175806105
                top: 0,
                borderRadius: '10px',
                border: `1px solid ${COLOR__LINE}`,
              },
              '&:hover fieldset': {
                border: `1px solid ${COLOR__LIGHT_GRAY} !important`,
              },
              '&:focus-within fieldset, &:focus-visible fieldset': {
                border: `1px solid ${COLOR__PRIMARY} !important`,
              },
              '& .MuiInputBase-root.Mui-disabled': {
                backgroundColor: COLOR__BACK,
              },
              // Stuff necessary for placing label above TextField (outside)
              // https://github.com/mui/material-ui/issues/30379#issuecomment-1175806105
              '& legend': {display: 'none'},
              '& .MuiFormHelperText-root': {
                position: 'absolute',
                bottom: -20,
              },
            },
          },
        ],
      },
      MuiInputLabel: {
        defaultProps: {
          shrink: true,
        },
        styleOverrides: {
          root: {
            color: `${COLOR__MAIN_BLACK} !important`,
            fontSize: 14,
            fontWeight: 500,
            lineHeight: '18px',
          },
          // Stuff necessary for placing label above TextField (outside)
          // https://github.com/mui/material-ui/issues/30379#issuecomment-1175806105
          shrink: {
            transform: 'translate(0px, -24px) scale(1) !important',
          },
        },
      },
      MuiFormHelperText: {
        styleOverrides: {
          root: {
            // align v8n message to the left edge of input
            marginLeft: 0,
            fontSize: 14,
            fontWeight: 400,
            lineHeight: '18px',
            color: '#E05225 !important',
          },
        },
      },
      MuiTypography: {
        defaultProps: {
          variant: 'b1regular',
          color: 'textPrimary',
        },
      },
      MuiLoadingButton: {
        defaultProps: {
          variant: 'contained',
          loadingIndicator: (
            <CircularProgress size={20} sx={{color: COLOR__MAIN_BLACK}} />
          ),
        },
      },
      MuiSwitch: {
        styleOverrides: {
          root: {
            width: 48,
            height: 24,
            padding: 0,
            '& .MuiSwitch-switchBase': {
              padding: 0,
              margin: 3,
              transitionDuration: '300ms',
              transform: 'translate(4px, 1px)',
              '&.Mui-checked': {
                transform: 'translate(22px, 1px)',
                color: COLOR__WHITE,
                '& + .MuiSwitch-track': {
                  backgroundColor: COLOR__PRIMARY,
                  opacity: 1,
                  border: 0,
                },
                '&.Mui-disabled + .MuiSwitch-track': {
                  opacity: 0.5,
                },
              },
            },
            '& .MuiSwitch-thumb': {
              boxSizing: 'border-box',
              width: 16,
              height: 16,
            },
            '& .MuiSwitch-track': {
              borderRadius: 26 / 2,
              backgroundColor: COLOR__PRIMARY,
              opacity: 1,
            },
          },
        },
      },
      MuiSelect: {
        defaultProps: {
          IconComponent: ExpandIcon,
        },
        styleOverrides: {
          root: {
            backgroundColor: COLOR__WHITE,
            borderRadius: '10px',
            border: 'none',
            '& fieldset': {
              border: `1px solid ${COLOR__LINE}`,
            },
            '&:hover fieldset': {
              border: `1px solid ${COLOR__LIGHT_GRAY} !important`,
            },
            '&:focus-within fieldset, &:focus-visible fieldset': {
              border: `1px solid ${COLOR__PRIMARY} !important`,
            },
            '&.Mui-focused fieldset': {
              border: `1px solid ${COLOR__PRIMARY} !important`,
            },
          },
          select: {
            padding: '8px 12px',
          },
        },
      },
      MuiDialog: {
        defaultProps: {
          PaperProps: {
            style: {
              borderRadius: '15px',
              padding: 24,
            },
          },
        },
      },
      MuiDialogTitle: {
        defaultProps: {
          component: 'div',
        },
        styleOverrides: {
          root: {
            padding: 0,
            marginBottom: 8,
          },
        },
      },
      MuiDialogContent: {
        styleOverrides: {
          root: {
            padding: 0,
            marginBottom: 24,
          },
        },
      },
      MuiDialogActions: {
        styleOverrides: {
          root: {
            padding: 0,
            justifyContent: 'flex-start',
            gap: 12,
          },
        },
      },
      MuiAlert: {
        styleOverrides: {
          standardError: {
            backgroundColor: COLOR__ERROR_LIGHT,
          },
        },
      },
    },
    typography,
  },
  ruRU,
);

export default theme;

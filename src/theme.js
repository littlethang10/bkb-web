import { experimental_extendTheme as extendTheme } from '@mui/material/styles'
import { common } from '@mui/material/colors'


// Create a theme instance.
const theme = extendTheme({
  bkbCustom: {
    headerHeight: '78px',
    navbarHeight: '58px'
  },
  typography: {
    fontFamily: [
      '"Plus Jakarta Sans"', // Lưu ý: Tên font có khoảng trắng nên phải được bọc trong ngoặc kép '' ""
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(',')
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: common.white
        }
      }
    },
    dark: {
      palette: {
        primary: {
          main: common.black
        }
      }
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none'
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.primary.main
        })
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          fontSize: '0.875rem',
          '.MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.primary.dark
          },
          '&:hover': {
            '.MuiOutlinedInput-notchedOutline': {
              borderColor: theme.palette.primary.main
            }
          },
          '& fieldset': {
            borderWidth: '1px !important'
          }
        })
      }
    }
  }


})

export default theme
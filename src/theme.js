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
      '"Plus Jakarta Sans"',
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
    }
  }
})

export default theme
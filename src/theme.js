import { experimental_extendTheme as extendTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

// Create a theme instance.
const theme = extendTheme({
  bkbCustom: {
    headerHeight: '58px'
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: red[600]
        }
      }
    },
    dark: {
      palette: {
        primary: {
          main: red[400]
        }
      }
    }
  }
  // ...other properties
})

export default theme
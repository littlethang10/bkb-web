import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { ReactComponent as bkbLogo } from '~/assets/bkb-logo.svg'
import SvgIcon from '@mui/material/SvgIcon'
import { yellow } from '@mui/material/colors'
import { red } from '@mui/material/colors'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import SearchIcon from '@mui/icons-material/Search'

function Header() {
  return (
    <Box sx={{
      backgroundColor: '#031f30',
      borderBottom: '1px solid #2c4758',
      width: '100%',
      height: (theme) => theme.bkbCustom.headerHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      px: 10
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2, flexShrink: 0, height: '100%' }}>
        {/* LOGO */}
        <Box
          sx={{
            width: '58px', height: '100%',
            overflow: 'hidden',
            borderRadius: '8px',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}
        >
          <SvgIcon component={bkbLogo} inheritViewBox sx={{ fontSize: '58px', transform: 'scale(1.5)' }} />
        </Box>
        <Box sx={{ lineHeight: 1.1 }}>
          <Typography
            sx={{ fontSize: 22, fontWeight: 700, color: red[500], letterSpacing: '1px', lineHeight: 1.2 }}
          >
            BK BODYGUARD
          </Typography>
          <Typography
            sx={{ fontSize: 11, color: yellow[600], letterSpacing: '0px', fontWeight: 'bold' }}
          >
            An toàn của bạn là hạnh phúc của chúng ta
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <TextField
          id="standard-search"
          placeholder="Search..."
          size="small"
          variant="standard"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: 'white' }} />
              </InputAdornment>
            )
          }}
          sx={{
            // Đổi màu chữ khi gõ
            '& .MuiInputBase-input': {
              color: 'white'
            },
            // Viền dưới lúc bình thường
            '& .MuiInput-underline:before': {
              borderBottomColor: 'rgba(255, 255, 255, 0.5)'
            },
            // Viền dưới lúc di chuột vào (hover)
            '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
              borderBottomColor: 'white'
            },
            // Viền dưới lúc click chuột vào để gõ (focus)
            '& .MuiInput-underline:after': {
              borderBottomColor: 'white'
            }
          }}
        />
      </Box>
    </Box>
  )
}

export default Header
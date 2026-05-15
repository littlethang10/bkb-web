import Box from '@mui/material/Box'
import Homepage from './Menus/Homepage'
import Service from './Menus/Service'
import Activity from './Menus/Activity'
import News from './Menus/News'
import AboutUs from './Menus/AboutUs'
import Careers from './Menus/Careers'

function Navbar() {
  return (
    <Box sx={{
      backgroundColor: '#031f30',
      width: '100%',
      height: (theme) => theme.bkbCustom.navbarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      px: 3
    }}>
      {/* MENUS */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0, height: '100%' }}>
        <Homepage />
        <Service />
        <Activity />
        <News />
        <Careers />
        <AboutUs />
      </Box>
    </Box>
  )
}

export default Navbar
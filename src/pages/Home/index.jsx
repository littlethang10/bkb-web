import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Header from '~/components/Header'


function Home() {
  return (
    <>
      <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
        <Header />
        <Box sx={{
          backgroundColor: 'primary.main',
          width: '100%',
          height: (theme) => `calc(100vh - ${theme.bkbCustom.headerHeight})`,
          display: 'flex',
          alignItems: 'center'
        }}>
          Home Content
        </Box>
      </Container>
    </>
  )
}

export default Home

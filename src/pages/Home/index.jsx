import { useState, useEffect } from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Fade from '@mui/material/Fade'

import Header from '~/components/Header'
import Navbar from '~/components/Navbar'

// Mock data cho Slider
const heroSlides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=1920&q=80',
    title: 'BK BODYGUARD',
    subtitle: 'Giải pháp an ninh toàn diện và chuyên nghiệp cho doanh nghiệp của bạn.'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1920&q=80',
    title: 'Đội Ngũ Vệ Sĩ Tinh Nhuệ',
    subtitle: 'Được đào tạo bài bản, sẵn sàng ứng phó trong mọi tình huống khẩn cấp.'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1920&q=80',
    title: 'An Tâm Tuyệt Đối',
    subtitle: 'Chúng tôi bảo vệ sự an toàn của bạn để bạn tập trung vào phát triển.'
  }
]

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto-play cho Hero Slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1))
    }, 5000) // Chuyển ảnh sau mỗi 5 giây
    return () => clearInterval(timer)
  }, [])

  return (
    <>
      <Container disableGutters maxWidth={false} sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Header />
        <Navbar />
        {/* HERO SLIDER SECTION */}
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: (theme) => `calc(100vh - ${theme.bkbCustom.headerHeight} - ${theme.bkbCustom.navbarHeight})`,
            overflow: 'hidden',
            backgroundColor: 'black'
          }}
        >
          {heroSlides.map((slide, index) => (
            <Fade key={slide.id} in={index === currentSlide} timeout={1000}>
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${slide.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  display: index === currentSlide ? 'flex' : 'none',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                  color: 'white',
                  px: 3
                }}
              >
                <Typography
                  variant="h2"
                  component="h1"
                  fontWeight="bold"
                  gutterBottom
                  sx={{ textTransform: 'uppercase', letterSpacing: 2 }}
                >
                  {slide.title}
                </Typography>
                <Typography variant="h5" sx={{ mb: 4, maxWidth: '800px', fontWeight: 300 }}>
                  {slide.subtitle}
                </Typography>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: '#d4af37', // Màu vàng gold sang trọng cho ngành bảo vệ
                    color: 'black',
                    fontWeight: 'bold',
                    px: 4,
                    py: 1.5,
                    '&:hover': { backgroundColor: '#b5952f' }
                  }}
                >
                  Liên Hệ Ngay
                </Button>
              </Box>
            </Fade>
          ))}

          {/* Dots Indicator */}
          <Box sx={{ position: 'absolute', bottom: 30, width: '100%', display: 'flex', justifyContent: 'center', gap: 1 }}>
            {heroSlides.map((_, index) => (
              <Box
                key={index}
                onClick={() => setCurrentSlide(index)}
                sx={{
                  width: index === currentSlide ? 30 : 10,
                  height: 10,
                  borderRadius: 5,
                  backgroundColor: index === currentSlide ? '#d4af37' : 'rgba(255,255,255,0.5)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </>
  )
}

export default Home
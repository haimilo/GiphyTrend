import { Box } from '@mui/material'
import Header from '../../components/Header'
import SearchBoxContainer from '../../components/SearchBoxContainer/SearchBoxContainer'
import TrendingBox from '../../components/TrendingBox/TrendingBox'



const LandingPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        maxWidth: '1040px',
        margin: '0 auto',
        flexDirection: 'column',
        boxSizing: 'border-box',
      }}
    >
      <Header />
      <SearchBoxContainer />
      <TrendingBox />
    </Box>
  )
}

export default LandingPage
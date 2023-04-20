import { Box, Button } from '@mui/material'
import React from 'react'
import LogoSvg from '../../common/LogoSvg'
import NavigateButton from '../../common/NavigateButton';
import './Header.css';
import PersonIcon from '@mui/icons-material/Person';

const navigateData = [
  {
    text: 'Reactions',
    link: '/reactions',
  },
  {
    text: 'Entertainment',
    link: '/entertainment',
  },
  {
    text: 'Sports',
    link: '/sports',
  },
  {
    text: 'Stickers',
    link: '/stickers',
  },
  {
    text: 'Artists',
    link: '/artists',
  }
];

const Header = () => {
  return (
    <Box
      sx={{
        pt: '10px',
        height: '50px',
        width: '100%',
        display: 'flex',
      }}
    >
      <LogoSvg />
      <Box
        className='NavigateBox'
      >
        {
          navigateData.map((item, index) => {
            return (
              <NavigateButton
                key={index}
                text={item.text}
                link={item.link}
              />
            )
          })
        }
      </Box>
      {/* Upload and Create */}
      <Box
        sx={{
          display: 'flex',
          ml: '10px',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}
      >
        <Button className='UploadAndCreateBtn'
          variant="contained"
          sx={{
            background: 'linear-gradient(263.31deg, rgb(153, 51, 255) -97.49%, rgb(97, 87, 255) 94.14%)',
          }}
        >
          Upload
        </Button>
        <Button className='UploadAndCreateBtn'
          variant="contained"
          sx={{
            background: 'linear-gradient(263.55deg, rgb(153, 51, 255) -5.88%, rgb(97, 87, 255) 194.65%)',
          }}>
          Create
        </Button>
      </Box>
      {/* Login Container */}
      <Box
        sx={{
          display: 'flex',
          ml: '10px',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '176px',
        }}
      >
        <PersonIcon
          sx={{
            fontSize: '35px',
            backgroundColor: '#3E3E3E',
          }}
        />
        <Button
          variant="contained"
          sx={{
            height: '35px',
            backgroundColor: '#3E3E3E',
            borderRadius: '0 !important',
            width: '140px',
            textTransform: 'capitalize',
            fontFamily: 'Montserrat',
            fontSize: '14px',
            fontWeight: 'bold',
          }}
        >
          Log in
        </Button>
      </Box>
    </Box>
  )
}

export default Header
import { Box, TextField, IconButton } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

const SearchBoxContainer = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: '50px',
        backgroundColor: '#F2F2F2',
        borderRadius: '4px',
        // padding: '0 18px',
        boxShadow: '0 1px 3px 0 rgba(0,0,0,0.12), 0 1px 2px 0 rgba(0,0,0,0.24)',
      }}
      component="form"
      onSubmit={
        (e) => {
          e.preventDefault()
        }
      }
    >
      <TextField
        placeholder="Search all the GIFS and Stickers"
        sx={{
          width: '100%',
          borderRadius: '4px',
          padding: '0 18px',
          '& .MuiOutlinedInput-root': {
            borderRadius: '4px',
            '& fieldset': {
              border: 'none',
            },
            '&:hover fieldset': {
              border: 'none',
            },
            '&.Mui-focused fieldset': {
              border: 'none',
            },
          },
          '&.Mui-focused': {
            borderRadius: '4px',
          },
          '& .MuiOutlinedInput-input': {
            padding: '10px 0',
          },
        }}
        id="outlined-basic"
      />
      <Box
        sx={{
          width: '50px',
          height: '50px',
          borderRadius: '0 4px 4px 0',
          animations: '2s linear 0s infinite normal none running CNual',
          background: 'linear-gradient(45deg, rgb(153, 51, 255) 0%, rgb(255, 102, 102) 50%, rgb(153, 51, 255) 100%)',
          backgroundSize: '400%',
          backgroundPosition: '0% 100%',
          content: '""',
          inset: '0px',
        }}
      >
        <IconButton
          sx={{
            width: '100%',
            height: '100%',
            color: '#fff',
          }}
        >
          <SearchIcon />
        </IconButton>
      </Box>
    </Box>
  )
}

export default SearchBoxContainer
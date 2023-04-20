import { Box, Typography } from '@mui/material'
import React from 'react'
import { useQuery } from 'react-query'

const TrendingBox = () => {

  // const {
  //   data: trendingData,
  //   refetch: refetchClientData,
  //   isFetching
  // } = useQuery('trending', () => getTrendingGifs(), {
  //   refetchOnWindowFocus: false,
  //   refetchOnMount: false,
  //   refetchOnReconnect: false,
  //   refetchInterval: false,
  //   refetchIntervalInBackground: false,
  // })

  return (
    <Box
      sx={{
        display: 'flex',
        direction: 'column',
        alignItems: 'start',
        width: '100%',
      }}
    >
      <Typography variant="h4" component="div" sx={{
        fontWeight: 'bold',
        p: '16px 0',
        fontSize: '16px',
      }}>
        Trending GIFs
      </Typography>
    </Box>
  )
}

export default TrendingBox
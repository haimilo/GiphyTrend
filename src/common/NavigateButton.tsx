import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface INavigateButton {
  text: string;
  link: string;
}

const NavigateButton = (props: INavigateButton) => {

  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: 'flex',
        mx: '2px',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Button
        variant="contained"
        // href={props.link}
        onClick={
          () =>
            navigate(props.link)
        }
        sx={{
          textTransform: 'none',
          fontFamily: 'Montserrat',
          borderRadius: '0',
          backgroundColor: 'transparent',
          transition: 'all 0.3s ease',
          height: '30px',
          '&:hover': {
            background: 'linear-gradient(125deg, rgba(0,212,255,1) 0%, rgba(140,140,245,1) 55%, rgba(66,58,187,1) 100%)',
          },
        }}
      >
        {props.text}
      </Button>
      <Box
        sx={{
          width: '100%',
          height: '2px',
          background: 'linear-gradient(90deg, rgba(0,212,255,1) 0%, rgba(140,140,245,1) 55%, rgba(66,58,187,1) 100%)',
        }}
      />
    </Box >
  )
}

export default NavigateButton
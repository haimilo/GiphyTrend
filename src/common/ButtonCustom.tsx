import { Button, ButtonProps, CircularProgress, InputLabel, styled } from '@mui/material';

const ButtonStyled = styled(Button)(({ theme }) => ({
  width: '200px',
  height: '40px !important',
  minHeight: '40px !important',
  borderRadius: '5px',
  textTransform: 'none',
  ':disabled': {
    opacity: theme.palette.action.disabledOpacity,
  },
}));

const Label = styled(InputLabel)(() => ({
  fontSize: '14px',
  fontWeight: '500',
  margin: 0,
  cursor: 'pointer',
  minHeight: 'fit-content !important',
}));

type ButtonCustomProps = ButtonProps & {
  title: string;
  backgroundColor: string;
  colorLabel: string;
  border: string;
  loading?: boolean;
};

export const ButtonCustom = ({
  title,
  backgroundColor,
  colorLabel,
  border,
  loading,
  type,
  ...other
}: ButtonCustomProps) => {
  return (
    <ButtonStyled
      type={type}
      {...other}
      sx={{ ...other.sx, backgroundColor: `${backgroundColor} !important`, border: border }}>
      {loading && <CircularProgress sx={{ color: colorLabel, marginRight: '4px' }} size={14} />}
      <Label sx={{ color: colorLabel }}>{title}</Label>
    </ButtonStyled>
  );
};

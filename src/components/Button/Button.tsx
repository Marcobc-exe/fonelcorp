import MUIButton from "@mui/material/Button";
import {
  CircularProgress,
  type ButtonProps as MUIButtonProps,
} from "@mui/material";

export interface CustomButtonProps extends MUIButtonProps {
  loading?: boolean;
}

export const Button: React.FC<CustomButtonProps> = ({
  variant = 'contained',
  color = 'primary',
  loading = false,
  disabled,
  children,
  ...props
}) => {
  return (
    <MUIButton
      variant={variant}
      color={color}
      disabled={disabled || loading}
      sx={{
        transition: 'all 0.3s ease',
        fontFamily: 'Archivo Narrow',
        '&:hover': {
          backgroundColor: (theme) => theme.palette.secondary.dark,
          boxShadow: 'none',
        },
        '&:focus': {
          outline: 'none',
        },
      }}
      
      {...props}
    >
      {loading ? <CircularProgress size={20} color="inherit" /> : children}
    </MUIButton>
  );
};

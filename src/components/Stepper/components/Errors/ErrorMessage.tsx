import type { FC } from "react";
import type { FieldErrors } from "react-hook-form";
import type { InputsFormServices } from "../../../../types/service";
import { useMediaQuery, useTheme } from "@mui/material";

type Props = {
  errors: FieldErrors<InputsFormServices>;
  activeStep: number;
};

export const ErrorMessage: FC<Props> = ({ errors, activeStep }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const bottom = isTablet ? '0px' : isMobile ? "5px" : '14px';

  return (
    <p
      style={{
        bottom,
        width: '100%',
        position: 'relative',
        color: 'red',
        textAlign: 'right',
        paddingRight: '16%'
      }}
    >
      {(errors?.owner && activeStep === 0) && errors?.owner?.message}
      {(errors?.vehicle && activeStep === 1) && errors?.vehicle?.message}
      {(errors?.appointment && activeStep === 2) && errors?.appointment?.message}
    </p>
  );
};

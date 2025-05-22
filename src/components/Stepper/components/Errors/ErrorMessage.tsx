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
  const position = isMobile ? 'relative' : 'absolute' 
  const width = isTablet ? "55%" : isMobile ? "90%" : "30%"
  const right = isMobile ? "0px" : "20%"

  return (
    <p
      style={{
        width,
        position,
        right,
        bottom,
        color: 'red'
      }}
    >
      {(errors?.owner && activeStep === 0) && errors?.owner?.message}
      {(errors?.vehicle && activeStep === 1) && errors?.vehicle?.message}
      {(errors?.appointment && activeStep === 2) && errors?.appointment?.message}
    </p>
  );
};

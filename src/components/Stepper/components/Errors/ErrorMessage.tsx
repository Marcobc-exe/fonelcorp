import type { FC } from "react";
import type { FieldErrors } from "react-hook-form";
import type { InputsFormServices } from "../../../../types/service";

type Props = {
  errors: FieldErrors<InputsFormServices>;
  activeStep: number;
};

export const ErrorMessage: FC<Props> = ({ errors, activeStep }) => {
  return (
    <p
      style={{
        // backgroundColor: 'green',
        width: '30%',
        position: 'absolute',
        right: '20%',
        bottom: '14px',
        color: 'red'
      }}
    >
      {(errors?.owner && activeStep === 0) && errors?.owner?.message}
      {(errors?.vehicle && activeStep === 1) && errors?.vehicle?.message}
      {(errors?.appointment && activeStep === 2) && errors?.appointment?.message}
    </p>
  );
};

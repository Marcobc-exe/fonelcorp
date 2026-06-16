import { Step, StepLabel, Stepper, useMediaQuery, useTheme } from "@mui/material";
import type { FC } from "react";
import { ColorlibConnector } from "../Style/StyleConnector";
import { steps } from "../../../../const/const";
import { ColorlibStepIcon } from "../Style/StyleIcon";

type StepeerBarProps = {
  activeStep: number;
  completed: { [k: number]: boolean };
};

export const StepperTopBar: FC<StepeerBarProps> = ({
  activeStep,
  completed,
}) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.between('xs', 'sm'));

  return (
    <Stepper
      nonLinear
      alternativeLabel
      activeStep={activeStep}
      connector={<ColorlibConnector />}
    >
      {steps.map((label, index) => (
        <Step key={label} completed={completed[index]}>
          <StepLabel
            color="inherit"
            slots={{
              stepIcon: ColorlibStepIcon,
            }}
          >
            {!isMobile && label}
          </StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};

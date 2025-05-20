import { Step, StepLabel, Stepper } from "@mui/material";
import type { FC } from "react";
import { ColorlibConnector } from "../Style/StyleConnector";
import { steps } from "../../../../const/const";
import { ColorlibStepIcon } from "../Style/StyleIcon";

type StepeerBarProps = {
  activeStep: number;
  completed: { [k: number]: boolean };
  handleHideForm: () => void;
};

export const StepperTopBar: FC<StepeerBarProps> = ({
  activeStep,
  completed,
  handleHideForm,
}) => {
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
            // onClick={handleStep(index)}
            // StepIconComponent={ColorlibStepIcon}
            slots={{
              stepIcon: ColorlibStepIcon,
            }}
          >
            {label}
          </StepLabel>
        </Step>
      ))}
      <button
        onClick={() => handleHideForm()}
        style={{ cursor: "pointer" }}
      >
        Close
      </button>
    </Stepper>
  );
};

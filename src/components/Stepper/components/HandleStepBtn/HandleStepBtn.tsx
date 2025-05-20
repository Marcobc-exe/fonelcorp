import { Button, Typography } from "@mui/material";
import { steps } from "../../../../const/const";

type HandleStepsButtonProps = {
  activeStep: number;
  completed: { [k: number]: boolean };
  handleComplete: () => void;
  completedSteps: () => number;
  totalSteps: () => number;
  handleOnSubmit: () => void;
};

export const HandleStepsButton: React.FC<HandleStepsButtonProps> = ({
  activeStep,
  completed,
  handleComplete,
  completedSteps,
  totalSteps,
  handleOnSubmit,
}) => {
  const labelStep = completedSteps() === totalSteps() - 1;

  return (
    <>
      {activeStep !== steps.length &&
        (completed[activeStep] ? (
          <Typography variant="caption" sx={{ display: "inline-block" }}>
            Step {activeStep + 1} done!
          </Typography>
        ) : (
          <Button
            type={labelStep ? "submit" : "button"}
            onClick={() => {
              if (labelStep) {
                handleOnSubmit();
              } else {
                handleComplete();
              }
            }}
          >
            {labelStep ? "Finish" : "Complete Step"}
          </Button>
        ))}
    </>
  );
};

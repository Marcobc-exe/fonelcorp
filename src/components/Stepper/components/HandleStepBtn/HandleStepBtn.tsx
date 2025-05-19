import { Button, Typography } from "@mui/material";
import { steps } from "../../../../const/const";

type HandleStepsButtonProps = {
  activeStep: number;
  completed: { [k: number]: boolean };
  handleComplete: () => void;
  completedSteps: () => number;
  totalSteps: () => number;
};

export const HandleStepsButton: React.FC<HandleStepsButtonProps> = ({
  activeStep,
  completed,
  handleComplete,
  completedSteps,
  totalSteps,
}) => {
  const labelStep =
    completedSteps() === totalSteps() - 1 ? "Finish" : "Complete Step";

  return (
    <>
      {activeStep !== steps.length &&
        (completed[activeStep] ? (
          <Typography variant="caption" sx={{ display: "inline-block" }}>
            Step {activeStep + 1} already completed
          </Typography>
        ) : (
          <Button onClick={handleComplete}>{labelStep}</Button>
        ))}
    </>
  );
};

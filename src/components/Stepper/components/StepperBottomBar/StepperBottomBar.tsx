import { Box, Button } from "@mui/material";
import { HandleStepsButton } from "../HandleStepBtn/HandleStepBtn";

type BottomSteperBarProps = {
  activeStep: number;
  completed: { [k: number]: boolean };
  handleBack: () => void;
  handleNext: () => void;
  totalSteps: () => number;
  completedSteps: () => number;
  handleComplete: () => void;
  handleOnSubmit: () => void;
};

export const BottomSteperBar: React.FC<BottomSteperBarProps> = ({
  activeStep,
  completed,
  handleBack,
  handleNext,
  totalSteps,
  completedSteps,
  handleComplete,
  handleOnSubmit,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        pt: 2,
        // bgcolor: "yellow",
        paddingInline: '10%'
        // position: 'fixed',
        // bottom: 5,
      }}
    >
      <Button
        color="inherit"
        disabled={activeStep === 0}
        onClick={handleBack}
        sx={{ mr: 1 }}
      >
        Back
      </Button>

      <Box sx={{ flex: "1 1 auto" }} />

      <Button color="inherit" onClick={handleNext} sx={{ mr: 1 }}>
        Next
      </Button>
      <HandleStepsButton
        activeStep={activeStep}
        completed={completed}
        totalSteps={totalSteps}
        completedSteps={completedSteps}
        handleComplete={handleComplete}
        handleOnSubmit={handleOnSubmit}
      />
    </Box>
  );
};
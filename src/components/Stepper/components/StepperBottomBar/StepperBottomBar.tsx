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
  handleModal: (value: boolean) => void;
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
  handleModal,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        pt: 2,
        paddingInline: "10%",
      }}
    >
      <Button color="inherit" onClick={() => handleModal(true)}>
        Cancel
      </Button>
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

import { Box, Button } from "@mui/material";
import type { FC } from "react";
import { HandleStepsButton } from "../HandleStepBtn/HandleStepBtn";

type Props = {
  activeStep: number;
  under400px: boolean;
  isMobile: boolean;
  handleBack: () => void;
  handleModal: (value: boolean) => void;
};

export const LeftMobileBtns: FC<Props> = ({
  activeStep,
  under400px,
  isMobile,
  handleModal,
  handleBack,
}) => {
  return (
    <>
      {under400px ? (
        <Box display={"flex"} flexDirection={"column"} width={'60%'}>
          <Button
            color="inherit"
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{
              mr: 1,
              fontSize: "20px",
              // bgcolor: 'green'
            }}
          >
            {"<"}
          </Button>
          <Button color="inherit" onClick={() => handleModal(true)}>
            Cancel
          </Button>
        </Box>
      ) : (
        <>
          <Button color="inherit" onClick={() => handleModal(true)}>
            Cancel
          </Button>
          <Button
            color="inherit"
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{
              mr: 1,
              fontSize: isMobile ? "20px" : "initial",
            }}
          >
            {isMobile ? "<" : "Back"}
          </Button>
        </>
      )}
    </>
  );
};

type PropsRight = {
  under400px: boolean;
  isMobile: boolean;
  activeStep: number;
  completed: { [k: number]: boolean };
  handleNext: () => void;
  totalSteps: () => number;
  completedSteps: () => number;
  handleComplete: () => void;
  handleOnSubmit: () => void;
};

export const RightMobileBtns: FC<PropsRight> = ({
  under400px,
  isMobile,
  activeStep,
  completed,
  handleNext,
  totalSteps,
  completedSteps,
  handleComplete,
  handleOnSubmit,
}) => {
  return (
    <>
      {under400px ? (
        <Box display={"flex"} flexDirection={"column"}>
          <Button
            color="inherit"
            onClick={handleNext}
            sx={{
              fontSize: "20px",
              // bgcolor: 'green'
            }}
          >
            {">"}
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
      ) : (
        <>
          <Button
            color="inherit"
            onClick={handleNext}
            sx={{ mr: 1, fontSize: isMobile ? "20px" : "initial" }}
          >
            {isMobile ? ">" : "Next"}
          </Button>
          <HandleStepsButton
            activeStep={activeStep}
            completed={completed}
            totalSteps={totalSteps}
            completedSteps={completedSteps}
            handleComplete={handleComplete}
            handleOnSubmit={handleOnSubmit}
          />
        </>
      )}
    </>
  );
};

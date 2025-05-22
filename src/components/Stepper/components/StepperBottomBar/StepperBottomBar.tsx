import { Box, useMediaQuery, useTheme } from "@mui/material";
import { LeftMobileBtns, RightMobileBtns } from "./LeftMobileBtns";

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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const under400px = window.innerWidth <= 400;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        pt: isMobile ? 0 : 2,
        paddingInline: "10%",
      }}
    >
      <LeftMobileBtns
        activeStep={activeStep}
        isMobile={isMobile}
        under400px={under400px}
        handleBack={handleBack}
        handleModal={handleModal}
      />

      <Box sx={{ flex: "1 1 auto" }} />

      <RightMobileBtns
        under400px={under400px}
        isMobile={isMobile}
        activeStep={activeStep}
        completed={completed}
        handleNext={handleNext}
        totalSteps={totalSteps}
        completedSteps={completedSteps}
        handleComplete={handleComplete}
        handleOnSubmit={handleOnSubmit}
      />
    </Box>
  );
};

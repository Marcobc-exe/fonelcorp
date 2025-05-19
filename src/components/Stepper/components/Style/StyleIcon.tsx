import type { StepIconProps } from "@mui/material";
import { ColorlibStepIconRoot } from "./StyleStepRoot";
import type { ReactElement } from "react";
import {
  CalendarMonth,
  Check,
  Person,
  DirectionsCar,
} from "@mui/icons-material";

const icons: { [index: string]: ReactElement<unknown> } = {
  1: <Person />,
  2: <DirectionsCar />,
  3: <CalendarMonth />,
};

export const ColorlibStepIcon = (props: StepIconProps) => {
  const { active, completed, className } = props;

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {completed ? <Check /> : icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
};

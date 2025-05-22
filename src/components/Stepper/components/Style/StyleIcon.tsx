import './stylesComponents.css'
import { useMediaQuery, useTheme, type StepIconProps } from "@mui/material";
import { ColorlibStepIconRoot } from "./StyleStepRoot";
import type { ReactElement } from "react";
import {
  CalendarMonth,
  Check,
  Person,
  DirectionsCar,
} from "@mui/icons-material";

export const ColorlibStepIcon = (props: StepIconProps) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.between('xs', 'sm'));
  const { active, completed, className } = props;
  const icons: { [index: string]: ReactElement<unknown> } = {
    1: <Person className={`icon-top ${active}`} />,
    2: <DirectionsCar className={`icon-top ${active}`} />,
    3: <CalendarMonth className={`icon-top ${active}`} />,
  };
  
  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active, isMobile }}
      className={className}
    >
      {completed ? <Check className='icon-top-checked' /> : icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
};

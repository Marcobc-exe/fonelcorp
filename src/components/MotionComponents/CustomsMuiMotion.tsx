import { type BoxProps } from "@mui/material";
import { type HTMLMotionProps } from "motion/react";
import type { FC } from "react";
import { MotionBox } from "./MuiMotion";

type MotBoxProps = BoxProps &
  HTMLMotionProps<"div"> & {
    children: React.ReactNode;
  };

export const MotBox: FC<MotBoxProps> = ({ children, ...props }) => {
  return (
    <MotionBox
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true, amount: 0.3 }}
      {...props}
    >
      {children}
    </MotionBox>
  );
};

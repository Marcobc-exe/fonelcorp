import { Box, type BoxProps } from "@mui/material";
import { motion, type HTMLMotionProps } from "motion/react";
import type { FC } from "react";

type MotBoxProps = BoxProps &
  HTMLMotionProps<"div"> & {
    children: React.ReactNode;
  };

const MotionBox = motion.create(Box);

export const MotBox: FC<MotBoxProps> = ({ children, ...props }) => {
  return (
    <MotionBox
      initial={{ opacity: 0, x: 0 }}
      whileInView={{ opacity: 1, x: 100, transition: { duration: 0.3 } }}
      {...props}
    >
      {children}
    </MotionBox>
  );
};

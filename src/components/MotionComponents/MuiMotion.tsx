import { Box, Card, Grid } from "@mui/material";
import { motion } from "motion/react";
import { Typography } from "../Typography/Typography";

export const MotionBox = motion.create(Box);
export const MotionTypography = motion.create(Typography);
export const MotionCard = motion.create(Card);
export const MotionGrid = motion.create(Grid);

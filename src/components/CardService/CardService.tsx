import "./cardService.css";
import {
  Box,
  CardContent,
  CardMedia,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useRef, type FC } from "react";
import type { ServiceCard } from "../../types/service";
import { MotionCard } from "../MotionComponents/MuiMotion";
import { useInView } from "motion/react";

export const CardService: FC<ServiceCard> = (service) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <MotionCard
      ref={ref}
      key={service.id}
      sx={{
        minWidth: isMobile ? "250px" : "300px",
        maxWidth: isMobile ? "250px" : "300px",
        height: {
          md: "650px",
          lg: "700px",
        },
        bgcolor: "transparent",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxShadow: "none",
      }}
      initial={{ y: -80, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      <CardMedia
        component={"img"}
        alt={service.alt}
        image={service.image}
        sx={{
          aspectRatio: 16 / 9,
          objectFit: "cover",
          borderRadius: 110,
          maxWidth: isMobile ? "150px" : "280px",
          minWidth: isMobile ? "150px" : "280px",
          minHeight: isMobile ? "150px" : "280px",
        }}
      />
      <CardContent>
        <Box>
          <h3
            className="title-service"
            style={{ fontSize: isMobile ? 26 : 30 }}
          >
            {service.title}
          </h3>
          <p
            className="p-desc-service"
            style={{ fontSize: isMobile ? 16 : 20 }}
          >
            {service.desc}
          </p>
          <button className="btnBookNow">Book Now!</button>
        </Box>
      </CardContent>
    </MotionCard>
  );
};

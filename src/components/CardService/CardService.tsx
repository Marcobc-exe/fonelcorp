import { CardContent, CardMedia, useMediaQuery, useTheme } from "@mui/material";
import type { FC } from "react";
import type { ServiceCard } from "../../types/service";
import { MotionCard } from "../MotionComponents/MuiMotion";

export const CardService: FC<ServiceCard> = (service) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  
  return (
    <MotionCard
      key={service.id}
      sx={{
        minWidth: isMobile ? "250px" : "400px",
        maxWidth: isMobile ? "250px" : "400px",
        height: isMobile ? "350px" : "570px",
        bgcolor: "transparent",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxShadow: "none",
      }}
      initial={{ y: -570, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true, amount: .4 }}
    >
      <CardMedia
        component={"img"}
        alt="img-png"
        image={service.image}
        sx={{
          aspectRatio: 16 / 9,
          objectFit: "cover",
          borderRadius: 110,
          maxWidth: isMobile ? "150px" : "360px",
          minWidth: isMobile ? "150px" : "360px",
          minHeight: isMobile ? "150px" : "360px",
        }}
      />
      <CardContent>
        <p
          style={{
            color: "#FF4D00",
            textAlign: "center",
            fontSize: isMobile ? 26 : 34,
            fontWeight: "bold",
            margin: 0,
          }}
        >
          {service.title}
        </p>
        <p
          style={{
            color: "#1F355E",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: isMobile ? 16 : 26,
            paddingInline: "45px",
          }}
        >
          {service.desc}
        </p>
      </CardContent>
    </MotionCard>
  );
};

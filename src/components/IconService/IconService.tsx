import { Box, CardContent, CardMedia } from "@mui/material";
import type { FC } from "react";
import type { IconService as TypeIconService } from "../../types/iconService";
import { MotionCard } from "../MotionComponents/MuiMotion";

export const IconService: FC<TypeIconService> = (service) => {
  return (
    <MotionCard
      key={service.id}
      sx={{
        minWidth: "180px",
        maxWidth: "180px",
        minHeight: "230px",
        maxHeight: "230px",
        bgcolor: "transparent",
        boxShadow: "none",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.4 }}
    >
      <Box
        component={'div'}
        sx={{
          bgcolor: '#F89A2D',
          borderRadius: 60,
          minWidth: "150px",
          maxWidth: "150px",
          minHeight: "150px",
          maxHeight: "150px",
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <CardMedia
          component={"img"}
          alt="icon-img"
          image={service.image}
          sx={{
            minWidth: "100px",
            maxWidth: "100px",
            minHeight: "100px",
            maxHeight: "100px",
          }}
        />
      </Box>
      <CardContent>
        <p
          style={{
            color: '#1F355E',
            fontWeight: 'bold',
            textAlign: 'center',
            fontSize: 20
          }}
        >{service.title}</p>
      </CardContent>
    </MotionCard>
  );
};

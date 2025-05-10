import { Card, CardContent, CardMedia } from "@mui/material";
import type { FC } from "react";
import type { ServiceCard } from "../../types/service";

export const CardService: FC<ServiceCard> = (service) => {
  return (
    <Card
      key={service.id}
      sx={{
        minWidth: "400px",
        maxWidth: "400px",
        height: "570px",
        bgcolor: "transparent",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxShadow: "none",
      }}
    >
      <CardMedia
        component={"img"}
        alt="img-png"
        image={service.image}
        sx={{
          aspectRatio: 16 / 9,
          objectFit: "cover",
          borderRadius: 110,
          maxWidth: "360px",
          minWidth: "360px",
          minHeight: "360px",
        }}
      />
      <CardContent>
        <p
          style={{
            color: "#FF4D00",
            textAlign: "center",
            fontSize: 34,
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
            fontSize: 26,
            paddingInline: "45px",
          }}
        >
          {service.desc}
        </p>
      </CardContent>
    </Card>
  );
};

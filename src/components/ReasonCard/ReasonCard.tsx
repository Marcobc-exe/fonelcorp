import type { FC } from "react";
import type { ReasonService } from "../../types/iconService";
import { Box } from "@mui/material";

export const ReasonCard: FC<ReasonService> = (reason) => {
  return (
    <Box
      key={reason.id}
      sx={{
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <p
        style={{
          color: "#F89A2D",
          fontWeight: "bold",
          fontSize: 20,
          margin: 0,
        }}
      >
        {reason.title}
      </p>
      <p
        style={{
          color: "#294971",
          width: 240,
        }}
      >
        {reason.desc}
      </p>
    </Box>
  );
};

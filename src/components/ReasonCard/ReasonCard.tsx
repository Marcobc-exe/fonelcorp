import type { FC } from "react";
import type { ReasonService } from "../../types/iconService";
import { Box, useMediaQuery, useTheme } from "@mui/material";

export const ReasonCard: FC<ReasonService> = (reason) => {
  const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  // const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  // const isTablet = useMediaQuery(theme.breakpoints.down("lg"));

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

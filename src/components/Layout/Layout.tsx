import { Box } from "@mui/material";
import type { FC, ReactNode } from "react";
import { Navbar } from "../Navbar/Navbar";

type Props = {
  children: ReactNode;
};

export const Layout: FC<Props> = ({ children }) => {
  return (
    <Box style={{ display: "flex" }}>
      <Navbar />
      <Box
        component={"main"}
        sx={{
          flexGrow: 1,
          p: 3,
          margin: 0,
          width: "100%",
          backgroundColor: "#222",
          overflow: "hidden",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

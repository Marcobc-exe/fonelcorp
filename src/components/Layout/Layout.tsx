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
          marginTop: 5.4,
          width: "100%",
          backgroundColor: "#fff",
          overflow: "hidden",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

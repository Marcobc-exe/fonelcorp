import '../Button/buttons.css'
import { Box } from "@mui/material";
import type { FC, ReactNode } from "react";
import { Navbar } from "../Navbar/Navbar";
import { CallNowBtn } from "../Button/CallNowBtn";
import { WhatsAppBtn } from "../Button/WhatsAppBtn";

type Props = {
  children: ReactNode;
};

export const Layout: FC<Props> = ({ children }) => {
  return (
    <Box style={{ display: "flex", position: "relative", minHeight: "100vh" }}>
      <Navbar />
      <div className="div-float-btns">
        <WhatsAppBtn />
        <CallNowBtn />
      </div>
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

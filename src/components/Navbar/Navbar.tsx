import "./navbar.css";
import { AppBar } from "./Appbar/Appbar";
import { Box, Toolbar, useMediaQuery, useTheme } from "@mui/material";
import { Menu } from "@mui/icons-material";
import { useState } from "react";
import { content } from "../../const/const";
import { MenuMobile } from "../MenuMobile/MenuMobile";

export const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [open, setOpen] = useState(false);

  const toggleMenu = (value: boolean) => {
    setOpen(value);
  };

  return (
    <>
      <AppBar>
        <Toolbar className="toolbar">
          <Box
            component={"img"}
            className="logoNavBar"
            src="./logo.png"
            alt="Fonel Corp logo"
          />
          {isMobile ? (
            <button onClick={() => toggleMenu(true)} className="btnIconMenu">
              <Menu />
            </button>
          ) : (
            <Box className="content-box">
              {content.map((c) => (
                <button key={c} className="btn-content">
                  {c}
                </button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <MenuMobile open={open} toggleMenu={toggleMenu} />
    </>
  );
};

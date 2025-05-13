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

  const handleAutoScroll = (target: string) => {
    const el = document.getElementById(target);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      toggleMenu(false);
    }
  };

  return (
    <>
      <AppBar>
        <Toolbar className="toolbar">
          <button className="btnLogoNavbar" onClick={() => handleAutoScroll('home')}>
            <Box
              component={"img"}
              className="logoNavBar"
              src="./logo.png"
              alt="Fonel Corp logo"
            />
          </button>
          {isMobile ? (
            <button onClick={() => toggleMenu(true)} className="btnIconMenu">
              <Menu />
            </button>
          ) : (
            <Box className="content-box">
              {content.map((c) => (
                <button
                  key={c.target}
                  className="btn-content"
                  onClick={() => handleAutoScroll(c.target)}
                >
                  {c.label}
                </button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <MenuMobile open={open} toggleMenu={toggleMenu} handleAutoScroll={handleAutoScroll} />
    </>
  );
};

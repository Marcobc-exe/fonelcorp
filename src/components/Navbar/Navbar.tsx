import "./navbar.css";
import { AppBar } from "./Appbar/Appbar";
import { Box, Toolbar, useMediaQuery, useTheme } from "@mui/material";
import { Menu } from "@mui/icons-material";

const content = ["Home", "Services", "Areas Covered", "Contact"];

export const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <AppBar>
      <Toolbar className="toolbar">
        <img
          className="logoNavBar"
          src="../../../public/logo.png"
          alt="Fonel Corp logo"
        />
        {isMobile ? (
          <Menu className="menu" />
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
  );
};

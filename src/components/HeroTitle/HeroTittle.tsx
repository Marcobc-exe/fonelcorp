import { Box, useMediaQuery, useTheme } from "@mui/material";
import "./hero.css";
import { Typography } from "../Typography/Typography";
import { MotBox } from "../MotionComponents/MoTitleBox";
import { MotionBox } from "../MotionComponents/MuiMotion/MuiMotion";

export const HeroTitle = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isDesktop = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const isDesktopXl = useMediaQuery(theme.breakpoints.between("lg", "xl"));
  const isDesktopXxl = useMediaQuery(theme.breakpoints.up("xl"));

  const handleCallNow = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Box
      id="home"
      className="box-hero"
      component="div"
      height={{
        xs: "400px",
        sm: "500px",
        md: "600px",
        lg: "700px",
        xl: "800px",
      }}
    >
      <Box
        component="img"
        src={"./images/title-image-car.png"}
        sx={{
          position: "absolute",
          top: 0,
          aspectRatio: 16 / 9,
          objectFit: "cover",
          zIndex: 1,
          right: {
            xs: -18,
            sm: -25,
            md: -30,
            lg: -40,
            xl: -45,
          },
          width: {
            xs: "150%",
            sm: "120%",
            md: "100%",
            lg: "95%",
            xl: "80%",
          },
          height: "100%",
        }}
      />
      <Box
        component="img"
        src={"./images/title-img-bg.png"}
        sx={{
          position: "absolute",
          aspectRatio: 16 / 9,
          objectFit: "cover",
          zIndex: 2,
          left: {
            xs: -285,
            lg: -450,
            xl: -350,
          },
          width: {
            xs: window.innerWidth <= 425 ? "180%" : "120%",
            md: "110%",
            xl: "100%",
          },
          height: "100%",
        }}
      />
      <MotionBox
        component="img"
        src={"./images/title-img-cloud.png"}
        initial={{ transform: "translate(-10px, -2px)" }}
        animate={{ transform: "translate(10px, 2px)" }}
        transition={{
          type: "tween",
          repeat: Infinity,
          duration: 2,
          repeatType: "reverse",
        }}
        sx={{
          position: "absolute",
          aspectRatio: 16 / 9,
          objectFit: "cover",
          zIndex: 3,
          height: {
            xs: "55px",
            md: "70px",
            xl: "90px",
          },
          width: {
            xs: "150px",
            md: "190px",
            xl: "240px",
          },
          top: {
            xs: "10%",
            xl: "5%",
          },
          left: {
            xs: "55%",
            xl: "60%",
          },
        }}
      />
      {isMobile && (
        <MotBox
          id="isMobile"
          className="box-hero-title"
          component={"div"}
          height={{
            xs: "300px",
            sm: "320px",
          }}
          width={{
            xs: "200px",
          }}
          sx={{
            marginLeft: "12px",
            marginTop: "12px",
          }}
        >
          <Typography variant="h6">
            24/7 Reliable Roadside Assistance
          </Typography>
          <Typography variant="h5">Calgary &</Typography>
          <Typography variant="h5">Edmonton</Typography>
          <button className="btn-contact-now" onClick={() => handleCallNow()}>
            Call now!
          </button>
        </MotBox>
      )}
      {isTablet && (
        <MotBox
          id="isTablet"
          className="box-hero-title"
          component={"div"}
          height={{
            sm: "320px",
            md: "350px",
          }}
          width={{
            sm: "400px",
            md: "500px",
          }}
          sx={{
            marginLeft: "12px",
            marginTop: "12px",
          }}
        >
          <Typography variant="h2">
            24/7 Reliable Roadside Assistance
          </Typography>
          <Typography variant="subtitle1">Calgary & Edmonton</Typography>
          <button
            className="btn-contact-now subtitle1"
            onClick={() => handleCallNow()}
          >
            Call now!
          </button>
        </MotBox>
      )}
      {isDesktop && (
        <MotBox
          id="isDesktop"
          className="box-hero-title"
          component={"div"}
          height={{
            md: "350px",
            lg: "380px",
          }}
          width={{ md: "400px" }}
          sx={{ marginLeft: "12px", marginTop: "12px" }}
        >
          <Typography variant="subtitle2" lineHeight={1.2}>
            24/7 Reliable Roadside Assistance
          </Typography>
          <Typography variant="subtitle1">Calgary & Edmonton</Typography>
          <button
            className="btn-contact-now subtitle2"
            onClick={() => handleCallNow()}
          >
            Call now!
          </button>
        </MotBox>
      )}
      {isDesktopXl && (
        <MotBox
          id="isDesktopXl"
          className="box-hero-title"
          component={"div"}
          height={{
            lg: "380px",
          }}
          width={{ lg: "500px" }}
          sx={{ marginLeft: "12px", marginTop: "24px" }}
        >
          <Typography variant="h1" lineHeight={1.2}>
            24/7 Reliable Roadside Assistance
          </Typography>
          <Typography variant="h3">Calgary & Edmonton</Typography>
          <button
            className="btn-contact-now subtitle3"
            onClick={() => handleCallNow()}
          >
            Call now!
          </button>
        </MotBox>
      )}
      {isDesktopXxl && (
        <MotBox
          id="isDesktopXxl"
          className="box-hero-title"
          height={{
            lg: "380px",
          }}
          width={{ xl: "800px" }}
          sx={{
            marginLeft: "24px",
            marginTop: "54px",
          }}
        >
          <Typography
            lineHeight={1.2}
            sx={{
              fontWeight: 600,
              fontSize: "5rem",
              color: "#1F355E",
            }}
          >
            24/7 Reliable Roadside Assistance
          </Typography>
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: "3rem",
              color: "#1F355E",
              width: "900px",
            }}
          >
            Calgary & Edmonton
          </Typography>
          <button
            className="btn-contact-now subtitle4"
            onClick={() => handleCallNow()}
          >
            Call now!
          </button>
        </MotBox>
      )}
    </Box>
  );
};

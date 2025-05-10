import { Box, useMediaQuery, useTheme } from "@mui/material";
import "./hero.css";

export const HeroTitle = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box 
      className="box-hero" 
      component='div'
      height={{
        xs: '400px',
        sm: '500px',
        md: '600px',
        lg: '700px',
        xl: '800px',
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
            xs: '150%',
            sm: '120%',
            md: '100%',
            lg: '95%',
            xl: '80%'
          },
          height: '100%'
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
            xl: -350
          },
          width: {
            xs: window.innerWidth <= 425 ? '180%' : '120%',
            md: '110%',
            xl: '100%',
          },
          height: '100%'
        }}
      />
      <Box
        component="img"
        src={"./images/title-img-cloud.png"}
        sx={{
          position: "absolute",
          aspectRatio: 16 / 9,
          objectFit: "cover",
          zIndex: 3,
          height: {
            xs: '55px',
            md: '70px',
            xl: '90px'
          },
          width: {
            xs: '150px',
            md: '190px',
            xl: '240px'
          },
          top: {
            xs: '10%',
            xl: '5%'
          },
          left: {
            xs: '55%',
            xl: '60%'
          }
        }}
      />
    </Box>
  );
};

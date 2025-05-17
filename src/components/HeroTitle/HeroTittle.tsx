import "./hero.css";
import { Box } from "@mui/material";
import { MotBox } from "../MotionComponents/CustomsMuiMotion";
import { useSeoHelmet } from "../../hooks/useSeoHelmet";

export const HeroTitle = () => {
  const helmet = useSeoHelmet('default');
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
        xl: "400px",
      }}
    >
      <Box
        component="img"
        src={"./images/Hero-Image.svg"}
        sx={{
          aspectRatio: 16 / 9,
          objectFit: "cover",
          position: "relative",
          width: "100%",
          height: "100%",
        }}
      />
      <img
        className="motion-img"
        src={"./images/title-img-cloud.png"}
        alt="Cloud"
      />
      {helmet}
      <MotBox
        id="isDesktopXxl"
        className="box-hero-title"
        height={{
          xs: "300px",
          sm: "320px",
          md: "350px",
          lg: "380px",
        }}
        width={"800px"}
        sx={{
          marginLeft: "24px",
          marginTop: "44px",
        }}
      >
        <h1 className="title-roadside-assistance">
          24/7 Reliable {<br />} Roadside Assistance
        </h1>
        <h2 className="subtitle-calgary-edmonton">Calgary & Edmonton</h2>
        <button className="btn-contact-now" onClick={() => handleCallNow()}>
          Call now!
        </button>
      </MotBox>
    </Box>
  );
};

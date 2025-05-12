import { Box, Button, Grid } from "@mui/material";
import { Typography } from "../Typography/Typography";
import { EmailOutlined, PhoneOutlined, WhatsApp } from "@mui/icons-material";
import "./footer.css";
import { about } from "../../const/const";

export const Footer = () => {
  return (
    <Grid
      container
      component={"div"}
      bgcolor={"#FFF"}
      paddingInline={"60px"}
      paddingTop={"60px"}
      paddingBottom={'30px'}
      position={"relative"}
      size={{ xs: 12, sm: 12, md: 4 }}
      rowGap={5}
      columnGap={3.5}
      justifyContent={'center'}
    >
      <Grid component={"div"} size={{ xs: 12, sm: 4, md: 6, lg: 2.8 }}>
        <Box component={"img"} src="./logo.png" width={100} />
        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
          Count on Fonel Corp for fast, reliable roadside assistance across
          Calgary and Edmonton. Whether you're stuck in traffic or stranded on a
          quiet backroad, one call gets you moving again—quickly and safely.
        </Typography>
      </Grid>

      <Grid component={"div"} size={{ xs: 12, sm: 4, md: 6, lg: 2.8 }}>
        <Typography
          variant="h4"
          textAlign={"left"}
          marginBottom={4}
          fontFamily={"Arial"}
        >
          Contact
        </Typography>
        <Box
          component={"div"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"left"}
        >
          <Button id="btnContact" startIcon={<PhoneOutlined />}>
            +1 123-456-7890
          </Button>
          <Button id="btnContact" startIcon={<EmailOutlined />}>
            agustin@fonel.ca
          </Button>
          <Button id="btnContact" startIcon={<WhatsApp />}>
            WhatsApp
          </Button>
        </Box>
      </Grid>

      <Grid component={"div"} size={{ xs: 12, sm: 4, md: 6, lg: 2.8 }}>
        <Typography
          variant="h4"
          textAlign={"left"}
          marginBottom={4}
          fontFamily={"Arial"}
        >
          Range Coverage
        </Typography>
        <Typography variant="body1">
          We server all areas of Calgary and Edmonton.
        </Typography>
      </Grid>

      <Grid component={"div"} size={{ xs: 12, sm: 4, md: 6, lg: 2.8 }}>
        <Typography
          variant="h4"
          textAlign={"left"}
          marginBottom={4}
          fontFamily={"Arial"}
        >
          About Us
        </Typography>
        <Box
          component={"div"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"left"}
        >
          {about.map((item) => (
            <Button id={`btnAboutUs`}>{item}</Button>
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};

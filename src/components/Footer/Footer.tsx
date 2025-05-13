import { Box, Button, Grid } from "@mui/material";
import { Typography } from "../Typography/Typography";
import { EmailOutlined, PhoneOutlined } from "@mui/icons-material";
import "./footer.css";
import { about, email, phone, whatsAppLink } from "../../const/const";
import { useState, type FC } from "react";
import { handleCopyEmail } from "../../func/functs";

type Props = {
  handleModal: (value: boolean) => void;
};

export const Footer: FC<Props> = ({ handleModal }) => {
  const [copied, setCopied] = useState<null | boolean>(null);

  const handleAutoScroll = (target: string) => {
    if (target !== "policy") {
      const el = document.getElementById(target);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      handleModal(true);
    }
  };

  const handleNotifyEmail = async () => {
    const isCopy = await handleCopyEmail();

    if (isCopy) setCopied(true);
    if (!isCopy) setCopied(false);

    setTimeout(() => {
      setCopied(null);
    }, 2000);
  };

  return (
    <Grid
      container
      component={"div"}
      bgcolor={"#FFF"}
      paddingInline={"60px"}
      paddingTop={"60px"}
      paddingBottom={"30px"}
      position={"relative"}
      size={{ xs: 12, sm: 12, md: 4 }}
      rowGap={5}
      columnGap={3.5}
      justifyContent={"center"}
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
          <Button
            id="btnContact"
            startIcon={<PhoneOutlined />}
            href="tel:+14034661621"
          >
            {phone}
          </Button>
          <Button
            id={`btnContact`}
            startIcon={<EmailOutlined />}
            onClick={() => handleNotifyEmail()}
          >
            {copied === true && "Copied!"}
            {copied === false && "Error!"}
            {copied === null && email}
          </Button>
          <Button
            id="btnContact"
            startIcon={
              <Box
                component="img"
                src="./images/whatsapp-line.svg"
                alt="WhatsApp"
                sx={{ color: "#25D366", width: 20, height: 20 }}
              />
            }
            href={whatsAppLink}
            target="_blank"
          >
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
            <Button
              key={item.target}
              id={`btnAboutUs`}
              onClick={() => handleAutoScroll(item.target)}
            >
              {item.label}
            </Button>
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};

import { Box, Button, Drawer, List, ListItem } from "@mui/material";
import { content, email, phone, whatsAppLink } from "../../const/const";
import { Typography } from "../Typography/Typography";
import { EmailOutlined, PhoneOutlined } from "@mui/icons-material";
import { useState, type FC } from "react";
import "./menuMobile.css";
import { handleCopyEmail } from "../../func/functs";

type Props = {
  open: boolean;
  toggleMenu: (value: boolean) => void;
  handleAutoScroll: (target: string) => void;
};

export const MenuMobile: FC<Props> = ({
  open,
  toggleMenu,
  handleAutoScroll,
}) => {
  const [copied, setCopied] = useState<null | boolean>(null);

  const handleNotifyEmail = async () => {
    const isCopy = await handleCopyEmail();
    toggleMenu(true);

    if (isCopy) setCopied(true);
    if (!isCopy) setCopied(false);

    setTimeout(() => {
      setCopied(null);
    }, 2000);
  };

  return (
    <Drawer anchor="right" open={open} onClose={() => toggleMenu(false)}>
      <Box
        sx={{
          width: 250,
          padding: 2,
          display: "flex",
          flexDirection: "column",
          paddingTop: "50px",
        }}
        role="presentation"
        onClick={() => toggleMenu(false)}
      >
        <List>
          {content.map((c) => (
            <ListItem button key={c.target}>
              <Typography
                variant="body1"
                sx={{ fontWeight: "bold" }}
                onClick={() => handleAutoScroll(c.target)}
              >
                {c.label}
              </Typography>
            </ListItem>
          ))}
        </List>
        <hr
          style={{
            width: "87%",
            border: "none",
            height: "1px",
            borderTop: ".5px solid #1F355E",
          }}
        />
        <Button
          id="btnContactNv"
          startIcon={<PhoneOutlined />}
          href="tel:+14034661621"
        >
          {phone}
        </Button>
        <Button
          id="btnContactNv"
          startIcon={<EmailOutlined />}
          onClick={() => handleNotifyEmail()}
        >
          {copied === true && "Copied!"}
          {copied === false && "Error!"}
          {copied === null && email}
        </Button>
        <Button
          id="btnContactNv"
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
    </Drawer>
  );
};

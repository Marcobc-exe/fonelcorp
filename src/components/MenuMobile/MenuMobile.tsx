import { Box, Button, Drawer, List, ListItem } from "@mui/material";
import { content } from "../../const/const";
import { Typography } from "../Typography/Typography";
import { EmailOutlined, PhoneOutlined, WhatsApp } from "@mui/icons-material";
import type { FC } from "react";
import './menuMobile.css'

type Props = {
  open: boolean;
  toggleMenu: (value: boolean) => void;
}

export const MenuMobile: FC<Props> = ({ open, toggleMenu }) => {
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
          {content.map((text) => (
            <ListItem button key={text}>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                {text}
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
        <Button id="btnContactNv" startIcon={<PhoneOutlined />}>
          +1 123-456-7890
        </Button>
        <Button id="btnContactNv" startIcon={<EmailOutlined />}>
          agustin@fonel.ca
        </Button>
        <Button id="btnContactNv" startIcon={<WhatsApp />}>
          WhatsApp
        </Button>
      </Box>
    </Drawer>
  );
};

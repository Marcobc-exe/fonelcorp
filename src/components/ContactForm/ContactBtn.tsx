import { EmailOutlined, PhoneOutlined } from "@mui/icons-material";
import { Button } from "../Button/Button";
import { MotionGrid } from "../MotionComponents/MuiMotion";
import { call, email, phone, whatsAppLink } from "../../const/const";
import type { FC } from "react";
import { Box } from "@mui/material";

type Props = {
  copied: null | boolean;
  handleNotifyEmail: () => void;
};

export const ContactBtns: FC<Props> = ({ copied, handleNotifyEmail }) => {
  return (
    <>
      <MotionGrid
        size={{ xs: 12, sm: 12, md: 4 }}
        bgcolor={"#FFF1CE"}
        borderRadius={"15px"}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <Button startIcon={<PhoneOutlined />} href={call}>
          {phone}
        </Button>
      </MotionGrid>
      <MotionGrid
        size={{ xs: 12, sm: 12, md: 4 }}
        bgcolor={"#FFF1CE"}
        borderRadius={"15px"}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <Button
          startIcon={<EmailOutlined />}
          onClick={() => handleNotifyEmail()}
        >
          {copied === true && "Copied!"}
          {copied === false && "Error!"}
          {copied === null && email}
        </Button>
      </MotionGrid>

      <MotionGrid
        size={{ xs: 12, sm: 12, md: 4 }}
        bgcolor={"#FFF1CE"}
        borderRadius={"15px"}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <button className="btnContactForm">
          <a href={whatsAppLink} target="_blank">
            <Box
              component="img"
              src="./images/whatsapp-line.svg"
              alt="WhatsApp"
              sx={{ color: "#25D366", width: 20, height: 20 }}
            />
            WhatsApp
          </a>
        </button>
      </MotionGrid>
    </>
  );
};

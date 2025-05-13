import { Box, Modal } from "@mui/material";
import type { FC } from "react";
import { Typography } from "../Typography/Typography";
import { Close, EmailOutlined, PhoneOutlined } from "@mui/icons-material";
import "./ppmodal.css";

type Props = {
  open: boolean;
  handleModal: (value: boolean) => void;
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  height: "400px",
  bgcolor: "#FFF8E7",
  boxShadow: 24,
  p: 2,
  border: "none",
};

export const PPModal: FC<Props> = ({ open, handleModal }) => {
  return (
    <Modal open={open} onClose={() => handleModal(false)}>
      <Box component={"div"} sx={style}>
        <Typography variant="h3" textAlign={"center"} marginBottom={2}>
          PRIVACY POLICY
        </Typography>
        <button className="btnCloseModal" onClick={() => handleModal(false)}>
          <Close />
        </button>
        <Box
          component={"div"}
          height={320}
          width={"100%"}
          sx={{ overflow: "auto" }}
        >
          <p
            style={{
              opacity: ".7",
            }}
          >
            Last updated: 05/09/2025
          </p>
          <Typography variant="body1" marginBottom={"18px"}>
            At Fonel Corp, we value your privacy. This Privacy Policy outlines
            how we collect, use, and protect your personal information.
          </Typography>

          <Typography variant="body2" marginBottom={"10px"}>
            1. Information We Collect.
          </Typography>
          <Typography variant="body1">
            When you fill out our contact form, we collect:
          </Typography>
          <Typography component={"li"} variant="body1">
            Your name.
          </Typography>
          <Typography component={"li"} variant="body1">
            Email address.
          </Typography>
          <Typography component={"li"} variant="body1">
            Phone number.
          </Typography>
          <Typography component={"li"} variant="body1">
            Any information you include in the message
          </Typography>

          <Typography variant="body2" marginBlock={"10px"}>
            2. How We Use Your Information.
          </Typography>
          <Typography variant="body1">We use your information to:</Typography>
          <Typography component={"li"} variant="body1">
            Contact you in response to your inquiry.
          </Typography>
          <Typography component={"li"} variant="body1">
            Provide roadside assistance services.
          </Typography>
          <Typography component={"li"} variant="body1">
            Improve our customer support.
          </Typography>

          <Typography variant="body2" marginBlock={"10px"}>
            3. Data Sharing.
          </Typography>
          <Typography variant="body1">
            We do not sell, rent, or share your personal information with third
            parties, except as required by law.
          </Typography>

          <Typography variant="body2" marginBlock={"10px"}>
            4. Data Security.
          </Typography>
          <Typography variant="body1">
            We take appropriate measures to protect your data from unauthorized
            access, misuse, or disclosure.
          </Typography>

          <Typography variant="body2" marginBlock={"10px"}>
            5. Your Rights.
          </Typography>
          <Typography variant="body1" marginBlock={"10px"}>
            You can request to access, update, or delete your information at any
            time by contacting us:
          </Typography>
          <Box
            component={"div"}
            display={"flex"}
            flexDirection={"column"}
            width={"200px"}
            gap={"10px"}
          >
            <Typography
              variant="body1"
              display={"flex"}
              marginLeft={2}
              alignItems={"center"}
            >
              <PhoneOutlined />
              +1 123-456-7890
            </Typography>
            <Typography
              variant="body1"
              display={"flex"}
              marginLeft={2}
              alignItems={"center"}
            >
              <EmailOutlined />
              agustin@fonel.ca
            </Typography>
          </Box>

          <Typography variant="body2" marginBlock={"10px"}>
            6. Changes to This Policy.
          </Typography>
          <Typography variant="body1">
            We may update this policy occasionally. Any changes will be posted
            on this page.
          </Typography>
        </Box>
      </Box>
    </Modal>
  );
};

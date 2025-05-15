import { Box, Grid } from "@mui/material";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Input } from "../Input/Input";
import { EmailOutlined, PhoneOutlined } from "@mui/icons-material";
import { Button } from "../Button/Button";
import "./contactForm.css";
import { MotionGrid, MotionTypography } from "../MotionComponents/MuiMotion";
import { call, email, phone, whatsAppLink } from "../../const/const";
import { handleCopyEmail } from "../../func/functs";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

type Inputs = string & {
  name: string;
  email: string;
  phone: string;
  comment: string;
};

export const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const {
    control,
    handleSubmit,
    reset,
    // formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      comment: "",
    },
  });
  const [copied, setCopied] = useState<null | boolean>(null);
  const [sent, setSent] = useState<null | boolean>(null);

  const onSubmit: SubmitHandler<Inputs> = () => {
    if (!formRef.current) return;
    emailjs
      .sendForm(
        "service_h62zclh",
        "template_803tgmp",
        formRef.current,
        "qZ7op4MeUeWbLdT07"
      )
      .then((res) => {
        console.log(res);
        setSent(true);
      })
      .catch((err) => {
        console.log(err);
        setSent(false);
      })
      .finally(() => {
        reset();
        setInterval(() => {
          setSent(null);
        }, 2000);
      });
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
    <Box
      component={"div"}
      bgcolor={"#FFF8E7"}
      paddingInline={"30px"}
      paddingBlock={"50px"}
      position={"relative"}
    >
      <MotionTypography
        id="contact"
        variant="h2"
        textAlign={"center"}
        marginBottom={10}
        marginTop={15}
        initial={{ opacity: 0, y: -60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.4 }}
      >
        CONTACT US
      </MotionTypography>

      <Box
        ref={formRef}
        component={"form"}
        sx={{ justifyItems: "center" }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Grid container spacing={2} size={{ xs: 12, md: 6 }} maxWidth={850}>
          <MotionGrid
            size={{ xs: 12, sm: 12, md: 6 }}
            display={"flex"}
            flexDirection={"column"}
            gap={1.5}
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <Input
              size={12}
              control={control}
              name="name"
              label="Name"
              variant="filled"
              fullWidth={true}
            />
            <Input
              size={12}
              control={control}
              name="email"
              label="Email"
              variant="filled"
              fullWidth={true}
              type="email"
              rules={{
                required: "Email is required.",
                pattern: {
                  value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                  message: "Invalid email address.",
                },
              }}
            />
          </MotionGrid>
          <Input
            size={6}
            control={control}
            name="comment"
            label="Comment"
            variant="filled"
            fullWidth={true}
            multiline={true}
            rows={4}
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.4 }}
          />
          <Input
            size={10}
            control={control}
            name="phone"
            label="Phone"
            variant="filled"
            fullWidth={true}
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.4 }}
          />

          <MotionGrid
            size={{ xs: 12, sm: 12, md: 2 }}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <button className="btnSend">
              {sent === null && 'Send'}
              {sent === true && 'Sent!'}
              {sent === false && 'Error!'}
            </button>
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
        </Grid>
      </Box>
    </Box>
  );
};

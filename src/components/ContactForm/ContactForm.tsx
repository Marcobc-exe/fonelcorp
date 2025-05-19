import { Box, Grid } from "@mui/material";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Input } from "../Input/Input";
import "./contactForm.css";
import { MotionGrid, MotionTypography } from "../MotionComponents/MuiMotion";
import { handleCopyEmail } from "../../func/functs";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { getEnvVariable } from "../../helper/helpers";
import { ContactBtns } from "./ContactBtn";
import { CustomSelect } from "../Select/Select";

type Inputs = string & {
  name: string;
  email: string;
  phone: string;
  service: string;
  comment: string;
};

export const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const { control, handleSubmit, reset } = useForm<Inputs>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      comment: "",
    },
  });
  const [copied, setCopied] = useState<null | boolean>(null);
  const [sent, setSent] = useState<null | boolean>(null);

  const onSubmit: SubmitHandler<Inputs> = async () => {
    if (!formRef.current) return;

    try {
      const response = await emailjs.sendForm(
        getEnvVariable("EMAIL_SERVICE_ID"),
        getEnvVariable("EMAIL_TEMPLATE_ID"),
        formRef.current,
        getEnvVariable("EMAIL_PUBLIC_KEY")
      );

      console.log(response);
      setSent(true);
    } catch (error) {
      console.log(error);
      setSent(false);
    } finally {
      reset();
      setTimeout(() => {
        setSent(null);
      }, 2000);
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
    <Box
      component={"div"}
      bgcolor={"#FFF8E7"}
      paddingInline={"30px"}
      paddingBlock={{
        xs: "30px",
        md: "50px",
      }}
      position={"relative"}
    >
      <MotionTypography
        id="contact"
        variant="h2"
        textAlign={"center"}
        marginBottom={10}
        marginTop={5}
        sx={{
          fontSize: { xs: "1.8rem", lg: "2rem" },
          fontWeight: { xs: "bold" },
        }}
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
          {/* Column left */}
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
            <Input
              size={12}
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
          </MotionGrid>

          {/* Column right */}
          <MotionGrid
            size={{ xs: 12, sm: 12, md: 6 }}
            display={"flex"}
            flexDirection={"column"}
            gap={1.5}
          >
            <Input
              size={12}
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

            <MotionGrid
              size={12}
              display={"flex"}
              flexDirection={"row"}
              gap={1.5}
            >
              <CustomSelect control={control} size={9} name={"service"} />

              <MotionGrid
                size={{ xs: 12, sm: 12, md: 3 }}
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.4 }}
              >
                <button className="btnSend">
                  {sent === null && "Send"}
                  {sent === true && "Sent!"}
                  {sent === false && "Error!"}
                </button>
              </MotionGrid>
            </MotionGrid>
          </MotionGrid>

          <ContactBtns copied={copied} handleNotifyEmail={handleNotifyEmail} />
        </Grid>
      </Box>
    </Box>
  );
};

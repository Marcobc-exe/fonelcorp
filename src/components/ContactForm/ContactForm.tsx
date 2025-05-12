import { Box, Grid } from "@mui/material";
import { Typography } from "../Typography/Typography";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Input } from "../Input/Input";
import { EmailOutlined, PhoneOutlined, WhatsApp } from "@mui/icons-material";
import { Button } from "../Button/Button";
import './contactForm.css'

type Inputs = {
  name: string;
  email: string;
  phone: string;
  comment: string;
};

export const ContactForm = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      comment: "",
    },
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    reset(); // if successful email sent
    console.log(data);
  };

  return (
    <Box
      component={"div"}
      bgcolor={"#FFF8E7"}
      paddingInline={"30px"}
      paddingBlock={"50px"}
      position={"relative"}
    >
      <Typography
        variant="h2"
        textAlign={"center"}
        marginBottom={10}
        marginTop={15}
      >
        CONTACT US
      </Typography>

      <Box
        component={"form"}
        sx={{
          // bgcolor: 'red',
          justifyItems: "center",
        }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Grid container spacing={2} size={{ xs: 12, md: 6 }} maxWidth={850}>
          <Grid
            size={{ xs: 12, sm: 12, md: 6 }}
            display={"flex"}
            flexDirection={"column"}
            gap={1.5}
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
          </Grid>
          <Input
            size={6}
            control={control}
            name="comment"
            label="Comment"
            variant="filled"
            fullWidth={true}
            multiline={true}
            rows={4}
          />
          <Input
            size={10}
            control={control}
            name="phone"
            label="Phone"
            variant="filled"
            fullWidth={true}
          />

          <Grid size={{ xs: 12, sm: 12, md: 2 }}>
            <button className="btnSend">
              Send
            </button>
          </Grid>

          <Grid
            component={"div"}
            size={{ xs: 12, sm: 12, md: 4 }}
            bgcolor={"#FFF1CE"}
            borderRadius={"15px"}
          >
            <Button startIcon={<PhoneOutlined />}>+1 123-456-7890</Button>
          </Grid>

          <Grid
            component={"div"}
            size={{ xs: 12, sm: 12, md: 4 }}
            bgcolor={"#FFF1CE"}
            borderRadius={"15px"}
          >
            <Button startIcon={<EmailOutlined />}>agustin@fonel.ca</Button>
          </Grid>

          <Grid
            component={"div"}
            size={{ xs: 12, sm: 12, md: 4 }}
            bgcolor={"#FFF1CE"}
            borderRadius={"15px"}
          >
            <Button startIcon={<WhatsApp />}>WhatsApp</Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

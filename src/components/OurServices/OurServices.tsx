import { Box, useMediaQuery, useTheme } from "@mui/material";
import { CardService } from "../CardService/CardService";
import { listServiceCard } from "../../const/const";
import { MotionTypography } from "../MotionComponents/MuiMotion";

export const OurServices = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      component={"div"}
      bgcolor={"#FFF8E7"}
      paddingInline={"30px"}
      paddingBlock={"50px"}
    >
      <MotionTypography
        id="services"
        variant="h2"
        textAlign={"center"}
        marginBottom={10}
        initial={{ opacity: 0, y: -60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.4 }}
        sx={{ fontSize: { xs: '2rem' }, fontWeight: { xs: 'bold' } }}
      >
        OUR SERVICES
      </MotionTypography>

      <Box
        sx={{
          marginInline: isMobile ? "60px" : "120px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: isMobile ? "0px" : "10px",
          rowGap: isMobile ? "0px" : "60px",
        }}
      >
        {listServiceCard.map((service) => (
          <CardService
            key={service.id}
            id={service.id}
            image={service.image}
            title={service.title}
            desc={service.desc}
          />
        ))}
      </Box>
    </Box>
  );
};

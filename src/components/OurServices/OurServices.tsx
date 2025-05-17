import './ourServices.css'
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { CardService } from "../CardService/CardService";
import { listServiceCard, seo } from "../../const/const";
import { MotionDiv, MotionTypography } from "../MotionComponents/MuiMotion";
import { SeoHelmet } from "../SeoHelmet/SeoHelmet";

export const OurServices = () => {
  const servicesKeys = Object.keys(
    seo.services
  ) as (keyof typeof seo.services)[];
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      component={"div"}
      bgcolor={"#FFF8E7"}
      paddingInline={"30px"}
      paddingBlock={"50px"}
      position={'relative'}
    >
      {servicesKeys.map((key) => (
        <SeoHelmet key={key} pageKey={key} />
      ))}
      <MotionDiv 
        className='box-desc-roadside-assistance' 
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <p className="p-desc-roadside-assistance">
          {
            "Stranded with a dead battery or flat tire? Fonel provides fast, 24/7 roadside assistance across Calgary and Edmonton. From battery boosts and tire changes to lockout services and emergency fuel delivery, our certified technicians are just a call away. Affordable, reliable, and always ready to help — trust Fonel to get you back on the road, anytime, anywhere."
          }
        </p>
      </MotionDiv>
      <MotionTypography
        id="services"
        variant="h2"
        textAlign={"center"}
        marginBottom={10}
        initial={{ opacity: 0, y: -60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.4 }}
        sx={{
          fontSize: { xs: "2rem", lg: "3rem" },
          fontWeight: { xs: "bold" },
        }}
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
          gap: isMobile ? "20px" : "15px",
        }}
      >
        {listServiceCard.map((service) => (
          <CardService
            key={service.id}
            id={service.id}
            image={service.image}
            title={service.title}
            desc={service.desc}
            alt={service.alt}
          />
        ))}
      </Box>
    </Box>
  );
};

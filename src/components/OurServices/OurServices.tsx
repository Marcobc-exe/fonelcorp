import "./ourServices.css";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { seo } from "../../const/const";
import { MotionDiv, MotionTypography } from "../MotionComponents/MuiMotion";
import { SeoHelmet } from "../SeoHelmet/SeoHelmet";
import { useState } from "react";
import { BookNowTransition } from "../Stepper/BookNow";
import type { ServiceCard } from "../../types/service";
import { CancelServiceModal } from "../Modals/CancelServiceModal";

export const OurServices = () => {
  const servicesKeys = Object.keys(
    seo.services
  ) as (keyof typeof seo.services)[];
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [displayForm, setDisplayForm] = useState<boolean>(false);
  const [serviceSelected, setServiceSelected] = useState<ServiceCard | null>(
    null
  );
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleHideForm = () => {
    setDisplayForm(false);
    if (openModal) handleModal(false);
  };

  const handleShowForm = (service: ServiceCard) => {
    setDisplayForm(true);
    setServiceSelected(service);
  };

  const handleModal = (value: boolean) => {
    setOpenModal(value);
  };

  return (
    <Box
      component={"div"}
      bgcolor={"#FFF8E7"}
      paddingInline={"30px"}
      paddingBlock={"50px"}
      position={"relative"}
    >
      {servicesKeys.map((key) => (
        <SeoHelmet key={key} pageKey={key} />
      ))}
      <MotionDiv
        className="box-desc-roadside-assistance"
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
      <BookNowTransition
        displayForm={displayForm}
        isMobile={isMobile}
        serviceSelected={serviceSelected}
        handleShowForm={handleShowForm}
        handleModal={handleModal}
        handleHideForm={handleHideForm}
      />
      <CancelServiceModal
        open={openModal}
        handleModal={handleModal}
        handleHideForm={handleHideForm}
      />
    </Box>
  );
};

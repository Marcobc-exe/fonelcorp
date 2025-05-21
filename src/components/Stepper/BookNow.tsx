import { Box } from "@mui/material";
import type { FC } from "react";
import { listServiceCard } from "../../const/const";
import { CardService } from "../CardService/CardService";
import { StepperServices } from "./StepperServices";
import type { ServiceCard } from "../../types/service";

type Props = {
  displayForm: boolean;
  isMobile: boolean;
  serviceSelected: ServiceCard | null;
  handleShowForm: (service: ServiceCard) => void;
  handleModal: (value: boolean) => void;
  handleHideForm: () => void;
};

export const BookNowTransition: FC<Props> = ({
  displayForm,
  isMobile,
  serviceSelected,
  handleShowForm,
  handleModal,
  handleHideForm
}) => {
  return (
    <>
      {displayForm ? (
        <StepperServices
          serviceSelected={serviceSelected}
          handleModal={handleModal}
          handleHideForm={handleHideForm}
        />
      ) : (
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
              handleShowForm={handleShowForm}
            />
          ))}
        </Box>
      )}
    </>
  );
};

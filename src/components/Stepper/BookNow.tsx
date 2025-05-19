import { Box } from "@mui/material";
import type { FC } from "react";
import { listServiceCard } from "../../const/const";
import { CardService } from "../CardService/CardService";
import { StepperServices } from "./StepperServices";

type Props = {
  displayForm: boolean;
  isMobile: boolean;
  handleDisplay: (value: boolean) => void;
};

export const BookNowTransition: FC<Props> = ({
  displayForm,
  isMobile,
  handleDisplay,
}) => {
  return (
    <>
      {displayForm ? (
        <StepperServices handleDisplay={handleDisplay} />
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
              handleDisplay={handleDisplay}
            />
          ))}
        </Box>
      )}
    </>
  );
};

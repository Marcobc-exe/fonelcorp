import { Box } from "@mui/material";
import { Typography } from "../Typography/Typography";
import { CardService } from "../CardService/CardService";
import { listServiceCard } from "../../const/const";

export const OurServices = () => {
  return (
    <Box
      component={"div"}
      bgcolor={"#FFF8E7"}
      paddingInline={"30px"}
      paddingBlock={"50px"}
    >
      <Typography variant="h2" textAlign={"center"} marginBottom={10}>
        OUR SERVICES
      </Typography>

      <Box
        component={"div"}
        sx={{
          marginInline: "120px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: "10px",
          rowGap: "60px",
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

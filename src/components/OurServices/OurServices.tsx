import { Box, useMediaQuery, useTheme } from "@mui/material";
import { Typography } from "../Typography/Typography";
import { CardService } from "../CardService/CardService";
import { listServiceCard } from "../../const/const";

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
      <Typography variant="h2" textAlign={"center"} marginBottom={10}>
        OUR SERVICES
      </Typography>

      <Box
        component={"div"}
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

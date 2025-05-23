import { Box, useMediaQuery, useTheme } from "@mui/material";
import { Typography } from "../Typography/Typography";
import { IconService } from "../IconService/IconService";
import { listIconService, listReason } from "../../const/const";
import { ReasonCard } from "../ReasonCard/ReasonCard";
import { MotionTypography } from "../MotionComponents/MuiMotion";

export const ChooseUs = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isTablet = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <Box
      component={"div"}
      bgcolor={"#FFF8E7"}
      paddingInline={"30px"}
      paddingBlock={"50px"}
    >
      <div
        style={{
          margin: 0,
          padding: 0,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <MotionTypography
          variant="h2"
          textAlign={"center"}
          marginBottom={10}
          width={550}
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          WHY CHOOSE OUR ROADSIDE ASSTANCE?
        </MotionTypography>
      </div>

      <Box
        component={"div"}
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: isTablet ? 4 : isMobile ? 0 : 14,
          marginBottom: "40px",
        }}
      >
        {listReason.map((reason) => (
          <ReasonCard
            key={reason.id}
            id={reason.id}
            title={reason.title}
            desc={reason.desc}
          />
        ))}
      </Box>

      <Box
        component={"div"}
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: 3,
          flexWrap: "wrap",
        }}
      >
        {listIconService.map((service) => (
          <IconService
            key={service.id}
            id={service.id}
            image={service.image}
            title={service.title}
          />
        ))}
      </Box>
    </Box>
  );
};

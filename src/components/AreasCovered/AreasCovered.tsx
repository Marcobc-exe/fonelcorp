import { Box } from "@mui/material";
import { MotionImg, MotionTypography } from "../MotionComponents/MuiMotion";

export const AreasCovered = () => {
  const mapWidth =
    window.innerWidth < 380
      ? "300px"
      : window.innerWidth < 360
      ? "230px"
      : "450px";
  return (
    <Box
      component={"div"}
      bgcolor={"#FFF8E7"}
      paddingInline={"30px"}
      paddingBlock={"50px"}
    >
      <MotionTypography
        id={"areas"}
        variant="h2"
        textAlign={"center"}
        marginBottom={10}
        initial={{ opacity: 0, y: -60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.4 }}
        sx={{ fontSize: { xs: "1.8rem" }, fontWeight: { xs: "bold" } }}
      >
        AREAS COVERED
      </MotionTypography>

      <Box
        component={"div"}
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 8,
          marginBottom: 10,
        }}
      >
        <MotionImg
          src={"./images/calgary-map.jpg"}
          style={{ width: mapWidth }}
          initial={{ x: "-40%" }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        />
        <MotionImg
          src={"./images/edmonton-map.jpg"}
          style={{ width: mapWidth }}
          initial={{ x: "40%" }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        />
      </Box>
    </Box>
  );
};

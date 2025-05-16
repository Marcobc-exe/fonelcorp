import './areasCovered.css'
import { Box } from "@mui/material";
import { MotionImg, MotionTypography } from "../MotionComponents/MuiMotion";

export const AreasCovered = () => {
  return (
    <Box
      component={"div"}
      bgcolor={"#FFF8E7"}
      paddingInline={"30px"}
      paddingBlock={{
        xs: '30px',
        md: "50px"
      }}
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
        sx={{ fontSize: { xs: "1.8rem", lg: '2rem' }, fontWeight: { xs: "bold" } }}
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
          className="img-areas-covered"
          src={"./images/calgary-map.jpg"}
          alt='calgary-roadside-assistance-service'
          initial={{ x: "-40%" }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        />
        <MotionImg
          className="img-areas-covered"
          src={"./images/edmonton-map.jpg"}
          alt='edmonton-roadside-assistance-service'
          initial={{ x: "40%" }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        />
      </Box>
    </Box>
  );
};

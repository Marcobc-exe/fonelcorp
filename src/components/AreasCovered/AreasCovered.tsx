import { Box } from "@mui/material";
import { Typography } from "../Typography/Typography";

export const AreasCovered = () => {
  return (
    <Box
      component={"div"}
      bgcolor={"#FFF8E7"}
      paddingInline={"30px"}
      paddingBlock={"50px"}
    >
      <Typography variant="h2" textAlign={"center"} marginBottom={10}>
        AREAS COVERED
      </Typography>

      <Box
        component={'div'}
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 8,
          marginBottom: 10
        }}
      >
        <Box
          component={'img'}
          src={'./images/calgary-map.jpg'}
          sx={{
            width: '450px'
          }}
        />
        <Box
          component={'img'}
          src={'./images/edmonton-map.jpg'}
          sx={{
            width: '450px'
          }}
        />
      </Box>
    </Box>
  );
};

import { Button as MUIButton, styled } from "@mui/material";

export const Button = styled(MUIButton)({
  textTransform: "none",
  boxShadow: "none",
  fontWeight: "bold",
  lineHeight: 1.5,
  fontSize: 16,
  width: "100%",
  paddingInline: "10px",
  paddingBlock: "5px",
  borderRadius: "15px",
  color: "#294971",
  bgcolor: "#FFF1CE",
  height: "56px",
  "&:hover": {
    backgroundColor: "#FFF1CE",
    boxShadow: '5px 5px 0px 0 #294971',
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#0062cc",
  },
  "&:focus": {
    boxShadow: "none",
  },
});

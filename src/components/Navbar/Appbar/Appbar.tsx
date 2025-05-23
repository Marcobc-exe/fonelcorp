import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";

export const AppBar = styled(
  MuiAppBar,
  {}
)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: "white",
  boxShadow: 'none'
}));

import { Box, Button } from "@mui/material";
import { MotionBox } from "../../../MotionComponents/MuiMotion";

type AllStepsCompletedProps = {
  handleHideForm: () => void;
  username: string;
};

export const AllStepsCompleted: React.FC<AllStepsCompletedProps> = ({
  handleHideForm,
  username
}) => {
  return (
    <>
      <MotionBox justifyItems={"center"} mt={"40px"}>
        <img
          src={"./images/checked.png"}
          alt="service roadside assitance schedule"
          style={{
            width: "160px",
            height: "160px",
            objectFit: "cover",
            aspectRatio: "16/9",
            borderRadius: "10px",
          }}
        />
        <h3 style={{ textAlign: "center" }}>All steps completed!</h3>
        <p>
          Thanks {username} for choosing us! We'll get you back on the road in
          no time!
        </p>
        <strong>A team member will contact you shortly.</strong>
      </MotionBox>
      <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
        <Box sx={{ flex: "1 1 auto" }} />
        <Button onClick={handleHideForm}>Close</Button>
      </Box>
    </>
  );
};

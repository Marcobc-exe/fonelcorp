import "./modal.css";
import { Box, Modal, useMediaQuery, useTheme } from "@mui/material";
import type { FC } from "react";

type Props = {
  open: boolean;
  handleModal: (value: boolean) => void;
  handleHideForm: () => void;
};

export const CancelServiceModal: FC<Props> = ({
  open,
  handleModal,
  handleHideForm,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: isMobile ?  "80%" : "30%",
    height: "200px",
    bgcolor: "#FFF8E7",
    boxShadow: 24,
    p: 2,
    border: "none",
  };

  return (
    <Modal open={open} onClose={() => handleModal(false)}>
      <Box component={"div"} sx={style} borderRadius={4}>
        <h3 className={`title-modal`}>
          Oops — closing this will reset the form. Want to keep going or exit?
        </h3>
        <div className={`div-btn-modal-cancel-form`}>
          <button className="btn-exit-form" onClick={handleHideForm}>
            Exit form
          </button>
          <button
            className="btn-keep-editing"
            onClick={() => handleModal(false)}
          >
            Keep editing
          </button>
        </div>
      </Box>
    </Modal>
  );
};

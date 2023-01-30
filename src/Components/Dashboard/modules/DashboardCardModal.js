import { Modal, Box, Typography, Fade, Backdrop } from "@mui/material";
import React from "react";
import "./dashboardModulesStyles/dashboardModal.css";
export default function DashboardCardModal({
  isOpen,
  onClose,
  selectedCard,
  modalSubmit,
}) {
  const handleClose = () => onClose(false);
  const handleModalSubmit = () => {
    onClose(false);
    modalSubmit("hello");
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    height: 250,
    width: 500,
    bgcolor: "white",
    borderRadius: "12px",
    boxShadow: 30,
  };

  return (
    <div>
      <Modal
        className="card-modal"
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={isOpen}>
          <Box sx={style}>
            <div className="modalContainer">
              <div>{selectedCard.name}</div>
              <div>
                <div>Project Title</div>
                <div>Make It Memorable</div>
                <input type="text" placeholder="Type something..." />
              </div>
              <div>
                <button onClick={handleModalSubmit}>Submit</button>
                <button>Cancel</button>
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

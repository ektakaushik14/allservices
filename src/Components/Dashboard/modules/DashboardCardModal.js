import { Modal, Box, Typography, Fade, Backdrop } from "@mui/material";
import { doc, setDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../../firebase";
import "./dashboardModulesStyles/dashboardModal.css";
import Loader from "../../../Images/loader.png";
export default function DashboardCardModal({
  isOpen,
  onClose,
  selectedCard,
  modalSubmit,
}) {
  const [modalInput, setModalInput] = useState("");
  const [modalError, setModalError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setModalError(false);
  }, [modalInput]);

  const handleClose = () => onClose(false);
  const handleModalSubmit = async () => {
    if (modalInput.length === 0) {
      setModalError(true);
      return;
    } else {
      setLoading(true);
      await setDoc(doc(db, "cities", "LA"), { ...selectedCard }).then(() => {
        onClose(false);
        setLoading(false);
        modalSubmit(modalInput, selectedCard);
      });
    }
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    height: 250,
    width: 400,
    bgcolor: "white",
    borderRadius: "12px",
    boxShadow: 30,
    outline: "none",
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
                <input
                  autoFocus
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      if (modalInput.length === 0) {
                        setModalError(true);
                        return;
                      }
                      handleModalSubmit(modalInput);
                    }
                  }}
                  onChange={(e) => setModalInput(e.target.value)}
                  type="text"
                  placeholder="Type something..."
                />
                {modalError && (
                  <div className="modalError">The name cannot be empty</div>
                )}
              </div>
              <div>
                <button onClick={handleModalSubmit}>
                  {loading ? <img src={Loader} /> : "Submit"}
                </button>
                <button onClick={handleClose}>Cancel</button>
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

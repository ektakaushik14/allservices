import { Modal, Box, Typography, Fade, Backdrop } from "@mui/material";
import { addDoc, collection, doc, getDocs, setDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../../firebase";
import "./dashboardModulesStyles/dashboardModal.css";
import Loader from "../../../Images/loader.png";
export default function DashboardCardModal({
  isOpen,
  onClose,
  selectedCard,
  modalSubmit,
  userDetails,
}) {
  const [modalInput, setModalInput] = useState("");

  const [loading, setLoading] = useState(false);
  const [availableNames, setAvailableNames] = useState([]);
  const [namesError, setNamesError] = useState("");

  useEffect(() => {
    setLoading(true);
    const docRef = doc(db, "Dashboard", userDetails.email);
    const docSnap = getDocs(collection(docRef, "Project"))
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          var temp = availableNames;
          temp.push({ [doc.id]: Object.keys(doc.data()) });
          setAvailableNames(temp);
        });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log(availableNames);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const nameList = availableNames.find(
      (obj) => Object.keys(obj)[0] === selectedCard.name
    );
    if (nameList && Object.values(nameList)) {
      const checkName = Object.values(nameList)[0].some((name) =>
        name.startsWith(modalInput)
      );
      if (checkName && modalInput.length >= 3) {
        setNamesError("Name already exist");
      } else {
        setNamesError("");
      }
    }
  }, [modalInput]);

  const handleClose = () => onClose(false);
  const handleModalSubmit = async () => {
    if (userDetails) {
      setLoading(true);
      const colRef = collection(db, "Dashboard", userDetails.email, "Project");
      await setDoc(
        doc(colRef, selectedCard.name),
        { [modalInput]: { ...selectedCard } },
        { merge: true }
      )
        .then(() => {
          modalSubmit(modalInput, selectedCard);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          onClose(false);
          setLoading(false);
        });
    }
  };
  const handleModalInput = (e) => {
    setModalInput(e.target.value.trim());
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    height: 250,
    width: 400,
    bgcolor: "#141414",
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
                  className={namesError.length != 0 ? "namesError" : ""}
                  autoFocus
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      if (modalInput.length < 3 || namesError.length != 0) {
                        return;
                      } else {
                        handleModalSubmit(modalInput);
                      }
                    }
                  }}
                  onChange={(e) => handleModalInput(e)}
                  type="text"
                  placeholder="Type something..."
                />

                {namesError.length != 0 && (
                  <div className="modalError">{namesError}</div>
                )}
              </div>
              <div>
                <button
                  disabled={
                    modalInput.length < 3 || namesError.length != 0
                      ? true
                      : false
                  }
                  onClick={handleModalSubmit}
                >
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

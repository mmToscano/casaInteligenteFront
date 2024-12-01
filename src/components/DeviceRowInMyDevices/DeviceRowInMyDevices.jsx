import styles from "./styles.module.css";
import React, { useState, useEffect } from "react";

import { FaTrash } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import Popover from "../Popover/Popover";
import APIURL from "../../variaveisGlobais";

function DeviceRowInMyDevices({ rooms, device }) {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [showPopover, setShowPopover] = useState(false);
  const [buttonRef, setButtonRef] = useState(null);

  useEffect(() => {
    if (rooms && device) {
      const room = rooms.find((room) => room.ID_COMODO === device.ID_DISP_COMODO);
      setSelectedRoom(room || null);
    }
  }, [rooms, device]);

  const handleShowPopover = (e) => {
    setButtonRef(e.target); // Store button reference
    setShowPopover(!showPopover);
  };

  const handleDisableDevice = async () => {

    const updatedObject = {
      ...device,
      ID_DISP_COMODO: null
    }

    try {
      const response = await fetch(`${APIURL}/dispositivo/${device.ID_DISP}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedObject),
      });

      if (!response.ok) {
        const errorDetails = await response.text();
        throw new Error(`Failed to update: ${response.status}, ${errorDetails}`);
      }

      const result = await response.json();
      console.log("Updated successfully:", result);
      window.location.reload();
    } catch (error) {
      console.error("Error updating the object:", error);
    }
  }

  const handleDeleteDevice = async () => {
    const confirmed = window.confirm("Certeza de que deseja deletar este dispositivo?");
    if (!confirmed) return;

    try {
      const response = await fetch(`${APIURL}/dispositivo/${device.ID_DISP}`, {
        method: "DELETE",
      });

      if (response.ok) {
        alert("Item deleted successfully!");
      } else {
        throw new Error("Failed to delete the item");
      }
    } catch (error) {
      console.error("Error deleting item:", error);
      alert("Error deleting the item. Please try again.");
    }
  }

  return (
    <div className={styles.deviceRowInMyDevices}>
      <div className={styles.descriptionArea}>
        <img src="" alt="imagem ilustrativa" />
        <h1>{device.NOME_DISP}</h1>
      </div>

      <div className={styles.interactiveContainer}>
        <div className={styles.chooseRoomArea}>
          <h3>Dispositivo associado à:</h3>
          <button onClick={handleShowPopover}>
            {selectedRoom?.NOME_COMODO || "Nenhum"} <IoIosArrowDown />
          </button>
          {showPopover && (
            <Popover
              selectedRoom={selectedRoom}
              rooms={rooms}
              device={device}
              buttonRef={buttonRef}
              onClose={() => setShowPopover(false)}
            />
          )}
        </div>

        <div className={styles.removeButtonsArea}>
        <button disabled={device.ID_DISP_COMODO === null} onClick={handleDisableDevice}>Desassociar Dispositivo</button>
          <button onClick={handleDeleteDevice}>
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeviceRowInMyDevices;

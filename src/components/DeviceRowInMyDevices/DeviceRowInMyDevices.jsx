import styles from "./styles.module.css";
import React, { useState, useEffect } from "react";

import { FaTrash } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import Popover from "../Popover/Popover";

function DeviceRowInMyDevices({ rooms, device }) {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [showPopover, setShowPopover] = useState(false);
  const [buttonRef, setButtonRef] = useState(null);

  // Determine which room the device is in
  const determineWhichRoomTheDeviceIsIn = () => {
    const room = rooms.find((room) => room.ID_COMODO === device.ID_DISP_COMODO);
    if (room) setSelectedRoom(room.NOME_COMODO);
  };

  useEffect(() => {
    if (rooms && device) {
      determineWhichRoomTheDeviceIsIn();
    }
  }, [rooms, device]);

  const handleShowPopover = (e) => {
    setButtonRef(e.target); // Store a reference to the button
    setShowPopover(!showPopover);
  };

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
            {selectedRoom || "Nenhum"} <IoIosArrowDown />
          </button>
          {showPopover && (
            <Popover
              selectedRoom={selectedRoom}
              rooms={rooms}
              buttonRef={buttonRef} // Pass button reference to the Popover
              onClose={() => setShowPopover(false)} // Optional close handler
            />
          )}
        </div>

        <div className={styles.removeButtonsArea}>
          <button disabled={true}>Desassociar Dispositivo</button>
          <button>
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeviceRowInMyDevices;

import APIURL from "../../variaveisGlobais";
import styles from "./styles.module.css";
import { useState, useEffect } from "react";

function Popover({ selectedRoom, rooms, buttonRef, device, onClose }) {
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    if (buttonRef) {
      const rect = buttonRef.getBoundingClientRect();
      setPosition({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
      });
    }
  }, [buttonRef]);

  const handleClick = async (e) => {
    const newRoomName = e.target.innerHTML;
    const newRoom = rooms.find((room) => room.NOME_COMODO === newRoomName);

    if (!newRoom) return;
    const updatedObject = {
      ...device,
      ID_DISP_COMODO: newRoom.ID_COMODO,
    };

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

      onClose && onClose();
    } catch (error) {
      console.error("Error updating the object:", error);
    }
  };

  return (
    <div
      className={styles.popover}
      style={{
        position: "absolute",
        top: position.top,
        left: position.left,
        zIndex: 1000,
      }}
    >
      {rooms
        ?.filter((room) => selectedRoom?.ID_COMODO !== room.ID_COMODO)
        .map((room) => (
          <button key={room.ID_COMODO} onClick={handleClick}>
            {room.NOME_COMODO}
          </button>
        ))}
    </div>
  );
}

export default Popover;

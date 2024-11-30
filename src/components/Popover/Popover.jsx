import styles from "./styles.module.css";
import { useState, useEffect } from "react";

function Popover({ selectedRoom, rooms, buttonRef, onClose }) {
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    if (buttonRef) {
      const rect = buttonRef.getBoundingClientRect();
      setPosition({
        top: rect.bottom + window.scrollY, // Position just below the button
        left: rect.left + window.scrollX, // Align with the button's left edge
      });
    }
  }, [buttonRef]);

  return (
    <div
      className={styles.popover}
      style={{
        position: "absolute",
        top: position.top,
        left: position.left,
        zIndex: 1000, // Ensure the popover appears above other elements
      }}
    >
      {rooms
        .filter((room) => selectedRoom && room.ID_COMODO !== selectedRoom.ID_COMODO)
        .map((room) => (
          <button key={room.ID_COMODO} onClick={() => onClose && onClose()}>
            {room.NOME_COMODO}
          </button>
        ))}
    </div>
  );
}

export default Popover;

import styles from "./styles.module.css"

import { useState, useEffect } from "react";

function Popover({selectedRoom, rooms}){
      


    rooms = ["garagem", "quarto","garagem", "quarto","garagem", "quarto","garagem", "quarto","garagem", "quarto"]

    return(
        <div className={styles.popover}>
            {rooms.filter(room => room.ID_COMODO != selectedRoom.ID_COMODO).
            map(room => (
                <button>{room}</button>
            ))}
        </div>
    )
}

export default Popover;
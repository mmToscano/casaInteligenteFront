import styles from "./styles.module.css"

import React, { useState } from 'react'

import { FaTrash } from "react-icons/fa6"
import { HiDotsHorizontal } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import Popover from "../Popover/Popover";

function DeviceRowInMyDevices({ device }){

    const [showPopover, setShowPopover] = useState(false);
    const [buttonPosition, setButtonPosition] = useState({ top: 0, left: 0 });

    const handleShowPopover = (e) => {
        const rect = e.target.getBoundingClientRect(); 
        setButtonPosition({
            top: rect.top + window.scrollY, 
            left: rect.left + window.scrollX, 
        });
        setShowPopover(!showPopover); 
    };


    return(
        <div className = {styles.deviceRowInMyDevices}>

            <div className={styles.descriptionArea}>
                <img src="" alt="imagem ilustrativa"/>
                <h1>{device.name}</h1>
            </div>

            <div className={styles.interactiveContainer}>

                <div className={styles.chooseRoomArea}>
                    <h3>Dispositivo associado à:</h3>
                    <button onClick={handleShowPopover}>Nada <IoIosArrowDown/></button>
                    {showPopover && 
                    <Popover/>}
                </div>

                <div className={styles.removeButtonsArea}>
                    <button disabled={true}>Desassociar Dispositivo</button>
                    <button><FaTrash/></button>
                </div>

            </div>
            
        </div>
    )
}

export default DeviceRowInMyDevices
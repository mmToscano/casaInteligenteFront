import styles from "./styles.module.css"

import React, { useState } from 'react'

import { FaTrash } from "react-icons/fa6"
import { HiDotsHorizontal } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import Popover from "../Popover/Popover";

function DeviceRowInMyDevices({ device }){

    const [showPopover, setShowPopover] = useState(false);
    const [buttonPosition, setButtonPosition] = useState({ top: 0, left: 0 });

    // Function to handle button click and calculate the button's position
    const handleShowPopover = (e) => {
        const rect = e.target.getBoundingClientRect(); // Get button position
        setButtonPosition({
            top: rect.top + window.scrollY, // Y position of the button
            left: rect.left + window.scrollX, // X position of the button
        });
        setShowPopover(!showPopover); // Toggle the visibility of the popover
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
                <button><FaTrash/></button>
            </div>
            
        </div>
    )
}

export default DeviceRowInMyDevices
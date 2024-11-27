import styles from "./styles.module.css"

import React, { useState, useEffect } from 'react'

import { FaTrash } from "react-icons/fa6"
import { HiDotsHorizontal } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import Popover from "../Popover/Popover";

function DeviceRowInMyDevices({ device }){

    //serve para saber qual quarto o dispositivo está
    const [selectedRoom, setSelectedRoom] = useState();

    //localização do popover
    const [showPopover, setShowPopover] = useState(false);
    const [buttonPosition, setButtonPosition] = useState({ top: 0, left: 0 });

    //get dos quartos
    const [rooms, setRooms] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    //request que pega todos os quartos
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            determineWichRoomTheDeviceIsIn();
            return response.json();
          })
          .then((data) => {
            setRooms(data);
            setLoading(false);
            console.log("deu")
          })
          .catch((error) => {
            setError(error.message);
            setLoading(false);
          });
      }, []);
    
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error: {error}</p>;

      const handleShowPopover = (e) => {
        const rect = e.target.getBoundingClientRect(); 
        setButtonPosition({
            top: rect.top + window.scrollY, 
            left: rect.left + window.scrollX, 
        });
        setShowPopover(!showPopover); 
    };

    const determineWichRoomTheDeviceIsIn = () => {
        for (let index = 0; index < rooms.length; index++) {
            if(rooms[index].ID_COMODO === device.ID_DISP_COMODO){
                setSelectedRoom(rooms[index]);
            }
            
        }
    }


    return(
        <div className = {styles.deviceRowInMyDevices}>

            <div className={styles.descriptionArea}>
                <img src="" alt="imagem ilustrativa"/>
                <h1>{device.name}</h1>
            </div>

            <div className={styles.interactiveContainer}>

                <div className={styles.chooseRoomArea}>
                    <h3>Dispositivo associado à:</h3>
                    <button onClick={handleShowPopover}>{selectedRoom}<IoIosArrowDown/></button>
                    {showPopover && 
                    <Popover selectedRoom={selectedRoom} rooms={rooms}/>}
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
import DeviceRowInMyDevices from "../../components/DeviceRowInMyDevices/DeviceRowInMyDevices";
import ModalContainer from "../../components/ModalContainer/ModalContainer";
import AddDeviceInRoom from "../../components/AddDeviceInRoom/AddDeviceInRoom";
import styles from "./styles.module.css"

import { useState, useEffect } from 'react'

function MyDevices() {

    const [showModal, setShowModal] = useState(false);

    /*

    const [devices, setDevices] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    //request que pega todos os dispositivos
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json();
          })
          .then((data) => {
            setDevices(data);
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
      */

    const devices = [{ "id": 0, "name": "Luz da garagem", "type": "digital", "category": "Luz" },
    { "id": 1, "name": "Portao da garagem", "type": "analogico", "category": "Luz" }];

    return (
        <div className={styles.myDevices}>

            <div className={styles.headerArea}>
                <h1>Meus dispositivos</h1>
                <button onClick={() => setShowModal(!showModal)}>Adicionar dispositivo</button>
            </div>

            <div className={styles.devicesListArea}>
                {devices.map(device => (
                    <DeviceRowInMyDevices device={device} />
                ))}
            </div>
            {showModal &&
                <ModalContainer onClose={() => setShowModal(false)} children={<AddDeviceInRoom />} />
            }

        </div>
    )
}

export default MyDevices;
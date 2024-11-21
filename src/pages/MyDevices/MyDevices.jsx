import DeviceRowInMyDevices from "../../components/DeviceRowInMyDevices/DeviceRowInMyDevices";
import styles from "./styles.module.css"

function MyDevices(){

    

    const devices = [{"id": 0, "name": "Luz da garagem", "type": "digital", "category": "Luz"}, 
        {"id": 1, "name": "Portao da garagem", "type": "analogico", "category": "Luz"}];

    return(
        <div className={styles.myDevices}>

            <div className={styles.headerArea}> 
                <h1>Meus dispositivos</h1>
                <button>Adicionar dispositivo</button>
            </div>

            <div className={styles.devicesListArea}>
                {devices.map(device => (
                    <DeviceRowInMyDevices device={device}/>
                ))}
            </div>

        </div>
    )
}

export default MyDevices;
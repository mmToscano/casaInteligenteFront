import DeviceRow from "../../components/DeviceRow/DeviceRow";
import styles from "./styles.module.css"

import { useParams, Link } from "react-router-dom"

function Room() {

    //fazer o request do quarto baseado no id recebido no useParams()
    const room = {"id": 0, "name": "Garagem", "dispositivos": [{"id": 0, "name": "Luz da garagem", "type": "digital", "category": "Luz"}, 
        {"id": 1, "name": "Portao da garagem", "type": "analogico", "category": "Luz"}]};

    const { id } = useParams();

    return(
        <div className={styles.room}>

        <div className={styles.headerArea}>
            <Link to= "/myHome"><button>Voltar</button></Link>
            <h1>{room.name.toUpperCase() + id}</h1>
            <button>Adicionar dispositivo</button>
        </div>

        <div className={styles.deviceListArea}>
            {room.dispositivos.map(device => (
                <DeviceRow device={device}/>
            ))}
        </div>

        </div>
    )
}

export default Room
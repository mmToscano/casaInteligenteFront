import styles from "./styles.module.css"

import { FaTrash } from "react-icons/fa6"

function DeviceRow({ device}){
    return(
        <div className={styles.deviceRow}>

            <div className={styles.descriptionArea}>
                <img src="" alt="imagem ilustrativa"/>

                <div className={styles.interactiveArea}>
                    <h1>{device.name}</h1>
                    <div className={styles.buttonArea}>
                        {device.type === "digital" 

                        ? 
                        <div className={styles.buttonArea}>
                            <button>Desligar</button>
                            <button>Ligar</button>
                        </div> 
                        
                        : 
                        <div className={styles.buttonArea}>
                            <button>{"< Diminuir"}</button>
                            <button>{"Aumentar >"}</button>
                        </div>

                        }
                    </div>
                </div>
            </div>
            

            <button><FaTrash/></button>

        </div>
    )
}

export default DeviceRow
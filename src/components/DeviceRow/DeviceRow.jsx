import styles from "./styles.module.css"

import { FaTrash } from "react-icons/fa6"

function DeviceRow({ device}){


    const handleDeviceDelete = async () => {
        const confirmed = window.confirm("Certeza de que deseja deletar este dispositivo?");
        if (!confirmed) return;
    
        try {
          const response = await fetch(`/api/items/${device.ID_DISP}`, {
            method: "DELETE",
          });
    
          if (response.ok) {
            alert("Item deleted successfully!");
          } else {
            throw new Error("Failed to delete the item");
          }
        } catch (error) {
          console.error("Error deleting item:", error);
          alert("Error deleting the item. Please try again.");
        }
      };

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
            

            <button onClick={handleDeviceDelete}><FaTrash/></button>

        </div>
    )
}

export default DeviceRow
import DeviceRow from "../../components/DeviceRow/DeviceRow";
import styles from "./styles.module.css"

import { useLocation, Link } from "react-router-dom"
import { useState, useEffect } from 'react'

function Room() {

    //fazer o request do quarto baseado no id recebido no useParams()
    const room = {"id": 0, "name": "Garagem", "dispositivos": [{"id": 0, "name": "Luz da garagem", "type": "digital", "category": "Luz"}, 
        {"id": 1, "name": "Portao da garagem", "type": "analogico", "category": "Luz"}]};

    const location = useLocation();
    const { id, name } = location.state || {}; 

    const [devices, setDevices] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    /*
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users') //aqui deve ter um /id para especificar quais os dispositivos devem ser retornados
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

    return(
        <div className={styles.room}>

        <div className={styles.headerArea}>
            <Link to= "/myHome"><button>Voltar</button></Link>
            <h1>{name.toUpperCase() + id}</h1>
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
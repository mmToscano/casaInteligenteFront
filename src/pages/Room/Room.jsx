import DeviceRow from "../../components/DeviceRow/DeviceRow";
import AddDeviceInRoom from "../../components/AddDeviceInRoom/AddDeviceInRoom";
import styles from "./styles.module.css"

import { useLocation, Link } from "react-router-dom"
import { useState, useEffect } from 'react'
import ModalContainer from "../../components/ModalContainer/ModalContainer";

function Room() {

  //fazer o request do quarto baseado no id recebido no useParams()
  const room = {
    "id": 0, "name": "Garagem", "dispositivos": [{ "id": 0, "name": "Luz da garagem", "type": "digital", "category": "Luz" },
    { "id": 1, "name": "Portao da garagem", "type": "analogico", "category": "Luz" }]
  };

  const location = useLocation();
  const { id, name } = location.state || {};

  //outros
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  //get
  const [devices, setDevices] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  //post
  const [postResponse, setPostResponse] = useState(null);

  /*
  useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users') //usar o id para buscar os dispositivos
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

  function handleAdicionarDispositivo() {
    setShowModal(!showModal);
  }



  return (
    <div className={styles.room}>

      <div className={styles.headerArea}>
        <Link to="/myHome"><button>Voltar</button></Link>
        <h1>{name.toUpperCase() + id}</h1>
        <button onClick={handleAdicionarDispositivo}>Adicionar dispositivo</button>
      </div>

      <div className={styles.deviceListArea}>
        {room.dispositivos.map(device => (
          <DeviceRow device={device} key={device.id}/>
        ))}
      </div>
      {showModal &&
        <ModalContainer onClose={() => setShowModal(false)} children={<AddDeviceInRoom/>} />
      }


    </div>
  )
}

export default Room
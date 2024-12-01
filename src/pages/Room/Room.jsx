import DeviceRow from "../../components/DeviceRow/DeviceRow";
import AddDeviceInRoom from "../../components/AddDeviceInRoom/AddDeviceInRoom";
import styles from "./styles.module.css";
import { useLocation, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ModalContainer from "../../components/ModalContainer/ModalContainer";
import APIURL from "../../variaveisGlobais";

function Room() {
  const location = useLocation();
  const { id, name } = location.state || {};
  

  const [showModal, setShowModal] = useState(false);
  const [devices, setDevices] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) {
      setError("No room ID provided");
      setLoading(false);
      return;
    }

    fetch(`${APIURL}/dispositivosPorComodo/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setDevices(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  function handleAdicionarDispositivo() {
    setShowModal(!showModal);
  }

  return (
    <div className={styles.room}>
      <div className={styles.headerArea}>
        <Link to="/myHome">
          <button>Voltar</button>
        </Link>
        <h1>{name || "Room"}</h1>
        <button onClick={handleAdicionarDispositivo}>Adicionar dispositivo</button>
      </div>

      <div className={styles.deviceListArea}>
        {devices.map((device) => (
          <DeviceRow device={device} key={device.id} />
        ))}
      </div>
      {showModal && (
        <ModalContainer onClose={() => setShowModal(false)}>
          <AddDeviceInRoom />
        </ModalContainer>
      )}
    </div>
  );
}

export default Room;

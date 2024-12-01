import DeviceRowInMyDevices from "../../components/DeviceRowInMyDevices/DeviceRowInMyDevices";
import ModalContainer from "../../components/ModalContainer/ModalContainer";
import AddDeviceInRoom from "../../components/AddDeviceInRoom/AddDeviceInRoom";
import styles from "./styles.module.css";

import { useState, useEffect } from "react";
import APIURL from "../../variaveisGlobais";

function MyDevices() {
  const [showModal, setShowModal] = useState(false);
  const [devices, setDevices] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [rooms, setRooms] = useState(null);

  // Request to fetch devices
  useEffect(() => {
    const fetchDevices = async () => {
      try {
        const response = await fetch(`${APIURL}/dispositivos`);
        if (!response.ok) {
          throw new Error(`Failed to fetch devices: ${response.statusText}`);
        }
        const data = await response.json();
        setDevices(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchDevices();
  }, []);

  // Request to fetch rooms
  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await fetch(`${APIURL}/comodos`);
        if (!response.ok) {
          throw new Error(`Failed to fetch rooms: ${response.statusText}`);
        }
        const data = await response.json();
        setRooms(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchRooms();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={styles.myDevices}>
      <div className={styles.headerArea}>
        <h1>Meus dispositivos</h1>
        <button onClick={() => setShowModal(!showModal)}>Adicionar dispositivo</button>
      </div>

      <div className={styles.devicesListArea}>
        {rooms &&
          devices?.map((device) => (
            <DeviceRowInMyDevices rooms={rooms} device={device} key={device.ID_DISP} />
          ))}
      </div>

      {showModal && (
        <ModalContainer onClose={() => setShowModal(false)} children={<AddDeviceInRoom />} />
      )}
    </div>
  );
}

export default MyDevices;

import APIURL from "../../variaveisGlobais";
import styles from "./styles.module.css";
import React, { useState, useEffect } from 'react';

function AddDeviceInRoom() {

   const determineTheIdOfTheRoomTheDeviceIsIn = (rooms, device) => {
      const room = rooms.find((room) => room.NOME_COMODO === device.ID_DISP_COMODO);
      setFormData((prevFormData) => ({
         ...prevFormData,
         ID_DISP_COMODO: room.ID_COMODO
      }))
   }

   // States for the form data
   const [formData, setFormData] = useState({
      NOME_DISP: "",
      TIPO_DISP: "",
      ID_DISP_COMODO: ""
   });

   // States for the GET request when the page loads
   const [rooms, setRooms] = useState(null);
   const [error, setError] = useState(null);
   const [loading, setLoading] = useState(true);

   // Handle input changes
   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({ ...prevData, [name]: value }));
   };

   const handleSubmit = async (e) => {
      e.preventDefault(); // Prevent default form submission 
   
      // Determine the ID of the room and include it in the formData
      const room = rooms.find((room) => room.NOME_COMODO === formData.ID_DISP_COMODO);
      if (room) {
         formData.ID_DISP_COMODO = room.ID_COMODO;
      } else {
         alert("No room selected or room not found!");
         return; // Exit if no valid room ID is found
      }
   
      console.log("Updated Form Data:", formData);
   
      try {
         const response = await fetch(`${APIURL}/dispositivos`, {
            method: "POST", // Specify POST method
            headers: {
               "Content-Type": "application/json", // Specify JSON content type
            },
            body: JSON.stringify(formData), // Convert data to JSON string
         });
   
         if (response.ok) {
            const result = await response.json();
            alert("Dispositivo adicionado com sucesso!");
            console.log(result); // Handle the response
         } else {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
         }
      } catch (error) {
         console.error("Error adding room:", error);
         alert("Failed to add the room. Please try again.");
      }
   };

   // Fetch request to get rooms data
   useEffect(() => {
      fetch(`${APIURL}/comodos`)
         .then((response) => {
            if (!response.ok) {
               throw new Error("Network response was not ok");
            }
            return response.json();
         })
         .then((data) => {
            setRooms(data);
            setLoading(false);
         })
         .catch((error) => {
            setError(error.message);
            setLoading(false);
         });
   }, []);

   if (loading) return <p>Loading...</p>;
   if (error) return <p>Error: {error}</p>;

   return (
      <div className={styles.addDeviceInRoom}>
         <h1>Adicionar dispositivo</h1>

         <form className={styles.inputList} onSubmit={handleSubmit}>
            <div className={styles.inputArea}>
               <h2>Nome do dispositivo: </h2>
               <input
                  type="text"
                  name="NOME_DISP"
                  value={formData.NOME_DISP}
                  onChange={handleChange}
               />
            </div>

            <div className={styles.checkBoxInputArea}>
               <h2>Tipo do dispositivo: </h2>
               <div className={styles.checkBoxItem}>
                  <input
                     type="radio"
                     name="TIPO_DISP"
                     value="Digital"  // Fixed value for Digital
                     checked={formData.TIPO_DISP === "Digital"}
                     onChange={handleChange}
                     id="check_a"
                  />
                  <label htmlFor="check_a">Digital</label>
               </div>

               <div className={styles.checkBoxItem}>
                  <input
                     type="radio"
                     name="TIPO_DISP"
                     value="Analogico"  // Fixed value for Analogico
                     checked={formData.TIPO_DISP === "Analogico"}
                     onChange={handleChange}
                     id="check_b"
                  />
                  <label htmlFor="check_b">Analogico</label>
               </div>
            </div>

            <div className={styles.checkBoxInputArea}>
               <h2>Em qual cômodo o dispositivo está: </h2>
               {rooms.map((room) => (
                  <div className={styles.checkBoxItem} key={room.ID_COMODO}>
                     <input
                        type="radio"
                        name="ID_DISP_COMODO"  // Fixed name for the room
                        value={room.NOME_COMODO}  // Value is the room name
                        checked={formData.ID_DISP_COMODO === room.NOME_COMODO}
                        onChange={handleChange}
                        id={"check" + room.ID_COMODO}
                     />
                     <label htmlFor={"check" + room.ID_COMODO}>{room.NOME_COMODO}</label>
                  </div>
               ))}
               <div className={styles.checkBoxItem}>
                  <input
                     type="radio"
                     name="ID_DISP_COMODO"  // Fixed name for the room
                     value={""}  // Value is the room name
                     onChange={handleChange}
                     id={"null"}
                  />
                  <label htmlFor={"null"}>Nenhum</label>
               </div>
               
            </div>
            <input type="submit" value="Criar dispositivo"/>
         </form>
      </div>
   );
}

export default AddDeviceInRoom;

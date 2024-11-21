import RoomRow from "../../components/RoomRow/RoomRow";
import styles from "./styles.module.css"

import { useState, useEffect } from 'react'

function MyHome(){

    const [rooms, setRoom] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json();
          })
          .then((data) => {
            setRoom(data);
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


    return(
        <div className={styles.myHome}>

        <div className={styles.headerArea}> 
            <div className={styles.descriptionArea}>
                <h1>Minha casa</h1>
                <h2>Meus cômodos</h2>
            </div>
            <button>Adicionar cômodo</button>
        </div>

            <div className={styles.roomsListArea}>
                {rooms.map(room => (
                    <RoomRow name={room.name} to={"/room"} state={{"id": room.id, "name": room.name}}/>
                ))}
            </div>

        </div>
    )
}

export default MyHome;
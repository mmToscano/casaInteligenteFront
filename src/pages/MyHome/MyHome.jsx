import RoomRow from "../../components/RoomRow/RoomRow";
import styles from "./styles.module.css"

import APIURL from "../../variaveisGlobais";

import { useState, useEffect } from 'react'

function MyHome(){

    const [showAddRoom, setShowAddRoom] = useState(false);

    const [rooms, setRooms] = useState();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    //request que pega todos os quartos
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


    return(
        <div className={styles.myHome}>

        <div className={styles.headerArea}> 
            <div className={styles.descriptionArea}>
                <h1>Minha casa</h1>
                <h2>Meus cômodos</h2>
            </div>
            <button onClick={() => setShowAddRoom(!showAddRoom)}>Adicionar cômodo</button>
        </div>

            <div className={styles.roomsListArea}>
                {rooms.map(room => (
                    <RoomRow idcomodo={room.ID_COMODO} name={room.NOME_COMODO} to={"/room"} state={{"ID_COMODO": room.ID_COMODO, "NOME_COMODO": room.NOME_COMODO}} addState={false} key={room.ID_COMODO}/>
                ))}
                {showAddRoom &&
                  <RoomRow addState={true}/>
                }
                
            </div>

        </div>
    )
}

export default MyHome;
import DefaultRow from "../../components/DefaultRow/DefaultRow";
import "./styles.css"

// fazer um request com os ids e os nomes dos cômodos e apenas isso. Nada mais.
const rooms = [
    {"id": 0, "name": "Garagem", "dispositivos": [{"id": 0, "name": "Luz da garagem", "type": "digital", "category": "Luz"}, {"id": 1, "name": "Portao da garagem", "type": "analogico", "category": "Luz"}]},
    {"id": 1, "name": "Banheiro", "dispositivos": [{"id": 2, "name": "Luz do banheiro", "type": "digital", "category": "Luz"}]}
  ];

  

function MyHome(){
    return(
        <div className="myHome">

        <h1 className="headerArea"> 
            <div className="descriptionArea">
                <h1>Minha casa</h1>
                <h2>Meus cômodos</h2>
            </div>
            <button>Adicionar cômodo</button>
        </h1>

            <div className="roomsListArea">
                {rooms.map(room => (
                    <DefaultRow name={room.name} to={"/room/" + room.id}/>
                ))}
            </div>

        </div>
    )
}

export default MyHome;
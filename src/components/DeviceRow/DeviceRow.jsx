import "./styles.css"

import { FaTrash } from "react-icons/fa6"

function DeviceRow({ device }){
    return(
        <div className="deviceRow">

            <div className="descriptionArea">
                <img src="" alt="imagem ilustrativa"/>

                <div className="interactiveArea">
                    <h1>{device.name}</h1>
                    <div className="buttonArea">
                        {device.type === "digital" 

                        ? 
                        <div className="buttonArea">
                            <button>Desligar</button>
                            <button>Ligar</button>
                        </div> 
                        
                        : 
                        <div className="buttonArea">
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
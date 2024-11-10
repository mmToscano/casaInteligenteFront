import "./styles.css"

import { FaEllipsis, FaTrash } from "react-icons/fa6"

function DefaultRow({ type, name }){
    return(
        <div className="defaultRow">
            <h1>{name}</h1>
            <button><FaEllipsis/></button>
            <button><FaTrash/></button>
        </div>
    )
}

export default DefaultRow
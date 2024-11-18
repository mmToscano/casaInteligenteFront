import "./styles.css"

import { Link } from "react-router-dom"
import { FaEllipsis, FaTrash } from "react-icons/fa6"

function DefaultRow({ name, to }){
    return(
        <Link to={to}>
            <div className="defaultRow">
                <h1>{name}</h1>
                <button><FaEllipsis/></button>
                <button><FaTrash/></button>
            </div>
        </Link>
        
    )
}

export default DefaultRow
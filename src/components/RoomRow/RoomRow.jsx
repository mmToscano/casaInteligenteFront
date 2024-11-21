import styles from "./styles.module.css"

import { Link } from "react-router-dom"
import { FaEllipsis, FaTrash } from "react-icons/fa6"

function DefaultRow({ name, to, state }){
    return(
        <div className={styles.defaultRow}>
            <Link to={to} state={state}>
                <h1>{name}</h1>
            </Link>
                <button><FaTrash/></button>
        </div>
        
    )
}

export default DefaultRow
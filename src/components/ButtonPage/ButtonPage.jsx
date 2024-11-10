import "./styles.css"
import { Link } from "react-router-dom"

function ButtonPage({ logo, title, selectedItem, onClick }){

    return(
        <Link className={`buttonPage ${selectedItem ? "selected" : ""}`} onClick={onClick}>
            <div>{logo}</div>
            <h1>{title}</h1>
        </Link>
    );
}

export default ButtonPage;
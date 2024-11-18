import "./styles.css"
import { Link } from "react-router-dom"

function ButtonPage({ logo, title, selectedItem, to }){

    return(
        <Link className={`buttonPage ${selectedItem ? "selected" : ""}`} to={to}>
            <div>{logo}</div>
            <h1>{title}</h1>
        </Link>
    );
}

export default ButtonPage;
import "./styles.css"
import { useState } from 'react';

function ButtonPage({ logo, title, selectedItem, onClick }){

    return(
        <div className={`buttonPage ${selectedItem ? "selected" : ""}`} onClick={onClick}>
            <div>{logo}</div>
            <h1>{title}</h1>
        </div>
    );
}

export default ButtonPage;
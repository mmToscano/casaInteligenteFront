import "./styles.css"
import logo from "../../imgs/logo.png"
import ButtonPage from "../ButtonPage/ButtonPage";

import { useState } from 'react'

import { FaHouseUser, FaBox } from "react-icons/fa";

function Navbar({ changePage }){

    const [selectedButton, setSelectedButton] = useState("casa");

    function setChosenPage(chosenPage){
        setSelectedButton(chosenPage);
        changePage(chosenPage);
    }

    return(
        <div className="navbar">
            <img src={logo} alt="logo"/>

            <div className="buttonArea">
                <ButtonPage
                    title="Minha Casa"
                    logo={<FaHouseUser />}
                    selectedItem={selectedButton === "casa"}
                    onClick={() => setChosenPage("casa")}
                />
                <ButtonPage
                    title="Cômodos"
                    logo={<FaBox />}
                    selectedItem={selectedButton === "comodo"}
                    onClick={() => setChosenPage("comodo")}
                />
            </div>

        </div>

    );
}

export default Navbar;
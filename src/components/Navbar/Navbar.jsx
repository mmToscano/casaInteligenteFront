import "./styles.css"
import logo from "../../imgs/logo.png"
import ButtonPage from "../ButtonPage/ButtonPage";

import { useState } from 'react'

import { FaHouseUser, FaBox } from "react-icons/fa";

function Navbar(){

    return(
        <div className="navbar">
            <img src={logo} alt="logo"/>

            <div className="buttonArea">
                <ButtonPage
                    to="/myHome"
                    title="Minha Casa"
                    logo={<FaHouseUser />}
                />
                <ButtonPage
                    to="/myRoom"
                    title="Cômodos"
                    logo={<FaBox />}
                />
            </div>

        </div>

    );
}

export default Navbar;
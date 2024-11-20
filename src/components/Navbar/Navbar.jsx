import styles from "./styles.module.css"
import logo from "../../imgs/logo.png"
import ButtonPage from "../ButtonPage/ButtonPage";

import { useState } from 'react'

import { FaHouseUser, FaBox } from "react-icons/fa";

function Navbar(){

    return(
        <div className={styles.navbar}>
            <img src={logo} alt="logo"/>

            <div className={styles.buttonArea}>
                <ButtonPage
                    to="/myHome"
                    title="Minha Casa"
                    logo={<FaHouseUser />}
                />
                <ButtonPage
                    to="/myDevices"
                    title="Meus dispositivos"
                    logo={<FaBox />}
                />
            </div>

        </div>

    );
}

export default Navbar;
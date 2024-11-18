import MyHome from "../../pages/MyHome/MyHome";
import MyRoom from "../../pages/MyRoom/MyRoom";
import "./styles.css"

import {Routes, Route} from 'react-router-dom'

function DisplayArea({ title, desc, buttonDesc }){
    return(
        <div className="displayArea">

        <h1 className="headerArea"> 
            <div className="descriptionArea">
                <h1>{title}</h1>
                <h2>{desc}</h2>
            </div>
            <button>{buttonDesc}</button>
        </h1>

        <div className="pageArea">
            <Routes>
                <Route exact path="/myHome" element={<MyHome/>}></Route>
                <Route exact path="/myRoom" element={<MyRoom/>}></Route>
            </Routes>
            
        </div>
        </div>
    )
}

export default DisplayArea;
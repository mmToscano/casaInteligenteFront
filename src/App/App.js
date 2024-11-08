import DisplayArea from "../components/DisplayArea/DisplayArea";
import Navbar from "../components/Navbar/Navbar";
import MyHome from "../pages/MyHome/MyHome";
import MyRoom from "../pages/MyRoom/MyRoom";
import "./styles.css"

import { useState } from 'react';

function App() {


  const [selectedPage, setSelectedPage] = useState("casa");

  function changePage(page){
    setSelectedPage(page);
  }

  return (
    <div className="app"> 
      <Navbar changePage={changePage}/>
      <DisplayArea
        title="Minha casa"
        desc="Meus cômodos"
        buttonDesc={selectedPage === "casa" ? "Adicionar cômodo" : "Adicionar dispositivo" }
        page={selectedPage === "casa" ? <MyHome/> : <MyRoom/> }
      />
    </div>
    
  );
}

export default App;

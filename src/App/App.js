import DisplayArea from "../components/DisplayArea/DisplayArea";
import Navbar from "../components/Navbar/Navbar";
import MyHome from "../pages/MyHome/MyHome";
import MyRoom from "../pages/MyRoom/MyRoom";
import "./styles.css"

import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Room from "../pages/Room/Room";

function App() {

  return (
    <Router>
      <div className="app"> 

        <Navbar/>

        <div className="displayArea">
          
          <Routes>
            <Route exact path="/myHome" element={<MyHome/>}></Route>
            <Route exact path="/myRoom" element={<MyRoom/>}></Route>
            <Route exact path="/room/:id" element={<Room/>}></Route>
          </Routes>
              
        </div>
        

      </div>
    </Router>
    
    
  );
}

export default App;

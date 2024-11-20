import Navbar from "../components/Navbar/Navbar";
import MyHome from "../pages/MyHome/MyHome";
import MyDevices from "../pages/MyDevices/MyDevices";
import styles from "./styles.module.css"

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Room from "../pages/Room/Room";

function App() {

  return (
    <Router>
      <div className={styles.app}> 

        <Navbar/>

        <div className={styles.displayArea}>
          
          <Routes>
            <Route exact path="/myHome" element={<MyHome/>}></Route>
            <Route exact path="/myDevices" element={<MyDevices/>}></Route>
            <Route exact path="/room/:id" element={<Room/>}></Route>
          </Routes>
              
        </div>
        

      </div>
    </Router>
    
    
  );
}

export default App;

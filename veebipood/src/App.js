//import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from "react-router-dom";
import Avaleht from './pages/Avaleht';
import Esindused from './pages/Esindused';
import Ariklient from './pages/Ariklient';
import Kinkekaart from './pages/Kinkekaart';
import LisaToode from './pages/LisaToode';
import Ostukorv from './pages/Ostukorv';
import Seaded from './pages/Seaded';
import NotFound from './pages/NotFound';
import { useState } from 'react';
import Hinnad from './pages/Hinnad';
import Tootajad from './pages/Tootajad';
import Tooted from './pages/Tooted';
 
function App() {
  const [tume, uuendaTume] = useState(localStorage.getItem("onTume") === "jah");
 
  const tumedaks = () => {
    uuendaTume(true);
    localStorage.setItem("onTume", "jah");
    // console.log()  logi konsooli
    // localStorage.setItem  pane lokaalmällu
  }
 
  const heledaks = () => {
    uuendaTume(false);
    localStorage.setItem("onTume", "ei");
  }
 
  return (
    <div className={tume === true ? "App-dark" : "App"}>
      <div className="nav"> 
        <Link to="/avaleht"> 
          <img className="pilt" src=" /logo.png" alt="Nobe elektriauto" />
        </Link>

        <div>
          <Link  className="navlink" to="/esindused">
            <img src="/esindus.svg" alt="" />
            <span>Esindused</span>
          </Link>
          <Link className="navlink" to="/arikliendile">
          <img src="/ari.svg" alt="" />
            <span>Ärikliendile</span>
          </Link>
          <Link className="navlink" to="/osta-kinkekaart">
          <img src="/kinkekaart.svg" alt="" />
            <span>Kinkekaart</span>
          </Link>
          <Link className="navlink" to="/lisa-toode">
            <span>Lisa toode</span>
          </Link>
          <Link className="navlink" to="/ostukorv">
          <img src="/shopping.svg" alt="" />
            <span>Ostukorv</span>
          </Link>
          <Link className="navlink" to="/seaded">
            <span>Seaded</span>
          </Link>
          <Link className="navlink" to="/hinnad">
            <span>Hinnad</span>
          </Link>
          <Link className="navlink" to="/tooted">
            <span>Tooted</span>
          </Link>
          <Link className="navlink" to="/tootajad">
            <span>Töötajad</span>
          </Link>
        </div>
        <div>
          <button onClick={tumedaks}>Tume</button>
          <button onClick={heledaks}>Hele</button>
        </div>
      </div>
 
 
      <Routes>
        <Route path="avaleht" element={ <Avaleht />} />
        <Route path="esindused" element={ <Esindused />} />
        <Route path="arikliendile" element={ <Ariklient />} />
        <Route path="osta-kinkekaart" element={ <Kinkekaart />} />
        <Route path="lisa-toode" element={ <LisaToode />} />
        <Route path="ostukorv" element={ <Ostukorv />} />
        <Route path="seaded" element={ <Seaded />} />
        <Route path="hinnad" element={ <Hinnad />} />
        <Route path="tootajad" element={ <Tootajad />} />
        <Route path="tooted" element={ <Tooted />} />
        <Route path="*" element={ <NotFound />} />
      </Routes>
 
    </div>
  );
}
 
export default App;
// import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <img className="pilt" src="https://upload.wikimedia.org/wikipedia/en/9/99/Nobe_GT100.jpg" alt="Nobe elektriauto" />
      <button className="nupp">Vajuta</button>
      <span>Tekst</span>
      <div className="tekst">Tekst2</div>
      <h3>Pealkiri</h3>

      <Routes>
        <Route path="" element={ <div>Tere</div> } />
        <Route path="esindused" element={ <div>10 esindust, mitukümmend eksperti.</div> } />
        <Route path="arikliendile" element={ <div>Ärikliendile</div> } />
        <Route path="osta-kinkekaart" element={ <div>Kinkekaardi ostmine</div> } />
      </Routes>
    </div>
  );
}

export default App;

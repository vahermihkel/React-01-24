import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Ostukorv() {
  const [ostukorv, uuendaOstukorv] = useState(["Coca", "Fanta", "Sprite"]);

  const lisaOstukorviRedBull = () => {
    ostukorv.push("Red bull");
    uuendaOstukorv(ostukorv.slice());
  }

  const kustutaOstukorvist = (indeks) => {
    ostukorv.splice(indeks, 1);
    uuendaOstukorv(ostukorv.slice());
  }

  const lisaOstukorvi = (uusToode) => {
    ostukorv.push(uusToode);
    uuendaOstukorv(ostukorv.slice());
  }

  return (
    <div>
      { ostukorv.length === 0 && <div>Ostukorv on hetkel tühi.</div> }

      <button onClick={() => uuendaOstukorv(["Coca", "Fanta"])}>Jäta alles Coca + Fanta</button>
      <button onClick={lisaOstukorviRedBull}>Lisa lõppu juurde Red bull</button>

      { ostukorv.length > 0 &&
      <div>
        <div>Ostukorvis on {ostukorv.length} ese(t)</div>
        <button onClick={() => uuendaOstukorv([])}>Tühjenda</button>
      </div>}

      { ostukorv.map((toode, index) => 
        <div>
          {index}.
          {toode}
          <button onClick={() => kustutaOstukorvist(index)}>Kustuta</button>
          <button onClick={() => lisaOstukorvi(toode)}>Lisa lõppu üks juurde</button>
        </div>) }

      { ostukorv.length === 0 &&
      <div>
        <Link to="/avaleht">Avalehele</Link>
        <img src="" alt="" />
      </div>}
    </div>
  )
}

export default Ostukorv
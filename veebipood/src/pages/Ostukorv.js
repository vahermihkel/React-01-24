import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Ostukorv() {
  const [ostukorv, uuendaOstukorv] = useState(["Coca", "Fanta", "Sprite"]);

  return (
    <div>
      { ostukorv.length === 0 && <div>Ostukorv on hetkel tühi.</div> }

      <button onClick={() => uuendaOstukorv(["Coca", "Fanta"])}>Jäta alles Coca + Fanta</button>
      
      { ostukorv.length > 0 &&
      <div>
        <div>Ostukorvis on {ostukorv.length} ese(t)</div>
        <button onClick={() => uuendaOstukorv([])}>Tühjenda</button>
      </div>}

      { ostukorv.map(toode => <div>{toode}</div>) }

      { ostukorv.length === 0 &&
      <div>
        <Link to="/avaleht">Avalehele</Link>
        <img src="" alt="" />
      </div>}
    </div>
  )
}

export default Ostukorv
import React, { useState } from 'react'
import tootedFailist from "../data/tooted.json";
import { Link } from 'react-router-dom';

function HaldaTooted() {
  const [tooted, muudaTooted] = useState(tootedFailist);

  const kustuta = (indeks) => {
    tootedFailist.splice(indeks, 1);
    muudaTooted(tootedFailist.slice());
  }

  return (
    //  ["Nobe", "BMW", "Tesla"].map(("Nobe", 0) => <div></div>)
    //  ["Nobe", "BMW", "Tesla"].map(("BMW", 1) => <div></div>)
    //  ["Nobe", "BMW", "Tesla"].map(("Tesla", 2) => <div></div>)
    // 
    <div>
      {tooted.map((toode, indeks) => 
        <div key={indeks}>
          <img style={{width: "50px"}} src={toode.pilt} alt="" />
          {toode.nimi} - {toode.hind} €
          <button onClick={() => kustuta(indeks)}>Kustuta</button>
          {/* kui esimest / pole, siis liidab olemasolevale URL-le juurde
          kui teist / pole, siis liidab muutuja sõna otsa */}
          <Link to={"/muuda-toode/" + indeks}>
            <button>Muuda</button>
          </Link>
        </div>)}
    </div>
  )
}

// ["Nobe", "BMW", "Tesla"]
// "BMW" -> 1
// Kustutada saab ainult järjekorranumbriga
// Muuta saab ainult järjekorranumbriga
// Ühte leida saab järjekorranumbriga või ühe kindla omadusega

export default HaldaTooted
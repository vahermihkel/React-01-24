import { useState } from 'react'
import tootajadJSON from "../data/tootajad.json";

function HaldaTootajad() {
  const [tootajad, uuendaTootajad] = useState(tootajadJSON);

  const kustutaTootaja =(index) => {
    tootajadJSON.splice(index, 1); // .splice() abil kustutan
    uuendaTootajad(tootajadJSON.slice()); // .slice() abil teen koopia, et ei peaks iseenda abil uuendama
  }

  // sellest funktsioonist saab lisada ainult juba olemasolevaid
  const lisaTootaja = (uusTootaja) => { // see saadetakse läbi .map()
    tootajadJSON.push(uusTootaja); // mis võtab ülevalt sulgude seest
    uuendaTootajad(tootajadJSON.slice());
  }

  return (
    <div>
       {tootajad.map((tootaja, index) => 
        <div key={index}>
          {tootaja}
          <button onClick={() => kustutaTootaja(index)}>X</button>
          <button onClick={() => lisaTootaja(tootaja)}>Lisa lõppu juurde</button>
        </div>)}
    </div>
  )
}

export default HaldaTootajad

// ["Urmet", "Kaido", "Liina", "Maiki", "Heidi", "Epp", "Kaire", "Anet", "Maarja"]
// .map((tootaja, index) =>
// ("Urmet", 0)
// ("Kaido", 1)
// ("Liina", 2)
// ("Maiki", 3)
import { useState } from 'react'
import tootedFailist from "../data/tooted.json";
import ostukorvFailist from "../data/ostukorv.json";
import { Link } from 'react-router-dom'; // Link on URLiga seonduv ja kõik URLga seonduvad
//  tulevad react-router-dom'st   (Route, Routes, BrowserRouter)
 
// App.js sees teha URL ja faili seos (URL-ks pange sama mis faili nimi)
// URL-le sattumise võimekus läbi <Link>
// Array väljakuvamine (List, Massiiv) läbi useState (.map())
// ["Nobe", "BMW", "Tesla"]
// Lisage sorteerimine A-Z
// Pange ka koguarv .length abil (mitu tk mul lehel on)
 
function Tooted() {
 
  const [tooted, uuendaTooted] = useState(tootedFailist);
    
    const sorteeriAZ = () => {
      tooted.sort((a,b) => a.nimi.localeCompare(b.nimi));
      uuendaTooted(tooted.slice());
    }

    const sorteeriZA = () => {
      // {"id": 1, "eng_nimi": "", "nimi": "Nobe", ...}.localeCompare()
      tooted.sort((a,b) => b.nimi.localeCompare(a.nimi));
      uuendaTooted(tooted.slice());
    }

    // {"id": 1, "eng_nimi": "", "nimi": "Nobe", ...}.length
    const sorteeriTahedKasvavalt = () => {
      tooted.sort((a, b) => a.nimi.length - b.nimi.length);
      uuendaTooted(tooted.slice());
    }


    const sorteeriTahedKahanevalt = () => {
      tooted.sort((a, b) => b.nimi.length - a.nimi.length);
      uuendaTooted(tooted.slice());
    }

    const lisaOstukorvi = (toode) => {
      ostukorvFailist.push(toode);
    }

  return (
    <div>
      {tooted.length > 0 &&
        <div>
          <button onClick={sorteeriAZ} >Sorteeri A-Z</button>
          <button onClick={sorteeriZA} >Sorteeri Z-A</button>
          <button onClick={sorteeriTahedKasvavalt} >Sorteeri tähed kasvavalt</button>
          <button onClick={sorteeriTahedKahanevalt} >Sorteeri tähed kahanevalt</button>
          {tooted.map((toode,i) => 
            <div key={i}>
              <img className="pilt" src={toode.pilt} alt="" />
              <div>{toode.nimi}</div>
              <div>{toode.hind} €</div>
              {/* vasakul pool kaldkriips - muidu lisab olemasolevale URL-le
               ja paremal pool kaldkriips - muidu number tuleb URL-i eelmise sõna otsa  */}
              <Link to={"/toode/" + i}>
                <button>Vaata lähemalt</button>
              </Link>
              <button onClick={() => lisaOstukorvi(toode)}>Lisa ostukorvi</button>
            </div>)}
          <h4>Tooteid on {tooted.length} (tk)</h4>
        </div>
      }
      {tooted.length === 0 && <div>Ühtegi toodet pole nähtavalt</div>}
    </div>
  )
}
 
export default Tooted
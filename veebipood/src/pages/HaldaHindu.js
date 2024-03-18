import React, { useState } from 'react';
import hinnadFailist from "../data/hinnad.json";
import { Link } from 'react-router-dom';

function HaldaHindu() {
  const [hinnad, uuendaHinnad] = useState(hinnadFailist);
   
  const lisaHind = (lisatavHind) => {
    hinnadFailist.push(lisatavHind);
    uuendaHinnad(hinnadFailist.slice());
  }

  //kui siin on sulgude sisu täidetud, siis tuleb midagi onClick seest kaasa saata
  const kustutaHind = (jrknr) =>{
    hinnadFailist.splice(jrknr, 1);
    uuendaHinnad(hinnadFailist.slice());
  }

  const lisaHind123 = () => {
    hinnadFailist.push(123);
    uuendaHinnad(hinnadFailist.slice());
  }

  const kustutaEsimene = () =>{
    hinnadFailist.splice(0, 1); //esimene järjekorranumber, teine mitu tk tahan ühe nupuvajutusega kustutada
    uuendaHinnad(hinnadFailist.slice());
  }

  const kustutaTeine = () =>{
    hinnadFailist.splice(1, 1);
    uuendaHinnad(hinnadFailist.slice());
  }

  const kustutaKolmas = () =>{
    hinnadFailist.splice(2, 1);
    uuendaHinnad(hinnadFailist.slice());
  }

  const kustutaNeljas = () =>{
    hinnadFailist.splice(3, 1);
    uuendaHinnad(hinnadFailist.slice());
  }

  return (
    <div>
      {hinnad.map((hind, jrknr) => 
          <div key={jrknr}>
            {hind.number} ({hind.lisaja}) 
            <button onClick={() => kustutaHind(jrknr)}>x</button>
            <button onClick={() => lisaHind(hind)}>Lisa</button>
            <Link to={"/muuda-hind/" + jrknr}>
              <button>Muuda</button>
            </Link>
          </div>)}
          <button onClick={lisaHind123}>Lisa hind 123 lõppu juurde</button>
        <br />
      
        <button onClick={kustutaEsimene}>Kustuta esimene</button>
        <button disabled={hinnad.length < 2} onClick={kustutaTeine}>Kustuta teine</button>
        <button disabled={hinnad.length < 3} onClick={kustutaKolmas}>Kustuta kolmas</button>
        {hinnad.length >=4 && <button onClick={kustutaNeljas}>Kustuta neljas</button>}
    </div>
  )
}

export default HaldaHindu
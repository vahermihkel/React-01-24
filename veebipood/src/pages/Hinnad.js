import { useState } from 'react'
 
// App.js sees teha URL ja faili seos (URL-ks pange sama mis faili nimi)
// URL-le sattumise võimekus läbi <Link>
// Array väljakuvamine (List, Massiiv) läbi useState (.map())
// [ 312, 1234, 56, 88, 8, 234, 12]
// Lisage sorteerimine A-Z
// Pange ka koguarv .length abil (mitu tk mul lehel on)
 
// Tühjenda nupp, mis kustub kui on .length väärtus 0
// Kui pole ühtegi töötajat, siis kuva <div>Pole ühtegi hinda nähtaval</div>
 
function Hinnad() {
  const [hinnad, uuendaHinnad] = useState([312, 1234, 56, 88, 8, 234, 12]);

  const sorteeriAZ = () => {
    //hinnad.sort();
    hinnad.sort((a, b) => a.toString().localeCompare(b.toString()));
    uuendaHinnad(hinnad.slice());
  }

  const sorteeriZA = () => {
    hinnad.sort((a, b) => b.toString().localeCompare(a.toString()));
    // hinnad.reverse();
    uuendaHinnad(hinnad.slice());
  }

  const sorteeriKasvavalt = () => {
    hinnad.sort((a, b) => a - b);
    uuendaHinnad(hinnad.slice());
  }

  const sorteeriKahanevalt = () => {
    hinnad.sort((a, b) => b - a);
    uuendaHinnad(hinnad.slice());
  }

  return (
    <div>
      { hinnad.length > 0 &&
        <div>
          <button onClick={sorteeriAZ} >Sorteeri A-Z</button>
          <button onClick={sorteeriZA} >Sorteeri Z-A</button>

          <button onClick={sorteeriKasvavalt} >Sorteeri kasvavalt</button>
          <button onClick={sorteeriKahanevalt} >Sorteeri kahanevalt</button>

          {hinnad.map(hinnad => <div>{hinnad}</div>)}
          <div><h4>Hindasid on: {hinnad.length} </h4></div>
          <button onClick={() => uuendaHinnad([])} >Eemalda hinnad</button>
        </div>}
 
        {hinnad.length === 0 && 
        <div>Pole ühtegi hinda nähtaval</div>}
 
    </div>
  )
}
 
export default Hinnad
import { useState } from 'react'
import hinnadFailist from "../data/hinnad.json"; 

// App.js sees teha URL ja faili seos (URL-ks pange sama mis faili nimi)
// URL-le sattumise võimekus läbi <Link>
// Array väljakuvamine (List, Massiiv) läbi useState (.map())
// [ 312, 1234, 56, 88, 8, 234, 12]
// Lisage sorteerimine A-Z
// Pange ka koguarv .length abil (mitu tk mul lehel on)
 
// Tühjenda nupp, mis kustub kui on .length väärtus 0
// Kui pole ühtegi töötajat, siis kuva <div>Pole ühtegi hinda nähtaval</div>
 
function Hinnad() {                  
  const [hinnad, uuendaHinnad] = useState(hinnadFailist);

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

  // const sorteeriKasvavaltChatGpt = () => {
  //   const vastus = [...hinnad].sort((a, b) => a - b);
  //   uuendaHinnad(vastus);
  // }

  // const sorteeriKasvavaltChatGpt2 = () => {
  //   hinnad.sort((a, b) => a - b);
  //   uuendaHinnad([...hinnad]); // numbrid.slice() ja [...numbrid]   teeb täpselt sama välja
  // }

  const sorteeriKahanevalt = () => {
    hinnad.sort((a, b) => b - a);
    uuendaHinnad(hinnad.slice());
  }

  // 22 % 5 === 2
  // 23 % 5 === 3
  // 22 % 6 === 4
  // 23 % 6 === 5

  // !== 0
  // === 1

  // const filtreeriAlgavad1 = () => {
  //   const vastus = hinnad.filter(y => {
  //   const numStr = y.toString();
  //   return numStr.startsWith('1');
  //   });
  //   uuendaHinnad(vastus);
  // }

//   const filtreeriSisaldavad3 = () => {
//     const vastus = numbrid.filter(s => {
//     const numStr = s.toString();  teisendab stringiks
//     return numStr.includes('3');  kontroll kas sisaldab
//     });
//     uuendaNumbrid(vastus);
// }

  // const filtreeriSisaldavad3 = () => {
  //   const vastus = hinnad.filter(hind => hind.toString().includes('3'));
  //   uuendaHinnad(vastus);
  // }

  const lisaHind123 = () => {
    hinnad.push(123);
    uuendaHinnad(hinnad.slice());
  }

  const lisaHind = (lisatavHind) => {
    hinnad.push(lisatavHind);
    uuendaHinnad(hinnad.slice());
  }

  const kustutaEsimene = () => {
    hinnad.splice(0, 1); // esimene on järjekorranumber, teine mitu tk tahan ühe nupuvajutusega kustutada
    uuendaHinnad(hinnad.slice());
  }

  const kustutaTeine = () => {
    hinnad.splice(1, 1);
    uuendaHinnad(hinnad.slice());
  }

  const kustutaKolmas = () => {
    hinnad.splice(2, 1);
    uuendaHinnad(hinnad.slice());
  }

  const kustutaNeljas = () => {
    hinnad.splice(3, 1);
    uuendaHinnad(hinnad.slice());
  }

  // kui siin on sulgude sisu täidetud, siis tuleb midagi onClick seest kaasa saata
  const kustutaHind = (jrknr) => {
    hinnad.splice(jrknr, 1);
    uuendaHinnad(hinnad.slice());
  }

  const filtreeriPaarisarvud = () => {
    const vastus = hinnad.filter(hind => hind % 2 === 0);
    uuendaHinnad(vastus);
  }

  return (
    <div>
      { hinnad.length > 0 &&
        <div>
          <button onClick={sorteeriAZ} >Sorteeri A-Z</button>
          <button onClick={sorteeriZA} >Sorteeri Z-A</button>

          <button onClick={sorteeriKasvavalt} >Sorteeri kasvavalt</button>
          <button onClick={sorteeriKahanevalt} >Sorteeri kahanevalt</button>
          <br /><br />
          <button onClick={filtreeriPaarisarvud}>Jäta alles paarisarvud</button>

          <br />
          <button onClick={lisaHind123}>Lisa hind 123 lõppu juurde</button>
          <br />
          <button onClick={kustutaEsimene}>Kustuta esimene</button>
          <button disabled={hinnad.length < 2} onClick={kustutaTeine}>Kustuta teine</button>
          {/* ise */}
          <button onClick={kustutaKolmas}>Kustuta kolmas</button>
          {hinnad.length >= 4 && <button onClick={kustutaNeljas}>Kustuta neljas</button>}



          {hinnad.map((hind, jrknr) => 
            <div key={jrknr}>
              {hind} 
              <button onClick={() => kustutaHind(jrknr)}>x</button> 
              <button onClick={() => lisaHind(hind)}>Lisa</button> 
            </div>)}
          <div><h4>Hindasid on: {hinnad.length} </h4></div>
          <button onClick={() => uuendaHinnad([])} >Eemalda hinnad</button>
        </div>}
 
        {hinnad.length === 0 && 
        <div>Pole ühtegi hinda nähtaval</div>}
 
    </div>
  )
}
 
export default Hinnad
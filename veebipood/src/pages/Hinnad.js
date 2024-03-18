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
    hinnad.sort((a, b) => a.number.toString().localeCompare(b.number.toString()));
    uuendaHinnad(hinnad.slice());
  }

  const sorteeriZA = () => {
    hinnad.sort((a, b) => b.number.toString().localeCompare(a.number.toString()));
    // hinnad.reverse();
    uuendaHinnad(hinnad.slice());
  }

  const sorteeriKasvavalt = () => {
    hinnad.sort((a, b) => a.number - b.number);
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
    hinnad.sort((a, b) => b.number - a.number);
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
    hinnadFailist.push(123);
    uuendaHinnad(hinnadFailist.slice());
  }

  const lisaHind = (lisatavHind) => {
    hinnadFailist.push(lisatavHind);
    uuendaHinnad(hinnadFailist.slice());
  }

  const kustutaEsimene = () => {
    hinnadFailist.splice(0, 1); // esimene on järjekorranumber, teine mitu tk tahan ühe nupuvajutusega kustutada
    uuendaHinnad(hinnadFailist.slice());
  }

  const kustutaTeine = () => {
    hinnadFailist.splice(1, 1);
    uuendaHinnad(hinnadFailist.slice());
  }

  const kustutaKolmas = () => {
    hinnadFailist.splice(2, 1);
    uuendaHinnad(hinnadFailist.slice());
  }

  const kustutaNeljas = () => {
    hinnadFailist.splice(3, 1);
    uuendaHinnad(hinnadFailist.slice());
  }

  // kui siin on sulgude sisu täidetud, siis tuleb midagi onClick seest kaasa saata
  const kustutaHind = (jrknr) => {
    hinnadFailist.splice(jrknr, 1);
    uuendaHinnad(hinnadFailist.slice());
  }

  const filtreeriPaarisarvud = () => {
    const vastus = hinnad.filter(hind => hind.number % 2 === 0);
    uuendaHinnad(vastus);
  }

  // Alati muutujate loomisel kasutada "const" eesliidet, kui just ei teki vajadus kasutada "let"

  // let summa = 0;
  // summa = 0 + 8;
  // summa = 8 + 5;
  // summa = 13+ 2;
  // return summa; --> 15

  const hinnadKokku = () => {
    let summa = 0;
    // summa = summa + 312;
    // summa = summa + 1234;
    // summa = summa + 56;
    // summa = summa + 88;

    // summa += 312;
    // summa += 1234;
    // summa += 56;
    // summa += 88;
    hinnad.forEach(hind => summa = summa + hind.number);
    return summa;
  }

  // .map(hind => MILLEGA_ASENDATAKSE)
  // .sort((a,b) => PLUSS_VÕI_MIINUS) -> plussiga muudetakse järjekord
  // .filter(hind => ÕIGE_VÕI_VÄÄR) -> õigega jäetakse alles
  // .forEach(hind => summa = summa + hind) -> igaühe kohta tehakse midagi 

  // onClick={() => sorteeriAZ()} --> ÕIGE.
  // onClick={sorteeriAZ} --> ÕIGE.
  // onClick={sorteeriAZ()} --> VALE. Jääb lõputu loop (tsükkel), sest sorteeriAZ funktsiooni sees
  //      on useState-i parempoolne funktsioon, mis läheb HTMLi uuendama. Ja kui seda tehakse,
  //      siis pannakse uuesti see funktsioon käima, mis läheb omakorda uuesti HTMLi uuendama

  // <div>Kokkuarvutus, mis tagastab numbri: {hinnadKokku()}</div> --> ÕIGE.
  // <div>Kokkuarvutus, mis tagastab numbri: {hinnadKokku}</div> --> VALE. Sest ei käivitu
  // <div>Kokkuarvutus, mis tagastab numbri: {() => hinnadKokku()}</div> --> VALE. Sest ei käivitu



  // Too many re-renders. React limits the number of renders to prevent an infinite loop.
  // render ---> tähendab useState-i parempoolse funktsiooni käivitamine ehk HTMLi uuendus
  // render ---> HTMLi uuendus

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

          <h4>Hindasid on: {hinnad.length} tk</h4>

          {hinnad.map((hind, jrknr) => 
            <div key={jrknr}>
              {hind.number} ({hind.lisaja}) 
              <button onClick={() => kustutaHind(jrknr)}>x</button> 
              <button onClick={() => lisaHind(hind)}>Lisa</button> 
            </div>)}
          <button onClick={() => uuendaHinnad([])} >Eemalda hinnad</button>
        </div>}

        <div>Kogusumma on: {hinnadKokku()} </div>
 
        {hinnad.length === 0 && 
        <div>Pole ühtegi hinda nähtaval</div>}
 
    </div>
  )
}
 
export default Hinnad
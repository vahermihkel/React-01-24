import { useState, useRef } from 'react'
import tootajadJSON from "../data/tootajad.json";
 
// App.js sees teha URL ja faili seos (URL-ks pange sama mis faili nimi)
// URL-le sattumise võimekus läbi <Link>
// Array väljakuvamine (List, Massiiv) läbi useState (.map())
// ["Urmet", "Kaido", "Liina", "Maiki"]
// Lisage sorteerimine A-Z
// Pange ka koguarv .length abil (mitu tk mul lehel on)
 
// Tühjenda nupp, mis kustub kui on .length väärtus 0
// Kui pole ühtegi töötajat, siis kuva <div>Pole ühtegi töötajad nähtavad</div>
 
function Tootajad() {
 
    const [tootajad, uuendaTootajad] = useState(tootajadJSON);
// sorteeritakse KAS sõnu või numbreid
// kui võrdlen sõnu (tähti) --> a.localeCompare(b)
// kui võrdlen numbreid     --> a - b
 
    const originaali = () => {
      uuendaTootajad (tootajadJSON);
    }
 
    const sorteeriAZ = () => {
        tootajad.sort((a,b) => a.localeCompare(b));
        uuendaTootajad(tootajad.slice());
    }
 
    const sorteeriZA = () => {
      tootajad.sort((a,b) => b.localeCompare(a));
      uuendaTootajad(tootajad.slice());
    }
 
    const sorteeriTahedKasvavalt = () => {
      tootajad.sort((a, b) => a.length - b.length);
      uuendaTootajad(tootajad.slice());
    }
 
    const sorteeriTahedKahanevalt = () => {
      tootajad.sort((a, b) => b.length - a.length);
      uuendaTootajad(tootajad.slice());
    }
 
    const sorteeriKolmasTahtAZ = () => {                 //   01234     01234           01234     01234
      tootajad.sort((a,b) => a[2].localeCompare(b[2])); //1. a: Urmet  b: Kaido   2. a: Kaido  b: Liina
      uuendaTootajad(tootajad.slice());
    }
 
    const filtreeriTgaLoppev = () => {
      const vastus = tootajad.filter(t => t.endsWith("t") === true);
      uuendaTootajad(vastus);
    }
 
    const filtreeri5Tahelised = () => {
      const vastus = tootajad.filter(tootaja => tootaja.length === 5);
      uuendaTootajad(vastus);
    }
 
    const filtreeriVahemKui5Tahte = () => {
      const vastus = tootajad.filter(element => element.length < 5);
      uuendaTootajad(vastus);
    }
 
    const filtreeri3sTahtI = () => {
      const vastus = tootajad.filter(e => e[2] === "i");
      uuendaTootajad(vastus);
    }
 
    const filtreeriLyhendigaAi = () => {
      const vastus = tootajad.filter(yksTootaja => yksTootaja.includes("ai") === true );
      uuendaTootajad(vastus);
    }
 
    // Kodus:
    // Tõsta Töötaja lisamine uude faili, täpselt nagu LisaToode.js/LisaHind.js on eraldi
    // 1. Tegema LisaTootaja.js fail
    // 2. App.js sees siduma URL ja failiga
    // 3. Tegema sinna sattumiseks lingi - katseta
    // 4. Tõstma siin oleva JavaScripti LisaTootaja.js faili (useRef import ka)
    // 5. Impordi TootajadJSON fail
    // 6. Asendan kuhu ma juurde lisan --> nüüd lisan faili
    // 7. Kustutan ära HTMLi uuenduse (muuda/uuenda algusega)
    // 8. Tõstma siin oleva HTMLi LisaTootaja.js faili
    // 9. LISAKS: Tee kontrollid (väikse tähega ei saa, tühjaks ei saa jätta, vähemalt 3 tähemärki)
    // 10. Sama asi Esindused.js osas
    // Tehtud sama asi Tooted ja Hinnad osas
    const nimiRef = useRef();
 
    const lisa = () =>{
      tootajad.push(nimiRef.current.value); // võtab inputi seest
      uuendaTootajad(tootajad.slice());
    }
  // Tootajad.js vaates kodus:
  // 1. Kustutamine (igaühele nupp)
  // 2. Igaühe lõppu lisamise võimekus
 
   const liidaTahed = () => {
      let summa = 0;
      tootajad.forEach(tootaja => summa += tootaja.length);
      return summa;
   }
 
 
  return (
    <div>
      <div>Töötajate tähtede arv: {liidaTahed()}</div>
       <button onClick={originaali}>Tagasi originaali</button>
        <br /> <br />
    {tootajad.length > 0 &&  // siin on length, et naha mitu Arrayd on e kui palju töötajaid on 
    <div>
        <button onClick={sorteeriAZ} >Sorteeri A-Z</button> 
        <button onClick={sorteeriZA} >Sorteeri Z-A</button> 
        <button onClick={sorteeriTahedKasvavalt} >Sorteeri tähed kasvavalt</button> 
        <button onClick={sorteeriTahedKahanevalt} >Sorteeri tähed kahanevalt</button> 
        <button onClick={sorteeriKolmasTahtAZ} >Sorteeri kolmas täht A-Z</button> 
        <br /><br />
        <button onClick={filtreeriTgaLoppev}>Filtreeri 't'ga lõppevad</button> 
        <button onClick={filtreeri5Tahelised}>Filtreeri täpselt 5 tähelised</button>
        <button onClick={filtreeriVahemKui5Tahte}>Filtreeri vähem kui 5 tähelised</button>
        <button onClick={filtreeri3sTahtI}>Filtreeri kellel on kolmas täht 'i'</button>
        <button onClick={filtreeriLyhendigaAi}>Filtreeri kellel on sees lühend 'ai'</button>
 
 
 
        {tootajad.map((tootaja, index) => <div key={index}>{tootaja}</div>)}
 
        <h4>Töötajaid on: {tootajad.length}</h4>
        <button onClick={ () => uuendaTootajad ([])} >Ajutiselt peida töötajad</button> 
    </div>}
 
    {/* <label>Uue töötaja nimi</label><br />
    <input ref={nimiRef}type="text" /><br />
    <button onClick={lisa}>Lisa</button><br /> */}
 
    {tootajad.length === 0 &&  <div>Ühtegi töötajat pole nähtaval</div>}
 
    </div>
 
 
  )
}
 
export default Tootajad
 
// //const [words, setWords] = useState(['spray', 'elite', 'exuberant', 'destruction', 'present']);
// const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
 
// const result = words.filter((word) => word.startsWith("e"));
 
// // setWords(result);
// console.log(result);
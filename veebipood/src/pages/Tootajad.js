import { useState } from 'react'

// Arvutitark.ee --> 10inimest 2 aastat 5 arendajat
// Tiimijuht ---> koordineerib, kliendiga suhtlus
// 5 arendajat 3 front-end 2 back-end
// 2 testijat (Quality Analyst) --> käivad ja vaatavad kas kõik töötab
// UI/UX disainer
// 1 analüütik ---> tükkideks, hinnapakkumised
 
// App.js sees teha URL ja faili seos (URL-ks pange sama mis faili nimi)
// URL-le sattumise võimekus läbi <Link>
// Array väljakuvamine (List, Massiiv) läbi useState (.map())
// ["Urmet", "Kaido", "Liina", "Maiki"]
// Lisage sorteerimine A-Z
// Pange ka koguarv .length abil (mitu tk mul lehel on)
 
// Tühjenda nupp, mis kustub kui on .length väärtus 0
// Kui pole ühtegi töötajat, siis kuva <div>Pole ühtegi töötajad nähtavad</div>

// CVkeskus, CVonline, CV.ee --> jäämäe pealne tipp
// MeetFrank, LinkedIn, ettevõtete kodulehed
// Angular, Vue, PHP, JS, CSS/HTML
 
function Tootajad() {
 
  const [tootajad, uuendaTootajad] = useState(["Urmet", "Kaido", "Liina", "Maiki", "Heidi", "Epp", "Kaire", "Anet", "Maarja"]);

// sorteeritakse KAS sõnu või numbreid
// kui võrdlen sõnu (tähti) --> a.localeCompare(b)
// kui võrdlen numbreid     --> a - b

  const originaali = () => {
    uuendaTootajad(["Urmet", "Kaido", "Liina", "Maiki", "Heidi", "Epp", "Kaire", "Anet", "Maarja"]);
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

  const sorteeriKolmasTahtAZ = () => {              //        01234       01234          01234      01234
    tootajad.sort((a,b) => a[2].localeCompare(b[2])); //1. a: Urmet    b: Kaido   2.  a: Kaido   b: Liina
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

  const filtreeri3sTahtI = () => {                     //  012       012
    const vastus = tootajad.filter(e => e[2] === "i"); // "Urmet"   "Liina"
    uuendaTootajad(vastus);
  }

  const filtreeriLyhendigaAi = () => {
    const vastus = tootajad.filter(yksTootaja => yksTootaja.includes("ai"));
    uuendaTootajad(vastus);
  }
 
  return (
    <div>
      <button onClick={originaali}>Tagasi originaali</button>
      <br /><br />
      {tootajad.length > 0 &&
        <div>
            <button onClick={sorteeriAZ} >Sorteeri A-Z</button> 
            <button onClick={sorteeriZA} >Sorteeri Z-A</button> 
            <button onClick={sorteeriTahedKasvavalt} >Sorteeri tähed kasvavalt</button> 
            <button onClick={sorteeriTahedKahanevalt} >Sorteeri tähed kahanevalt</button> 
            <button onClick={sorteeriKolmasTahtAZ} >Sorteeri kolmas täht A-Z</button> 
            <br /><br />
            {/* "Urmet", "Kaido", "Liina", "Maiki", "Heidi", "Epp", "Kaire", "Anet", "Maarja" */}
            <button onClick={filtreeriTgaLoppev}>Filtreeri 't'ga lõppevad</button>
            <button onClick={filtreeri5Tahelised}>Filtreeri täpselt 5 tähelised</button>
            <button onClick={filtreeriVahemKui5Tahte}>Filtreeri vähem kui 5 tähelised</button>
            <button onClick={filtreeri3sTahtI}>Filtreeri kellel on kolmas täht 'i'</button>
            <button onClick={filtreeriLyhendigaAi}>Filtreeri kellel on sees lühend 'ai'</button>


            {tootajad.map(tootaja => <div>{tootaja}</div>)}
            <h4>Töötajaid on: {tootajad.length}</h4>
            <button onClick={ () => uuendaTootajad ([])} >Eemalda töötajad</button> 
        </div>
      }
  
      {tootajad.length === 0 &&  <div>Ühtegi töötajat pole nähtaval</div>}
  
    </div>
 
 
  )
}
 
export default Tootajad

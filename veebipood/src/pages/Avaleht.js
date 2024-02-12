import { useState } from 'react'

// tumesinine - liigitus. JS: function, const, let. HTML: div, button, img
//             reserveeritud sõna. JS: true, false, undefined, null
// tavaline sinine - meie tehtud muutuja. useState vasak pool, useRef muutuja
// helesinine - HTML: elemendi atribuut  onClick, className, src, alt, type, disabled
//              JS: JavaScripti enda muutuja. console (console.log())  localStorage
//                      .current.value       .length
// kollane - funktsioon
// oranž/punane - jutumärkides väärtus. sõne, string
// valge - erinevad märgid, HTMLs väljakuvamine
// heleroheline - number
// roheline + suure tähega - HTMLs tag imporditud klass (failina). JS sissekirjutatud klass
// tumeroheline - kommentaar
// lilla - käsklus: if, else, import, export, return, from
// sulgudel erinevad värvused - sulg mis algab peab alati lõppema ja see värvitakse sama värvi
// {{{{{{{{{{{{[[[(([[{{}}]]))]]]}}}}}}}}}}}}

// [] -> useState muutuja + funktsioon. Hiljem: listi hoidmiseks [1,2,3,4,5]
// {} -> HTMLs tähistame JavaScripti (dünaamika - muutuv seisund)
//       JS koodiblokk: funktsiooni koodiblokk, if/else koodiblokk. Hiljem: objekti hoidmiseks {nimi: "Coca", hind: 5, pilt: ""}
// () -> funktsiooni tähistus    useState()   const nulli = () => {}    onClick={() => uuenda()}
// tavaline sulg ja kollane käib kokku
// ;  -> rea lõpu tähistus
// =  -> väärtuse andmine
// === -> kontrollimine kas vasak ja parem pool on võrdsed
// ==  -> seda me ei tee.
//     ilma tüübi kontrollita kas vasak ja parem pool ühtivad (seda React ei luba -> viskab warningu)
// !   -> kui on true, siis tee false-ks
// !== -> kontrollime, et vasak ja parem pool ei ühti
// ? :  -> kui on enne küsimärki tõde, siis võta küsimärgi ja kooloni vaheline väärtus, 
//          kui ei ole tõde, siis kooloni järgne väärtus
//              KÜSIMUS ? VÄÄRTUS : VÄÄRTUS
// &&  -> kui vasakul pool on tõde, siis näita parempoolset
// ||  -> kui vasakul pool on tühjus, siis võta parempoolne
// >=   <=   >   <   ===   võrdlemiseks
// nooled eksisteerivad: const nulli = () => {}      onClick={() => nulli()}
// jutumärkidena võib kasutada nii ""   ''
//    useState("Uuenda kogust!");           useState('Uuenda kogust!');
// import { useState } from "react"    import { useState } from 'react'


function Avaleht() {
  const [kogus, uuendaKogus] = useState(0); // kogus, summa, kogusumma, hind
  const [sonum, uuendaSonum] = useState("Uuenda kogust!"); // postiindeks, isikukood, telefoninumber, nime, e-mail
  const [laigitud, uuendaLaigitud] = useState(false); // makstud, sisselogitud, tellitud, registreerunud, täisealine
  // const date = new Date();

  function nulli() {
    console.log("Nulli funktsioon käiviuts");
    uuendaKogus(0);
    uuendaSonum("Nullisid koguse!");
  }

  // const nulli = () => {

  // }

  // Kui kutsun välja useState funktsiooni onClick kaudu (uuendaXX, muudaXX), 
  //          siis pean saatma midagi sulgude sees kaasa --> sellest saab muutuja uus väärtus

  // Kui kutsun funktsiooni välja, siis midagi kaasa saatma ei pea
  //    siis võin {() => nulli()} teha hoopis lihtsalt {nulli}

  function vahenda() {
    uuendaKogus( kogus - 1 );
    uuendaSonum("Vähendasid kogust!");
  }

  function suurenda() {
    uuendaKogus( kogus + 1 );
    uuendaSonum("Suurendasid kogust!");
  }

  // !laigitud --> keerab kahendväärtuse (boolean) vastupidi
  // laigitud väärtus enne false saab väärtuseks true
  // laigitud väärtus enne true saab väärtuseks false

  return (
    <div>
      <div>{sonum}</div>
      <br />

      {laigitud === true && <img src="/laigitud.svg" alt="" />}
      {laigitud === false && <img src="/mittelaigitud.svg" alt="" />}
      <button onClick={() => uuendaLaigitud(!laigitud)}>Muuda like'i</button>

      <br /><br />
      {kogus > 0 && <button onClick={nulli}>Tagasi nulli</button>}
      <button disabled={kogus === 0} onClick={vahenda}>-</button>  
      <span>{kogus}</span>
      <button onClick={suurenda}>+</button>  
    </div>
  )
}

export default Avaleht
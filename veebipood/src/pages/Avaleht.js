import { useState } from 'react'

function Avaleht() {
  const [kogus, uuendaKogus] = useState(0); // kogus, summa, kogusumma, hind
  const [sonum, uuendaSonum] = useState("Uuenda kogust!"); // postiindeks, isikukood, telefoninumber, nime, e-mail
  const [laigitud, uuendaLaigitud] = useState(false); // makstud, sisselogitud, tellitud, registreerunud, täisealine

  function nulli() {
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
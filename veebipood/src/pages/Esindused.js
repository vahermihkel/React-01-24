import { useState } from 'react'

function Esindused() {
  // vasakul pool on muutuja, mille sees on muutuv väärtus
  //    see võib lõpmatuseni muutuda
  // paremal pool on muutja, tema abil muudan muutujat
  const [linn, uuendaLinn] = useState("Pärnu");

  const [keskused, uuendaKeskused] = useState(["Ülemiste","Viimsi","Rocca al Mare","Magistrali","Vesse","Kristiine","Järveotsa"]);

  const sorteeriAZ = () => {
    keskused.sort();
    uuendaKeskused(keskused.slice());
  }

  return (
    <div>
      <div>Esindused</div>
      <span className={linn === "Tallinn" ? "linn-aktiivne" : "linn"} onClick={() => uuendaLinn("Tallinn")}>Tallinn(7)</span>
      <span className={linn === "Tartu" ? "linn-aktiivne" : "linn"} onClick={() => uuendaLinn("Tartu")}>Tartu(2)</span>
      <span className={linn === "Narva" ? "linn-aktiivne" : "linn"} onClick={() => uuendaLinn("Narva")}>Narva(1)</span>
      <span className={linn === "Pärnu" ? "linn-aktiivne" : "linn"} onClick={() => uuendaLinn("Pärnu")}> Pärnu(1)</span>
      <br /> <br />
      <div>Aktiivne linn: {linn}</div>

        {linn === "Tallinn" && 
        <div>
          <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
          {keskused.map(keskus => <div>{keskus}</div>)}
          {/* 
          KOJU:
          Kustutamise võimekus
          Sama lõppu lisamise võimekus
          Läbi inputi enda kirjutatu lõppu lisamise võimekus
          Saab teha ainult Tallinnale, sest seal on .map() 
          */}
        </div>}

{/* Hard-coded allpool */}

        {linn === "Tartu" && 
        <div>
          <div>Raatuse</div>
          <div>Lõunakeskus</div>
        </div>}

        { linn === "Narva" && <div>Fama</div>}

        { linn === "Pärnu" && <div>Port Artur 2</div>}
    </div>
  )
}

export default Esindused
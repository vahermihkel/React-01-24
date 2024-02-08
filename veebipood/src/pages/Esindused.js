import { useState } from 'react'

function Esindused() {
  // vasakul pool on muutuja, mille sees on muutuv väärtus
  //    see võib lõpmatuseni muutuda
  // paremal pool on muutja, tema abil muudan muutujat
  const [linn, uuendaLinn] = useState("Pärnu");

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
          <div>Ülemiste</div>
          <div>Viimsi</div>
          <div>Rocca al Mare</div>
          <div>Magistrali</div>
          <div>Vesse</div>
          <div>Kristiine</div>
          <div>Järveotsa</div>
        </div>}

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
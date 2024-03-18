import React, { useRef } from 'react'
import tootedFailist from "../data/tooted.json";
import { useParams } from 'react-router-dom';

function MuudaToode() {
  const { index } = useParams();
  const leitud = tootedFailist[index];
  const nimiRef = useRef();
  const hindRef = useRef();
  const piltRef = useRef();
  const aktiivneRef = useRef();

  if (leitud === undefined) {
    return <div>Toodet ei leitud</div>
  }

//   const cars = ["Volvo", "Jeep", "Mercedes"];
//   cars[0] = "Ford"; // <----
//    ["Ford", "Jeep", "Mercedes"]
  const muuda = () => {
    tootedFailist[index] = {
      "nimi": nimiRef.current.value, 
      "hind": Number(hindRef.current.value), 
      "aktiivne": aktiivneRef.current.checked, 
      "pilt": piltRef.current.value
    }
  }

  return (
    <div>
      <label>Toote nimi</label> <br />
      <input ref={nimiRef} defaultValue={leitud.nimi} type="text" /> <br />
      <label>Toote hind</label> <br />
      <input ref={hindRef} defaultValue={leitud.hind} type="number" /> <br />
      <label>Toote pilt</label> <br />
      <input ref={piltRef} defaultValue={leitud.pilt} type="text" /> <br />
      <label>Toote aktiivne</label> <br />
      <input ref={aktiivneRef} defaultChecked={leitud.aktiivne} type="checkbox" /> <br />
      <button onClick={muuda}>Muuda</button> <br />
    </div>
  )
}

export default MuudaToode
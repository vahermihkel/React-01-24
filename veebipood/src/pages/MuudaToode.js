import React, { useRef } from 'react'
import tootedFailist from "../data/tooted.json";
import { useParams } from 'react-router-dom';

function MuudaToode() {
  const { index } = useParams();
  const leitud = tootedFailist[index];
  const nimiRef = useRef();

  if (leitud === undefined) {
    return <div>Toodet ei leitud</div>
  }

//   const cars = ["Volvo", "Jeep", "Mercedes"];
//   cars[0] = "Ford"; // <----
//    ["Ford", "Jeep", "Mercedes"]
  const muuda = () => {
    tootedFailist[index] = nimiRef.current.value;
  }

  return (
    <div>
      <label>Toote nimi</label> <br />
      <input ref={nimiRef} defaultValue={leitud} type="text" /> <br />
      <button onClick={muuda}>Muuda</button> <br />
    </div>
  )
}

export default MuudaToode
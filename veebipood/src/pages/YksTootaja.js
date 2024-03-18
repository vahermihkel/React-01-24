import React from 'react'
import tootajadFailist from "../data/tootajad.json";
import { useParams } from 'react-router-dom';

function YksTootaja() {
  const { index } = useParams();
  const tootaja = tootajadFailist[index];

  if (tootaja === undefined) {
    return <div>töötajat ei leitud</div>
  }

  return (
    <div>
      <h2>{tootaja}</h2>
    </div>
  )
}

export default YksTootaja
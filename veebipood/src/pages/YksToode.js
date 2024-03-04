import React from 'react'
import tootedFailist from "../data/tooted.json";
import { useParams } from 'react-router-dom';

// const cars = ["Saab", "Volvo", "BMW"]; nagu fail
// let x = cars[0];    nagu    const leitud =

function YksToode() {
  const { index } = useParams();
  const leitud = tootedFailist[index];

  // null -> tühjus    localStorage.getItem  --> ""  teab tüüpi
  // undefined -> tühjus   mida array/list tagastab kui ei leitud --> ei tea tüüpi
  if (leitud === undefined) {
    return <div>Toodet ei leitud</div>
  }

  return (
    <div>
      <h2>{leitud}</h2>
      <hr />
      <span>1.5€</span>
    </div>
  )
}

export default YksToode
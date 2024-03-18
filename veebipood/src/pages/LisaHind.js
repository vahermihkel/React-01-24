import { useRef } from 'react'
import hinnadFailist from "../data/hinnad.json";

function LisaHind() {
  const hindRef = useRef();

  const lisaInputistHind = () => {
    // kontrollid LisaToode.js lehelt
    // või kontrollid Seaded.js lehelt

    // siia lisamise sisse
    if (hindRef.current.value.startsWith("0")) {
        // veateate näiteks toast.error() abil
        return;
    }
    //                Boolean("false") --> false
                          // "500" --> 500
    hinnadFailist.push({
      "number": Number(hindRef.current.value),
      "lisaja": "Mihkel"
    });
    hindRef.current.value = "";
  }

//   kontroll võib minna siia eraldi -> onChange paneb kontrolli käima

  return (
    <div>
        <label>Hind</label>
        <input ref={hindRef} type="text" />
        <button onClick={lisaInputistHind}>Lisa</button>
    </div>
  )
}

export default LisaHind
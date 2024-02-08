import { useRef, useState } from 'react'

function LisaToode() {
  const [sonum, muudaSonum] = useState("");
  const inputiLuger = useRef(); // inputi seest kasutaja sisestuse lugemiseks

  // function lisa() {

  // }

  const lisa = () => {
    //muudaKogus(kogus + 1)
    // hind === 20 ? "" : ""
    if (inputiLuger.current.value === "") {
      muudaSonum("Tühja nimetusega ei saa toodet lisada!");
    } else {
      muudaSonum("Toode lisatud: " + inputiLuger.current.value);
    }
  }

  return (
    <div>
      <h1>{sonum}</h1>
      {/* <form action="/action_page.php">  kui tehakse ikkagi Reacti tutorialis <form> --> 
      siis tehakse funktsioonis event.preventDefault */}
        
        <label>Toote nimetus:</label>
        <input type="text" ref={inputiLuger} /><br></br>

        <label htmlFor="lname">Last name:</label>
        <input type="text" id="lname" name="lname"/><br></br>
        {/* <input type="submit" value="Submit"/> */}

        <button onClick={lisa}>Sisesta</button>

      {/* </form> */}
    </div>
  )
}

  export default LisaToode
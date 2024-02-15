import { useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

function LisaToode() {
  const [sonum, muudaSonum] = useState("");
  const inputiLuger = useRef(); // inputi seest kasutaja sisestuse lugemiseks

  // function lisa() {

  // }

  const lisa = () => {
    //muudaKogus(kogus + 1)
    // hind === 20 ? "" : ""
    if (inputiLuger.current.value === "") {
      // muudaSonum("Tühja nimetusega ei saa toodet lisada!");
      toast.error("Tühja nimetusega ei saa toodet lisada");
    } else {
      // muudaSonum("Toode lisatud: " + inputiLuger.current.value);
      toast.success("Toode lisatud: " + inputiLuger.current.value);
    }
  }

  const kontrolli = () => {
    // inputiLuger.current.value.charAt(0).toLowerCase() === inputiLuger.current.value.charAt(0)
    // inputiLuger.current.value[0].toLowerCase() === inputiLuger.current.value[0]
    if (inputiLuger.current.value === "") {
      return;
    }
    if (inputiLuger.current.value[0].toLowerCase() === inputiLuger.current.value[0]) {
      // toast.error("Väikese algustähega ei saa toodet lisada");
      muudaSonum("Väikese algustähega ei saa toodet lisada");
    } else {
      muudaSonum("");
    }
  }

  return (
    <div>
      <h1 style={{color: "red"}}>{sonum}</h1>
      {/* <form action="/action_page.php">  kui tehakse ikkagi Reacti tutorialis <form> --> 
      siis tehakse funktsioonis event.preventDefault */}
        
        <label>Toote nimetus:</label>
        <input onChange={kontrolli} type="text" ref={inputiLuger} /><br></br>

        <label htmlFor="lname">Last name:</label>
        <input type="text" id="lname" name="lname"/><br></br>
        {/* <input type="submit" value="Submit"/> */}

        <button disabled={sonum !== ""} onClick={lisa}>Sisesta</button>

      {/* </form> */}

      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        theme="dark"
      />
    </div>
  )
}

  export default LisaToode
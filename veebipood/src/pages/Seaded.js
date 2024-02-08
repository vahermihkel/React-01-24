import React, { useRef, useState } from 'react'

// ee, en, ru

function Seaded() {
  const [keel, muudaKeel] = useState("ee");
  const emailRef = useRef();
  const aadressRef = useRef();
  const telefonRef = useRef();

  const email = () => {

  }

  const aadress = () => {
    
  }

  const telefon = () => {
    
  }

  return (
    <div>
        <label>Email</label> <br />
        <input type="text" ref={emailRef} /> <br />
        <button onClick={email}>Sisesta</button> <br />

        <label>Aadress</label> <br />
        <input type="text" ref={aadressRef} /> <br />
        <button onClick={aadress}>Sisesta</button> <br />

        <label>Telefon</label> <br />
        <input type="text" ref={telefonRef} /> <br />
        <button onClick={telefon}>Sisesta</button> <br />

        <br /><br />
        {keel === "ee" && <div>Leht on eesti keelne</div>}
        {keel === "ru" && <div>Cтpaницa на русском языке</div>}
        {keel === "en" && <div>The page is in Estonian</div>}

        <button onClick={() => muudaKeel("ee")}>Est</button>
        <button onClick={() => muudaKeel("en")}>Eng</button>
        <button onClick={() => muudaKeel("ru")}>Rus</button>
    </div>
  )
}

export default Seaded
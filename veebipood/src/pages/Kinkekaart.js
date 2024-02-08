import React, { useState } from 'react'

function Kinkekaart() {
  const [aktiivne, muudaAktiivne] = useState(20);
  const [kogus, muudaKogus] = useState(1);

  // ? :   <--- ternary operator
  // KÜSIMUS ? KUI_ON_ÕIGE : KUI_EI_OLE_ÕIGE
  // aktiivne === 20 ? "summa-aktiivne" : "summa"
  //                    .summa-aktiivne    .summa
  // Kumb tuleb, oleneb kas on õige või väär
  // Kumbki alati tuleb
  return (
    <div className="leht">

      <button className={aktiivne === 20 ? "summa-aktiivne" : "summa"} onClick={() => muudaAktiivne(20)}>20 €</button>
      <button className={aktiivne === 50 ? "summa-aktiivne" : "summa"} onClick={() => muudaAktiivne(50)}>50 €</button>
      <button className={aktiivne === 100 ? "summa-aktiivne" : "summa"} onClick={() => muudaAktiivne(100)}>100 €</button>
      <button> <input type="text" /> </button>

      <img className="kingitus" src="/gift.png" alt="" />

      <button disabled={kogus === 1} onClick={() => muudaKogus( kogus - 1 )} >-</button>
      <span>{kogus}</span>
      <button onClick={() => muudaKogus( kogus + 1 )}>+</button>

    </div>
  )
}

export default Kinkekaart
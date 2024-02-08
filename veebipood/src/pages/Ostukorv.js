import React from 'react'
import { Link } from 'react-router-dom'

function Ostukorv() {
  return (
    <div>
      <div>Ostukorv on hetkel tühi.</div>
      <Link to="/avaleht">Avalehele</Link>
    </div>
  )
}

export default Ostukorv
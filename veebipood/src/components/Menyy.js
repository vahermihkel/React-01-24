import React from 'react'
import { Link } from 'react-router-dom'

function Menyy() {
  return (
    <div>
          <Link  className="navlink" to="/kontakteeru">
            <span>Kontakteeru meiega</span>
          </Link>
          <Link  className="navlink" to="/esindused">
            <img src="/esindus.svg" alt="" />
            <span>Esindused</span>
          </Link>
          <Link className="navlink" to="/arikliendile">
          <img src="/ari.svg" alt="" />
            <span>Ärikliendile</span>
          </Link>
          <Link className="navlink" to="/osta-kinkekaart">
          <img src="/kinkekaart.svg" alt="" />
            <span>Kinkekaart</span>
          </Link>
          <Link className="navlink" to="/ostukorv">
          <img src="/shopping.svg" alt="" />
            <span>Ostukorv</span>
          </Link>
          <Link className="navlink" to="/seaded">
            <span>Seaded</span>
          </Link>
          <Link className="navlink" to="/hinnad">
            <span>Hinnad</span>
          </Link>
          <Link className="navlink" to="/tooted">
            <span>Tooted</span>
          </Link>
          <Link className="navlink" to="/tootajad">
            <span>Töötajad</span>
          </Link>
      
          <br /><br />
          
          <Link className="navlink" to="/lisa-toode">
            <span>Lisa toode</span>
          </Link>
          <Link className="navlink" to="/halda">
            <span>Halda tooteid</span>
          </Link>
          <Link className="navlink" to="/lisa-hind">
            <span>Lisa hind</span>
          </Link>
          <Link className="navlink" to="/lisa-tootaja">
            <span>Lisa töötaja</span>
          </Link>
          <Link className="navlink" to="/lisa-esindus">
            <span>Lisa esindus</span>
          </Link>
          <Link className="navlink" to="/halda-tootajad">
            <span>Halda töötajaid</span>
          </Link>
          <Link className="navlink" to="/halda-esindused">
            <span>Halda esindusi</span>
          </Link>
          <Link className="navlink" to="/halda-hindu">
            <span>Halda hindu</span>
          </Link>
    </div>
  )
}

export default Menyy
import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap';

function Supplier() {
  const [products, setProducts] = useState([]);

  // useEffect -> lehele tulles tehakse koheselt mõnda teise rakendusse
  //            andmete päring ehk API päring
  useEffect(() => {
    fetch('https://fakestoreapi.com/products') // kust lehelt andmeid võtame -> seal peab olema JSON kujul
      .then(response => response.json()) // KOGU tagastus ehk andmed koos metaandmetega (staatuskood)
      .then(json => setProducts(json)) // Siia tuleb see, mida päriselt lehel näen (JSON kujul)
  }, []);

  if (products.length === 0) {
    return <div>
      <Spinner />
      Loading...
    </div>
  }

  return (
    <div>{products.map((product, index )=> 
      <div key={product.id}>
        <img style={{width: "100px"}} src={product.image} alt="" />
        <div>Title: {product.title}</div>
        <div>Price: {product.price}€</div>
        <div>Description: {product.description}</div>
        <div>Category: {product.category}</div>
        <div>Rating: </div>
        <div>Rate: {product.rating.rate }</div>
        <div>Count: {product.rating.count }</div>

      </div>)}
    </div>
  )
}

export default Supplier
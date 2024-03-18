import React from 'react'
import { useState } from 'react';
import productsFromFile from "../../data/products.json";
import { Link } from 'react-router-dom'; 

function MaintainProducts() {
  const [products, updateProducts] = useState(productsFromFile);

  const deleteProduct= (index) => {
    productsFromFile.splice(index,1)
    updateProducts(productsFromFile.slice())
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

        <Link to={"/admin/edit-product/" + index}>
          <button>Change</button>
        </Link>

        <button onClick={() => deleteProduct(index)}>Delete</button>
           

      </div>)}
    </div>
  )
}

export default MaintainProducts
import React from 'react'
import { useParams } from 'react-router-dom';
import productsFromFile from "../../data/products.json";

function SingleProduct() {
  const{ index } = useParams();
  const product = productsFromFile[index];

  if (product === undefined) {
    return <div>Product not found</div>
  }
  
  return (
    <div>
        <h3>{product.title}</h3>
        <h4>Price: {product.price}€</h4>
        <div>Description: {product.description}</div>
        <br />
        <div>Category: {product.category}</div>
        <br />
        <div>Rating:</div>
        <div>Rate: {product.rating.rate }</div>
        <div>Count: {product.rating.count }</div>
        <img style={{width: "100px"}} src={product.image} alt="" />
    </div>
  )
}

export default SingleProduct
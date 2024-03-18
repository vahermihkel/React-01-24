import React from 'react'
import porductsFromFile from "../../data/products.json"
import { useRef, useState } from "react"

function AddProduct() {
  const[message, changeMessage] = useState ("");

  const idRef = useRef();
  const imgRef = useRef();
  const titleRef = useRef();
  const priceRef= useRef();
  const descriptionRef = useRef();
  const categoryRef= useRef();
  const rateRef = useRef();
  const countRef = useRef();

  const add = () => {
   porductsFromFile.push({
      "id": 1,
        "title": titleRef.current.value, 
        "price": Number(priceRef.current.value),
        "description": descriptionRef.current.value,
        "category": categoryRef.current.value,
        "image": imgRef.current.value,
        "rating": {
          "rate": Number(rateRef.current.value),
          "count": Number(countRef.current.value)}     
    })

    changeMessage("Product added: " + titleRef.current.value);  
  }
  
  return (
    <div>
      <h1>{message}</h1>
       <div>
        <label>Product id:</label> <br />
        <input ref={idRef}  type="text" /> <br />
        <label>Product title:</label> <br />
        <input ref={titleRef}  type="text" /> <br />
        <label>Product price:</label> <br />
        <input ref={priceRef} type="number" /> <br />
        <label>Product description:</label> <br />
        <input ref={descriptionRef} type="text" /> <br />
        <label>Product category:</label> <br />
        <input ref={categoryRef}  type="text" /> <br />
        <label>Product image:</label> <br />
        <input ref={imgRef} type="text" /> <br />
        <label>Product rate:</label> <br />
        <input ref={rateRef}  type="number" /> <br />
        <label>Product rating count:</label> <br />
        <input ref={countRef}  type="number" /> <br />
        <button onClick={add}>Add Products</button> <br />
      </div>
    </div>
  )
}

export default AddProduct
import React, { useRef } from 'react'
import porductsFromFile from "../../data/products.json";
import { useParams } from 'react-router-dom';

function EditProduct() {
  const{ index } = useParams();
  const product = porductsFromFile[index];

  const idRef = useRef();
  const titleRef = useRef();
  const imgRef = useRef();
  const priceRef= useRef();
  const descriptionRef = useRef();
  const categoryRef= useRef();
  const rateRef = useRef();
  const countRef = useRef();

  if (product === undefined) {
    return <div>Product not found</div>
  }

  const change = () => {
    porductsFromFile[index] = {
      "id": 1,
        "title": titleRef.current.value, 
        "image": imgRef.current.value,
        "price": Number(priceRef.current.value),
        "description": descriptionRef.current.value,
        "category": categoryRef.current.value,
        "rating": {
          "rate": Number(rateRef.current.value),
          "count": Number(countRef.current.value)}
    };
  }

  return (
    <div>
      <label Product id ></label> <br />
      <input ref={idRef} defaultValue={product.id} type="text" /> <br />
      <label Product title ></label> <br />
      <input ref={titleRef} defaultValue={product.title} type="text" /> <br />
      <label Product image></label> <br />
      <input ref={imgRef} defaultValue={product.image} type="text" /> <br />
      <label Product price></label> <br />
      <input ref={priceRef} defaultValue={product.price}type="number" /> <br />
      <label Product description></label> <br />
      <input ref={descriptionRef} defaultValue={product.description} type="text" /> <br />
      <label Product category></label> <br />
      <input ref={categoryRef} defaultValue={product.category} type="text" /> <br />
      <label Product rate></label> <br />
      <input ref={rateRef} defaultValue={product.rating.rate } type="number" /> <br />
      <label Product rating count></label> <br />
      <input ref={countRef} defaultValue={product.rating.count } type="number" /> <br />
      <button onClick={change}>Change</button> <br />
    </div>
  )
}

export default EditProduct
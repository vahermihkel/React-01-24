import React, { useEffect, useState } from 'react'
// import cartFromFile from "../../data/cart.json"

function Cart() {                 // 1. ja 2. samm
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);
  const [parcelMachines, setParcelMachines] = useState([]);

  useEffect(() => {
    fetch("https://www.omniva.ee/locations.json")
      .then(res => res.json())
      .then(body => setParcelMachines(body));
  }, []);

  const deleteFromCart =(index) => {
    cart.splice(index, 1); // 3. samm
    setCart(cart.slice()); // uuendab HTMLi
    localStorage.setItem("cart", JSON.stringify(cart)); // 4. ja 5. salvestab localStorage-sse
   }

   const decreaseQuantity = (index) => {
    cart[index].kogus = cart[index].kogus - 1; // 3. samm
    if (cart[index].kogus === 0) {
      cart.splice(index, 1); // 3. samm
    }
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart)); // 4. ja 5. salvestab localStorage-sse
   }

   const increaseQuantity = (index) => {
    cart[index].kogus = cart[index].kogus + 1; // 3. samm
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart)); // 4. ja 5. salvestab localStorage-sse
   }
   
  //  const addToCart= (newProduct) => {
  //    cart.push(newProduct);
  //    updateCart(cart.slice());
  //  }
   
   const calculateTotal = () => {
     let amount = 0;
     cart.forEach(product => amount = amount + product.toode.price * product.kogus);
     return amount;
   }

  return (
    <div>
        {cart.length === 0 && <div>Your shopping cart is currently empty</div>}
        {cart.length === 0 && <img src="/empty.svg" alt="" />}
        <div>Total cost: {calculateTotal()}€</div>
  
      {cart.length > 0 &&
      <div>
        <div>You have {cart.length} items in your cart</div>
        <button onClick={() => setCart([])}>Empty the shopping cart</button>
      </div>}

        {cart.map((product, index) => 
          <div key={index}>
            {/* {index}. */}
            <img style={{width: "50px"}} src={product.toode.image} alt="" />
            {product.toode.title} - {product.toode.price} €
            {/* 
            kuvage KODUS rating välja
            pange kogusumma kõrvale toodete keskmine reiting:
            reitingute kogusumma jagatud koguarv
            ärge arvestage koguseid. pluus 6tk, kell 3tk.
            */}
            <button onClick={() => decreaseQuantity(index)}>-</button>
            <div>{product.kogus} tk</div>
            <button onClick={() => increaseQuantity(index)}>+</button>
            <div>{product.toode.price * product.kogus} €</div>
            <button onClick={() => deleteFromCart(index)}>Delete</button> 
            {/* <button onClick={() => addToCart(product)}>Add one to the end</button>  */}
          </div> )}


          <select>
            {parcelMachines.map(pm => <option>{pm.NAME}</option>)} 
          </select>

    </div>
  )
}

export default Cart
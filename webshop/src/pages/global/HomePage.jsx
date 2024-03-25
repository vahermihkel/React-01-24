import React, { useState } from 'react'
import productsFromFile from "../../data/products.json";
// import cartFromFile from "../../data/cart.json";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import "../../css/HomePage.css";

function HomePage() {
  // Reacti hookid:
  // 1. Peab olema imporditud
  // 2. Peab algama use- eesliidesega
  // 3. Ei tohi olla funktsiooni sees kus ma teda kasutusele võtan
  // 4. Ei tohi olla tingimuslik (ei tohi teha enne teda early return)
  // 5. Alati sulud lõpus kui teda kasutusele võtan
    const { t } = useTranslation(); // i18next mooduli enda tehtud hook
    const [products, setProducts] = useState(productsFromFile); // reacti enda tehtud hook

    const addCart = (product) => {
      // "["Tesla", "Nobe", "BMW"]" -> ["Tesla", "Nobe", "BMW"]
      // "m@m.com" / "Dark_mode" / "Est" 
      const cartLS = JSON.parse(localStorage.getItem("cart")) || [];

      const index = cartLS.findIndex(cp => cp.toode.id === product.id);
      if (index >= 0) { // !== -1   kui ei leitud array seest, siis index on -1
        // kinkekaartidel: kogus = kogus + 1
        cartLS[index].kogus = cartLS[index].kogus + 1;
        // cartFromFile[index].kogus += 1; iseendale liidetakse 1
        // cartFromFile[index].kogus++; kasutatakse tsüklites
      } else {
        cartLS.push({"kogus": 1, "toode": product});
      }
      localStorage.setItem("cart", JSON.stringify(cartLS));

      // parem klõps -> inspect -> application
      // Array localStorage-sse salvestamiseks:
      // 1. Võtta localStorage-st: localStorage.getItem()    et saada kätte vana seis
      // 2. Võtta jutumärgid maha: JSON.parse()       localStorage annab jutumärkides, aga 
      //      meie tahame .findIndex() ja .push() teha - seda saab teha array'del
      // 3. Muudame/ lisame array'le: .push()    
      // 4. Lisame jutumärgid tagasi: JSON.stringify()
      // 5. Lisame localStorage-sse tagasi:   localStorage.setItem()   et uueneks brauseris
    }

  return (
    <div>
        <div className="products">
          {products.map((product, index) =>
            <div key={product.id}>
                <img style={{width: "100px"}} src={product.image} alt="" />
                <div>{product.title}</div>
                <div>{product.price}€</div>

              <Link to={"/product/" + index}>
                <button>{t("view-details")}</button>
              </Link>
                <button onClick={() => addCart(product)}>{t("add-to-cart")}</button>
            </div>
            )}
        </div>
    </div>
  )
}
export default HomePage
import React, { useState, useEffect } from "react";
import axios from "axios";

function Store({ onAdd, cartItems }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const request = await axios.get("https://fakestoreapi.com/products");
      setProducts(request.data);
    };
    getData();
  }, []);
  const onlyIdes = []; //массив idшек продуктов которые в корзине
  cartItems.forEach((elem) => onlyIdes.push(elem.id)); //запушить id каждого продукта в onlyIdes

  return (
    <div className="store">
      {!products.length ? (
        <div style={{ color: "grey" }}>
          <h1>Loading...</h1>
        </div>
      ) : (
        products.map((item) => {
          return (
            <div key={item.id} className="item">
              <div
                className={
                  onlyIdes.some((b) => b === item.id) //если хоть один элемент из массива совпадает с item.id тогда ...
                    ? "exist_in_cart active"
                    : "exist_in_cart"
                }
              >
                &#10004;
              </div>
              <img src={item.image} className="item_img" />
              <div className="item_title">{item.title}</div>
              <div className="item_price">${item.price}</div>
              {/* <div className="item_price">id: {item.id}</div> */}
              <button onClick={() => onAdd(item)} className="button">
                add to cart
              </button>
            </div>
          );
        })
      )}
    </div>
  );
}

export default Store;

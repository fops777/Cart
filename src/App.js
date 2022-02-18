import React from "react";
import "./App.css";
import Store from "./components/Store";
import Header from "./components/Header";

function App() {
  const [cartItems, setCartItems] = React.useState([]);

  const onAdd = (product) => {
    const exist = cartItems.find((item) => {
      // console.log(item.id);
      return item.id === product.id;
    });
    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...exist, qty: exist.qty + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { title: product.title, image: product.image, price: product.price, qty: 1, id: product.id }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((item) => {return item.id === product.id});
    if(exist.qty === 1) {
      setCartItems(cartItems.filter(item => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...exist, qty: exist.qty - 1 } : item
        )
      );
    }  
  }

  return (
    <div className="App">
      <header className="App-header">
        <Header cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} setCartItems={setCartItems}/>
        <Store onAdd={onAdd} cartItems={cartItems}/>
      </header>
    </div>
  );
}

export default App;

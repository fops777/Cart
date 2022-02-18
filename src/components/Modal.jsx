import React from "react";

function Modal({ cartItems, active, setActive, onAdd, onRemove, setCartItems }) {
  const price = cartItems.reduce((a, b) => a + b.price * b.qty, 0);
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div className="modal_content" onClick={(e) => e.stopPropagation()}>
        {cartItems.length === 0 ? (
          <div className="empty_img">Cart is empty...</div>
        ) : (
          <div>
            {cartItems.length === 0 ? (
              ""
            ) : (
              <div className="total_price">
                <div>
                  Total price: <span>${price.toFixed(2)}</span>
                </div>
                <div className="clear_cart" onClick={() => setCartItems([])}>clear&#10008;</div>
              </div>
            )}
            {cartItems.map((item, index) => (
              <div key={index} className="product_in_cart">
                <div className="cart_left_side">
                  <div onClick={() => onRemove(item)}>{item.title}</div>
                  <div className="cart_price">${item.price}</div>
                    {/* id: {item.id} */}
                  <div className="left_cart_btns_flex">
                    <button onClick={() => onRemove(item)}>-</button>
                    {item.qty}шт.
                    <button className="button_+" onClick={() => onAdd(item)}>
                      +
                    </button>
                  </div>
                </div>
                <img src={item.image} className="image" />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Modal;

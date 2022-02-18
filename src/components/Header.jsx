import React from "react";
import Modal from "./Modal";

function Header({ cartItems, onAdd, onRemove, setCartItems }) {
  const [modalActive, setModalActive] = React.useState(false);
  return (
    <div className="header">
      <div className="header_flex">
        <div className="logo">Logo</div>
        <div className="cart_icon" onClick={() => setModalActive(!modalActive)}>
          &#128386;<div className={cartItems.length ? "length_of_cartItems" : 'length_of_cartItems_0'}>{cartItems.length}</div>
        </div>
        {modalActive ? (
          <Modal
            cartItems={cartItems}
            active={modalActive}
            setActive={setModalActive}
            onAdd={onAdd}
            onRemove={onRemove}
            setCartItems={setCartItems}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Header;

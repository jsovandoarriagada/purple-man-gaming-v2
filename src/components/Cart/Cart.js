import { useContext } from "react";
import { CartContext } from "../../context/CartProvider";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const { cart, removeItem, clear, fullPrice, discount, total } = useContext(CartContext);
  const previous = useNavigate();

  return (
    <div className="cart">
      <div className="cart__container">
        <div className="cart__items">
          {cart.length > 0 ? (
            cart.map((item) => (
              <div className="item" key={item.id}>
                <div className="item__game">
                  <img src={item.productImage} alt={item.name} />
                  <div className="item__platform">
                    <img className="item__platform--logo" src={item.platformLogo} alt={item.platform} />
                    <p>{item.platform}</p>
                  </div>
                </div>
                <div className="item__quantity">
                  <p className="item__quantity--display">x{item.quantity}</p>
                </div>
                <div className="item__cost">
                  <div className="item__discount">-{item.discount}</div>
                  <div className="item__price">
                    <p className="item__price--base">${item.basePrice} USD</p>
                    <p className="item__price--final">${item.finalPrice} USD</p>
                  </div>
                  <i className="fa-solid fa-trash" onClick={removeItem}></i>
                </div>
              </div>
            ))
          ) : (
            <div className="cart__empty">
              <div className="previous" onClick={() => previous(-1)}>
                <i className="fa-solid fa-backward"></i>
                <p>PREVIOUS</p>
              </div>
              <p className="empty">YOUR CART IS EMPTY</p>
            </div>
          )}
        </div>
        <div className="cart__summary">
          <div className="cart__summary--title">
            <p>CART SUMMARY</p>
          </div>
          <div className="summary">
            <div className="summary__full">
              <p className="summary__full--title">FULL PRICE:</p>
              <p className="summary__full--value">${fullPrice} USD</p>
            </div>
            <div className="summary__discount">
              <p className="summary__discount--title">YOU SAVE:</p>
              <p className="summary__discount--value">${discount} USD</p>
            </div>
            <hr />
            <div className="summary__total">
              <p className="summary__total--title">TOTAL:</p>
              <p className="summary__total--value">${total} USD</p>
            </div>
            <div className="summary__buttons">
              <button className="summary__proceed">PROCEED</button>
              <button className="summary__clear" onClick={clear}>
                CLEAR
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

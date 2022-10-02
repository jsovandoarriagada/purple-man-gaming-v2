import { NavLink } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../../context/CartProvider";
import "./CartWidget.css";

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity;
    });
    setCartTotal(total);
  }, [cart]);

  return (
    <NavLink to={"/cart"} className="cartwidget">
      <i className="fa-solid fa-cart-shopping"></i>
      {cart.length > 0 ? <p className="cartwidget__count">{cartTotal}</p> : null}
    </NavLink>
  );
};

export default CartWidget;

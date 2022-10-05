import { createContext, useState } from "react";

export const CartContext = createContext([]);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [fullPrice, setFullPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [total, setTotal] = useState(0);

  const calculateFullPriceOnAdd = (basePrice, quantity) => {
    setFullPrice(basePrice * quantity + fullPrice);
  };

  const calculateFullPriceOnRemove = (basePrice, quantity) => {
    setFullPrice(fullPrice - basePrice * quantity);
  };

  const calculateDiscountOnAdd = (basePrice, finalPrice, quantity) => {
    setDiscount((basePrice - finalPrice) * quantity + discount);
  };

  const calculateDiscountOnRemove = (basePrice, finalPrice, quantity) => {
    setDiscount(discount - (basePrice - finalPrice) * quantity);
  };

  const calculateTotalOnAdd = (finalPrice, quantity) => {
    setTotal(finalPrice * quantity + total);
  };

  const calculateTotalOnRemove = (finalPrice, quantity) => {
    setTotal(total - finalPrice * quantity);
  };

  const isInCart = (item) => {
    return cart.find((index) => index.id === item.id);
  };

  const addItem = (item, quantity) => {
    if (isInCart(item)) {
      isInCart(item).quantity += quantity;
      setCart([...cart]);
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
    calculateFullPriceOnAdd(item.basePrice, quantity);
    calculateDiscountOnAdd(item.basePrice, item.finalPrice, quantity);
    calculateTotalOnAdd(item.finalPrice, quantity);
  };

  const removeItem = (id, basePrice, finalPrice, quantity) => {
    setCart(cart.filter((item) => item.id !== id));
    calculateFullPriceOnRemove(basePrice, quantity);
    calculateDiscountOnRemove(basePrice, finalPrice, quantity);
    calculateTotalOnRemove(finalPrice, quantity);
  };

  const clear = () => {
    setCart([]);
    setFullPrice(0);
    setDiscount(0);
    setTotal(0);
  };

  return (
    <CartContext.Provider value={{ cart, isInCart, addItem, removeItem, clear, fullPrice, discount, total }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

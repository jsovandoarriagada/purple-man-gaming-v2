import { createContext, useState, useMemo } from "react";

export const CartContext = createContext([]);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) ?? []);
  const [fullPrice, setFullPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [total, setTotal] = useState(0);

  const calculateFullPrice = (basePrice, quantity) => {
    setFullPrice(basePrice * quantity + fullPrice);
  };

  const calculateTotal = (finalPrice, quantity) => {
    setTotal(finalPrice * quantity + total);
  };

  const calculateDiscount = (basePrice, finalPrice, quantity) => {
    setDiscount((basePrice - finalPrice) * quantity + discount);
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
    calculateFullPrice(item.basePrice, quantity);
    calculateDiscount(item.basePrice, item.finalPrice, quantity);
    calculateTotal(item.finalPrice, quantity);
  };

  const removeItem = (item) => {
    cart.splice(cart.indexOf(item), 1);

    setCart([...cart]);
    
  };

  const clear = () => {
    setCart([]);
    setFullPrice(0);
    setDiscount(0);
    setTotal(0);
  };

  useMemo(() => localStorage.setItem("cart", JSON.stringify(cart)), [cart])

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clear, fullPrice, discount, total }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

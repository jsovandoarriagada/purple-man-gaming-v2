import { useState, useContext } from "react";
import { CartContext } from "../../context/CartProvider";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { NavLink } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import FormModal from "../../components/FormModal/FormModal";
import moment from "moment";
import "./Cart.css";

const Cart = () => {
  const { cart, removeItem, clear, fullPrice, discount, total } = useContext(CartContext);
  const [userInfo, setUserInfo] = useState({ name: "", phoneNumber: "", email: "", confirmEmail: "" });
  const [modal, setModal] = useState(false);
  const db = getFirestore();

  const disabledButton = {
    textDecoration: "line-through",
    textDecorationColor: "#161618",
    textDecorationThickness: "2px",
  };

  const handleChange = (event) => {
    const { value, id } = event.target;
    setUserInfo({ ...userInfo, [id]: value });
  };

  const handleProceed = (event) => {
    event.preventDefault();
    if (
      userInfo.name.trim() === "" &&
      userInfo.phoneNumber.trim() === "" &&
      userInfo.email.trim() === "" &&
      userInfo.confirmEmail.trim() === ""
    ) {
      return toast
        .error(`YOU MUST FILL\nIN ALL FIELDS`, {
          style: {
            borderRadius: "0",
            background: "#2d2d2f",
            maxWidth: "100%",
            color: "#ffffff",
            textAlign: "center",
          },
        })
        .then(() => {
          return;
        });
    }
    if (
      userInfo.name.trim() === "" ||
      userInfo.phoneNumber.length < 9 ||
      userInfo.email.trim() === "" ||
      userInfo.confirmEmail.trim() === "" ||
      !userInfo.email.trim().includes("@") ||
      !userInfo.confirmEmail.trim().includes("@")
    ) {
      return toast
        .error(`ONE OR MORE FIELDS WERE OMITED\nOR ENTERED INCORRECTLY`, {
          style: {
            borderRadius: "0",
            background: "#2d2d2f",
            maxWidth: "100%",
            color: "#ffffff",
            textAlign: "center",
          },
        })
        .then(() => {
          return;
        });
    }
    if (userInfo.email !== userInfo.confirmEmail) {
      return toast
        .error(`THE ENTERED EMAILS\nDON'T MATCH`, {
          style: {
            borderRadius: "0",
            background: "#2d2d2f",
            maxWidth: "100%",
            color: "#ffffff",
            textAlign: "center",
          },
        })
        .then(() => {
          return;
        });
    }
    createOrder();
  };

  const createOrder = () => {
    const order = {
      buyer: {
        name: userInfo.name,
        phoneNumer: userInfo.phoneNumber,
        email: userInfo.email,
        confirmEmail: userInfo.confirmEmail,
      },
      items: cart,
      total: cart.reduce((previous, current) => previous + current.finalPrice * current.quantity, 0),
      date: moment().format(),
    };

    const query = collection(db, "orders");
    addDoc(query, order)
      .then(({ id }) => {
        toast.success(`YOUR PURCHASE ID IS:\n ${id}`, {
          style: {
            borderRadius: "0",
            background: "#2d2d2f",
            maxWidth: "100%",
            color: "#ffffff",
            textAlign: "center",
            textTransform: "uppercase",
          },
        });
      })
      .catch((error) => {
        console.log(error);
      })
      .then(setModal(false))
      .finally(() => clear());
  };

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
                    <p className="item__price--base">${item.basePrice * item.quantity} USD</p>
                    <p className="item__price--final">${item.finalPrice * item.quantity} USD</p>
                  </div>
                  <i
                    className="fa-solid fa-trash"
                    onClick={() => {
                      removeItem(item.id, item.basePrice, item.finalPrice, item.quantity);
                    }}
                  ></i>
                </div>
              </div>
            ))
          ) : (
            <div className="cart__empty">
              <NavLink to={"/"} className="back">
                <i class="fa-solid fa-shop"></i>
                <p>BACK TO HOME</p>
              </NavLink>
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
              {cart.length > 0 ? (
                <button
                  className="summary__continue"
                  onClick={() => {
                    setModal(true);
                  }}
                >
                  CONTINUE
                </button>
              ) : (
                <button className="summary__continue" style={disabledButton}>
                  CONTINUE
                </button>
              )}
              {modal && (
                <FormModal
                  userInfo={userInfo}
                  setModal={setModal}
                  handleChange={handleChange}
                  handleProceed={handleProceed}
                  createOrder={createOrder}
                />
              )}
              <Toaster
                containerStyle={{
                  top: 10,
                }}
                toastOptions={{
                  duration: 4000,
                }}
              />
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

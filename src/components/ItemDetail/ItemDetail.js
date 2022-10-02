import { useState, useEffect, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartProvider";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";

const ItemDetail = ({ item }) => {
  const [count, setCount] = useState(1);
  const [stock, setStock] = useState(0);
  const [counter, setCounter] = useState(false);
  const [button, setButton] = useState(false);
  const { addItem } = useContext(CartContext);
  const previous = useNavigate();

  const [isShown, setIsShown] = useState(false);
  const buttonStyles = isShown
    ? { backgroundColor: "#da1106", color: "#ffffff" }
    : { backgroundColor: "#a153f9", color: "#161618" };

  useEffect(() => {
    setStock(item.stock);
  }, [item.stock]);

  const addToCart = () => {
    return count <= stock && count > 0
      ? (setStock(stock - count), addItem(item, count), setButton(true), setIsShown(true), setCounter(true))
      : null;
  };

  return (
    <div className="details">
      <div className="details__header">
        <div className="previous" onClick={() => previous(-1)}>
          <i className="fa-solid fa-backward"></i>
          <p>PREVIOUS</p>
        </div>
        <p className="details__title">{item.name}</p>
      </div>
      <div className="details__container">
        <div className="detail">
          <div className="detail__video">
            <iframe
              className="detail__iframe"
              src={`https://www.youtube.com/embed/${item.video}`}
              title={item.name}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="detail__game-description">
            <p className="detail__game-description--title">GAME DESCRIPTION</p>
            <hr />
            <p className="detail__description">{item.description}</p>
          </div>
          <div className="detail__game-requirements">
            <p className="detail__game-requirements--title">GAME REQUIREMENTS</p>
            <hr />
            <div className="detail__requirements">
              <div className="detail__minimum">
                <p className="detail__minimum--title">MINIMUM:</p>
                <p className="detail__minimum--os">OS &mdash; {item.minimum.os}</p>
                <p className="detail__minimum--processor">Processor &mdash; {item.minimum.processor}</p>
                <p className="detail__minimum--ram">RAM &mdash; {item.minimum.ram}</p>
                <p className="detail__minimum--graphics">Graphics &mdash; {item.minimum.graphics}</p>
                <p className="detail__minimum--disk">Disk Space &mdash; {item.minimum.disk}</p>
                <p className="detail__minimum--directx">Direct X &mdash; {item.minimum.directx}</p>
              </div>
              <div className="detail__recommended">
                <p className="detail__recommended--title">RECOMMENDED:</p>
                <p className="detail__recommended--os">OS &mdash; {item.recommended.os}</p>
                <p className="detail__recommended--processor">Processor &mdash; {item.recommended.processor}</p>
                <p className="detail__recommended--ram">RAM &mdash; {item.recommended.ram}</p>
                <p className="detail__recommended--graphics">Graphics &mdash; {item.recommended.graphics}</p>
                <p className="detail__recommended--disk">Disk Space &mdash; {item.recommended.disk}</p>
                <p className="detail__recommended--directx">Direct X &mdash; {item.recommended.directx}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="extra">
          <div className="card">
            <div className="card__content">
              <figure className="card__figure">
                <img className="card__image" src={item.productImage} alt={item.name} />
              </figure>
              <div className="card__body">
                <div className="card__display">
                  <div className="card__cost">
                    <p className="card__discount">{item.discount}</p>
                    <div className="card__price">
                      <p className="card__price--base">${item.basePrice} USD</p>
                      <p className="card__price--final">${item.finalPrice} USD</p>
                    </div>
                  </div>
                  <div className="card__platform">
                    <img className="card__platform--img" src={item.platformLogo} alt={item.platform} />
                    <p>{item.platform}</p>
                  </div>
                </div>
                {counter === false ? (
                  <ItemCount count={count} setCount={setCount} stock={item.stock} />
                ) : (
                  <div className="card__counter">
                    <p className="card__counter--display">x{count}</p>
                  </div>
                )}
                {button === false ? (
                  <button className="card__button" onClick={addToCart} style={buttonStyles}>
                    <i className="fa-solid fa-cart-shopping"></i>
                    <p>ADD TO CART</p>
                  </button>
                ) : (
                  <NavLink to={"/cart"} className="card__button" style={buttonStyles}>
                    <i className="fa-solid fa-cart-shopping"></i>
                    <p>GO TO CART</p>
                  </NavLink>
                )}
              </div>
            </div>
          </div>
          <div className="extra__pay">
            <p>WE ACCEPT</p>
            <hr />
            <div className="extra__pay--cards">
              <img src="https://i.ibb.co/YtgPg4G/1.jpg" alt="pay-method-1" />
              <img src="https://i.ibb.co/5hc0smN/2.jpg" alt="pay-method-2" />
              <img src="https://i.ibb.co/9vr78kF/3.jpg" alt="pay-method-3" />
              <img src="https://i.ibb.co/BN1wsHt/4.jpg" alt="pay-method-4" />
              <img src="https://i.ibb.co/S0CGvFw/5.jpg" alt="pay-method-5" />
              <img src="https://i.ibb.co/Z6syWDT/6.jpg" alt="pay-method-6" />
              <img src="https://i.ibb.co/3m4PjPt/7.jpg" alt="pay-method-7" />
              <img src="https://i.ibb.co/2Z601sN/8.jpg" alt="pay-method-8" />
              <img src="https://i.ibb.co/NpKsThB/9.jpg" alt="pay-method-9" />
              <img src="https://i.ibb.co/zXK79KJ/10.jpg" alt="pay-method-10" />
              <img src="https://i.ibb.co/6ngXbf5/11.jpg" alt="pay-method-11" />
              <img src="https://i.ibb.co/z2k8QYd/12.jpg" alt="pay-method-12" />
            </div>
          </div>
          <div className="extra__info">
            <div className="extra__game-info">
              <p>GAME INFO</p>
              <hr />
            </div>
            <p className="extra__info--publisher">Publisher &mdash; {item.info.publisher}</p>
            <p className="extra__info--developer">Developer &mdash; {item.info.developer}</p>
            <p className="extra__info--age">Age Rating &mdash; {item.info.age}</p>
            <p className="extra__info--source">Source &mdash; {item.info.source}</p>
            <p className="extra__info--genres">Genres &mdash; {item.info.genres}</p>
            <p className="extra__info--released">Released &mdash; {item.info.released}</p>
            <p className="extra__info--languages">Languages &mdash; {item.info.languages}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;

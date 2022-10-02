import { useState } from "react";
import "./Item.css";

const Item = ({ name, productImage, discount, basePrice, finalPrice, platform, platformLogo }) => {
  const [isShown, setIsShown] = useState(false);
  const buttonStyles = isShown
    ? { backgroundColor: "#a153f9", color: "#161618", fontSize: "14px", borderRadius: "0" }
    : { backgroundColor: "#454546", color: "#ffffff", fontSize: "14px", borderRadius: "0" };

  return (
    <div className="product" onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
      <div className="product__content">
        <figure className="product__figure">
          <img className="product__img" src={productImage} alt={name} />
        </figure>
        <div className="product__body">
          <div className="product__display">
            <div className="product__cost">
              <p className="product__discount">{discount}</p>
              <div className="product__price">
                <p className="product__price--base">
                  <span>${basePrice}</span> USD
                </p>
                <p className="product__price--final">
                  <span>${finalPrice}</span> USD
                </p>
              </div>
            </div>
            <div className="product__platform">
              <img className="product__platform--img" src={platformLogo} alt={platform} />
              <p>{platform}</p>
            </div>
          </div>
        </div>
        <button className="product__button" style={buttonStyles}>
          <p>SEE DETAILS</p>
        </button>
      </div>
    </div>
  );
};

export default Item;

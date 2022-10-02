import { NavLink } from "react-router-dom";
import Item from "../Item/Item";
import "./ItemList.css";

const ItemList = ({ list }) => {
  return (
    <div className="products__container">
      {list.map((product) => (
        <NavLink to={"/item/" + product.id} key={product.id} style={{ textDecoration: "none" }}>
          <Item
            category={product.category}
            productImage={product.productImage}
            name={product.name}
            discount={product.discount}
            basePrice={product.basePrice}
            finalPrice={product.finalPrice}
            platform={product.platform}
            platformLogo={product.platformLogo}
          />
        </NavLink>
      ))}
    </div>
  );
};

export default ItemList;

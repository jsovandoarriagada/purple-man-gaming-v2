import { NavLink } from "react-router-dom";
import UserWidget from "../UserWidget/UserWidget";
import OrdersWidget from "../OrdersWidget/OrdersWidget";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

const NavBar = () => {
  return (
    <header className="header">
      <div className="header__main">
        <NavLink to={"/"}>
          <img className="header__logo" src="https://i.ibb.co/gWDVHGx/logo.png" alt="Purple Man Gaming" />
        </NavLink>
        <div className="header__menu">
          <UserWidget />
          <OrdersWidget />
          <CartWidget />
        </div>
      </div>
      <nav className="nav">
        <NavLink to={"category/hot-deals"}>HOT DEALS</NavLink>
        <NavLink to={"category/coming-soon"}>COMING SOON</NavLink>
        <NavLink to={"category/new"}>NEW</NavLink>
      </nav>
    </header>
  );
};

export default NavBar;

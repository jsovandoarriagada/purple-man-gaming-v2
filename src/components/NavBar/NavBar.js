import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <header className="header">
      <div className="header__main">
        <NavLink to={"/"}>
          <img
            className="header__logo"
            src="https://i.ibb.co/gWDVHGx/logo.png"
            alt="Purple Man Gaming"
          />
        </NavLink>
        <div className="header__menu">
          <CartWidget />
        </div>
      </div>
      <nav className="nav">
        {(toggleMenu || screenWidth > 500) && (
          <ul className="nav__ul">
            <li className="nav__li">
              <NavLink
                end
                to={"/"}
                className={({ isActive }) => (isActive ? "nav__active" : "nav__unactive")}
                onClick={toggleNav}
              >
                ALL GAMES
              </NavLink>
            </li>
            <li className="nav__li">
              <NavLink
                to={"category/hot-deals"}
                className={({ isActive }) => (isActive ? "nav__active" : "nav__unactive")}
                onClick={toggleNav}
              >
                HOT DEALS
              </NavLink>
            </li>
            <li className="nav__li">
              <NavLink
                to={"category/new"}
                className={({ isActive }) => (isActive ? "nav__active" : "nav__unactive")}
                onClick={toggleNav}
              >
                NEW
              </NavLink>
            </li>
            <li className="nav__li">
              <NavLink
                to={"category/coming-soon"}
                className={({ isActive }) => (isActive ? "nav__active" : "nav__unactive")}
                onClick={toggleNav}
              >
                COMING SOON
              </NavLink>
            </li>
          </ul>
        )}
        <i className="nav__icon fa-solid fa-bars" onClick={toggleNav}></i>
      </nav>
    </header>
  );
};

export default NavBar;

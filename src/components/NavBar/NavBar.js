import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
        <Link to={"/"}>
          <img
            className="header__logo"
            src="https://i.ibb.co/gWDVHGx/logo.png"
            alt="Purple Man Gaming"
          />
        </Link>
        <div className="header__menu">
          <CartWidget />
        </div>
      </div>
      <nav className="nav">
        {(toggleMenu || screenWidth > 500) && (
          <ul className="nav__ul">
            <li className="nav__li">
              <Link to={"/"} onClick={toggleNav}>
                ALL GAMES
              </Link>
            </li>
            <li className="nav__li">
              <Link to={"category/hot-deals"} onClick={toggleNav}>
                HOT DEALS
              </Link>
            </li>
            <li className="nav__li">
              <Link to={"category/new"} onClick={toggleNav}>
                NEW
              </Link>
            </li>
            <li className="nav__li">
              <Link to={"category/coming-soon"} onClick={toggleNav}>
                COMING SOON
              </Link>
            </li>
          </ul>
        )}
        <i className="nav__icon fa-solid fa-bars" onClick={toggleNav}></i>
      </nav>
    </header>
  );
};

export default NavBar;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import HamburgerIcon from "./images/icon-hamburger.svg";
import HamburgerClose from "./images/icon-close.svg";

function Nav() {
  const [navIsOpen, setNavIsOpen] = useState(false);

  useEffect(() => {
    if (navIsOpen) {
      document.documentElement.style.overflow = "hidden";
    }

    return () => {
      document.documentElement.style.overflowY = "scroll";
    };
  }, [navIsOpen]);

  const handleClick = () => {
    setNavIsOpen(!navIsOpen);
  };

  return (
    <nav className="nav">
      <Link className="logo" to="/">
        Food Palace
      </Link>

      <ul className={`nav-links ${navIsOpen ? "show-nav" : ""}`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <div onClick={handleClick} className="hamburger">
        {!navIsOpen && <img src={HamburgerIcon} alt="" />}
        {navIsOpen && <img src={HamburgerClose} alt="" />}
      </div>
    </nav>
  );
}

export default Nav;


import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MobileHandlerContext } from "../../utils/mobileHandler";

const Navbar = () => {
  const { isMobile, openMenu, setOpenMenu } = useContext(MobileHandlerContext);
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <img src="/src/assets/images/logo.png" alt="logo" />
        </div>
        <ul>
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/about"}>About</NavLink>
          <NavLink to={"/shop"}>Shop</NavLink>
          <NavLink to={"/contact"}>Contact</NavLink>
        </ul>
        <div className="nav--icons">
          <Link to={"/wishList"} className="nav--icon">
            <span>0</span>
            <FaHeart />
          </Link>
          <Link to={"/cart"} className="nav--icon">
            <span>0</span>
            <AiOutlineShoppingCart />
          </Link>
        </div>
        {/* menu-open */}
        {isMobile && (
          <div className={`nav--barIcon ${openMenu ? "menu-open" : ""}`} onClick={() => setOpenMenu(!openMenu)}>
            <div></div>
            <div></div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useContext } from "react";
import { MobileHandlerContext } from "../../utils/mobileHandler";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
const MobileMenu = () => {
  const { openMenu, setOpenMenu } = useContext(MobileHandlerContext);
  return (
    <div className={`mobileMenu ${openMenu ? "active" : ""}`}>
      <motion.ul initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.4, ease: "easeInOut" }}>
        <NavLink to={"/"} onClick={() => setOpenMenu(false)}>
          Home
        </NavLink>
        <NavLink to={"/about"} onClick={() => setOpenMenu(false)}>
          About
        </NavLink>
        <NavLink to={"/shop"} onClick={() => setOpenMenu(false)}>
          Shop
        </NavLink>
        <NavLink to={"/contact"} onClick={() => setOpenMenu(false)}>
          Contact
        </NavLink>
      </motion.ul>
    </div>
  );
};

export default MobileMenu;

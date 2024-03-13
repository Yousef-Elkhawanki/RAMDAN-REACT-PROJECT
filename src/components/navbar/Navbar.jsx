import React, { useContext, useState } from "react";
import { IsMobileContext } from "../../utilis/IsMobileContext";
import { motion } from "framer-motion";
const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const { isMobile } = useContext(IsMobileContext);
  const links = [
    { id: 1, link: "HOME", isActive: true },
    { id: 2, link: "about" },
    { id: 3, link: "Movies" },
    { id: 4, link: "contact" },
  ];
  return (
    <nav>
      <div className="logo">
        <motion.img src="src/assets/images/logo.png" alt="" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 1, staggerChildren: 0.25 }} />
      </div>
      {!isMobile && (
        <>
          <div className="menu">
            <ul>
              {links.map((link, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className={link.isActive ? "active" : ""}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25, duration: 1, staggerChildren: 0.25 }}>
                  {link.link}
                </motion.a>
              ))}
            </ul>
          </div>
          <motion.div className="btn" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 1, staggerChildren: 0.25 }}>
            <button>get started</button>
          </motion.div>
        </>
      )}

      {isMobile && (
        <>
          <motion.div
            className="bar"
            onClick={() => setActiveMenu(!activeMenu)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 1, staggerChildren: 0.25 }}>
            <div></div>
            <div></div>
          </motion.div>

          <div className={`mobile-menu ${activeMenu ? "active" : ""}`}>
            <ul>
              {links.map((link, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className={link.isActive ? "active" : ""}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25, duration: 1, staggerChildren: 0.25 }}>
                  {link.link}
                </motion.a>
              ))}
            </ul>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;

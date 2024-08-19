import { useState } from "react";
import { trim } from "../../utils/functions/general";
import styles from "./header.module.css";
import Logo from "./Logo";
import Nav from "./Nav";
import DrawerContext from "../../contexts/drawer.context";

const Header = ({ className = "" }) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <header
      className={trim(`
        ${styles.header} 
        containerPadding
        ${className}`)}
    >
      <DrawerContext.Provider value={{ openDrawer, setOpenDrawer }}>
        <Logo />
        <Nav />
      </DrawerContext.Provider>
    </header>
  );
};

export default Header;

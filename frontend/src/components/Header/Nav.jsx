import { trim } from "../../utils/functions/general";
import styles from "./header.module.css";
import en from "../../locale/en.json";
import ButtonStyled from "../shared/ButtonStyled";
import { FaTable } from "react-icons/fa";
import { MdAddToPhotos } from "react-icons/md";
import Drawer from "./Drawer";
import { useLocation } from "react-router-dom";
import { RiMenuUnfold2Fill } from "react-icons/ri";
import { useContext } from "react";
import DrawerContext from "../../contexts/drawer.context";
import { appRoutes } from "../../config/routes";

const { home, addProduct } = en.header.nav;

const navArr = [
  {
    name: home,
    link: appRoutes.home,
    icon: <FaTable size={20} />,
  },
  {
    name: addProduct,
    link: appRoutes.addProduct,
    icon: <MdAddToPhotos size={20} />,
  },
];

const Nav = ({ className = "" }) => {
  const { pathname } = useLocation();
  const { setOpenDrawer } = useContext(DrawerContext);

  return (
    <nav>
      <ul
        className={trim(`
        ${styles.nav}
        ${className}`)}
      >
        {navArr.map(({ name, link, icon }, i) => (
          <li key={i}>
            <ButtonStyled
              size="custom"
              style={{ fontWeight: "semi-bold" }}
              SvgIcon={icon}
              title={name}
              href={link}
            />
          </li>
        ))}

        <li className={styles.drawerBtn}>
          <ButtonStyled
            size="xs"
            SvgIcon={<RiMenuUnfold2Fill size={25} />}
            onClick={() => setOpenDrawer((prev) => !prev)}
          />
        </li>
      </ul>
      <Drawer activePath={pathname} navArr={navArr} />
    </nav>
  );
};

export default Nav;

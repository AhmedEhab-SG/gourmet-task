import { useCallback, useContext } from "react";
import DrawerContext from "../../contexts/drawer.context";
import useDelay from "../../hooks/useDelay";
import styles from "./header.module.css";
import ButtonStyled from "../shared/ButtonStyled";
import { MdKeyboardArrowRight } from "react-icons/md";
import { trim } from "../../utils/functions/general";

const Drawer = ({ navArr, activePath }) => {
  const { openDrawer, setOpenDrawer } = useContext(DrawerContext);
  const [showComponent, setShowComponent] = useDelay(10, openDrawer);

  const handleClose = useCallback(() => {
    setShowComponent(setOpenDrawer, { value: false, delay: 300 });
  }, [setOpenDrawer, setShowComponent]);

  return (
    <div
      className={trim(`
        ${styles.drawer}
        ${openDrawer ? "" : "hidden"}`)}
      onClick={handleClose}
    >
      <aside
        className={`${showComponent ? styles.drawerShow : styles.drawerHide}`}
      >
        <ButtonStyled
          className={`${styles.closeBtn}`}
          size="xs"
          onClick={handleClose}
          SvgIcon={<MdKeyboardArrowRight size={25} />}
        />
        <ul style={{ padding: "0" }}>
          {navArr.map(({ name, link, icon }, index) => (
            <li key={index}>
              <ButtonStyled
                size="custom"
                title={name}
                href={link}
                SvgIcon={icon}
              />
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default Drawer;

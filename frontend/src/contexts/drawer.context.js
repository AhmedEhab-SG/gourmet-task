import { createContext } from "react";

const DrawerContext = createContext({
  openDrawer: false,
  setOpenDrawer: () => {},
});

export default DrawerContext;

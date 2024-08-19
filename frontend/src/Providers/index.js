import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import toasterStyles from "../styles/js/toaster-styles";

const Providers = ({ children }) => {
  return (
    <BrowserRouter>
      <Toaster toastOptions={{ style: toasterStyles }} />
      {children}
    </BrowserRouter>
  );
};

export default Providers;

import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import { appRoutes } from "../config/routes";
import Loading from "../pages/Loading";

const Home = lazy(() => import("../pages/Home"));
const AddProduct = lazy(() => import("../pages/AddProduct"));
const EditProduct = lazy(() => import("../pages/EditProduct"));
const NotFound = lazy(() => import("../pages/NotFound"));

const Routers = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path={appRoutes.home} element={<Home />} />
        <Route path={appRoutes.addProduct} element={<AddProduct />} />
        <Route
          path={`${appRoutes.editProduct}/:id`}
          element={<EditProduct />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default Routers;

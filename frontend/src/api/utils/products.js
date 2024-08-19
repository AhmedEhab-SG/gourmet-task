import axiosInstance from "../axiosInstance";
import { apiRoutes } from "../../config/routes";

const getAllProducts = () => axiosInstance.get(apiRoutes.products);

const getProductById = (id) => axiosInstance.get(`${apiRoutes.products}/${id}`);

const createProduct = (product) => axiosInstance.post(apiRoutes.products, product);

const updateProduct = (id, product) =>
  axiosInstance.patch(`${apiRoutes.products}/${id}`, product);

const deleteProduct = (id) =>
  axiosInstance.delete(`${apiRoutes.products}/${id}`);

export {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};

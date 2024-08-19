import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import ButtonStyled from "../shared/ButtonStyled";
import styles from "./table.module.css";
import { deleteProduct } from "../../api/utils/products";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { appRoutes } from "../../config/routes";

const TableRow = ({
  id,
  name,
  description,
  price,
  relase_date,
  category,
  created_at,
  updated_at,
}) => {
  const navigate = useNavigate();

  const onEditHandler = () => {
    navigate(`${appRoutes.editProduct}/${id}`);
  };

  const onDeleteHander = async () => {
    try {
      await deleteProduct(id);
      toast.success("Product deleted successfully");

      setTimeout(() => navigate(0), 1 * 1000); // to refresh the page and await for animation
    } catch (e) {
      toast.error("Error deleting product");
    }
  };

  return (
    <tr>
      <td style={{ fontWeight: "bold" }}>{id}</td>
      <td>{name}</td>
      <td style={{ maxWidth: "30rem" , minWidth:"20rem"}}>{description}</td>
      <td>{parseFloat(price).toFixed(2)}</td>
      <td>{relase_date}</td>
      <td>{category}</td>
      <td>
        <div className={styles.actionsContainer}>
          <ButtonStyled
            onClick={onEditHandler}
            warning
            size="custom"
            SvgIcon={<FaEdit size={23} />}
          />
          <ButtonStyled
            onClick={onDeleteHander}
            danger
            size="custom"
            SvgIcon={<MdDeleteForever size={23} />}
          />
        </div>
      </td>
    </tr>
  );
};

export default TableRow;

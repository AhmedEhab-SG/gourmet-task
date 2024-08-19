import { useEffect, useState } from "react";
import Form from "../components/Form";
import PageContainer from "../components/shared/PageContainer";
import { useParams } from "react-router-dom";
import { getProductById } from "../api/utils/products";
import toast from "react-hot-toast";

const EditProduct = () => {
  const [product, setProduct] = useState();
  const [status, setStatus] = useState("Fetching product data...");
  const { id } = useParams();

  useEffect(() => {
    const getProductData = async () => {
      try {
        const res = await getProductById(id);
        setProduct(res.data);
      } catch (error) {
        toast.error("Failed to fetch product");
        setStatus("Product not found");
        console.log(error);
      }
    };

    getProductData();
  }, [id]);

  return (
    <PageContainer>
      {product ? (
        <Form type={"edit"} product={product} />
      ) : (
        <p
          style={{
            textAlign: "center",
            fontSize: "1.5rem",
            marginTop: "2rem",
          }}
        >
          {status}
        </p>
      )}
    </PageContainer>
  );
};

export default EditProduct;

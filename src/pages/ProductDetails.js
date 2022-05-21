import { useParams } from "react-router";

const ProductDetails = () => {
  let params = useParams();
  return (
    <>
      <h1>Product Details Page</h1>
      <h3>Product {params.productId}</h3>
    </>
  );
};

export default ProductDetails;
import Cards from "../components/Card";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Home = () => {
  const [products, setProducts] = useState([]);
  let navigate = useNavigate();

  // useEffect(() => {
  //   fetch("https://dummyjson.com/products?limit=6")
  //     .then(response => response.json())
  //     .then(json => console.log(json));
  // }, []);

  useEffect(() => {
    fetch("https://dummyjson.com/products?skip=5&limit=6")
      .then(response => response.json())
      .then(json => setProducts(json.products));
  }, []);

  const handleViewMore = id => {
    navigate(`/details/${id}`);
  };

  return (
    <>
      <div className="container">
        <h2 className="page-title">Products</h2>
        <div className="card-container">
        {products.map(product => (
          <Cards
            key={product.id}
            id={product.id}
            title={product.title}
            description={product.description}
            img={product.images[0]}
            handleClick={handleViewMore}
          />
        ))}
        </div>
      </div>
    </>
  );
};

export default Home;

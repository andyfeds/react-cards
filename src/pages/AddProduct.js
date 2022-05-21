import { useState } from "react";
import TextInput from "../components/TextInput";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [products, setProducts] = useState([]);

  const handleSave = e => {
    e.preventDefault();
    fetch("https://dummyjson.com/products/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: title,
        description: description
      })
    })
      .then(res => res.json())
      .then(res => {
        setTitle("");
        setDescription("");
        setProducts([{...res}, ...products]);
      });
  };

  return (
    <div className="container">
      <h2 className="page-title">Add Products</h2>
      {/* <TextInput/> */}
      <form className="add-product-form" onSubmit={handleSave}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            aria-describedby="title"
            id="title"
            placeholder="Enter Product Title"
            value={title}
            onChange={e => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            type="text"
            className="form-control"
            id="description"
            placeholder="Description"
            value={description}
            onChange={e => {
              setDescription(e.target.value);
            }}
          />
        </div>
        <button type="submit" className="btn btn-primary save-btn">
          Save
        </button>
      </form>

      {products && products.map(product => (
        <div  key={product.title} className="card sm-card">
          <div className="card-body">
            <h5 className="card-title">
              {product.title}
            </h5>
            <p className="card-text">{product.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AddProduct;

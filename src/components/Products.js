// import react from "react";
import Product from "./Product";

const products = [
  { id: 1, name: "chair", price: 15 },
  { id: 2, name: "bed", price: 100 },
  { id: 3, name: "couch", price: 550 },
];

const Products = () => {
  return (
    <div>
      {products.map((product) => {
        return <Product {...product} key={product.id} />;
      })}
    </div>
  );
};

export default Products;

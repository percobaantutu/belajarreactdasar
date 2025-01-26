import { useEffect, useState, useContext } from "react";

import CardProduct from "../Components/Fragments/CardProduct";
import { getProducts } from "../service/product.service";

import TableCart from "../Components/Fragments/TableCart";
import Navbar from "../Components/Layouts/Navbar";
import { useLogin } from "../hooks/useLogin";
import { DarkMode } from "../context/DarkMode";

const Products = () => {
  useLogin();
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <div>
      <Navbar />
      <div className={`min-h-screen flex justify-center items-start mt-1 p-3 ${isDarkMode ? "bg-slate-800" : "bg-slate-100"}`}>
        <div className=" w-4/6 flex flex-wrap">
          {products.length > 0 &&
            products.map((product) => (
              <CardProduct key={product.id}>
                <CardProduct.Header image={product.image} id={product.id} />
                <CardProduct.Body productname={product.title} description={product.description} price={product.price} id={product.id} onClick={() => handleAddToCart(product)}></CardProduct.Body>
              </CardProduct>
            ))}
        </div>
        <div className="overflow-x-auto w-2/6">
          <TableCart products={products} />
        </div>
      </div>
    </div>
  );
};

export default Products;

import { useState } from "react";
import Button from "../Components/Elements/Button";
import CardProduct from "../Components/Fragments/CardProduct";

const products = [
  {
    id: "1",
    name: "Sepatu 1",
    image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    price: 200000,
    description: "If a dog chews shoes whose shoes does he choose?",
  },
  {
    id: "2",
    name: "Sepatu 2",
    image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    price: 500000,
    description: "If a dog chews shoes whose shoes does he choose?",
  },
  {
    id: "3",
    name: "Sepatu 3",
    image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    price: 1000000,
    description: "If a dog chews shoes whose shoes does he choose?",
  },
];

const email = localStorage.getItem("email");

const Products = () => {
  const [cart, setCart] = useState([]); // State to store cart items

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        // Increment quantity if the product already exists in the cart
        return prevCart.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1, total: (item.quantity + 1) * item.price } : item));
      } else {
        // Add new product to the cart
        return [...prevCart, { ...product, quantity: 1, total: product.price }];
      }
    });
  };
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  return (
    <div>
      <div className="navbar bg-base-100 shadow-xl">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">TutuPedia</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <p>{email}</p>
            </li>
            <li>
              <Button children="Logout" variant="bg-blue-600 text-white" onClick={handleLogout} />
            </li>
          </ul>
        </div>
      </div>
      <div className="min-h-screen flex justify-center items-start mt-8 p-3">
        <div className=" w-4/6 flex flex-wrap">
          {products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.image} />
              <CardProduct.Body productname={product.name} description={product.description} price={product.price} onClick={() => handleAddToCart(product)}></CardProduct.Body>
            </CardProduct>
          ))}
        </div>
        <div className="overflow-x-auto w-2/6">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>Rp {item.price}</td>
                  <td>{item.quantity}</td>
                  <td>Rp {item.total}</td>
                </tr>
              ))}
              {/* Show empty message if cart is empty */}
              {cart.length === 0 && (
                <tr>
                  <td colSpan="4" className="text-center">
                    No items in the cart
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Products;

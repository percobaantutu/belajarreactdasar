import { useEffect, useState } from "react";
import Button from "../Components/Elements/Button";
import CardProduct from "../Components/Fragments/CardProduct";
import { getProducts } from "../service/product.service";
import { getUsername } from "../service/auth.serive";

const Products = () => {
  const [cart, setCart] = useState([]); // State to store cart items
  const [totalPrice, setTotalPrice] = useState(0); // State to store total price
  const [products, setProducts] = useState([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUsername(getUsername(token));
    } else {
      window.location.href = "/login";
    }
  }, []);

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  useEffect(() => {
    // Calculate total price when cart changes
    if (products.length > 0 && cart.length > 0) {
      const total = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + item.quantity * product.price;
      }, 0);
      setTotalPrice(total);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);

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
    localStorage.removeItem("token");
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
              <p>{username}</p>
            </li>
            <li>
              <Button children="Logout" variant="bg-blue-600 text-white" onClick={handleLogout} />
            </li>
          </ul>
        </div>
      </div>
      <div className="min-h-screen flex justify-center items-start mt-8 p-3">
        <div className=" w-4/6 flex flex-wrap">
          {products.length > 0 &&
            products.map((product) => (
              <CardProduct key={product.id}>
                <CardProduct.Header image={product.image} />
                <CardProduct.Body productname={product.title} description={product.description} price={product.price} onClick={() => handleAddToCart(product)}></CardProduct.Body>
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
              {products.length > 0 &&
                cart.map((item) => (
                  <tr key={item.id}>
                    <td>{item.title}</td>
                    <td>$ {item.price}</td>
                    <td>{item.quantity}</td>
                    <td>$ {item.total}</td>
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
              <tr className="font-bold text-left">
                <td colSpan="3" className="">
                  Total Price
                </td>
                <td colSpan="1" className="">
                  {totalPrice.toLocaleString("id-ID", { style: "currency", currency: "USD" })}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Products;

import { useSelector } from "react-redux";
import { useState, useEffect, useContext } from "react";
import { DarkMode } from "../../context/DarkMode";

const TableCart = (props) => {
  const { products } = props;
  const cart = useSelector((state) => state.cart.data);
  const [totalPrice, setTotalPrice] = useState(0);
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  //   useEffect(() => {
  //     // Calculate total price when cart changes
  //     if (products.length > 0 && cart.length > 0) {
  //       const total = cart.reduce((acc, item) => {
  //         const product = products.find((product) => product.id === item.id);
  //         return acc + item.quantity * product.price;
  //       }, 0);
  //       setTotalPrice(total);
  //       localStorage.setItem("cart", JSON.stringify(cart));
  //     }
  //   }, [cart, products]);
  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const total = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return product ? acc + item.quantity * product.price : acc;
      }, 0);
      setTotalPrice(total);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);

  return (
    <table className={`table ${isDarkMode && "text-white"}`}>
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
        {cart.length > 0 ? (
          cart.map((item) => {
            const product = products.find((p) => p.id === item.id); // Find matching product
            if (!product) return null; // Handle edge cases where product might not exist
            return (
              <tr key={item.id}>
                <td>{product.title}</td>
                <td>$ {product.price.toFixed(2)}</td>
                <td>{item.quantity}</td>
                <td>$ {(item.quantity * product.price).toFixed(2)}</td>
              </tr>
            );
          })
        ) : (
          // Empty cart message
          <tr>
            <td colSpan="4" className="text-center">
              No items in the cart
            </td>
          </tr>
        )}
        <tr className="font-bold text-left">
          <td colSpan="3">Total Price</td>
          <td colSpan="1">{totalPrice.toLocaleString("id-ID", { style: "currency", currency: "USD" })}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableCart;

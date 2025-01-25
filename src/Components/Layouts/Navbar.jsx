import { useEffect, useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import Button from "../Elements/Button";
import { useSelector } from "react-redux";

const Navbar = () => {
  const username = useLogin();
  const [totalCart, setTotalCart] = useState(0);
  const cart = useSelector((state) => state.cart.data);

  useEffect(() => {
    const sum = cart.reduce((acc, item) => acc + item.quantity, 0);
    setTotalCart(sum);
  }, [cart]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };
  return (
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
          <li>
            <div className="flex items-center bg-gray-800 p-2  rounded-md ml-5 text-white">{totalCart}</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

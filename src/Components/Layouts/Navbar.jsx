import { useEffect, useState, useContext } from "react";
import { useLogin } from "../../hooks/useLogin";
import Button from "../Elements/Button";
import { useSelector } from "react-redux";
import { DarkMode } from "../../context/DarkMode";

const Navbar = () => {
  const username = useLogin();
  const [totalCart, setTotalCart] = useState(0);
  const cart = useSelector((state) => state.cart.data);
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);

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
        <ul className="menu menu-horizontal px-1 flex items-center">
          <li>
            <p>{username}</p>
          </li>
          <li>
            <Button children="Logout" variant="bg-blue-600 text-white" onClick={handleLogout} />
          </li>
          <li className="mr-3">
            <div className="flex items-center bg-gray-800 p-2  rounded-md ml-5 text-white">{totalCart}</div>
          </li>
          <li className="mr-5">
            <Button onClick={() => setIsDarkMode(!isDarkMode)} className=" bg-transparent max-w-2">
              <input type="checkbox" className="toggle" />
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

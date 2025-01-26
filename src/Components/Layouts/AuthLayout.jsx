import { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkMode } from "../../context/DarkMode";

const AuthLayout = (props) => {
  const { children, title, type } = props;
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);

  {
    console.log(isDarkMode);
  }

  return (
    <div className={`min-h-screen flex justify-center items-center `}>
      <div className="w-full max-w-xs border-2 border-slate-400 p-5 rounded-md">
        <h1 className="text-3xl text-blue-600 font-semibold">{title}</h1>
        <p className="text-slate-700 my-2">Welcome to the Website!</p>
        {children}
        <Navigation type={type} />
      </div>
    </div>
  );
};

const Navigation = ({ type }) => {
  if (type === "login") {
    return (
      <p className="text-slate-700 my-6 text-center">
        Don't have an account?{" "}
        <Link to="/register" className="text-blue-600 font-semibold">
          Register
        </Link>
      </p>
    );
  } else {
    return (
      <p className="text-slate-700 my-6 text-center">
        Have an account?{" "}
        <Link to="/login" className="text-blue-600 font-semibold">
          Login
        </Link>
      </p>
    );
  }
};

export default AuthLayout;

import FormLogin from "../Components/Fragments/FormLogin";
import AuthLayout from "../Components/Layouts/AuthLayout";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <AuthLayout title="Login">
      <FormLogin></FormLogin>
      <p className="text-slate-700 my-6 text-center">
        Don't have an account?{" "}
        <Link to="/register" className="text-blue-600 font-semibold">
          Register
        </Link>
      </p>
    </AuthLayout>
  );
};

export default LoginPage;

import FormRegister from "../Components/Fragments/FormRegister";
import AuthLayout from "../Components/Layouts/AuthLayout";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <AuthLayout title="Register">
      <FormRegister />
      <p className="text-slate-700 my-6 text-center">
        Have an account? {""}
        <Link to="/login" className="text-blue-600 font-semibold">
          Login
        </Link>
      </p>
    </AuthLayout>
  );
};

export default RegisterPage;

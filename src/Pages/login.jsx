import FormLogin from "../Components/Fragments/FormLogin";
import AuthLayout from "../Components/Layouts/AuthLayout";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <AuthLayout title="Login" type="login">
      <FormLogin></FormLogin>
    </AuthLayout>
  );
};

export default LoginPage;

import FormLogin from "../Components/Fragments/FormLogin";
import AuthLayout from "../Components/Layouts/AuthLayout";

const LoginPage = () => {
  return (
    <AuthLayout title="Login">
      <FormLogin></FormLogin>
    </AuthLayout>
  );
};

export default LoginPage;

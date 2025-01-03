import FormRegister from "../Components/Fragments/FormRegister";
import AuthLayout from "../Components/Layouts/AuthLayout";

const RegisterPage = () => {
  return (
    <AuthLayout title="Register">
      <FormRegister />
    </AuthLayout>
  );
};

export default RegisterPage;

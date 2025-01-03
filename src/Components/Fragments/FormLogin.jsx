import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormLogin = () => {
  return (
    <form action="">
      <InputForm title="Email" name="email" placeholder="example@gmail.com" type="email" />
      <InputForm title="Password" name="password" placeholder="*****" type="password" />
      <Button variant="bg-blue-600 text-white">Submit</Button>
    </form>
  );
};

export default FormLogin;

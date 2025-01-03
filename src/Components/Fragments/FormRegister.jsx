import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormRegister = () => {
  return (
    <form action="">
      <InputForm title="Name" name="FullName" placeholder="insert your name.." type="text" />
      <InputForm title="Email" name="email" placeholder="example@gmail.com" type="email" />
      <InputForm title="Password" name="password" placeholder="*****" type="password" />
      <InputForm title="Confirm Password" name="Confirm password" placeholder="*****" type="password" />
      <Button variant="bg-blue-600 text-white">Submit</Button>
    </form>
  );
};

export default FormRegister;

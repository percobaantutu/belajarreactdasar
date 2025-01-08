import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormLogin = () => {
  const handleLogin = (event) => {
    localStorage.setItem(`email`, event.target.email.value);
    localStorage.setItem(`password`, event.target.password.value);
    event.preventDefault();
    window.location.href = "/products";
  };
  return (
    <form onSubmit={handleLogin}>
      <InputForm title="Email" name="email" placeholder="example@gmail.com" type="email" />
      <InputForm title="Password" name="password" placeholder="*****" type="password" />
      <Button variant="bg-blue-600 text-white" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default FormLogin;

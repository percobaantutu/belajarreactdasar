import { useEffect, useRef, useState } from "react";
import Button from "../Elements/Button";
import InputForm from "../Elements/Input";
import { login } from "../../service/auth.serive";

const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState("");
  const handleLogin = (event) => {
    event.preventDefault();
    // localStorage.setItem(`email`, event.target.email.value);
    // localStorage.setItem(`password`, event.target.password.value);

    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };
    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/products";
      } else {
        if (res.data) {
          // Log server's error message
          setLoginFailed(res.data);
        } else if (res.message) {
          // Log custom error message
          setLoginFailed(res.message);
        } else {
          setLoginFailed("An error occurred");
        }
      }
    });
  };
  const usernameRef = useRef(null);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleLogin}>
      <InputForm title="username" name="username" placeholder="Jonh Doe" type="text" ref={usernameRef} />
      <InputForm title="Password" name="password" placeholder="*****" type="password" />
      <Button variant="bg-blue-600 text-white" type="submit">
        Submit
      </Button>
      {loginFailed && <p className="text-red-500 text-center mt-2">{loginFailed}</p>}
    </form>
  );
};

export default FormLogin;

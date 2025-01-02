import React from "react";

const Button = (props) => {
  const { children = "...", variant = "bg-black" } = props;
  return (
    <button className={`h-10 px-6 font-semibold rounded-md ${variant}`} type="submit">
      {children}
    </button>
  );
};

function App() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <Button variant="bg-slate 700"> Login</Button>
      <Button variant="bg-slate 600">Logout</Button>
      <Button></Button>
    </div>
  );
}

export default App;

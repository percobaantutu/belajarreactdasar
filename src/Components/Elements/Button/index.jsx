const Button = ({ type = "button", variant, onClick, children }) => {
  return (
    <button className={`btn py-2 px-6 font-semibold rounded-md ${variant} w-full`} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

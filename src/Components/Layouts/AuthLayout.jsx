const AuthLayout = (props) => {
  const { children, title } = props;
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-full max-w-xs border-2 border-slate-400 p-5 rounded-md">
        <h1 className="text-3xl text-blue-600 font-semibold">{title}</h1>
        <p className="text-slate-700 my-2">Welcome to the Website!</p>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;

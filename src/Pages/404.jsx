import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div className="min-h-screen flex justify-center items-center flex-col">
      <h1 className="text-3xl text-blue-600 font-semibold">Oops!</h1>
      <p className="text-slate-700">Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;

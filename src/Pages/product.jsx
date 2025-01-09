import Button from "../Components/Elements/Button";
import CardProduct from "../Components/Fragments/CardProduct";

const products = [
  {
    id: "1",
    name: "Sepatu 1",
    image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    price: 200000,
    description: "If a dog chews shoes whose shoes does he choose?",
  },
  {
    id: "2",
    name: "Sepatu 2",
    image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    price: 500000,
    description: "If a dog chews shoes whose shoes does he choose?",
  },
  {
    id: "3",
    name: "Sepatu 3",
    image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    price: 1000000,
    description: "If a dog chews shoes whose shoes does he choose?",
  },
];

const email = localStorage.getItem("email");

const Products = () => {
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">TutuPedia</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <p>{email}</p>
            </li>
            <li>
              <Button children="Logout" variant="bg-blue-600 text-white" onClick={handleLogout} />
            </li>
          </ul>
        </div>
      </div>
      <div className="min-h-screen flex justify-center items-center">
        {products.map((product) => (
          <CardProduct key={product.id}>
            <CardProduct.Header image={product.image} />
            <CardProduct.Body productname={product.name}>
              {product.description} <br /> Rp {product.price}
            </CardProduct.Body>
          </CardProduct>
        ))}
      </div>
    </div>
  );
};

export default Products;

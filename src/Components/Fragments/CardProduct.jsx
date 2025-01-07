import { Link } from "react-router-dom";

const CardProduct = ({ children }) => {
  return (
    <Link to="/">
      {" "}
      <div className="card bg-base-100 w-56 shadow-xl mx-3">{children}</div>
    </Link>
  );
};

const Header = () => {
  return (
    <figure>
      <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />
    </figure>
  );
};

const Body = (props) => {
  const { productname, children } = props;
  return (
    <div className="card-body">
      <h2 className="card-title">{productname}</h2>
      <p>{children}</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary">Buy Now</button>
      </div>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;

export default CardProduct;

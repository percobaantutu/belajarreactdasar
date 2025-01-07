import { Link } from "react-router-dom";

const CardProduct = ({ children }) => {
  return <div className="card bg-base-100 w-56 shadow-xl mx-3">{children}</div>;
};

const Header = ({ image }) => {
  return (
    <figure>
      <img src={image} alt="Product" />
    </figure>
  );
};

const Body = ({ productname, children }) => {
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

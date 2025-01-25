import Button from "../Elements/Button";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";

const CardProduct = ({ children }) => {
  return <div className="card bg-base-100 w-56 shadow-xl mx-3 my-2 h-auto">{children}</div>;
};

const Header = ({ image, id }) => {
  return (
    <Link to={`/products/${id}`}>
      <figure>
        <img src={image} alt="Product" className="h-40 object-cover" />
      </figure>
    </Link>
  );
};

const Body = ({ productname, description, price, id }) => {
  const dispatch = useDispatch();
  return (
    <div className="card-body p-4">
      <h2 className="card-title">{productname}</h2>
      <p>
        {description.substring(0, 50)} <br /> <br /> {price.toLocaleString("id-ID", { style: "currency", currency: "USD" })}
      </p>
      <CardButton onClick={() => dispatch(addToCart({ id, productname, price, quantity: 1 }))} />
    </div>
  );
};

const CardButton = ({ onClick }) => {
  return (
    <div className="card-actions justify-end">
      <Button children="Add to Cart" variant="bg-blue-600 text-white" onClick={onClick} />
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;

export default CardProduct;

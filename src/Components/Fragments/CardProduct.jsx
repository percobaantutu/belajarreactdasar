import Button from "../Elements/Button";

const CardProduct = ({ children }) => {
  return <div className="card bg-base-100 w-56 shadow-xl mx-3 h-auto">{children}</div>;
};

const Header = ({ image }) => {
  return (
    <figure>
      <img src={image} alt="Product" />
    </figure>
  );
};

const Body = ({ productname, description, price, onClick }) => {
  return (
    <div className="card-body p-4">
      <h2 className="card-title">{productname}</h2>
      <p>
        {description} <br /> {price.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}
      </p>
      <CardButton onClick={onClick} />
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

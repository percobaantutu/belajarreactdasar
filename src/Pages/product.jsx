import CardProduct from "../Components/Fragments/CardProduct";

const Products = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <CardProduct>
        <CardProduct.Header />
        <CardProduct.Body productname="Shoes">If a dog chews shoes whose shoes does he choose? </CardProduct.Body>
      </CardProduct>
      <CardProduct>
        <CardProduct.Header />
        <CardProduct.Body productname="Shoes">If a dog chews shoes whose shoes does he choose? </CardProduct.Body>
      </CardProduct>
      <CardProduct>
        <CardProduct.Header />
        <CardProduct.Body productname="Shoes">If a dog chews shoes whose shoes does he choose? </CardProduct.Body>
      </CardProduct>
    </div>
  );
};

export default Products;

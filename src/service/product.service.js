import axios from "axios";

export const getProducts = (callback) => {
  axios
    .get("https://fakestoreapi.com/products")
    .then((res) => {
      callback(res.data); // Corrected closing parenthesis
    })
    .catch((err) => {
      console.log(err);
    });
};

import axios from "axios";
import { jwtDecode } from "jwt-decode";

export const login = (data, callback) => {
  axios
    .post("https://fakestoreapi.com/auth/login", data)
    .then((res) => {
      callback(true, res.data.token); // Use res.data.token to access the token correctly
    })
    .catch((error) => {
      if (error.response) {
        // Pass the server's error response to the callback
        callback(false, error.response);
      } else if (error.request) {
        // No response received
        callback(false, { message: "No response from server", details: error.request });
      } else {
        // Something else went wrong
        callback(false, { message: error.message });
      }
    });
};

export const getUsername = (token) => {
  const decoded = jwtDecode(token);
  return decoded.user;
};

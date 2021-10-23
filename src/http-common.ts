import axios from "axios";

export default axios.create({
  baseURL: "https://api.quotable.io",
  headers: {
    "Content-type": "application/json",
  },
});
